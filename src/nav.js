import React, { useEffect, useState } from 'react'
import './nav.css'

function Nav() {
    const [show,handleShow]=useState(false);
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY>100){
                handleShow(true)

            }
            else
               handleShow(false);
            
            
        });
        return ()=>{
            window.removeEventListener("scroll");
        }
    },[])
    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img
            className="nav_logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png"
            alt="Netflix logo" />
            <img 
            className="nav_avatar"
            src="https://simg.nicepng.com/png/small/71-713987_ram-logo-vectors-icon-ram-logo-vectors-image.png"
            alt="Netflix logo" />
        </div>
    )
}

export default Nav
