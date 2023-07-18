const {pool} = require('../db')

async function registrationUserDB(name, surname, email, pwd, role) {
    const client = await pool.connect()
    try {
        await client.query('BEGIN')
        const sql = 'INSERT INTO users( name, surname, email, pwd, role) VALUES($1,$2,$3,$4,$5) RETURNING*'
        const result = (await client.query(sql, [name, surname, email, pwd, role])).rows
        await client.query('COMMIT')
        return result
    } catch (error) {
        await client.query('ROLLBACK')
        console.log(`registrationUserDB: ${error.message}`);
        return []
    }
}

async function getUserByEmailDB(email, pwd){
    const client = await pool.connect()
    const sql = 'SELECT * FROM USERS where email=$1 and pwd=$2'
    const result = (await client.query(sql, [email, pwd])).rows
    return result
}


module.exports = {registrationUserDB, getUserByEmailDB}