import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
// import SignIn from "./pages/SignIn";
import Post from "./pages/Post";
import Profile from "./pages/Profile";
import { useState } from "react";
import Edit from "./pages/Edit";
import SignUp from "./pages/SignUp";

function App() {
  // logic
  
  const [churead, setChuread] = useState("");
  const [editItem, setEditItem] = useState(null);
  const [editedItem, setEditedItem] = useState(null);


  const handlePost = (churead) => {
    setChuread(churead);
  };

  // view
  return (
    <div className="bg-churead-black h-full text-white overflow-auto">
      <div className="max-w-[572px] mx-auto h-full">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home churead={churead} onEdit={(data)=> setEditItem(data)} editedItem={editedItem}/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/post" element={<Post onPost={handlePost} />} />
            <Route path="/edit" element={<Edit editItem={editItem} onEdited={(data) => setEditedItem(data)} />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
