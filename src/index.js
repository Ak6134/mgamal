import * as React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route, Link,} from "react-router-dom";
import App from "./App"
import Allshop from "./shop/Allshop";
import Allproduct from "./product/Allproduct"
import Allcontact from "./contact/Allcontact";
import Store from "./Storee/Store"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "shop",
    element:<Allshop/>
  },
  {
    path: "product-details",
    element:<Allproduct/>
  },
  {
    path: "contact",
    element:<Allcontact/>
  },
  {
    path: "store",
    element:<Store/>
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);


