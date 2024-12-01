import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from './components/Home/Home'
import Bikes from "./components/Bikes/Bikes"
import About from "./components/About/About"
import BikeDataProvider from "./Store/BIkeStore"
import Contact from "./components/Contact/Contact"
import Login from "./components/Home/Login"
import SignInFrom from "./components/Home/SignInFrom"
import BookingForm from "./components/Home/BookingForm"
import { Outlet } from "react-router-dom"




function App() {

  return (
    <BikeDataProvider>
   <div className="">
    <Header></Header>
    <Outlet></Outlet>
   <Footer></Footer>
   </div>
   </BikeDataProvider>
   
    
  )
}

export default App
