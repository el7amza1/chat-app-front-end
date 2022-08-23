import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import ChatPage from "./pages/ChatPage";
import ConversationList from "./pages/conversationList";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/signUp";
import { useAppSelector } from "./redux/hooks";
import Protected from "./utilities/Protected";

function App() {
  const token = useAppSelector(state => state.token.token)
  // useEffect(() => {
  //   console.log(token);
  // }, [])
  return (
    <div className="App">
      <Header />
      <Routes>



        <Route path="/login" element={token !== "" ? <Navigate to="/home" /> : <LogIn />} />
        <Route path="/signup" element={token !== "" ? <Navigate to="/home" /> : <SignUp />} />
        <Route path="/home" element={
        <Protected>
          <ConversationList />
        </Protected>} />
        <Route path="/chat" element={
        <Protected>
          <ChatPage />
        </Protected>} />
      </Routes>
    </div>
  );
}

export default App;
