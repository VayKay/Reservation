const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const newRelic = require('newrelic');
const pool = require('./db/postgres.js');

const app = express();
const port = 3006;

app.use(bodyParser());
app.use('/:listingID', express.static(path.resolve(__dirname, '../public/dist')));

// Get listing information
app.get('/listing/:listingID', (req, res) => {
  const listingQuery = `Select * from listing where id  = ${req.params.listingID}`;
  pool.query(listingQuery, (err, { rows }) => {
    if (err) {
      console.log(err.stack);
      res.sendStatus(404);
    } else {
      res.send(rows);
    }
  });
});

app.post('/listing/:listingId/reservation', (req, res) => {
  const query = 'SELECT * FROM reservations ORDER BY ID DESC LIMIT 1;';
  pool.query(query, (err, lastReservationInTable) => {
    if (err) {
      console.log(err.stack);
      res.sendStatus(500);
    } else {
      const nextId = lastReservationInTable.rows[0].id + 1;
      const insertReservation = `
        INSERT INTO reservations(id, listing_id, dates)
          VALUES(
            ${nextId},
            ${req.params.listingId},
            ${req.body.date}
          )
      `;
      pool.query(insertReservation, (error) => {
        if (error) {
          console.log(error.stack);
          res.sendStatus(500);
        } else {
          res.sendStatus(201);
        }
      });
    }
  });
});

// 10% discount for a listing!
app.put('/listing/:listingID/base_price', (req, res) => {
  const updateRes = `
    UPDATE listing SET base_rate = base_rate * .9
      WHERE id = ${req.params.listingID};
  `;
  pool.query(updateRes, (err) => {
    if (err) {
      console.log(err.stack);
      res.sendStatus(404);
    } else {
      res.sendStatus(200);
    }
  });
});

// Delete a reservation
app.delete('/reservation/:reservationID', (req, res) => {
  const deleteRes = `
    DELETE from reservations 
      WHERE id = ${req.params.reservationID};
  `;
  pool.query(deleteRes, (err) => {
    if (err) {
      console.log(err.stack);
      res.sendStatus(404);
    } else {
      res.sendStatus(200);
    }
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
