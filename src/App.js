import { useState } from "react";
import ChatList from "./components/ChatList";
import "bootstrap/dist/css/bootstrap.css";
import WeatherApp from "./components/WeatherApp";

function App() {
  const [tab, setTab] = useState(false);

  return (
    <div className="App" style={{ height: "100vh" }}>
      <div className="loader-div ">
        <div className="loader"></div>
      </div>
      <div className="weatherAppcomponent" style={{ height: "100vh" }}>
        <WeatherApp />
      </div>
      {/* <button onClick={() => setTab(!tab)}>
        {tab ? "Close Chat" : "Open Chat"}
      </button>
      {tab ? (
        <div className="chat-container">
          <ChatList />
        </div>
      ) : (
        <h1>Loading...</h1>
      )} */}
    </div>
  );
}

export default App;
