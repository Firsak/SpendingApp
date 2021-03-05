import React from 'react'
import {Card} from "react-bootstrap";
import {Link} from "react-router-dom";

function Spending (props) {
  const {category} = props
  return (
    <Card className="my-1 py-1 rounded text-center">
      <Link to={`/category/${category.id}`}>
        <Card.Body>
          <Card.Title>{category.name}</Card.Title>
          <Card.Text><i className={category.icon} style={{"fontSize": "4rem"}}> </i></Card.Text>
          <Card.Text>${category.amount}</Card.Text>
        </Card.Body>
      </Link>
    </Card>
  )
}

export default Spending