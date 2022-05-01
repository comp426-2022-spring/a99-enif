"use strict";
const Database = require('better-sqlite3');
const db = new Database('./data/db/registration.db');

const stmt = db.prepare(`
    SELECT name FROM sqlite_master WHERE type='table' and name='userinfo';`
);

let row = stmt.get();

// Create database if it does not exist already
if (row === undefined) {
    const sqlInit = `
        CREATE TABLE userinfo ( 
            username VARCHAR PRIMARY KEY,
            first_name VARCHAR,
            last_name VARCHAR,
            email VARCHAR,
            city VARCHAR,
            state VARCHAR
            );
    `;
    db.exec(sqlInit);
    console.log('User database created.');
} 
else {
    console.log('User Database exists.')
}

module.exports = db