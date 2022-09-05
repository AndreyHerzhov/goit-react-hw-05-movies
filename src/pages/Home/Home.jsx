import { Title } from "./Home.styled"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { getMovies } from "shared/api/movies";
import { nanoid } from "nanoid";


const Home = () => {
    const [state, setState] = useState({
        items: [],
        loading: false,
        error: null
    })

 

    useEffect(() => {
        const fetchPosts = async() => {
                setState(prevState => ({
                    ...prevState,
                    loading: true,
                    error: null,
    
                }))
            try {
                const result = await getMovies();
                // console.log(result)
                setState(prevState => {
                    return {
                        ...prevState,
                        items: [...prevState.items, ...result.results ]
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
    }, []
  )

  const { items, loading, error } = state
   
  const elements = items.map(({id,original_title }) =>
        <li key={nanoid()} id={id}>
             <Link  state={{from: "/"}} to={`/movies/${id}`}>{original_title}</Link>
        </li>)
 

    return (
        <div>
            <Title>Trending Today</Title>
            <ol>{elements}</ol>
            {loading && <p>... loading movies</p>}
            {error && <p>...movies not found</p>}
        </div>
        
    )
}

export default Home