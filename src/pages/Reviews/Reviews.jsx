import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getReviewsByID } from "shared/api/movies"
import { Text, Title } from "./Reviews.styled"
import { lazy, Suspense } from "react";

const Reviews = () => {
    const [state, setState] = useState({
        reviews: [],
        loading: false,
        error: null
    })
    const {movieId} = useParams()

    useEffect(() => {
     
        const fetchPosts = async() => {
                setState(prevState => ({
                    ...prevState,
                    loading: true,
                    error: null,
    
                }))
            try {
                const result = await getReviewsByID(movieId);
                //  console.log(result)
                 setState(prevState => {
                    return {
                        ...prevState,
                        reviews:   [...result.data.results]
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
 
  const { reviews } = state
    
  const elements = reviews.map(({author,content, id}) => (
    <li key={id}>
       <Title>Author: {author}</Title>
       <Text>{content}</Text>
    </li>
))



     
    
    return ( 
       <>
       <Suspense>
        {reviews.length > 0 && 
        <>
        <h2>Reviews</h2><ul>
                    {elements}
                </ul>
        </>
        }
        {reviews.length === 0 && <><h1>No reviews</h1></>}
        </Suspense>
       </>
    )
}


export default Reviews