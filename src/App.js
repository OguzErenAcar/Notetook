import { Route, Routes } from "react-router-dom";
import Content from "./Component/Content";
import Navbar from "./Component/Navbar";
import "./Styles/style.scss"
import PrivateRoute from "./Router/PrivateRoute";
import Intro from "./Pages/Intro";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" 
        element={
        <PrivateRoute>
          <Navbar/>
          <Content/>
        </PrivateRoute>}>
        </Route>
        <Route path="/Intro" element={<Intro/>}/>
      </Routes>
    </div>
  );
}

export default App;
