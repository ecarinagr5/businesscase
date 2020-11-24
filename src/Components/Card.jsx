import React  from 'react';
import moment from 'moment';
//Redux
import { useDispatch, useSelector } from 'react-redux';


//proptype
const Card = () => {

    const dispatch = useDispatch()
    const alldata = useSelector( store => store.metrics.array )

    return (
            <div className="row justify-content-md-center">
                {
                alldata.map( (item ,i )=> (
                    <div key= { i } className="card col-3 ml-1 justify-content-md-center">
                        <div className="circle justify-content-md-center mt-2">
                            <p className="mt-3">{(item.percentageChange * 100).toFixed(2)}%</p>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title text-right"> ${ item.price}  </h5>
                            <p className="card-text">{moment(item.date).format('MMMM Do YYYY, h:mm:ss a')}  </p>
                        </div>
                    </div>
                ))
                    } 
            </div>
    )
}

export default Card
