import "./App.css";
import UserInput from "./components/userInput/userInput";

function App() {
  return (
    <div className="App">
      <img className="sent-ence-iment-logo" src='sent-ence-iment-logo.png' alt="logo"/>
      <p className="intro-text">Are you happy-go-lucky or more of a Debbie-Downer? Not sure? Well, now you can be; by finding out the sentiment of your sentence with Sent-Ence-Iment!<br/>
      <br/>
      Enter your sentence, click Submit, and Sent-Ence-Iment will rate your attitude.</p>
      <UserInput />
    </div>
  );
}

export default App;
