import React from "react";
import ReactDOM from "react-dom";
import "./assets/style/index.scss";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router } from "react-router-dom";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "./chakraTheme";
import { HelmetProvider, Helmet } from "react-helmet-async";
import config from "./lib/config";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <HelmetProvider>
          <Helmet>
            <meta property="og:image" content={`${config.HOST}/logo512.png`} />
          </Helmet>

          <Router>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <App />
          </Router>
        </HelmetProvider>
      </Provider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
