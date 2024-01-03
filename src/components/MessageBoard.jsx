// Import necessary hooks and actions from React and Redux
import { useSelector, useDispatch } from "react-redux";
import {
  createMessageText,
  addMessageText,
  deleteMessageText,
} from "../slices/messageBoardSlice";

// Define the MessageBoard component
function MessageBoard() {
  // Access the dispatch function to dispatch actions
  const dispatch = useDispatch();

  // Get the message board state from the Redux store
  const messageState = useSelector((state) => state.messageBoard);

  // Render the MessageBoard component
  return (
    <div className="app-wrapper">
      {/* Display the title of the message board */}
      <h1 className="app-title">Message board</h1>

      {/* Container for the message input form */}
      <div className="message-input-container">
        {/* Form for submitting messages */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(addMessageText()); // Dispatch the addMessageText action on form submission
          }}
        >
          {/* Input field for entering messages */}
          <label>
            <input
              id="message-text"
              name="message-text"
              type="text"
              placeholder="Enter message here"
              onChange={(e) => dispatch(createMessageText(e.target.value))} // Dispatch createMessageText on input change
              value={messageState.messageText} // Bind the input value to the messageText property in the Redux state
            />
          </label>

          {/* Submit button for adding messages */}
          <button className="submit-message-button" type="submit">
            Submit
          </button>
        </form>
      </div>

      {/* Display the message board with messages and delete buttons */}
      <div className="board">
        {/* Map through messageTextArray and display each message along with a delete button */}
        {messageState.messageTextArray.map((item, index) => {
          return (
            <div className="message" key={index}>
              {/* Display the message text */}
              <h1>{item}</h1>

              {/* Button to delete the corresponding message */}
              <button
                className="delete-button"
                onClick={() => dispatch(deleteMessageText(index))} // Dispatch deleteMessageText with the index as payload on button click
              >
                x
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Export the MessageBoard component as the default export
export default MessageBoard;
