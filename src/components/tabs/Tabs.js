import React, { useState } from "react";
import "./tab.css";
const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  return (
    <div>
      <div className="tabs">
        <ul className="tabs-list">
          <li
            className={`tabs-list-item ${
              activeTab === 0 ? "tabs__item--active" : ""
            }`}
            onClick={() => handleTabClick(0)}
          >
            <a href="#" className="tabs-list-link active">
              <strong style={{ color: "purple", paddingLeft: "5px" }}>
                After 6 Months
              </strong>
            </a>
          </li>
          <li
            className=  {`tabs-list-item2 ${
              activeTab === 1 ? "tabs__item--active" : ""
            }`}
            onClick={() => handleTabClick(1)}
          >
            <a href="#" className="tabs-list-link nonactive">
              <strong>After one year</strong>
            </a>
          </li>
        </ul>
        <div className="tabs-content">
          <div className="tabs-content-item">
            <div className="tabs__content">
              {activeTab === 0 && (
                <div>
                  <table style={{width:"100%"}}>
                    <tbody>
                      <tr>
                        <td style={{paddingRight:"287px"}}>Alfreds Futterkiste</td>
                        <td style={{paddingLeft:"295px"}}>$3000</td>
                      </tr>
                      <tr>
                        <td style={{paddingRight:"287px", textAlign:"left"}}>portfolic</td>
                        <td style={{paddingleft:"295px", textAlign:"end", color:"rgb(153, 228, 40)"}}>+500</td>
                      </tr>
                      <tr>
                        <td style={{paddingRight:"236px", textAlign:"left"}}>Monthly Cost & Charges</td>
                        <td style={{paddingleft:"295px", textAlign:"end"}}>63%</td>
                      </tr>
                      <tr>
                        <td style={{paddingRight:"236px", textAlign:"left"}}>Total Cost & Charges</td>
                        <td style={{paddingleft:"295px", textAlign:"end"}}>15%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
              {activeTab === 1 && <div>Content of Tab 3</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
