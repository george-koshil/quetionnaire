import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import { RouterProvider } from "react-router-dom";
import { router } from "./app-config/routes";

function App() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </React.StrictMode>
  );
}

export default App;
