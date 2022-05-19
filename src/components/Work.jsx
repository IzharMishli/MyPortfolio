import React,{useEffect, useState} from "react";
import {Row,Col, ListGroup} from 'react-bootstrap';
import AOS from "aos";
import "aos/dist/aos.css";
import * as icons from "react-bootstrap-icons"

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
    
    const ColoredLine = () => (
        <hr
            className="hr-style"
        />
    );

    return( 
        <Col xs={6} sm={6} md={4} className="work-part" data-aos="zoom-out-down">
        <div className={[props.type, "work-div"].join(" ")} >
         <Row className="justify-content-center">
            <Col><h1>{props.name}</h1></Col>
         </Row>
         <Row className="justify-content-center">
            <Col><h5>{props.caption}</h5></Col>
         </Row>
         <div class="topContainer">
         {links.map((link, index) => {
                return(<a key={index} href={link.link}><img className="links-image" src={require("../images/links/" + link.type + ".png")} /></a>)
            })}
            </div>

         
         <Row className="justify-content-center git-text-row">
         <icons.Github className="iconsClass" />
             <a href={props.gitlink === "private" ? "#" : props.gitlink}>
             <h3>{props.gitlink === "private" ? "private" : "View in github"}</h3></a>
         </Row>
         <div class="topContainer">
         <Row className="justify-content-center">
            <Col><img className="work-image" src={require("../images/" + props.image)} /></Col>
            
         </Row>
         
         <Row className="justify-content-center">
         {tags.map((tag, index) => {
                return(
                    <div className="tagDiv" key={index}>
                    <img className="tags-image" src={require("../images/tags/" + tag + ".png")} />
                    </div>)
            })}
            </Row>
            </div>
         </div>
            
        </Col>
    
        
    )
}