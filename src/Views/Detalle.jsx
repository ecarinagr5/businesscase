
import React, { Component } from 'react';

//Connect Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { getDataAction } from '../Redux/ipcData'

//Components
import Card from '../Components/Card'
import Title from '../Components/Title';

class Home extends Component {

  constructor(props) {
    super(props); 
    this.state = {
      title: 'IPC INDICATOR',
      subtitle: 'Detalle Precios y Cotizaciones'
    }
  }


  render() {
    let { metrics } = this.props;
    let { title, subtitle } = this.state;

    return (
        <div>
            <div className="container">
                <Title title = { title } subtitle = { subtitle } />
                <Card metrics={ metrics }/>
            </div>
        </div>
    )
  }
}
//Received.
function mapStateToProps(state){
    return {
        metrics: state.metrics.array,
        visualization: state.setVisualization.chart
    }
  }
  //Send
  function mapDispatchToProps(dispatch){
    return bindActionCreators({
        getDataAction
    }, dispatch )
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(Home);
  

