import React, { useState, useEffect, useContext } from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import { LoginForm } from "./LoginForm";
import { Context } from "../store/appContext";


const EventsThumbnails = () => {

    const { store, actions } = useContext(Context);



    return(



        <div className="col-2 mb-4">
        <Link to="/events-category/event" className="text-decoration-none">
            
              {store.eventsDetails.map((item , index)=>{
                  return(
                    <div className="card">
                      <img src={item.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{item.event_title}</h5>
                </div>
                <div className="card-footer">
                    <small className="text-muted">{item.category}</small>
                    <FontAwesomeIcon icon={faPlusSquare} />
                </div>
                </div>
                  ) ;
              })}
        </Link>
    </div>
    )
}