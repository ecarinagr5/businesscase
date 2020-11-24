import React, { Component } from 'react'

//Connect Redux
import { connect } from 'react-redux';
import { setCurrentVisualization } from '../Redux/changeVisualization'

function Buttons ({dispatch}){

        return (
            <div className="d-flex justify-content-center mt-5">
                <button type="button" className="btn btn-l btn-outline-danger ml-1" onClick={ () => dispatch(setCurrentVisualization('Line')) }> Chart Line </button>
                <button type="button" className="btn btn-l btn-outline-warning ml-1"  onClick={ () => dispatch(setCurrentVisualization('Bar')) } >Chart Bar </button>
            </div>
        )
}


  export default connect()(Buttons);
