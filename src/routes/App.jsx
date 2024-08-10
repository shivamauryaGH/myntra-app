import Header from "../components/Header"
import Footer from "../components/footer";
// import DisplayItem from "../components/DisplayItem";
import { Outlet } from "react-router-dom";
import HomeShimmerDisplay from "../components/HomeShimmerDisplay";
import FetchItems from "../components/FetchItems";
import { useSelector } from "react-redux";
// import LoadingSpinner from "../components/LoadingSpinner";

function App() {
  const fetchStatus=useSelector((store)=>store.fetchStatus);
  
  return (
    <>
    <Header/>
    <FetchItems />
    {fetchStatus.currentlyFetching ? <HomeShimmerDisplay />:
      <Outlet/>
     }
  
    
   
   <Footer/>
   
    
    </>
  )
}

export default App
