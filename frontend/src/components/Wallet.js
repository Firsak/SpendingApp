import React from 'react'
import {Card} from "react-bootstrap";

function Wallet (props) {
  const {wallet} = props
  return (
    <Card className="my-1 py-1 rounded text-center">
      <a href={`/wallet/${wallet.id}`}>
        <Card.Body>
          <Card.Title>{wallet.name}</Card.Title>
          <Card.Text><i className={wallet.icon} style={{"fontSize": "4rem"}}> </i></Card.Text>
          <Card.Text>${wallet.amount}</Card.Text>
        </Card.Body>
      </a>
    </Card>
  )
}

export default Wallet