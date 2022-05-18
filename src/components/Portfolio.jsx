import React from "react";
import {Row,Col, ListGroup, Container} from 'react-bootstrap';
import Work from "./Work";
import works from "../data";
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
        <Container fluid>
        <Row className="portfolio-part">
            <Row>
                <Col><h1>Portfolio Showcase</h1></Col>
            </Row>
            <Row>
            
                </Row>
                
            <Row id="work-section" data-aos="fade-right" >
            
                {works.map((work, index) => {
                    return (
                        
 <Work key={index} name={work.name}
                caption={work.caption} 
                image={work.image} 
                tags={work.tags}
                links={work.links}
                type={work.type}
                />
                    )
                })}
                
            </Row>
            
        </Row>
        </Container>
        
    )
}