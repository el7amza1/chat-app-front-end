import {  Route, Routes } from "react-router-dom"
import './App.css';
import Header from "./components/Header";
import ChatPage from "./pages/ChatPage";
import ConversationList from "./pages/conversationList";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/signUp";

function App() {
  return (
    <div className="App" >
      <Header/>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/home" element={<ConversationList />} />
        <Route path="/chat" element={<ChatPage/>} />
      </Routes>
    </div>
  );
}

export default App;
