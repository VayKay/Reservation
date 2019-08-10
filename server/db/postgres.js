const { Pool } = require('pg')


const pool = new Pool({
  host: 'localhost',
  user: 'marvinho',
  database: 'reservations',
  password: ''
})

const Listing = "CREATE TABLE listing ( id INTEGER PRIMARY KEY, max_guests INTEGER, cleaning_fee INTEGER, local_tax decimal(10,2), min_stay INTEGER, base_rate decimal(10,2), extra_guest_cap INTEGER, extra_guest_charge INTEGER, currency Varchar(25), star_rating decimal(10,1), review_count INTEGER, roomsReserved INTEGER NULL, sub_listings INTEGER[] NULL, has_children Boolean)"

const Reservations = "CREATE TABLE reservations ( id INTEGER PRIMARY KEY, listing_id INTEGER, dates DATE, FOREIGN KEY (listing_id) REFERENCES Listing(id) )"

const Custom_rates = "CREATE TABLE custom_rates ( id INTEGER PRIMARY KEY, listing_id INTEGER, dates DATE, price decimal(10,2), FOREIGN KEY (listing_id) REFERENCES Listing(id))"



// COPY table_name FROM '/path_to_csv_file.csv' DELIMITERS ',' CSV;

// pool.query(`COPY Custom_rates FROM '/Users/marvinho/Reservation/server/db/custom.csv' DELIMITERS '|' CSV;`, (err, res) => {
//   if (err) {
//     console.log(err.stack)
//   } else {
//     console.log('Saved Custom Rates')
//   }
// })

// pool.query(`COPY Listing FROM '/Users/marvinho/Reservation/server/db/listing.csv' DELIMITERS '|' CSV;`, (err, res) => {
//   if (err) {
//     console.log(err.stack)
//   } else {
//     console.log('Saved listings')
//   }
// })

// pool.query(`COPY reservations FROM '/Users/marvinho/Reservation/server/db/reservations.csv' DELIMITERS '|' CSV;`, (err, res) => {
//   if (err) {
//     console.log(err.stack)
//   } else {
//     console.log('Saved reservations Dates')
//   }
// })

module.exports = pool;