
import React, { useState, useEffect } from 'react';
import SearchBar from '../Components/SearchBar';
import Movie from "../Components/Movie";

//Connect Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { gitDataAction } from '../Redux/getDataGit'



const MOVIE_API_URL = "https://www.omdbapi.com/?s=man&apikey=4a3b711b"; // you should replace this with yours



const Home = (props) => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
    fetch(MOVIE_API_URL)
      .then(response => response.json())
      .then(jsonResponse => {
        setMovies(jsonResponse.Search);
        setLoading(false);
      });
  }, []);

    const search = searchValue => {
    setLoading(true);
    setErrorMessage(null);

    props.gitDataAction(searchValue);
    console.log("usergit",props.usergit.Search)

    setMovies(props.usergit.Search);
    setLoading(false);


    /*fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`)
      then(response => response.json())
      .then(jsonResponse => {
        if (jsonResponse.Response === "True") {
          setMovies(jsonResponse.Search);
          setLoading(false);
        } else {
          setErrorMessage(jsonResponse.Error);
          setLoading(false);
        }
      });*/
  	};
	
  return (
     <div className="App">
      <SearchBar search={search} />
      <p className="App-intro">Sharing a few of our favourite movies</p>
      <div className="movies">
        {loading && !errorMessage ? (
         <span>loading...</span>
         ) : errorMessage ? (
          <div className="errorMessage">{errorMessage}</div>
        ) : (
          movies.map((movie, index) => (
            <Movie key={`${index}-${movie.Title}`} movie={movie} />
          ))
        )}
      </div>
    </div>
    );
}

//Received.
function mapStateToProps(state){
  return {
      metrics: state.metrics.array,
      visualization: state.setVisualization.chart,
      usergit: state.datagit.array
  }
}
//Send
function mapDispatchToProps(dispatch){
  return bindActionCreators({
    gitDataAction
  }, dispatch )
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);