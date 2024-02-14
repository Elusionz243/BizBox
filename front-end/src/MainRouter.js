import React, { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LandingPage from "./components/landingPage/LandingPage";
import Header from "./components/apps/utils/header/Header";
import Dashboard from "./components/apps/dashboard/Dashboard";
import Inventory from "./components/apps/inventory/Inventory";
import Register from "./components/apps/register/Register";
import OrderHistory from "./components/apps/orders/OrderHistory";
import PriceChecker from "./components/apps/priceChecker/PriceChecker";
import NavigationBar from "./components/apps/utils/navigationBar/NavigationBar";

import "./MainRouter.scss";

export default function MainRouter() {
  const [listOfProducts, setListOfProducts] = useState([]);
  const [shoppingCart, setShoppingCart] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [navigationOpen, setNavigationOpen] = useState(false);

  const appQuickLinks = [
    {
      title: "Inventory",
      icon: "clipboard",
      link: "/app/inventory",
    },
    {
      title: "Register",
      icon: "cart",
      link: "/app/register",
    },
    {
      title: "Order History",
      icon: "clock",
      link: "/app/order-history",
    },
    {
      title: "Price Checker",
      icon: "dollar-sign",
      link: "/app/price-checker",
    },
    {
      title: "Label Maker",
      icon: "barcode",
      link: "/app/label-maker",
    },
    {
      title: "Reports",
      icon: "file",
      link: "/app/reports",
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:8080/products");
      const data = await response.json();
      setListOfProducts([...data]);
      setLoading(false);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const categories = [
      ...new Set(listOfProducts.map((product) => product.category)),
    ];
    setCategoryList(categories);
  }, [listOfProducts]);

  const toggleNavigation = (e) => {
    // TODO: add code to toggle the navigation bar
    setNavigationOpen(!navigationOpen);
  };

  const addProductToCart = (barcode) => {
    const existingProductIndex = shoppingCart.findIndex(
      (item) => item.barcode === barcode
    );

    if (existingProductIndex !== -1) {
      const updatedCart = [...shoppingCart];
      updatedCart[existingProductIndex].cartQuantity += 1;
      setShoppingCart([...updatedCart]);
    } else {
      const product = listOfProducts.find((prod) => prod.barcode === barcode);
      setShoppingCart([...shoppingCart, { ...product, cartQuantity: 1 }]);
    }

    // Calculate total after updating the cart
    // calculateTotal();
  };

  // const calculateTotal = () => {
  //   let total = 0;
  //   shoppingCart.forEach((item) => {
  //     total += item.price * item.cartQuantity;
  //   });
  //   setShoppingCartTotal(total);
  // };

  let interval;
  let tempBarcode = "";
  let scanning = false;

  /**
   * Handles scanning product barcodes from keyboard input.
   * Listens for key presses and builds up a temp barcode string.
   * On enter, tries to add the barcode to the cart.
   * Starts an interval on first keypress to clear the temp barcode after timeout.
   * Clears interval on enter press or when scanning is complete.
   */
  const handleScan = (e) => {
    console.log("scanning");
    if (e.key === "Enter") {
      // setTimeout(() => {
      if (tempBarcode) {
        addProductToCart(tempBarcode);
        tempBarcode = ""; // Reset the barcode after successful scan
      }
      // }, 500);
      clearInterval(interval);
      return;
    }

    if (e.key !== "Shift") {
      tempBarcode += e.key;
    }

    if (!scanning) {
      scanning = true;
      interval = setInterval(() => {
        tempBarcode = ""; // Reset the barcode if no key is pressed within the interval
        clearInterval(interval);
        scanning = false;
      }, 200);
    }
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <LandingPage />
        </div>
      ),
    },
    {
      path: "/apps",
      element: (
        <div
          className="main"
          style={{
            gridTemplateColumns: `${navigationOpen ? "250px 1fr" : "75px 1fr"}`,
          }}
        >
          <div className="main__header">
            <Header title="Dashboard" />
          </div>
          <div className="main__navigation-bar">
            <NavigationBar
              navigationOpen={navigationOpen}
              toggleNavigation={toggleNavigation}
              appNavigations={appQuickLinks}
            />
          </div>
          <div className="main__content">
            <Dashboard quickLinks={appQuickLinks} />
          </div>
        </div>
      ),
    },
    {
      path: "/app/inventory",
      element: (
        <div
          className="main"
          style={{
            gridTemplateColumns: `${navigationOpen ? "250px 1fr" : "75px 1fr"}`,
          }}
        >
          <div className="main__header">
            <Header title={"Inventory"} />
          </div>
          <div className="main__navigation-bar">
            <NavigationBar
              navigationOpen={navigationOpen}
              toggleNavigation={toggleNavigation}
              appNavigations={appQuickLinks}
            />
          </div>
          <div className="main__content">
            <Inventory
              quickLinks={appQuickLinks}
              loading={loading}
              listOfProducts={listOfProducts}
              setListOfProducts={setListOfProducts}
            />
          </div>
        </div>
      ),
    },
    {
      path: "/app/register",
      element: (
        <div
          className="main"
          style={{
            gridTemplateColumns: `${navigationOpen ? "250px 1fr" : "75px 1fr"}`,
          }}
        >
          <div className="main__header">
            <Header title={"Register"} />
          </div>
          <div className="main__navigation-bar">
            <NavigationBar
              navigationOpen={navigationOpen}
              toggleNavigation={toggleNavigation}
              appNavigations={appQuickLinks}
            />
          </div>
          <div className="main__content">
            <Register
              quickLinks={appQuickLinks}
              shoppingCart={shoppingCart}
              listOfProducts={listOfProducts}
              categoryList={categoryList}
              addProductToCart={addProductToCart}
              loading={loading}
            />
          </div>
        </div>
      ),
    },
    {
      path: "/app/order-history",
      element: (
        <div className="main-container">
          <Header title={"Order History"} />
          <OrderHistory />
        </div>
      ),
    },
    {
      path: "/app/price-checker",
      element: (
        <div className="main-container">
          <Header title={"Price Checker"} />
          <PriceChecker listOfProducts={listOfProducts} />
        </div>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}
