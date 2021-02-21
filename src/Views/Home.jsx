
import React, { useState } from 'react';

//Components
import SearchBar from '../Components/SearchBar/index';
import Title from '../Components/Title/index';
import User from '../Components/User/index';
import Table from '../Components/Table/index';
import Card from '../Components/Card/index';

//Connect Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { gitDataAction } from '../Redux/getDataGit'

const title = "GitHub User"
const subtitle = "Search a user in GitHub"

const Home = (props) => {
  let usergit = props.usergit;
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(true);
  let response = usergit.length;

    const search = searchValue => {
      setLoading(true);
      setErrorMessage(false);
            //Send Redux Request
      props.gitDataAction(searchValue);
      setLoading(false);
      response > 0 ? setErrorMessage(true) : setErrorMessage(false);
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
              {   !response  ?
                <>
                  <div className="row mt-5"> 
                    <Card data={ usergit.login } title={ 'User Name'}/>
                    <Card data={ usergit.score } title={ 'Score'}/>
                    <Card data={ usergit.html_url } title={ 'Url'}/>
                    <Card data={ usergit.repos_url } title={ 'Repos'}/>
                  </div>

                  <div className="row mt-5"> 
                    <User user={ usergit }/>
                    <Table user={ usergit } />
                  </div>
                </>
              : 
              <div className="col mx-auto mt-5" >
                <p className="detail-text"> No existe el usuario </p>
              </div>
              }
          </div>
        </div>
    );
}

//Received.
function mapStateToProps(state){
  return {
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