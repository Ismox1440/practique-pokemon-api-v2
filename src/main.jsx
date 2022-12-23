import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { store } from "./store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from '@auth0/auth0-react';


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider scope="openid profile email" domain="dev-yo3brwguc7umz0ax.us.auth0.com" clientId="np7ShVneBwoNJeCU2sM6r7TjSel2eBJt" redirectUri={window.location.origin} cacheLocation="localstorage" >

    <ChakraProvider>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </ChakraProvider>
    </Auth0Provider>
  </React.StrictMode>
);
