import React from 'react'
import {Row, Col} from "react-bootstrap";
import {Link} from "react-router-dom";
import Category from "../components/Category";

import data from "../testData"

function HomeScreen (props) {
  console.log(data)
  return (
    <div>
      <Row className="py-3">
        <Col>
          <h1>Salaries</h1>
          <Row>
            {data.map(category => { return category.type === "salary" && (
              <Col key={category.id} sm={6} md={4} lg={3} xl={2}>
                <Category category={category} />
              </Col>
            )})}
          </Row>
        </Col>
      </Row>

      <Row className="py-3">
        <Col>
          <h1>Wallets</h1>
          <Row>
            {data.map(category => { return category.type === "wallet" && (
              <Col key={category.id} sm={6} md={4} lg={3} xl={2}>
                <Category category={category} />
              </Col>
            )})}
          </Row>
        </Col>
      </Row>

      <Row className="py-3">
        <Col>
          <h1>Categories</h1>
          <Row>
            {data.map(category => { return category.type === "spending" && (
              <Col key={category.id} sm={6} md={4} lg={3} xl={2}>
                <Category category={category} />
              </Col>
            )})}
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default HomeScreen