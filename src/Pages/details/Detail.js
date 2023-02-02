import React from "react";
import { Card, Col, Row, Button } from "react-bootstrap";
import bg from "../../Assets/Icons/bg_icon.png";
import Chart from "../../components/chart/Chart";
import Progress from "../../components/progress/Progress";
import Tabs from "../../components/tabs/Tabs";
import "./detail.css";
const Detail = () => {
  return (
    <div className="details">
      <div className="top">
        <Row>
          <Col>
            <a href=""> Back</a>
          </Col>
          <Col style={{textAlign:"center"}}>
            <h4>Tim's Investment</h4>
          </Col>
          <Col style={{textAlign:"end"}}>
            <a href="">Edit theme Settings</a>
          </Col>
        </Row>
      </div>
      
      <div className="cards">
      <Card className="card">
        
          <div className="card-title">
            <div className="top-heading">
              <h6>+ USD 500 (18%)</h6>
              <h3>$ 3000</h3>
            </div>
            <div className="chart">
              <Chart/>
            </div>
            <Row className="card-content">
              <Col lg={1} xs={16}>
                <img src={bg} alt="" />
              </Col>
              <Col>
                {" "}
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Col>
            </Row>
          </div>
          </Card>
        
      </div>
      <div className="cards">
        <Card className="card">
          <div className="card-content">
            <div className="titl">
              <strong>Risk Level</strong>
            </div>
            <div className="risk">
              <strong style={{ color: "purple" }}>4</strong>Kg
            </div>
            <div className="para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              expedita provident similique perspiciatis explicabo nihil deserunt
              fugiat ducimus a ex dolor sequi inventore,
            </div>
            <div className="progres">
              <Progress />
            </div>
          </div>
        </Card>
      </div>
      <div className="cards">
        <Card className="card">
          <div className="card-title">
            <div className="top-head">
              <Row className="card-content">
                <Col>
                  <strong>Projected Cost & Charges</strong>
                </Col>
                <Col style={{ textAlign: "end" }}>
                  {" "}
                  <strong>$3000</strong> Lorem ipsum dolor sit amet.
                </Col>
              </Row>
            </div>
            <div className="tab">
              <Tabs />
            </div>
          </div>
        </Card>
      </div>
      <div className="buttons">
        <div className="btns">
          <Button className="btn1">Sell Investment</Button>
        </div>
        <div className="btns">
          <Button className="btn3">Fund Investment</Button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
