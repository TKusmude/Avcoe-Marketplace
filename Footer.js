import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './footer.css'


const Footer = () => {
  return (
    <>
        <div className="footer">
          <br/>
        <Container>
      <Row>
        <Col xs={6} lg={3} >
          <h5>Popular</h5>
          <p>Kolkatta<br/>Chennai<br/>Mumbai<br/>Pune</p>
        </Col>
        <Col xs={6} lg={3} >
        <h5>Make Money with Us</h5>
        </Col>
        <Col xs={6} lg={3} >
        <h5>About Us</h5>
        </Col>
        <Col xs={6} lg={3} >
        <h5>Connect with Us</h5>
        <p>facebook<br/>Instagram<br/>Twitter</p>
        </Col>
      </Row>
    </Container>
    <br/><br/><br/>
            <div className="footer-down">
            <p><i>Designed By Team Mrutyunjay|copyright@2024</i></p>
            </div>
        </div>
    </>
  )
}

export default Footer
