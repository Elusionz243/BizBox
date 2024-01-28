import React, { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LandingPage from "./components/landingPage/LandingPage";
import PortalHeader from "./components/apps/header/PortalHeader";
import Dashboard from "./components/apps/dashboard/Dashboard";
import Inventory from "./components/apps/inventory/Inventory";
import Register from "./components/apps/register/Register";
import OrderHistory from "./components/apps/orders/OrderHistory";
import PriceChecker from "./components/apps/priceChecker/PriceChecker";
import NavigationBar from "./components/apps/utils/navigationBar/NavigatonBar";

import "./MainRouter.scss";

export default function MainRouter() {
  const [listOfProducts, setListOfProducts] = useState([]);
  const [shoppingCart, setShoppingCart] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [shoppingCartTotal, setShoppingCartTotal] = useState(0);
  const [loading, setLoading] = useState(true);

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
    calculateTotal();
  };

  const calculateTotal = () => {
    let total = 0;
    shoppingCart.forEach((item) => {
      total += item.price * item.cartQuantity;
    });
    setShoppingCartTotal(total);
  };

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
        <div>
          <PortalHeader />
          <Dashboard />
        </div>
      ),
    },
    {
      path: "/app/inventory",
      element: (
        <div className="main-container">
          <NavigationBar />
          <Inventory
            loading={loading}
            listOfProducts={listOfProducts}
            setListOfProducts={setListOfProducts}
          />
        </div>
      ),
    },
    {
      path: "/app/register",
      element: (
        <div className="main-container" onKeyDown={(e) => handleScan(e)}>
          <NavigationBar />
          <Register
            shoppingCart={shoppingCart}
            listOfProducts={listOfProducts}
            categoryList={categoryList}
            addProductToCart={addProductToCart}
            shoppingCartTotal={shoppingCartTotal}
            setShoppingCartTotal={setShoppingCartTotal}
            loading={loading}
          />
        </div>
      ),
    },
    {
      path: "/app/order-history",
      element: (
        <div className="main-container">
          <NavigationBar />
          <OrderHistory />
        </div>
      ),
    },
    {
      path: "/app/price-checker",
      element: (
        <div className="main-container">
          <NavigationBar />
          <PriceChecker listOfProducts={listOfProducts} />
        </div>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}
