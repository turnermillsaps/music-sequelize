const prompt = require('prompt-promise');
const Sequelize = require('sequelize');

// Instantiate new Sequelize class
const sequelize = new Sequelize('musicseq','postgres','ph1shstix',{
    host: 'localhost',
    dialect: 'postgres'
})

// Authenticate with the database
sequelize.authenticate()
    .then(() => {
        console.log('Connection established successfully');
    })
    .catch((err) => {
        console.error('Unable to connect to database: ' + err);
    })

// Create model for album table
const Album = sequelize.define('Album', {
    artist_id: {
        type: Sequelize.INTEGER,
        
    }
})