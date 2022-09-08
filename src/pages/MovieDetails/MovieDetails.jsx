import { Text,Title, Container, ImgWrapper, InfoWrapper, Img, AdditioanlInfo, List } from "./MovieDetails.styled"
import { Suspense, useEffect, useState } from "react"
import { useParams, useNavigate, Outlet, useLocation } from "react-router-dom"
import { getMovieByID } from "shared/api/movies"
import { Link } from "react-router-dom"
import { nanoid } from "nanoid";

const MovieDetails = () => {
    const [state, setState] = useState({
        item: {},
        reviews: [],
        loading: false,
        error: null
    })
    const {movieId} = useParams()
    const navigate = useNavigate()
    const location = useLocation()
    const   from   = location.state?.from || "/movies"
    // console.log(from)

    const goBack = () => navigate(location.state.from)
   
    useEffect(() => {
        const fetchPosts = async() => {
                setState(prevState => ({
                    ...prevState,
                    loading: true,
                    error: null,
    
                }))
            try {
                const result = await getMovieByID(movieId);
                // console.log("getMovieByID", result)
                setState(prevState => {
                    return {
                        ...prevState,
                        item:  {result}
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

   const { item } = state
  
    const url = "https://image.tmdb.org/t/p/w500"

    return ( 
        <>
        <button onClick={goBack}>Go back</button>
       <Container>
            <ImgWrapper >
            {item.result && <Img src={`${url}${item.result.data.poster_path}`}/>}
                {/* <Img src={`${state.data.poster_path}`}/> */}
            </ImgWrapper>
            <InfoWrapper>
                {item.result &&  <>
                    <Title>{item.result.data.original_title}</Title> 
                    <Text>Vote average:{item.result.data.vote_average}</Text>
                    <Title>Overview</Title> 
                    <Text>{item.result.data.overview}</Text>
                    <Title>Genres</Title> 
                    {item.result.data.genres.map(el => <Text key={nanoid()}>{el.name}</Text>)}
                    
                </>
                }   
            </InfoWrapper>
            
       </Container>
     <AdditioanlInfo>
        <Text>Additional information</Text>
        <List>
            <Link state={{from}} to={`/movies/${movieId}/cast`}>Cast</Link>
            <Link state={{from}} to={`/movies/${movieId}/reviews`}>Reviews</Link>
        </List>
     </AdditioanlInfo>
     <Suspense>
        <Outlet/>
     </Suspense>
     </> 
    )
}


export default MovieDetails