import React from "react";

//import images
import enlace from '../../assets/img/enlace.png'
import score from '../../assets/img/score.png'
import user from '../../assets/img/user.png'

//Style
import './style.css';

const Card = ({ data, title }) => {
    
let image = title === 'Repos' || title === 'Url' ? enlace : title === 'Score' ?  score : user;

return (
    <div className="col-xl-3 col-md-6 mb-4">
        <div className="card border-left-warning shadow h-100 py-2">
            <div className="card-body">
                <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-info text-uppercase mb-1"> { title }  <img src={ image  } className="img_ril" /></div>
                        <div className="mb-0 font-weight-bold text-gray-800">{ data }</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};


export default Card