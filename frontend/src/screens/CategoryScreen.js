import React, {useState} from 'react'
import {Link} from "react-router-dom";
import {Col, Row, ListGroup, Button, Card, Table} from "react-bootstrap";

// import data from "../testData"

function CategoryScreen (props) {
  const {match} = props
  //const category = data.find((c) => c.id === Number(match.params.id))

  const [category, setCategory] = useState({})

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

          <ListGroup>
            {category.transactions && category.transactions.map(transaction => (
              <ListGroup.Item>
                <Row>
                  <Col>
                    {category.id === transaction.from ?
                      <span>
                        {transaction.fromName}
                      </span> :
                      <Link to={`/category/${transaction.from}`}>
                        {transaction.fromName}
                      </Link>
                    }
                    <i className="bi bi-arrow-right px-3"></i>
                    {category.id === transaction.to ?
                      <span>
                        {transaction.toName}
                      </span> :
                      <Link to={`/category/${transaction.to}`}>
                        {transaction.toName}
                      </Link>
                    }
                  </Col>

                  <Col>
                    Amount: ${transaction.amount}
                  </Col>

                  <Col>
                    <Row>
                      <Button className="btn btn-sm px-2 mx-2" variant="primary">Edit</Button>
                      <Button className="btn btn-sm px-2 mx-2" variant="danger" >Delete</Button>
                    </Row>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </div>
  )
}

export default CategoryScreen