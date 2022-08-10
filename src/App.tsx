import { Route, Routes } from "react-router-dom";
import "./App.css";
import ChatPage from "./page/ChatPage";
import Header from "./component/Header";
import LogIn from "./page/LogIn";

function App() {
  return (
    <div className="App">
      <Header />
      <LogIn />
      <ChatPage/>
      {/* <Routes>
        <Route path="/login" element={<LogIn />} />
      </Routes> */}
    </div>
  );
}

export default App;
