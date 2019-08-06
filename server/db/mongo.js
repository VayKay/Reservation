// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/reservations', {useNewUrlParser: true});
// const faker = require('faker');
// const fs = require('fs');
// const path = require('path');
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
// });

// const listingSchema = new mongoose.Schema({
//     listing_id: Number,
//     max_guests: Number,
//     cleaning_fee: Number,
//     local_tax: mongoose.Decimal128,
//     min_stay: Number,
//     base_rate: mongoose.Decimal128,
//     extra_guest_cap: Number,
//     extra_guest_charge: Number,
//     currency: String,
//     star_rating: mongoose.Decimal128,
//     review_count: Number,
//     roomsReserved: Number,
//     sub_listings: [Number],
//     has_children: Boolean
// })

// var listing = mongoose.model('listing', listingSchema);


// function mongoListing() {
//   let i = 10000000;
//   let listingMongo = fs.createWriteStream(path.resolve(__dirname, './listingMon.csv'));
//   write()
//   function write() {
//     let ok = true;
//     do {
//       let max_guests = faker.random.number({min: 2, max: 20});
//       let cleaning_fee = faker.finance.amount(10,100,0);
//       let local_tax = .085
//       let min_stay = faker.random.number({min: 1, max: 10});
//       let base_rate = faker.finance.amount(50,1000,0);
//       let extra_guest_cap = faker.random.number({min: 2, max: 4});
//       let extra_guest_charge = faker.finance.amount(10,100,0);
//       let star_rating = faker.finance.amount(1.01,5.00,2);
//       let review_count = faker.random.number({min: 24, max: 1000});
//       let currency = 'USD';
//       let has_children, roomsReserved;
//       let sub_listings = [];
//       if (i < 200) {
//         has_children = true;
//         roomsReserved = i.toString();
//         for (let j = 0; j < Math.floor(Math.random() * 6); j++) {
//           sub_listings.push(Math.floor(200 + Math.random() * i));
//         }
//       }
//       var Listing = new listing({ 
//         listing_id: `${i}`,
//         max_guests: max_guests,
//         cleaning_fee: cleaning_fee,
//         local_tax: .085,
//         min_stay: min_stay,
//         base_rate: base_rate,
//         extra_guest_cap: extra_guest_cap,
//         extra_guest_charge: extra_guest_charge,
//         currency: currency,
//         star_rating: star_rating,
//         review_count: review_count,
//         roomsReserved: roomsReserved,
//         sub_listings: sub_listings,
//         has_children: has_children
//       });

//       Listing.save(function (err) {
//         if (err) return console.error(err);
//       });

//       i--;
//       data = `${i}| ${max_guests}| ${cleaning_fee}| ${local_tax}| ${min_stay}| ${base_rate}| ${extra_guest_cap}| ${extra_guest_charge}| ${currency}| ${star_rating}| ${review_count}| ${roomsReserved || 0}| ${sub_listings}|${has_children || false}\n`
//       ok = listingMongo.write(data, 'utf8');
//     } while (i > 0 && ok);
//     if (i > 0) {
//       listingMongo.once('drain', write);
//     }
//   }
// }

// mongoListing()
// const reserved = new Schema({
//     listing_id: NUMBER,
//     dates: DATE
// })



// const custom_rates = new Schema({
//     id: NUMBER,
//     listing_id: NUMBER,
//     dates: DATE,
//     price: Decimal128,
// })