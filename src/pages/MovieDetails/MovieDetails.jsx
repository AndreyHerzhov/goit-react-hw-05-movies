import { Text,Title, Container, ImgWrapper, InfoWrapper, Img, AdditioanlInfo, List } from "./MovieDetails.styled"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getMovieByID} from "shared/api/movies"
import { Link } from "react-router-dom"

const MovieDetails = () => {
    const [state, setState] = useState({
        item: {},
        genres: [],
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
                const result = await getMovieByID(movieId);
                 
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
    
    if(item.result) {
        console.log(item.result.data)
    }

    const url = "https://image.tmdb.org/t/p/w500"

    return ( 
        <>
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
                    {item.result.data.genres.map(el => <Text>{el.name}</Text>)}
                    
                </>
                }   
            </InfoWrapper>
            
       </Container>
     <AdditioanlInfo>
        <Text>Additional information</Text>
        <List>
            <Link to={`/movies/${movieId}/cast`}>Cast</Link>
            <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
        </List>
     </AdditioanlInfo>

      </> 
    )
}


export default MovieDetails