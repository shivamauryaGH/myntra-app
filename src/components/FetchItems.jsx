import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { itemsAction } from "../store/ItemSlice";
import {markFetchDone, markFetchingStarted,  markFetchingFinished } from "../store/fetchStatusSlice";

const FetchItems=()=>{
    const fetchStatus=useSelector((store)=>store.fetchStatus);
    // console.log(fetchStatus);
    const dispatch=useDispatch(); 
     console.log("fetchstatus is ",fetchStatus);

    useEffect(()=>{
        console.log(fetchStatus);
         if(fetchStatus.fetchDone)return;
        
        const controller=new AbortController();
        const signal=controller.signal;
        dispatch(markFetchingStarted());
        fetch("https://two-actual-backend-v06t.onrender.com/items",{signal})
        .then((res) => {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.json();
        })
        .then((item)=>{
            dispatch(markFetchDone());
            dispatch(markFetchingFinished());
           dispatch(itemsAction.addInitialItems(item));  
         console.log("items fetched",item);
        })
        .catch((error) => {
            if (error.name === 'AbortError') {
                console.log('Fetch aborted');
            } else {
                console.error('Fetch error:', error);
                dispatch(markFetchError());
            }
        });

        return ()=>{
            controller.abort();
        }

    },[fetchStatus,dispatch]);
    return <>
        
    </> 
}

export default FetchItems;