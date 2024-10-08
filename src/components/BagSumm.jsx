import { useSelector } from "react-redux";

const BagSummary=()=>{
const bagItemsIds=useSelector((state)=>state.bag);
const items=useSelector(state=>state.items);
   const itemlist =items.items?items.items[0]:[] ;
   const finalItems=itemlist.filter(item=>{
    const itemIndex=bagItemsIds.indexOf(item.id);
    return itemIndex>=0;
   })
    
    let  CONVENIENCE_FEE=finalItems.length>0?199:0;
    let    totalItem=bagItemsIds.length;
     let   totalMRP=0;
      let  totalDiscount=0;
     let   finalPayment=0; 
  
    finalItems.forEach((bagitem)=>{
      totalMRP+=bagitem.original_price
      totalDiscount+=bagitem.original_price-bagitem.current_price;
     
    });
    finalPayment=totalMRP-totalDiscount+CONVENIENCE_FEE;
return (
        <div class="bag-summary">
      
       <div className="bag-details-container">
    <div className="price-header">PRICE DETAILS ({totalItem} Items) </div>
    <div className="price-item">
      <span className="price-item-tag">Total MRP</span>
      <span className="price-item-value">₹{totalMRP}</span>
    </div>
    <div className="price-item">
      <span className="price-item-tag">Discount on MRP</span>
      <span className="price-item-value priceDetail-base-discount">-₹{totalDiscount}</span>
    </div>
    <div className="price-item">
      <span className="price-item-tag">Convenience Fee</span>
      <span className="price-item-value">₹{CONVENIENCE_FEE}</span>
    </div>
    <hr/>
    <div className="price-footer">
      <span className="price-item-tag">Total Amount</span>
      <span className="price-item-value">₹{finalPayment}</span>
    </div>
  </div>
  <button className="btn-place-order">
    <div className="css-xjhrni">PLACE ORDER</div>
  </button>
  </div>
)
}
export default BagSummary;