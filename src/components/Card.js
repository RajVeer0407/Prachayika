import React from 'react'
import './CardSty.css'
import serv1 from "../assets/49.jpg"
import serv2 from "../assets/54.jpg"
import serv3 from "../assets/55.jpg"
import serv4 from "../assets/57.jpg"
import serv5 from "../assets/60.jpg"
import serv6 from "../assets/63.jpg"
import serv7 from "../assets/65.jpg"
import serv8 from "../assets/78.jpg"
import serv9 from "../assets/61.jpg"

const Card = () => {
    return (
        <>
        <div>
            <img src={serv9} alt='' className='banner-2'/>
        </div>
        <div className='serv-text'>
            <h2>Service</h2>
        </div>
            <div class="main">



                <div class="card123">

                    <div class="image10">
                        <img src={serv1} />
                    </div>
                    <div class="title">
                        <h1>Destination Wedding</h1>
                    </div>
                    <div class="des">
                        <p>You can Add Desccription Here...</p>
                        <button>View</button>
                    </div>
                </div>



                <div class="card123">

                    <div class="image10">
                        <img src={serv2} />
                    </div>
                    <div class="title">
                        <h1>Theme Wedding</h1>
                    </div>
                    <div class="des">
                        <p>You can Add Desccription Here...</p>
                        <button>View</button>
                    </div>
                </div>



                <div class="card123">

                    <div class="image10">
                        <img src={serv3} />
                    </div>
                    <div class="title">
                        <h1>Carnival Party</h1>
                    </div>
                    <div class="des">
                        <p>You can Add Desccription Here...</p>
                        <button>View</button>
                    </div>
                </div>



                <div class="card123">

                    <div class="image10">
                        <img src={serv4} />
                    </div>
                    <div class="title">
                        <h1>Theme Party</h1>
                    </div>
                    <div class="des">
                        <p>You can Add Desccription Here...</p>
                        <button>View</button>
                    </div>
                </div>



                <div class="card123">

                    <div class="image10">
                        <img src={serv5} />
                    </div>
                    <div class="title">
                        <h1>House Warming</h1>
                    </div>
                    <div class="des">
                        <p>You can Add Desccription Here...</p>
                        <button>View</button>
                    </div>
                </div>


                <div class="card123">

                    <div class="image10">
                        <img src={serv6} />
                    </div>
                    <div class="title">
                        <h1>Birthday Parties</h1>
                    </div>
                    <div class="des">
                        <p>You can Add Desccription Here...</p>
                        <button>View</button>
                    </div>
                </div>


                <div class="card123">

                    <div class="image10">
                        <img src={serv7} />
                    </div>
                    <div class="title">
                        <h1>Baby Shower</h1>
                    </div>
                    <div class="des">
                        <p>You can Add Desccription Here...</p>
                        <button>View</button>

                    </div>
                </div>

                <div class="card123">

                    <div class="image10">
                        <img src={serv8} />
                    </div>
                    <div class="title">
                        <h1>Golden Jubilee</h1>
                    </div>
                    <div class="des">
                        <p>You can Add Desccription Here...</p>
                        <button>View</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;