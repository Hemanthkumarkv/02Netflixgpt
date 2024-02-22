import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"Movies",
    initialState:{
        nowPalyingMovies:null,
        trailerVideo:null

    },

    reducers:{
        addNowPlayingMovies:(state, action)=>{
            state.nowPalyingMovies=action.payload
        },

        addTrailerVideo:(state, action)=>{
            state.trailerVideo = action.payload;
        }

    }

})

export const {addNowPlayingMovies, addTrailerVideo} = movieSlice.actions
export default movieSlice.reducer