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

// Create model for artist table
const Artist = sequelize.define('Artist', {
    artist_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW')
    }
}, {
    sequelize,
    modelName: 'artist',
    tableName: 'artist',
    freezeTableName: true,
    timestamps: false
})

// Create table if it does not exist, otherwise update
Artist.sync({ logging: console.log })
    .then(() => {
        console.log('Table synced successfully');
        prompt('Artist name? ') // Prompt user for a new artist once connection is established
            .then((val) => {
                sequelize.query(`INSERT INTO artist (artist_name) VALUES ('${val}') RETURNING id`, { raw: true })
                    .then((res) => {
                        console.log(`Record created with id: ${res[0][0].id}`);
                        sequelize.close();
                    })
                    .catch((err) => {
                        console.error(`Error inserting record into artist table: ${err}`);
                        sequelize.close();
                    })
            })
    })
    .catch((err) => {
        console.error('Unable to sync with table: ' + err);
    })
