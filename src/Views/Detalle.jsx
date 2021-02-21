
import React, { useState } from 'react';

//Components
import SearchBar from '../Components/SearchBar/index';
import Title from '../Components/Title/index';
import Detail from '../Components/Detail/index';
import Chart from '../Components/Chart/index';

//Connect Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { gitReposAction } from '../Redux/getReposGit'

const title = "GitHub Repository"
const subtitle = "Search a repository in GitHub"



const Detalle = (props) => {
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(true);
  const [titlemsg, setTitleMsg] = useState(null);
  let { repos }  = props
  let response = repos.length;

    const search = searchValue => {
      setLoading(true);
      setErrorMessage(false);
      //Send Redux Request
      props.gitReposAction(searchValue);
      setLoading(false);
      repos ? setTitleMsg(searchValue) : setErrorMessage(false);
    };


  return (
        <div>
          <div className="container">
              <Title title = { title } subtitle = { subtitle } />
              <div className="row">
                <div className="col mx-auto" >
                  <SearchBar search={search} />
                </div>
              </div>
              {   !errorMessage  ?
                <>
                  <div className="row mt-5 mx-auto"> 
                    <h2 className="text-center">{ titlemsg }</h2>
                  </div>

                  <div className="row mt-5"> 
                    <Detail detail={ repos } />
                    <Chart metrics={ repos } setVisualization= {'Bar'} />
                  </div>
                </>
              : 
              <div className="col mx-auto mt-5" >
                <p className="detail-text"> Busca un repositorio</p>
              </div>
              }
          </div>
        </div>
    );
}

//Received.
function mapStateToProps(state){
  return {
      repos: state.repos.array
  }
}
//Send
function mapDispatchToProps(dispatch){
  return bindActionCreators({
    gitReposAction
  }, dispatch )
}

export default connect(mapStateToProps,mapDispatchToProps)(Detalle);