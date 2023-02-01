import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Header from '../components/Header/Header'
import Sidebar from '../components/sidebar/Sidebar'

const Layout = () => {
  return (
    <div className='layout' style={{overflow : "hidden"}}>
      <Row>
        <Col lg={3} xs={12}>
        <Sidebar/></Col>
        <Col ><Header/></Col></Row>
    </div>
  )
}

export default Layout
