import React from "react";
import { Container, Col, Row, Grid, Button } from "react-bootstrap";
import { BackTop } from "antd";

import Nav from "./Nav";
import RSVP from "./RSVP";
import AboutUs from "./AboutUs";
import Location from "./Location";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

import "./styles.css";

import Topbanner from "./img/topbanner.png";

function App() {
  return (
    <Container className="App">
      <Row id="home">
        <div className="topbanner">
          <img src={Topbanner} />
        </div>
        <div className="toptext">
          <h1>Liudas sodonis </h1>
          <div className="add">and</div>
          <h1>Jisu Lee </h1>
        </div>
        <Nav />
        <RSVP />
        <AboutUs />
        <Location />
        <div>
          <BackTop />
        </div>
        <footer>
          <div className="copyright">@copyright Liudas and Jisu</div>
          {/* <div>English | Lithuanian | 한국어</div> */}
        </footer>
      </Row>
    </Container>
  );
}
export default App;
