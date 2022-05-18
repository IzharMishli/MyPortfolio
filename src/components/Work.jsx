import React,{useEffect, useState} from "react";
import {Row,Col, ListGroup} from 'react-bootstrap';
import AOS from "aos";
import "aos/dist/aos.css";

import "../styles/workstyle.css"

export default function(props)
{
    const[first,Setfirst] = useState(true);
    const [tags, setTags] = useState([]);
    const [links, setLinks] = useState([]);

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

    useEffect(() =>{
        if(props.tags)
            setTags(props.tags);
    }, []);

    useEffect(() =>{
        if (props.links)
            setLinks(props.links);
    }, []);
    

    return( 
        <Col xs={6} sm={6} md={4} className="work-part" data-aos="zoom-out-down">
        <div className={props.type}>
         <Row className="justify-content-md-center">
            <Col><h1>{props.name}</h1></Col>
         </Row>
         <Row className="justify-content-md-center">
            <Col><h5>{props.caption}</h5></Col>
         </Row>
         <Row className="justify-content-md-center">
            <Col><img className="work-image" src={require("../images/" + props.image)} /></Col>
         </Row>
         
         <div class="topContainer">
         {links.map((link, index) => {
                return(<a key={index} href={link.link}><img className="links-image" src={require("../images/links/" + link.type + ".png")} /></a>)
            })}
            </div>

         <div class="topContainer">
         
         {tags.map((tag, index) => {
                return(
                    <div className="tagDiv" key={index}>
                    <img className="tags-image" src={require("../images/tags/" + tag + ".png")} />
                    </div>)
            })}
            
            </div>
         </div>
            
        </Col>
    
        
    )
}