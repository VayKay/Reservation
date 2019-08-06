const faker = require('faker');
var fs = require('fs');
const path = require('path');


<<<<<<< HEAD
function seedListing() {
  let i = 10000000;
=======


function seedListing() {
  let i = 1000000;
>>>>>>> master
  let writer = fs.createWriteStream(path.resolve(__dirname, './listing.csv'));
  write()
  function write() {
    let ok = true;
    do {
      let max_guests = faker.random.number({min: 2, max: 20});
      let cleaning_fee = faker.finance.amount(10,100,0);
      let local_tax = .085
      let min_stay = faker.random.number({min: 1, max: 10});
      let base_rate = faker.finance.amount(50,1000,0);
      let extra_guest_cap = faker.random.number({min: 2, max: 4});
      let extra_guest_charge = faker.finance.amount(10,100,0);
      let star_rating = faker.finance.amount(1.01,5.00,2);
      let review_count = faker.random.number({min: 24, max: 1000});
      let currency = 'USD';
<<<<<<< HEAD
      let has_children, roomsReserved;
      let sub_listings = [];
      if (i < 200) {
        has_children = true;
        roomsReserved = i.toString();
=======
      let has_children, roomsReserved, sub_listings;

      i--;
      if (i === 0) {
      } else if (i < 200) {
        has_children = true;
        roomsReserved = i.toString();
        sub_listings = [];
>>>>>>> master
        for (let j = 0; j < Math.floor(Math.random() * 6); j++) {
          sub_listings.push(Math.floor(200 + Math.random() * i));
        }
      }
<<<<<<< HEAD
      let string = JSON.stringify(sub_listings)
      let newString = `"{${string.slice(1, string.length -1)}}"`
      i--;
      data = `${i}| ${max_guests}| ${cleaning_fee}| ${local_tax}| ${min_stay}| ${base_rate}| ${extra_guest_cap}| ${extra_guest_charge}| ${currency}| ${star_rating}| ${review_count}| ${roomsReserved || 0}| ${newString}|${has_children || false}\n`
=======
      data = `${i}| ${max_guests}| ${cleaning_fee}| ${local_tax}| ${min_stay}| ${base_rate}| ${extra_guest_cap}| ${extra_guest_charge}| ${currency}| ${star_rating}| ${review_count}| ${roomsReserved || null}| ${sub_listings || null}|${has_children || null}\n`
>>>>>>> master
      ok = writer.write(data, 'utf8');
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
<<<<<<< HEAD
  }
}




function seedReserves() {
  let i = 10000000;
  let listing_count = 1;
  let reservedWriter = fs.createWriteStream(path.resolve(__dirname, './reserved.csv'));
  write()
  function write() {
    let ok = true;
    do {
      let randomNum = function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;  
      }
      let stringReservedDates = JSON.stringify((faker.date.between('2019-07-04', '2021-07-30')));
      let ReservedDates = stringReservedDates.slice(1, 11);
      let listing_id = function () {
        if (listing_count < 10000000) {
          return listing_count  
        } else {
          return listing_count = randomNum(2,3456789);
        }
      }
      listing_count = listing_count + randomNum(2,2000);
      i--;
      if (i === 0) {
        data = `${i}| ${listing_id()}| ${ReservedDates}\n`
        reservedWriter.write(data, 'utf8');
      } else {
        data = `${i}| ${listing_id()}| ${ReservedDates}\n`
        ok = reservedWriter.write(data, 'utf8');
      }
    } while (i > 0 && ok);
    if (i > 0) {
      reservedWriter.once('drain', write);
    }
  }
}

=======
  }
}



function seedReserves() {
  let i = 10000000;
  let listing_count = 0;
  let reservedWriter = fs.createWriteStream(path.resolve(__dirname, './reserved.csv'));
  write()
  function write() {
    let ok = true;
    do {
      let ReservedDates = faker.date.between('2019-07-04', '2021-07-30');

      let listing_id = function () {
        if (listing_count < 10000) {
          return listing_count  
        } else {
          listing_count = 1;
        }
      }
      listing_count++;
      i--;
      if (i === 0) {
        console.log('Last time!');
        data = `${i}, ${listing_id()}, ${ReservedDates},\n`
        reservedWriter.write(data, 'utf8');
      } else {
        data = `${i}, ${listing_id()}, ${ReservedDates}\n`
        ok = reservedWriter.write(data, 'utf8');
      }
    } while (i > 0 && ok);
    if (i > 0) {
      reservedWriter.once('drain', write);
    }
  }
}

>>>>>>> master

function seedCustomRates() {
  let i = 10000000;
  let listing_count = 0;
  let custom_rates_Writer = fs.createWriteStream(path.resolve(__dirname, './custom.csv'));
  write()
  function write() {
    let ok = true;
    do {
<<<<<<< HEAD
      let randomNum = function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;  
      }
      let price = faker.finance.amount(100,400,0);
      let string_custom_rate_Dates = JSON.stringify(faker.date.between('2019-07-04', '2021-07-30'));
      let custom_rate_Dates = string_custom_rate_Dates.slice(1, 11);
      let listing_id = function () {
        if (listing_count < 10000000) {
          return listing_count  
        } else {
          return listing_count = randomNum(2,653216);
        }
      }
      listing_count = listing_count + randomNum(2,20000);
      i--;
      if (i === 0) {
        data = `${i}| ${listing_id()}| ${custom_rate_Dates}| ${price}\n`
        custom_rates_Writer.write(data, 'utf8');
=======
      let price = faker.finance.amount(100,400,0);
      let custom_rate_Dates = faker.date.between('2019-07-04', '2021-07-30');
      let listing_id = function () {
        if (listing_count < 10000) {
          return listing_count  
        } else {
          listing_count = 1;
        }
      }

      listing_count++;
      i--;
      if (i === 0) {
        console.log('Last time!');
        data = `${i}| ${listing_id()}| ${custom_rate_Dates}| ${price}\n`
        reservedWriter.write(data, 'utf8');
>>>>>>> master
      } else {
        data = `${i}| ${listing_id()}| ${custom_rate_Dates}| ${price}\n`
        ok = custom_rates_Writer.write(data, 'utf8');
      }
    } while (i > 0 && ok);
    if (i > 0) {
      custom_rates_Writer.once('drain', write);
    }
  }
}


// seedReserves()
// seedListing()
<<<<<<< HEAD
// seedCustomRates()

/***********************************************************************************************************************************/
=======
seedCustomRates()





// generateCustom = () => {
//   let listing_id = 1;

//   while (listing_id < 101) {
//     let date1 = faker.date.between('2019-07-04', '2019-07-14');
//     let date2 = faker.date.between('2019-07-15', '2019-07-30');
//     let date3 = faker.date.between('2019-08-01', '2019-08-14');
//     let date4 = faker.date.between('2019-08-15', '2019-08-30');
//     let price = faker.finance.amount(100,400,0);

//     db.CustomRates.create({
//       listing_id,
//       date: date1,
//       price: price
//     })

//     db.CustomRates.create({
//       listing_id,
//       date: date2,
//       price: price
//     })

//     db.CustomRates.create({
//       listing_id,
//       date: date3,
//       price: price
//     })

//     db.CustomRates.create({
//       listing_id,
//       date: date4,
//       price: price
//     })

//     listing_id = listing_id + 3;

//   }
// }
>>>>>>> master

  // generateListing();
