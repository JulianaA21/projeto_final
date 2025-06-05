const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('Padel_Coimbra', 'root', '123', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;

//try {
  //const [results, fields] = await connection.query(
 //   'SELECT * FROM `padel_coimbra`'
 // );

 // console.log(results); // results contains rows returned by server
 // console.log(fields); // fields contains extra meta data about results, if available
//} catch (err) {
//console.log(err);
//}



module.exports = sequelize;