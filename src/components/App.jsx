import { Routes, Route, } from "react-router-dom";
import Home from "pages/Home/Home";
import Menu from "modules/Menu/Menu";
import MovieDetails from "pages/MovieDetails/MovieDetails";

export const App = () => {
  return (
    <div>
      <Menu/>
      <Routes>
         <Route path="/" element={<Home />} />
         {/* <Route path="/movies" element={<Movies />} /> */}
         <Route path="//movies/:movieId" element={<MovieDetails />}>
                {/* <Route path="/movies/:movieId/cast" element={<Cast />} />
                <Route path="/movies/:movieId/reviews" element={<Reviews />} /> */}
         </Route>
         
      </Routes>
       
    </div>
  );
};
