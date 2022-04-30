"use strict";
const Database = require('better-sqlite3');
const log_db = new Database('registration.db');

const stmt = log_db.prepare(`
    SELECT name FROM sqlite_master WHERE type='table' and name='accesslog';`
);

let row = stmt.get();

// Create database if it does not exist already
if (row === undefined) {
    const sqlInit = `
        CREATE TABLE accesslog ( 
            id INTEGER PRIMARY KEY, 
            remoteaddr TEXT, 
            remoteuser TEXT, 
            time TEXT, 
            method TEXT, 
            url TEXT,
            protocol TEXT,
            httpversion TEXT,
            secure TEXT,
            status TEXT,
            referer TEXT,
            useragent TEXT
        );
    `;
    log_db.exec(sqlInit);
    console.log('Logging database created.');
} 
else {
    console.log('Logging Database exists.')
}

module.exports = log_db