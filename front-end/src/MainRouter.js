import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import PortalHeader from "./components/header/PortalHeader";
import Dashboard from "./components/dashboard/Dashboard";
import Inventory from "./components/inventory/Inventory";
import Register from "./components/register/Register";
import NavigationBar from "./components/utils/navigationBar/NavigatonBar";

import "./MainRouter.css";

import productList from "./utils/newProductList.json";
import OrderHistory from "./components/orders/OrderHistory";
import PriceChecker from "./components/priceChecker/PriceChecker";

export default function MainRouter() {
  const [listOfProducts, setListOfProducts] = useState([...productList]);
  const [shoppingCart, setShoppingCart] = useState([]);
  const [shoppingCartTotal, setShoppingCartTotal] = useState(0);

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
            addProductToCart={addProductToCart}
            shoppingCartTotal={shoppingCartTotal}
            setShoppingCartTotal={setShoppingCartTotal}
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
    //TODO: Orders, Label Maker, Tap mango
  ]);

  return <RouterProvider router={router} />;
}
