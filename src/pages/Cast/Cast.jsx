import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getCreditsByID } from "shared/api/movies"

const MovieDetails = () => {
    const [state, setState] = useState({
        item: {},
        reviews: [],
        loading: false,
        error: null
    })
    const {movieId} = useParams()

    useEffect(() => {
        console.log('object')
        const fetchPosts = async() => {
                setState(prevState => ({
                    ...prevState,
                    loading: true,
                    error: null,
    
                }))
            try {
                const result = await getCreditsByID(movieId);
                // console.log("getCreditsByID", result)
                setState(prevState => {
                    return {
                        ...prevState,
                        reviews:  {result}
                    }
                })
               
            } catch (error) {
                console.log(error)
            }
            finally {
                setState(prevState => {
                    return {
                        ...prevState,
                        loading: false,

                    }
                })
            }
        }
        fetchPosts() 
    }, [movieId]
  )

  useEffect(() => {
    console.log('object')
  },[])
   
     
    return ( 
        <>
                <h1>Cast</h1>

      </> 
    )
}


export default MovieDetails