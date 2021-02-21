import React from "react";
//Style
import './style.css';


const Table = ({ user = [] }) => {
return (
        <div className="col-xl-8 col-lg-5">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">All Information</h6>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div class="col-lg-6 mb-4">
                            <div class="card bg-dark text-white shadow">
                                <div class="card-body">
                                id
                                    <div class="text-white-50 small">{user.id}</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 mb-4">
                            <div class="card bg-info text-white shadow">
                                <div class="card-body">
                                    type
                                    <div class="text-white-50 small">{user.type}</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 mb-4">
                            <div class="card bg-dark text-white shadow">
                                <div class="card-body">
                                organizations_url
                                    <div class="text-white-50 small">{user.organizations_url}</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 mb-4">
                            <div class="card bg-info text-white shadow">
                                <div class="card-body">
                                subscriptions_url
                                    <div class="text-white-50 small">{user.followers_url}</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 mb-4">
                            <div class="card bg-dark text-white shadow">
                                <div class="card-body">
                                received_events_url
                                    <div class="text-white-50 small">{user.received_events_url}</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 mb-4">
                            <div class="card bg-info text-white shadow">
                                <div class="card-body">
                                repos_url
                                    <div class="text-white-50 small">{user.repos_url}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
};


export default Table