// import React from 'react'
// // import { useSelector } from 'react-redux'
// // import VideoTitle from './VideoTitle'
// // import VideoBackground from './VideoBackground'

// const MainContainer = () => 
// {

  // const movies = useSelector((store) => store.movies?.nowPayingMovies)
    
  // if(!movies) return;

  // const mainMovie = movies[0]
  // console.log(mainMovie);

  // const {original_title, overview} = mainMovie



//   return (
//             <div>
//               <h1>MainContainer</h1>
//               {/* <VideoTitle title={original_title } overview={overview} />
//               <VideoBackground/> */}
//             </div>
//          )
// }

// export default MainContainer

// ========================================



import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from "./VideoTitle"
import VideoBackground from "./VideoBackground"

const MainContainer = () => 
{

  
  const movies = useSelector((store)=>store.movies?.nowPalyingMovies)


  if(!movies) return;

  const mainMovies = movies[0]
  console.log(mainMovies);

  const{original_title, overview} = mainMovies;



  return (
    <div>
      {/* <h1>Main Container</h1> */}
      <VideoTitle title={original_title} overview={overview}/>
      <VideoBackground/>
    </div>
  )
}

export default MainContainer
