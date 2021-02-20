
import React, { Component } from 'react';

//Connect Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { getDataAction } from '../Redux/ipcData'

//Components
import Chart from '../Components/Chart';
import Title from '../Components/Title';
import Buttons from '../Components/Buttons';

class Home extends Component {

  constructor(props) {
    super(props); 
    this.state = {
      title: 'USER SEARCH',
      subtitle: 'Search user in GitHub'
    }
  }


  render() {
    const { metrics, visualization, usergit } = this.props;
    let { title, subtitle } = this.state;
    return (
        <div>
            <div className="container">
                <Title title = { title } subtitle = { subtitle } />
                {/*<Buttons />*/}
                {/*<Chart metrics={ metrics } setVisualization={ visualization } />*/}
                
            </div>
        </div>
    )
  }
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
        getDataAction
    }, dispatch )
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(Home);
  

