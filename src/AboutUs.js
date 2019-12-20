import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
// import { Container, Row, Col } from "reactstrap";

import { Form, Input, Button, Checkbox, Row, Col, Icon } from "antd";
import Gallery from "./Gallery";
import "./styles.css";
import "./AboutUs.css";

import Jisu from "./img/jisu.png";
import Liudas from "./img/liudas.png";

class DynamicRule extends React.Component {
  check = () => {
    this.props.form.validateFields(err => {
      if (!err) {
        console.info("success");
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div xs={{ span: 18, offset: 0 }} className="RSVP">
        <div className="ourstory" id="ourstory">
          <div className="title">
            <h3>Our Story</h3>
          </div>
          <div className="flex center">
            <div className="imgCon">
              <img src={Liudas} />
            </div>
            <div className="imgCon">
              <img src={Jisu} />
            </div>
          </div>
          <p className="des">
            Liudas born in Lithuania and Jisu born in Korea. We grow up in
            different location over 30 years. In 2017, we met at one company
            located in Vancouver Canada as a developer and designer. We get to
            know each other and find out we have many common things. In 2018 we
            have decided to be together rest of our life. We are going to have
            wedding on August 11th in 2019 and We would like to invite friends
            and family to celebrate our big beginning step of our marriage life.
          </p>
          <p className="bible">
            <span>John 15:12:</span> “My command is this: Love each other as I
            have loved you."
          </p>
        </div>

        <div className="gallery" id="gallery">
          <div className="title">
            <h3>Gallery</h3>
          </div>
          <Gallery />
        </div>
      </div>
    );
  }
}

const RSVP = Form.create({ name: "dynamic_rule" })(DynamicRule);
export default RSVP;
