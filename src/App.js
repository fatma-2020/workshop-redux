import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddPost from "./composants/AddPost/AddPost";
import EditPost from "./composants/EditPost/EditPost";
import Filter from "./composants/Filter/Filter";
import ListPost from "./composants/ListPost/ListPost";
import ResponsiveAppBar from "./composants/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<div><Filter/> <ListPost /> </div>} />
        <Route path="/add" element={<AddPost />} />
        <Route path="/editPost/:idEdit" element={<EditPost />} />
      </Routes>
    </div>
  );
}

export default App;
