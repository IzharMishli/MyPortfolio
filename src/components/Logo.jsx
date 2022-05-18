import React from "react";
import image from "../images/izhar.jpg";
import * as icons from "react-bootstrap-icons"


import {Row,Col, Container} from 'react-bootstrap';

export default function()
{
    return( 
        <div className="logo-part">
                <Container className="logo-container">
        <Row>
            <Col sm={6}>
            <Container><h1>I am Izhar Mishli</h1></Container>
            <Container><h2>Software Developer: Full Stack, Gaming, and More! </h2></Container>
            <Container><h5>izarmishli@gmail.com </h5></Container>
            <Row className="icons-row justify-content-md-center">
                <Col className="icons-col"><a href="https://www.facebook.com/izarmishli">
                <icons.Facebook  className="iconsClass" /></a></Col>
                <Col className="icons-col"><a href="https://github.com/IzharMishli">
                <icons.Github    className="iconsClass" /></a></Col>
                <Col className="icons-col"><a href="https://www.linkedin.com/in/izhar-mishli-594a9222b/?lipi=urn%3Ali%3Apage%3Aprofile_common_profile_index%3B5d1a725e-6854-4e09-952b-bcadbd83da73">
                <icons.Linkedin  className="iconsClass" /></a></Col>
                <Col className="icons-col"><a href="https://www.instagram.com/izhar_mishli/">
                <icons.Instagram className="iconsClass" /></a></Col>
            </Row>
            </Col>
            <Col sm={6} className="logo-img-div"><img className="logo-my-image" src={image} /></Col>
        </Row>
        </Container>
            
        </div>
    
        
    )
}