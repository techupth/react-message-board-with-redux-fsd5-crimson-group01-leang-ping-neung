// Import the configureStore function from @reduxjs/toolkit
import { configureStore } from "@reduxjs/toolkit";

// Import the reducer from the messageBoardSlice file
import messageBoardReducer from "../slices/messageBoardSlice";

// Configure the Redux store
export const store = configureStore({
  reducer: {
    messageBoard: messageBoardReducer, // Combine the messageBoardReducer into the store with the key "messageBoard"
  },
});
