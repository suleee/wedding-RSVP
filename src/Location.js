import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { Form, Input, Button, Checkbox, Row, Col, Icon } from "antd";

import "./Location.css";
import Map from "./img/map.jpg";

class Location extends React.Component {
  render() {
    return (
      <div className="details" id="details">
        <div className="title">
          <h3>The Details</h3>
        </div>
        <div>
          <p>
            While your presence at our wedding is all that we wish for, if you
            want to give us a gift, we will be grateful for a small cash
            donation towards our honeymoon and our future together.
          </p>
          <div className=" donation-btn">
            <Button
              target="_blank"
              href="https://www.gofundme.com/dthzm-wedding-donation"
            >
              <p>Donate Online</p>
            </Button>
          </div>
        </div>
        <Row className="flex center details-text">
          <Col span={1} order={1} />
          <Col span={8} order={2}>
            <Icon type="clock-circle" />
            <h4>When</h4>
            <p>August 11th 2019 at 5:30pm</p>
          </Col>
          <Col span={2} order={3} />
          <Col span={8} order={4}>
            <Icon type="environment" />
            <h4>Where</h4>
            <p>Sandol Church</p>
          </Col>
          <Col span={1} order={5} />
        </Row>
        <div className="ImgCon mapImg">
          <a
            href="https://www.google.com/maps/place/Glenayre+Community+Centre/@49.2742974,-122.8812525,14z/data=!4m5!3m4!1s0x548679aee936cd3b:0x66585c97e970022f!8m2!3d49.2747839!4d-122.8875771"
            target="_blank"
          >
            <img src={Map} />
          </a>
        </div>
      </div>
    );
  }
}

export default Location;
