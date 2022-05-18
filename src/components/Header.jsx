import React from "react";
import NavBar from "./NavBar";
import Logo from "./Logo";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function()
{

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

    return( 
    <header>
        <NavBar />
        <div data-aos="fade-up"><Logo /></div>
        
    </header>
    
        
    )
}