import express from 'express';
import { Sequelize, DataTypes } from 'sequelize';
import sequelize from './config.js';  //Import Sequelize connection

const app = express();
const port = 3000;

//Define User Model
const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'users',
  timestamps: false 
});

// Sync Model with Database
sequelize.sync({ force: false })
  .then(() => console.log('Users Table Synced'))
  .catch(err => console.error('Sync Failed:', err));

// Define /users Route
app.get('/users', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.error('Error Fetching Users:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start Server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});