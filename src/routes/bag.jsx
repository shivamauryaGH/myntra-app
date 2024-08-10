import BagSummary from "../components/BagSumm"
import BagItem from "../components/BagItem"
import { useSelector } from "react-redux";
function Bag(){
   const bagItems = useSelector(state=>state.bag);
   const items=useSelector(state=>state.items);
   const itemlist =items.items?items.items[0]:[] ;
   const finalItems=itemlist.filter(item=>{
    const itemIndex=bagItems.indexOf(item.id);
    return itemIndex>=0;
   })
   return(
 

      <main>
      <div class="full-bag-page">
      <div class="bag-page">
      {
        finalItems.map(item=> <BagItem item={item}></BagItem>) 
      }
      </div>
    
       <BagSummary></BagSummary>
       </div>
      
    </main>
  
 )
}
export default Bag;