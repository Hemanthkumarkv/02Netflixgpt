
import  { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovies } from '../utils/moviesSlice'



const useNowPlayingMovies =()=>{

    
  // Fecth Data from TMDB API and update store
  const dispach = useDispatch()
  const getNOwPlayingMovies = async()=>{
    const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1",API_OPTIONS)
    const json = await data.json(data)
    console.log(json);
    // console.log(json.result);
    dispach(addNowPlayingMovies(json.results))

  }

  useEffect(()=>{
            getNOwPlayingMovies()
  },[])

}

export default useNowPlayingMovies