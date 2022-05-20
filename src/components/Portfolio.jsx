import React,{useState, useEffect} from "react";
import {Row,Col, ListGroup, Container, ToggleButton, ButtonGroup, ToggleButtonGroup} from 'react-bootstrap';
import Work from "./Work";
import works from "../data";
import AOS from "aos";
import "aos/dist/aos.css";

export default function()
{
    const [radioValue, setRadioValue] = useState('all');
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
      const radios = [
        { name: 'All', value: 'all' },
        { name: 'Gaming', value: 'gaming' },
        { name: 'Web-Apps', value: 'web' },
        { name: 'Computer-Vision', value: 'computer-vision' },
        { name: 'others', value: 'other' },
      ];

    return( 
        <Container fluid className="works-main-container">\
        <Row className="portfolio-part justify-content-center work-main-row">
            <Row className="justify-content-center">
                <h1>Portfolio Showcase</h1>
            </Row>
            
            <Row id="works-section"  >
            
                {works.filter((work) => {
                    if (radioValue === "all") return true; 
                    else {return(
                    work.type === radioValue)}
                    }).map((work, index) => {
                    return (
                        <Work key={index} name={work.name}
                            caption={work.caption} 
                            image={work.image} 
                            tags={work.tags}
                            links={work.links}
                            type={work.type}
                            gitlink={work.gitlink}
                            />
                        )
                    })}
            </Row>
            
        </Row>
        </Container>
        
    )
}