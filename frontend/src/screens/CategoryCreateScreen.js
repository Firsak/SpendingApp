import React, {useEffect, useState} from 'react'
import {Form, Button, Row, Col, Dropdown} from "react-bootstrap";
import {Link} from "react-router-dom";
import Loader from "../components/Loader";
import Message from "../components/Message";
import FormContainer from "../components/FormContainer";
import {useDispatch, useSelector} from "react-redux";
import {createCategory} from "../actions/categoryActions";

import {iconslist} from "../iconsList";
import {CATEGORY_CREATE_RESET} from "../constants/categoryConstants";

function CategoryCreateScreen (props) {
  const {match, location, history} = props

  const dispatch = useDispatch()

  const [filterIcon, setFilterIcon] = useState('')

  const [name, setName] = useState('')
  const [amount, setAmount] = useState(0)
  const [icon, setIcon] = useState('bi bi-file')
  const [type, setType] = useState('DEFAULT')
  const [description, setDescription] = useState('')

  const categoryCreate = useSelector(state => state.categoryCreate)
  const {error: errorCreate, loading: loadingCreate, success: successCreate} = categoryCreate

  iconslist.sort(function(a, b){
    var stringA=a.string.toLowerCase(), stringB=b.string.toLowerCase()
    if (stringA < stringB) //sort string ascending
      return -1
    if (stringA > stringB)
      return 1
    return 0 //default return value (no sorting)
  })

  useEffect(() => {
    if (successCreate) {
      dispatch({type: CATEGORY_CREATE_RESET})
      history.push('/')
    }
  }, successCreate)

  const submitHandler = (e) => {
    e.preventDefault()

    if (type === "DEFAULT") {
      window.alert('Select type')
    }
    else {
      dispatch(createCategory({
        name,
        amount,
        icon,
        type,
        description
      }))
    }
  }

  const setAmountHandler = (e) => {
    e.preventDefault()
    setAmount(Number(e.target.value))
    e.target.value = amount
  }



  return (
    <div>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>

      {loadingCreate ? <Loader/>
        : errorCreate ? <Message variant="danger">{errorCreate}</Message>
          :
          <FormContainer>
            <h1>Create Category</h1>

            <Form onSubmit={submitHandler}>

              <Form.Group as={Row} controlId="name">
                <Form.Label column lg={3}>Name</Form.Label>
                <Col lg={9}>
                  <Form.Control
                    type="name"
                    placeholder="Enter Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  >
                  </Form.Control>
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="icon">
                <Form.Label column lg={3}>Icon</Form.Label>
                <Col lg={9}>
                  <div style={{textAlign: 'center'}}><i className={icon} style={{"fontSize": "2rem"}}> </i></div>

                  <Dropdown>
                    <Dropdown.Toggle variant="info" className="btn-block" id="dropdown-icons">
                      Select icon
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Form.Control
                        autoFocus
                        placeholder="Type to filter..."
                        value={filterIcon}
                        onChange={(e) => setFilterIcon(e.target.value)}
                      ></Form.Control>
                      {iconslist.map(iconElement => !filterIcon ? (
                          <Dropdown.Item key={iconElement.value} onSelect={(e) => setIcon(iconElement.value)}
                                         eventKey={iconElement.value}><i
                            className={iconElement.value}> </i> {iconElement.string}</Dropdown.Item>
                        ) :
                        iconElement.string.toLowerCase().includes(filterIcon.toLowerCase()) &&
                        <Dropdown.Item key={iconElement.value} onSelect={(e) => setIcon(iconElement.value)}
                                       eventKey={iconElement.value}><i
                          className={iconElement.value}> </i> {iconElement.string}</Dropdown.Item>
                      )}
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="amount">
                <Form.Label column lg={3}>Amount</Form.Label>
                <Col lg={9}>
                  <Form.Control
                    type="number"
                    placeholder="Enter amount"
                    value={amount}
                    onChange={(e) => setAmountHandler(e)}
                  >
                  </Form.Control>
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="type">
                <Form.Label column lg={3}>Type</Form.Label>
                <Col lg={9}>
                  <Form.Control
                    as="select"
                    placeholder="Select Type"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                  >
                    <option value="DEFAULT" disabled>Select type</option>
                    <option value="salary">salary</option>
                    <option value="wallet">wallet</option>
                    <option value="spending">spending</option>
                  </Form.Control>
                </Col>
              </Form.Group>


              <Form.Group as={Row} controlId="description">
                <Form.Label column lg={3}>Description</Form.Label>
                <Col lg={9}>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Enter Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  >
                  </Form.Control>
                </Col>
              </Form.Group>

              <Button type="submit" variant="primary">Create</Button>

            </Form>
          </FormContainer>
      }
    </div>
  )
}

export default CategoryCreateScreen