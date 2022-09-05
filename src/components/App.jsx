import { Routes, Route, } from "react-router-dom";
import { lazy, Suspense } from "react";
const  Home = lazy(() => import("pages/Home/Home") )
const  Menu = lazy(() => import("modules/Menu/Menu") )
const  Cast = lazy(() => import("pages/Cast/Cast") )
const  Movies = lazy(() => import("pages/Movies/Movies")) 
const  Reviews = lazy(() => import("pages/Reviews/Reviews") )
const  MovieDetails = lazy(() => import("pages/MovieDetails/MovieDetails") )

export const App = () => {
  return (
    <div>
      <Menu/>
      <Suspense>
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/movies" element={<Movies />} />
         <Route path="/movies/:movieId" element={<MovieDetails />}>
                <Route path="cast" element={<Cast />} />
                <Route path="reviews" element={<Reviews />} />
         </Route>
        
      </Routes>
      </Suspense>
    </div>
  );
};
