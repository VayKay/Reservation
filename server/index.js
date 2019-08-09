const newRelic = require('newrelic');
const express = require('express');
const path = require('path');
const app = express();
const port = 3006;
const bodyParser = require('body-parser');
const pool = require('./db/postgres.js');

// NEVER put HTTP verb in endpoint path
// Refactor any long query strings to be on multiple lines (requires backticks)
// API routes must act on data in your

app.use(bodyParser());
app.use('/:listingID', express.static(path.resolve(__dirname, '../public/dist')));

//Get listing information
app.get('/listing/:listingID', (req, res) => {
  const listingQuery = `Select * from listing where id  = ${req.params.listingID}`
  pool.query(listingQuery, (err, results) => {
    if (err) {
      console.log(err.stack);
    } else {
      res.send(results.rows);
    }
  });
});

//Reserve a listing
let count = 10000000
app.post('/listing/post', (req, res) => {
  let postReserve = `
    INSERT INTO reserved(id, listing_id, dates)
      VALUES(
        ${count},
        ${Math.floor((Math.random() * 10000000) + 1)},
        '2020-02-03'
      )
  `;
  pool.query(postReserve, (err) => {
    if (err) {
      console.log(err.stack);
    } else {
      count++
      res.sendStatus(200);
    }
  });
})

//10% discount for a reservation!
app.put('/listing/update', (req, res) => {
  let updateRes = `UPDATE listing SET base_rate = base_rate * .9 WHERE id = ${Math.floor((Math.random() * 10000000) + 1)};`
  pool.query(updateRes, (err) => {
    if (err) {
      console.log(err.stack)
    } else {
      res.sendStatus(200);
    }
  })
})

//Delete a reservation
app.delete('/listing/delete', (req, res) => {
  let deleteRes = `DELETE from reserved where id = ${Math.floor((Math.random() * 10000000) + 1)};`
  pool.query(deleteRes, (err) => {
    if (err) {
      console.log(err.stack)
    } else {
      res.sendStatus(200);
    }
  })
})

// get reserved month information
app.get('/reserved/month/', (req, res) => {
  let getReserveMonth = `Select * from reserved where id = 1;`
  pool.query(getReserveMonth, (err, results) => {
    if (err) {
      console.log(err.stack)
    } else {
      res.send(results.rows);
    }
  })
});

//get 
app.get('/custom/month/', (req, res) => {
  let getCustomMonth = `Select * from custom_rates where id = 1;`
  pool.query(getCustomMonth, (err, results) => {
    if (err) {
      console.log(err.stack)
    } else {
      res.send(results.rows);
    }
  })
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));