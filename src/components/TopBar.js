import React from 'react'
import "./TopbarStyles.css"

function TopBar() {
  return (
    <div className='top-bar'>
        <span><ion-icon name="call-outline"></ion-icon>1111111111</span>
        <ul>
            <li><a href='#'><ion-icon name="logo-facebook"></ion-icon></a></li>
            <li><a href='#'><ion-icon name="logo-twitter"></ion-icon></a></li>
            <li><a href='#'><ion-icon name="logo-instagram"></ion-icon></a></li>
        </ul>
    </div>
  )
}

export default TopBar