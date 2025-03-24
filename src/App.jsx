import { Navigate, Outlet } from "react-router-dom"
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";

function App() {
  let isAuth = localStorage.getItem("isAuth")
  // console.log(isAuth);

  if (isAuth) {
    return (
      <div className="container mx-auto">
        <Navbar/>
        <Outlet />
        <Footer/>
      </div>
    )
  }
  else {
    return <Navigate to={'/login'} />
  }
}

export default App
