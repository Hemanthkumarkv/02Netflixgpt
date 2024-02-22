
import Header from './Header'
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import MainContainer from './MainContainer'
import  SecondaryContainer from "./SecondaryContainer"


const Browse = () => 
{


  useNowPlayingMovies()

  // {
  //   MaingContainer
  //     -VideoBackground
  //     -VideoTitle
  //   SecondaryContainer
  //     -Movielist*n
  //     -Cards*n
  // }
  
  return (
    <>
         {/* <h1>Browse</h1> */}
         <Header/>
        < MainContainer/>
         <SecondaryContainer/>
       
    </>
  )
}

export default Browse
