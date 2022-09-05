// import { Link } from "react-router-dom"
// import { getMoviesByQuery } from "shared/api/movies"
// import {  useState } from "react"
// import { nanoid } from "nanoid"
// import { FilmListContainer } from "./Movies.styled"
// import MoviesSearchForm from "pages/MovieSearchForm/MovieSearchForm"


// const Movies = () => {
//     const [search, setSearch] = useState({
//        search: "",
//     })
//     const [state,setState] = useState('')
//     const [movies, setMovies] = useState([])
     

//     const handleSearch = ({target}) => {
//         const {name,value} = target
//         setSearch({
//             ...search,
//             [name]: value
//         })
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault()
//         setState(search)
//         const fetchPosts = async() => {
//             setSearch(prevState => ({
//                 ...prevState,
//                 loading: true,
//                 error: null,

//             }))
//         try {
//             const result = await getMoviesByQuery(search.search);
//             setMovies(prevState => {
//                 return  [...result.data.results ]
//             })
           
//         } catch (error) {
//             console.log(error)
//         }
//         finally {
             
//         }
//     }
//     fetchPosts() 
//         setSearch({
//             search: ""
//         })
         
//     }
   
//     const elements = movies.map(({id,original_title }) =>
//         <li key={nanoid()} id={id}>
//             <Link to={`/movies/${id}`}>{original_title}</Link>
//         </li>)

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
    // if(items.length) {
        const elements = items.map(({id,original_title }) =>
        <li key={nanoid()} id={id}>
             <Link to={`/movies/${id}`}>{original_title}</Link>
        </li>)
        console.log(elements)
    //     return elements
    // }
    
  
    return (
         
        <FilmListContainer>
           <MoviesSearchForm onSubmit={changeSearch}/>
                <ul>{elements}</ul>
        </FilmListContainer>
            
         
    )
}

export default Movies