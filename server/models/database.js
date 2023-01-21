const { Pool } = require('pg');

require('dotenv').config();

const PG_URI = `postgres://cagbecty:${process.env.PW}@salt.db.elephantsql.com/vzbxfvie`;  //require('../../credential.js'); //'postgres://otvasbbc:MnavVzPUlbWi45_tv-7eYi0Yu-X9qDfX@peanut.db.elephantsql.com/otvasbbc'; //

const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    // console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
