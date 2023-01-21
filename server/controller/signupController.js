const db = require('../models/database');
const UIDGenerator = require('uid-generator');


const signupController = {}


signupController.submitEmail = async (req, res, next) => {
  try {
    // values that will go into table
    const email = req.body.email

    // insert folder and uid in DB + other data
    const query = `
      INSERT INTO emails (email)
      VALUES ( $1 )
      RETURNING id;
    `;
    const params = [email]

    // adds to db and returns the new ID
    const results = await db.query(query, params);

    return next();
  }
  catch (error) {
    return next({
      log: 'error in linksController.makeFolder',
      status: 400,
      message: {err: error}
    })
  }
}


module.exports = signupController;