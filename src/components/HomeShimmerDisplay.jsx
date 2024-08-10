import HomeShimmer from "./HomeShimmer";

const HomeShimmerDisplay=()=>{
 const array=  new Array(8).fill(1);
 console.log(array);
 return<>
  <div className=" items-container ">
 {array.map(()=>
  <HomeShimmer/>
 )}
  </div>
 </>

}
export default HomeShimmerDisplay;