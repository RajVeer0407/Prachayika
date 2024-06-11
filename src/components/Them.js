import "./ThemStyles.css"
import banner666 from "../assets/63.jpg"

import React from 'react'

const Them = () => {
  return (
    <div className="enentee">
        <div className="containert event">
            <div className="row justify-content-center text-center">
                <div className="offset-sm-1 col-sm-5">
                    <img src={banner666} className="img-fluid" alt=""></img>
                    <div className="event-content">
                        <h4>Theme Wedding</h4>
                        <span>Omar Mamoon is a San Francisco writer, cookie dough 
                        Omar Mamoon is a San Francisco writer, cookie dough 
                        Omar Mamoon is a San Francisco writer, cookie dough 
                        </span>
                    </div>
                </div>

                <div className="offset-sm-1 col-sm-5">
                    <img src={banner666} className="img-fluid" alt=""></img>
                    <div className="event-content">
                        <h4>Theme Wedding</h4>
                        <span>Omar Mamoon is a San Francisco writer, cookie dough 
                        Omar Mamoon is a San Francisco writer, cookie dough 
                        Omar Mamoon is a San Francisco writer, cookie dough 
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Them