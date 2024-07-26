import { useSelector } from "react-redux";
import DisplayItem from "../components/DisplayItem";
 

const Home=()=>{
  const items=useSelector((store)=>store.items) ;

  const itemlist =items.items?items.items[0]:[] ;
  // console.log("item",itemlist);
return (
    <main>
    <div className="items-container">
   
    {itemlist && Array.isArray(itemlist) ? (
        itemlist.map((item) => (
            <DisplayItem key={item.id} item={item} />
          ))
        ) : (
          <p>No items available</p>
        )}
    </div>
 </main>
)
}
export default  Home;