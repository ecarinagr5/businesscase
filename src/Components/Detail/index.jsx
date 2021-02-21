import React from "react";
//Style
import './style.css';


const Detail = ({ detail = [] }) => {
return (
        <div className="col-xl-4 col-lg-5">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Projects</h6>
                </div>
                <div className="card-body container-detail">
                    {
                        detail.map(( prop, key ) => {
                            let bgcolor =  prop.size >= 10000 ? 'bg-info'  :  prop.size < 5000 ? 'bg-warning' : 'bg-standard'
                            return(
                                <>
                                    <h4 key={ key } className="small font-weight-bold"> { prop.name } <span
                                    className="float-right">{ prop.size }</span></h4>
                                    <p className="clone-url">{ prop.clone_url} </p>
                                    <div key={ key + 'progress'} className="progress mb-4">
                                        <div key={ key + 'bar'}className={`progress-bar ${bgcolor}`} role="progressbar" style={{ width: prop.size   }}
                                        aria-valuenow={ prop.size } aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </div>
  );
};


export default Detail