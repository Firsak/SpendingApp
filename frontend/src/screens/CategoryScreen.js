import React, {useEffect, useState} from 'react'
import {Link} from "react-router-dom";
import {Col, Row, ListGroup, Button, Card, Table} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {getCategoryDetails, deleteCategory} from "../actions/categoryActions";
import Loader from "../components/Loader";
import Message from "../components/Message";
import {CATEGORY_DELETE_RESET} from "../constants/categoryConstants";

// import data from "../testData"

function CategoryScreen (props) {
  const {match, history} = props
  //const category = data.find((c) => c.id === Number(match.params.id))

  const dispatch = useDispatch()

  const categoryDetails = useSelector(state => state.categoryDetails)
  const {category, error, loading} = categoryDetails

  const categoryDelete = useSelector(state => state.categoryDelete)
  const {error: errorDelete, loading: loadingDelete, success: successDelete} = categoryDelete

  useEffect(() => {
    dispatch(getCategoryDetails(match.params.id))
  }, [dispatch, match])

  useEffect(() => {
    if (successDelete) {
      dispatch({type: CATEGORY_DELETE_RESET})
      history.push('/')
    }
  }, [successDelete])

  const deleteCategoryHandler = (id) =>{
    if (window.confirm("Are you sure you want to delete this category?")) {
      dispatch(deleteCategory(id))
    }
  }

  return (
    <div>
      <Link to="/" className="btn btn-light my-3">Go Back</Link>
      {loading ? <Loader />
        : error ? <Message variant="danger">{error}</Message>
          :
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
                        <Button className="btn btn-block" onClick={() => history.push(`/categoryupdate/${category.id}`)} >Edit Category </Button>
                      </ListGroup.Item>

                      <ListGroup.Item>
                        <Button className="btn btn-block" variant="danger" onClick={() => deleteCategoryHandler(category.id)}>Delete Category </Button>
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
                  <ListGroup.Item key={transaction.id}>
                    <Row>
                      <Col>
                        {category.id === transaction.fromId ?
                          <span>
                            {transaction.fromName}
                          </span> :
                            transaction.fromId === -1 ?
                              <span>
                                {transaction.fromName}
                              </span> :
                                <Link to={`/category/${transaction.fromId}`}>
                                  {transaction.fromName}
                                </Link>
                        }
                        <i className="bi bi-arrow-right px-3"></i>
                        {category.id === transaction.toId ?
                          <span>
                            {transaction.toName}
                          </span> :
                          transaction.toId === -1 ?
                            <span>
                              {transaction.toName}
                            </span> :
                              <Link to={`/category/${transaction.toId}`}>
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
      }
    </div>
  )
}

export default CategoryScreen