require('dotenv').config();
const {CONNECTION_STRING} = process.env
const { Sequelize } = require("sequelize")

const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: "postgres",
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})

// modules.exports = {
//     seed: (req, res) => {
//         Sequelize.query(`
//         create table sc_users (
//             user_id serial primary key,
//             first_name varchar(100),
//             last_name varchar(100),
//             email varchar(100)
//         );
//         creat table sc_comments (
//             comments_id serial primary key,
//             user_id integer references sc_users(user_id)
//         )
//         `).then(() => {
//             console.log('DB seeded!')
//             res.sendStatus(200)
//         }).catch(err => console.log('error in seeding DB', err))
//     }
// }