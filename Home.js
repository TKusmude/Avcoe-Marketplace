import React from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import SplitPane from 'react-split-pane';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

import './home.css'



const Home = () => {
  return (
    <>
      <Container>
      <Row>
        <Col sm={3} lg={2} className="aside">
        <Table className="table1">
      <thead>
        <tr>
          <th>Categories</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Books</td>
        </tr>
        <tr>
          <td>Cosmetics</td>
        </tr>
        <tr>
          <td>Electronics Components</td>
        </tr>
        <tr>
          <td>Other Equipments</td>
        </tr>
      </tbody>
    </Table>
        </Col>
        <Col xl={15} lg={10} className="content">
          <br/>
          <h1>Products</h1>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default Home
