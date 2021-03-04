import React from 'react'
import {Card} from "react-bootstrap";

function Salary (props) {
  const {salary} = props
  return (
    <Card className="my-1 py-1 rounded text-center">
      <a href={`/salary/${salary.id}`}>
        <Card.Body>
          <Card.Title>{salary.name}</Card.Title>
          <Card.Text><i className={salary.icon} style={{"fontSize": "4rem"}}> </i></Card.Text>
          <Card.Text>${salary.amount}</Card.Text>
        </Card.Body>
      </a>
    </Card>
  )
}

export default Salary