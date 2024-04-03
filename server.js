const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = 3000;

// Setup MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // your MySQL username
  password: 'password', // your MySQL password
  database: 'custom_bank_cards_db', // your database name
});

db.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

// Middleware for parsing JSON requests
app.use(bodyParser.json());

// Route to handle placing an order
app.post('/place-order', (req, res) => {
  const { items, address } = req.body;

  // Assuming you have a table named 'orders' with columns 'items' and 'address'
  const insertQuery = `INSERT INTO orders (items, address) VALUES (?, ?)`;

  db.query(insertQuery, [JSON.stringify(items), address], (err, result) => {
    if (err) {
      console.error('Error inserting order into database:', err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }

    console.log('Order placed:', result);
    res.status(200).json({ message: 'Order placed successfully!' });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
