import "./App.css";
// import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Login from "../components/Login";
import Nav from "../components/Nav";

function App() {
    // const 

  return (
    <>
    <div className="container mx-auto p-4">
        <div className="app-container bg-light">
          <div className="container pt-4 pb-4">
            <Nav />
            <Login/>
            {/* <Outlet /> */}
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
