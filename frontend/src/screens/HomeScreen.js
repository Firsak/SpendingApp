import React from 'react'
import {Row, Col} from "react-bootstrap";
import Salary from "../components/Salary";
import Wallet from "../components/Wallet";
import Category from "../components/Category";

import data from "../testData"

function HomeScreen (props) {
  console.log(data)
  const {salaries, wallets, categories} = data
  return (
    <div>
      <Row className="py-3">
        <Col>
          <h1>Salaries</h1>
          <Row>
            {salaries.map(salary => (
              <Col key={(salary.id * 10) + 1} sm={6} md={4} lg={3} xl={2}>
                <Salary salary={salary} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>

      <Row className="py-3">
        <Col>
          <h1>Wallets</h1>
          <Row>
            {wallets.map(wallet => (
              <Col key={(wallet.id * 10) + 2} sm={6} md={4} lg={3} xl={2}>
                <Wallet wallet={wallet} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>

      <Row className="py-3">
        <Col>
          <h1>Categories</h1>
          <Row>
            {categories.map(category => (
              <Col key={(category.id * 10) + 3} sm={6} md={4} lg={3} xl={2}>
                <Category category={category} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default HomeScreen