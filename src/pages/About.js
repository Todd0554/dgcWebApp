import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import GoogleMapSite from '../components/GoogleMapSite';

function About() {
  return (
    <Container style={{margin:"10px"}} className="justify-content-md-center">
           
    <div style={{padding:"10px"}}>
        <h1>About</h1>
        <Row style={{height: 'auto'}}>

            <Col lg={7} style={{fontSize: '20px'}}>
                <p>Doncaster Garden Club began more than 46 years ago to help would-be gardeners with knowledge for growing plants. We are Affiliated with Garden Clubs of Australia.   
                </p>
                <br/>
                <p>
                Up to 50 of us meet monthly (except January) to hear a Speaker teach us re healthy soils, fertilisers and soil conditioners, grey water use as well as growing flowers, fruit and vegetables. 
                </p>
            </Col>
            <Col lg={5} style={{textAlign: 'center', }}>
                <img style={{height: '30vh', }} src="image/DGC_logo2.png" alt="#" />
            </Col>
            <Col style={{fontSize: '20px'}}>
                <br/>
                <p>
                    Our Senior members in their 80s and 90s have a huge reservoir  of knowledge to share.  Supper is a friendly time together.
                    Our 50th Birthday is in 2026 with preparations well under way. 
                </p>
                <p>
                    When the 2nd Wednesday of each month from February to December at 8pm. We meet at the <strong>Doncaster RSL Hall</strong>, cnr Doncaster Rd and Leeds St, Doncaster East just east of the Jackson Crt Shopping Centre. The Hall has parking at the rear.
                </p>
                <GoogleMapSite />
            </Col>
        </Row>
        </div>
    </Container>
  )
}

export default About