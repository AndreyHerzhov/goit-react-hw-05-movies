import MoviesSearchForm from "pages/MovieSearchForm/MovieSearchForm"
import { FilmListContainer } from "./Movies.styled"
import { useSearchParams } from "react-router-dom"
import { Link } from "react-router-dom"
import { getMoviesByQuery } from "shared/api/movies"
import { useEffect } from "react"
import { useState } from "react"
import { nanoid } from "nanoid"

const Movies = () => {
    const [state, setState] = useState({
        items: [],
        loading: false,
        error: null
    })

    const [searchParams, setSearchParams] = useSearchParams()
  
    const search = searchParams.get("search")
   

    useEffect(() => {
        const fetchPosts = async() => {
            try {
                setState(prevState => ({
                    ...prevState,
                    loading: true
                }))
                const data = await getMoviesByQuery(search)
                // console.log(data)
                setState(prevState => ({
                    ...prevState,
                    items: data.data.results
                }))
                // console.log(data)
            } catch (error) {
                setState(prevState => ({
                    ...prevState,
                    error
                }))
            }
            finally {
                setState(prevState => ({
                    ...prevState,
                    loading: false
                }))
            }
        }

        if(search) {
            fetchPosts()
        }
    }, [search])

    const changeSearch = ({search}) => {
         setSearchParams({search})
    }

   
 
    // const elements = ''
    const { items } = state
    
        const elements = items.map(({id,original_title }) =>
        <li key={nanoid()} id={id}>
             <Link state={{from: `/movies?search=${search}`}} to={`/movies/${id}`}>{original_title}</Link>
        </li>)
     
  
    return (
         
        <FilmListContainer>
           <MoviesSearchForm onSubmit={changeSearch}/>
                <ul>{elements}</ul>
        </FilmListContainer>
            
         
    )
}

export default Movies