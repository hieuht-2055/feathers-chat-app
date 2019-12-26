require('dotenv').config();
const Sequelize = require('sequelize');
module.exports = function (app) {
  const {dialect,host,user,pwd,database,port}=process.env;
  const connectionString = `${dialect}://${user}:${pwd}@${host}:${port}/${database}`;
  const sequelize = new Sequelize(connectionString, {
    dialect: 'mongodb',
    logging: false,
    operatorsAliases,
    define: {
      freezeTableName: true
    }
  });
  sequelize.sync({force: true});
  return result;
};
};
