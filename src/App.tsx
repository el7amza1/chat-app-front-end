import {  Route, Routes } from "react-router-dom"
import './App.css';
import ConversationList from "./pages/conversationList";
import SignUp from "./pages/signUp";

function App() {
  return (
    <div className="App" >
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<ConversationList />} />

      </Routes>
    </div>
  );
}

export default App;
