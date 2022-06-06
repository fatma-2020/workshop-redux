import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddPost from "./composants/AddPost/AddPost";
import ListPost from "./composants/ListPost/ListPost";
import ResponsiveAppBar from "./composants/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<ListPost />} />
        <Route path="/add" element={<AddPost />} />
      </Routes>
    </div>
  );
}

export default App;
