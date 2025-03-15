import { Sequelize } from 'sequelize';

// Connect to MySQL Database (No username & password)
const sequelize = new Sequelize('exam', 'root', '', {
  host: 'localhost',   // or '127.0.0.1'
  dialect: 'mysql',    // Change if using a different database (e.g., 'postgres', 'sqlite')
  logging: false,      // Set to true if you want to see SQL logs in the console
});

// Test Database Connection
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connected to Database: exam');
  } catch (error) {
    console.error('Database Connection Failed:', error);
  }
})();

export default sequelize;