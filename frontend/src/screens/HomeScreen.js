import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {Row, Col, Button} from "react-bootstrap";
import Category from "../components/Category";
import {listCategories} from "../actions/categoryActions";
import Loader from "../components/Loader";
import Message from "../components/Message";
import {CATEGORY_DELETE_RESET, CATEGORY_CREATE_RESET} from "../constants/categoryConstants";

// import data from "../testData"

function HomeScreen (props) {
  const {match, history} = props

  const dispatch = useDispatch()
  const categoryList = useSelector(state => state.categoryList)
  const {categories, error, loading} = categoryList

  const categoryDelete = useSelector(state => state.categoryDelete)
  const {error: errorDelete, loading: loadingDelete, success: successDelete} = categoryDelete

  useEffect(() => {
    dispatch(listCategories())
  }, [dispatch, history])

  return (
    <div>
      {loading ? <Loader />
        : error ? <Message variant="danger">{error}</Message>
          :
            <div>
              <Row className="py-3">
                <Button className="btn btn-block" onClick={() => history.push('/createcategory')}>Create Category</Button>
                <Col>
                  <h1>Salaries</h1>
                  <Row>
                    {categories.map(category => { return category.type === "salary" && (
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
                    {categories.map(category => { return category.type === "wallet" && (
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
                    {categories.map(category => { return category.type === "spending" && (
                      <Col key={category.id} sm={6} md={4} lg={3} xl={2}>
                        <Category category={category} />
                      </Col>
                    )})}
                  </Row>
                </Col>
              </Row>
            </div>
      }
    </div>
  )
}

export default HomeScreen