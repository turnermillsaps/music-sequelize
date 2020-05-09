const prompt = require('prompt-promise');
const Sequelize = require('sequelize');

const sequelize = new Sequelize('musicseq','postgres','ph1shstix',{
    host: 'localhost',
    dialect: 'postgres'
})

sequelize.authenticate()
    .then(() => {
        console.log('Connection established successfully');
    })
    .catch((err) => {
        console.error('Unable to connect to database: ' + err);
    })

const Artist = sequelize.define('Artist', {
    artist_name: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'artist',
    tableName: 'artist',
    freezeTableName: true
})

Artist.sync({ logging: console.log })
    .then(() => {
        console.log('Table synced successfully');
    })
    .catch((err) => {
        console.error('Unable to sync with table: ' + err);
    })