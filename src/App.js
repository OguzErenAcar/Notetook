import { Route, Routes } from "react-router-dom";
import Content from "./Component/Content";
import Navbar from "./Component/Navbar";
import "./CSS/style.css"
import PrivateRoute from "./Router/PrivateRoute";
import Intro from "./Pages/Intro";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" 
        element={
        <PrivateRoute>
          <Header/>
          <Navbar/>
          <Content/>
          <Footer/>
        </PrivateRoute>}>
        </Route>
        <Route path="/Intro" element={<Intro/>}/>
      </Routes>
    </div>
  );
}

export default App;
