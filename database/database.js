"use strict";
const Database = require('better-sqlite3');
const db = new Database('registration.db');

const stmt = db.prepare(`
    SELECT name FROM sqlite_master WHERE type='table' and name='userinfo';`
);

let row = stmt.get();

// Create database if it does not exist already
if (row === undefined) {
    const sqlInit = `
        CREATE TABLE userinfo ( 
            id INTEGER PRIMARY KEY,
            username TEXT,
            first_name TEXT,
            last_name TEXT,
            email TEXT,
            city TEXT,
            state TEXT,
            );
    `;
    db.exec(sqlInit);
    console.log('User database created.');
} 
else {
    console.log('Database exists.')
}

module.exports = db