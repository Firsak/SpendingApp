import React from 'react'
import {Link} from "react-router-dom";
import {Col, Row, ListGroup, Button, Card, Table} from "react-bootstrap";

import data from "../testData"

function CategoryScreen (props) {
  const {match} = props
  const category = data.find((c) => c.id === Number(match.params.id))

  return (
    <div>
      <Link to="/" className="btn btn-light my-3">Go Back</Link>
      <Row>
        <Col md={4}>
          <Row>
            <Col>
              <Card className="my-1 py-1 rounded text-center">
                <Card.Body>
                  <Card.Title>{category.name}</Card.Title>
                  <Card.Text><i className={category.icon} style={{"fontSize": "4rem"}}> </i></Card.Text>
                  <Card.Text>${category.amount}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col>
              <Card>
                <ListGroup variant="flush">

                  <ListGroup.Item>
                    <Button className="btn btn-block" >Add Transaction</Button>
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <Button className="btn btn-block" >Edit Category </Button>
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <Button className="btn btn-block" >Delete Category </Button>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          </Row>
        </Col>

        <Col md={8}>
          <h3>Transactions</h3>

          <Table striped bordered hover responsive className="table-sm">
            <thead>
              <tr>
                <th>FROM</th>
                <th>TO</th>
                <th>AMOUNT</th>
                <th> </th>
                <th> </th>
              </tr>
            </thead>

            <tbody>
              {category.transactions && category.transactions.map(transaction => (
                <tr key={transaction.id}>
                  <th>
                    <Link to={`/category/${transaction.from}`}>
                    {data.find((c) => c.id === transaction.from).name}
                    </Link>
                  </th>
                  <th>
                    <Link to={`/category/${transaction.to}`}>
                      {data.find((c) => c.id === transaction.to).name}
                    </Link>
                  </th>
                  <th>{transaction.amount}</th>
                  <th>
                    <Button className="btn btn-sm" variant="primary">Edit</Button>
                  </th>
                  <th>
                    <Button className="btn btn-sm" variant="danger" >Delete</Button>
                  </th>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </div>
  )
}

export default CategoryScreen