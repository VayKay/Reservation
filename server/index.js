const newRelic = require('newrelic');
const express = require('express');
const path = require('path');
const app = express();
const port = 3006;
const bodyParser = require('body-parser');
const pool = require('./db/postgres.js');


app.use(bodyParser());
app.use('/:listingID', express.static(path.resolve(__dirname, '../public/dist')));

app.get('/listing/:listingID', (req, res) => {
  const listingQuery = `Select * from listing where id  = ${req.params.listingID}`
  pool.query(listingQuery, (err, results) => {
    if (err) {
      console.log(err.stack)
    } else {
      res.send(results.rows)
    }
  })
});


let count = 100000015
app.post('/listing/post', (req, res) => {
  let postReserve = `INSERT INTO reserved(id, listing_id, dates) VALUES(${count}, ${Math.floor((Math.random() * 10000000) + 1)}, '2020-02-03' )`
  pool.query(postReserve, (err, results) => {
    if (err) {
      console.log(err.stack)
    } else {
      count++
      res.sendStatus(200);
    }
  })
})

//10% discount for a reservation!
app.put('/listing/update', (req, res) => {
  let updateRes = `UPDATE listing SET base_rate = base_rate * 0.9 WHERE id = 3`
  pool.query(updateRes, (err, results) => {
    if (err) {
      console.log(err.stack)
    } else {
      res.sendStatus(200);
    }
  })
})




// app.get('/reserved/month/', (req, res) => {
 
// });

// app.get('/custom/month/', (req, res) => {
  
// });

app.listen(port, () => console.log(`Example app listening on port ${port}!`));