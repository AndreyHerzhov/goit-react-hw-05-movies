import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getCreditsByID } from "shared/api/movies"
import { Text, Photo, Title, Container, CharacterWrapper } from "./Cast.styled"

const Casts = () => {
    const [state, setState] = useState({
        casts: [],
        loading: false,
        error: null
    })
    const {movieId} = useParams()

    useEffect(() => {
        // console.log('object')
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
                        casts:   [...result.data.cast]
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

   const { casts } = state
//    console.log(casts)
   const url = "https://image.tmdb.org/t/p/w500"
    const elements = casts.map(({id,name, profile_path, character}) => (
        <li key={id}>
            <Photo src={`${url}${profile_path}`}/>
            <Text>{name}</Text>
            <CharacterWrapper>
                <Title>Character: </Title>
                <Text>{character}</Text>
            </CharacterWrapper>
           
        </li>
    ))
    
    return ( 
        <Container>
                 <h2>Cast</h2>
                 <ul>
                 {elements}
                 </ul>
      </Container> 
    )
}


export default Casts