// import { createSlice } from "@reduxjs/toolkit";

// const fetchStatusSlice=createSlice({
//     name:'fetchStatus',
//     initialState:{
//         fetchDone:false,
//         currentlyFetching:false,
//     },
//     reducers:{
//         markFetchDone: (state) => {
//             state.fetchDone = true;
//             state.currentlyFetching = false;
//           },
//           markFetching: (state) => {
//             state.fetchDone = false;
//             state.currentlyFetching = true;
//           },
//     }
// });

// export const fetchStatusActions=fetchStatusSlice.actions;
// export default fetchStatusSlice;

import { createSlice } from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
  name: 'fetchStatus',
  initialState: {
    fetchDone: false,
    currentlyFetching: false,
  },
  reducers: {
    markFetchDone: (state) => {
      state.fetchDone = true;
      // state.currentlyFetching = false;
    },
    markFetchingStarted: (state) => {
      state.currentlyFetching = true;
    },
    markFetchingFinished: (state) => {
      // state.fetchDone = false;
     state.currentlyFetching = false;
    },
  }
});

export const { markFetchDone, markFetchingStarted, markFetchingFinished } = fetchStatusSlice.actions;
export default fetchStatusSlice;

