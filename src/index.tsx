import React from "react";
import ReactDOM from "react-dom";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import "./index.css";
import App from "./App";
import rootReducer from "./Store/Reducer";
import DbProvider from "./Provider/DbProvider";
import DateProvider from "./Provider/DateProvider";
import { BrowserRouter } from "react-router-dom";
import {
  ThemeProvider,
  createTheme,
  // makeStyles,
} from "@material-ui/core/styles";

const theme = createTheme();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <DbProvider>
      <DateProvider>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </BrowserRouter>
      </DateProvider>
    </DbProvider>
  </Provider>,
  document.getElementById("root")
);

export type AppDispatch = typeof store.dispatch;
