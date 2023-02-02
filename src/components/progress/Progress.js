import React from "react";
import { Col, Row } from "react-bootstrap";
import "./progress.css";
const Progress = () => {
  return (
    <div>
      <div className="progressbar">
        <div className="progress-heading">
        <Row>
            <Col>
              <strong>Equility</strong>
            </Col>
            <Col style={{textAlign :"end", color:"purple"}}>
              <p>43%</p>
            </Col>
          </Row>
        </div>

        <div className="progress-bar">
          <div
            className="progress-bar-fill"
            style={{ width: "43%", height: "5px" }}
          />
        </div>
      </div>
      <div className="progressbar">
        <div className="progress-heading">
          <Row>
            <Col>
              <strong>Bonds</strong>
            </Col>
            <Col style={{textAlign :"end", color:"purple"}}>
              <p>63%</p>
            </Col>
          </Row>
        </div>

        <div className="progress-bar">
          <div
            className="progress-bar-2"
            style={{ width: "63%", height: "5px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Progress;
