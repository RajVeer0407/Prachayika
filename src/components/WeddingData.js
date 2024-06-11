import React from 'react'
import banner from "../assets/63.jpg"
import "./WeddingDataStyles.css"
import banner66 from "../assets/63.jpg"

export const WeddingData = () => {
    return (
        <div>
            <img src={banner} alt='no' className='wed' />
            <div class="wed-text">
                <h1>Wedding</h1>
                {/* <ul class="wed-text-1">
            <li className='homei'><a href="http://www.prachayikaevents.com/" >Home</a></li>
        </ul> */}
            </div>

            <div class="vilen">


                <div class="killer">
                    <h2>Best Wedding Planner</h2>
                    <div class="textin"><img src={banner66} className='imagic' alt="/" title="Pre Wedding Shoot in Delhi, Pre Wedding Photoshoot in Delhi - Showtime Event" /*align="right" style="padding-left:14px; padding-bottom:14px;"*/ />
                    <div className='key'>
                    We plan and executeseveral events that include the Mehendi, Sangeet, Haldi, and the wedding. Some of our full wedding packages include pickup from the airport to the hotel as well as post-wedding drop back to the airport. Start your wedding planning with Prachayika Events, where we help you with mysterious wedding plans, offering amazing tips and ideas to make your wedding day special and exciting.<br></br><br></br>

                        <strong>Mehendi Ceremony</strong><br></br>
                        In this package, you will get the floral decoration, lighting, Mehendi artists, female singers, a live bangle garden, sound and lights, dancers.<br></br><br></br>

                        <strong>Engagement Parties</strong><br></br>
                        An engagement party is the most important pre-wedding event for every couple. If you are planning to do an engagement party too then we will help you to plan it in an interesting way. We are here with lots of ideas and themes to make your engagement party a big enjoyable event for everyone in the areas of Delhi, Jaipur, Mumbai, Goa etc.<br></br><br></br>

                        <strong>Bachelor and Bachelorette Parties</strong><br></br>
                        These parties are done before the marriage for the guy and girls who are going to get married soon. These parties should be done in a way that they should be entertaining for every guest. We will provide you the best service for these parties. You will get the best services for food, decoration, drinks, music and other fun activities.<br></br><br></br>

                        <strong>Cocktail Party</strong><br></br>
                        This package will get you a lounge where you can fit 100 people quite easily. We offer you unlimited drinks that are either Indian or foreign brands. It also includes an in-house DJ and various games.<br></br><br></br>
                        </div>
                    </div>



                    <div class="sidebar-widget">
                        <div class="widget-content">
                            <div class="sidebar-title-two">
                                <h4>Services</h4>
                            </div>
                            <div className='tharki'>
                                <ul className='list'>
                                    <li><a href="/">Pre Wedding Events</a></li>
                                    <li><a href="/">Destination Wedding</a></li>
                                    <li><a href="/">Decoration</a></li>
                                    <li><a href="/">Photography & Vediography</a></li>
                                    <li><a href="/">Anniversary</a></li>
                                    <li><a href="/">Flower Decoration</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>




    )
}

