const data = [
    {
      "name": "Work",
      "type": "salary",
      "icon": "bi bi-building",
      "description": "Work work work....",
      "id": 1,
      "amount": 1560,
      "transactions": [
        {
          "id": 1,
          "fromId": 1,
          "toId": 2,
          "amount": 1000,
          "description": "On main purposes",
          "fromName": "Work",
          "toName": "Visa",
        }
      ]
    },
    {
      "name": "Visa",
      "type": "wallet",
      "icon": "bi bi-credit-card",
      "description": "All the money",
      "id": 2,
      "amount": 1200,
      "transactions": [
        {
          "id": 1,
          "from": 1,
          "to": 2,
          "amount": 1000,
          "description": "On main purposes",
          "fromName": "Work",
          "toName": "Visa",
        }
      ]
    },
    {
      "name": "MasterCard",
      "type": "wallet",
      "icon": "bi bi-credit-card-fill",
      "description": "Same savings",
      "id": 3,
      "amount": 350,
    },
    {
      "name": "Products",
      "type": "spending",
      "icon": "bi bi-basket2",
      "description": "Yummy",
      "id": 4,
      "amount": 450,
    },
    {
      "name": "House",
      "type": "spending",
      "icon": "bi bi-house",
      "description": "Home sweet home",
      "id": 5,
      "amount": 1050,
    },
]


export default data