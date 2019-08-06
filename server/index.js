const newRelic = require('newrelic');
const express = require('express');
const path = require('path');
const app = express();
const port = 3006;
const bodyParser = require('body-parser');
const pool = require('./db/postgres.js');


app.use(bodyParser());
app.use('/:listingID', express.static(path.resolve(__dirname, '../public/dist')));

// app.get('/listing/:listingID', (req, res) => {
//   const listingQuery = `Select * from listing where id  = ${req.params.listingID}`
//   pool.query(listingQuery, (err, results) => {
//     if (err) {
//       console.log(err.stack)
//     } else {
//       res.send(results.rows)
//     }
//   })
// });

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

// `INSERT INTO reserved(listing_id, dates) VALUES(Math.floor((Math.random() * 10000000) + 1), 2020-01-03)`


// app.get('/reserved/month/', (req, res) => {
 
// });

// app.get('/custom/month/', (req, res) => {
  
// });

app.listen(port, () => console.log(`Example app listening on port ${port}!`));