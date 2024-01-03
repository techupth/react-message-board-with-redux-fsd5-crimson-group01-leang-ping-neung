// Import necessary dependencies from React and ReactDOM
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { store } from "./app/store"; // Import your Redux store
import { Provider } from "react-redux"; // Import the Provider component from react-redux

// Use React 18's createRoot API to render the application
ReactDOM.createRoot(document.getElementById("root")).render(

  // Wrap the entire application with React.StrictMode for additional development checks
  <React.StrictMode>

    {/* Use the Provider component to make the Redux store available to the entire component tree */}
    <Provider store={store}>

      {/* Render your main application component */}
      <App />

    </Provider>
    
  </React.StrictMode>
);
