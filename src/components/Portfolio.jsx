import React from "react";
import {Row,Col, ListGroup} from 'react-bootstrap';
import Work from "./Work";
import works from "../data";

export default function()
{
    


    return( 
        <Row className="portfolio-part">
            <Row>
                <Col><h1>Portfolio Showcase</h1></Col>
            </Row>
            <Row>
            
                </Row>
            <Row>
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
    
        
    )
}