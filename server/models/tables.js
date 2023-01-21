const db = require('./database.js');

const runQueries = (qArray) => {
  qArray.forEach(q => {
    db.query(table)
    .then(data => {
      console.log(`query success`);
      console.log(data)
    })
    .catch(err => {
      console.log(`errr running ${q}`);
      console.log(err)
    });
  });
}

const eraseTables = (tablename) => {
  const dropQuery = `DROP TABLE ${tablename}`;
  db.query(dropQuery)
    .then(data => {
      console.log(`sucessfully deleted: ${tablename}`);
      console.log(data)
    })
    .catch(err => {
      console.log('errr deleting table' + tablename);
      console.log(err)
    });
}

const emailTable = `
CREATE TABLE users (
  id int NOT NULL GENERATED ALWAYS AS IDENTITY,
  email varchar(255) NOT NULL UNIQUE,
  PRIMARY KEY (id)
  );
`;

const createMockDatat = `
INSERT INTO users (email)
VALUES ('admin@gmail.com');
`;

const selectQuery= `
	SELECT * FROM users;
`;



/* USE THIS TO CREATE INITIAL TABLES */
runQueries([emailTable]);

/* USE THESE TO ERASE TABLES */
// eraseTables('folders');
// eraseTables('links');
// eraseTables('users');



/* TO RUN:

node ./server/models/tables.js 

*/