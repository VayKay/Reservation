-- const { Pool } = require('pg')


-- const pool = new Pool({
--   host: 'localhost',
--   user: 'marvinho',
--   database: 'reservations',
--   password: ''
-- })

-- const Listing = CREATE TABLE Listing (
--     id INTEGER,
--     max_guests INTEGER,
--     cleaning_fee INTEGER,
--     local_tax decimal(10,2),
--     min_stay INTEGER,
--     base_rate decimal(10,2),
--     extra_guest_cap INTEGER,
--     extra_guest_charge INTEGER,
--     currency Varchar(25),
--     star_rating decimal(10,1),
--     review_count INTEGER,
--     roomsReserved INTEGER,
--     sub_listings INTEGER [],
--     has_children Boolean,
--     PRIMARY KEY (id)
-- )


-- const Reserved = CREATE TABLE Reserved (
--     id INTEGER,
--     listing_id INTEGER,
--     dates DATE,
--     PRIMARY KEY (id),
--     FOREIGN KEY (listing_id) REFERENCES Listing(id),
--     INDEX ('listing_id', 'dates')
-- )

-- const Custom_rates = CREATE TABLE Custom_rates (
--     id INTEGER,
--     listing_id INTEGER,
--     dates DATE,
--     PRIMARY KEY (id),
--     price decimal(10,2),
--     FOREIGN KEY (listing_id) REFERENCES Listing(id),
--     INDEX ('listing_id', 'dates')
-- )

-- client.query(Listing, (err, res) => {
--   if (err) {
--     console.log(err.stack)
--   } else {
--     console.log('Saved Listing Table')
--   }
-- })

-- client.query(Reserved, (err, res) => {
--   if (err) {
--     console.log(err.stack)
--   } else {
--     console.log('Saved Reserved Table')
--   }
-- })

-- client.query(Custom_rates, (err, res) => {
--   if (err) {
--     console.log(err.stack)
--   } else {
--     console.log('Saved Custom Rates')
--   }
-- })