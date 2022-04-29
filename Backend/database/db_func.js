"use strict";
const Database = require('better-sqlite3');
const db = require('./database.js')

// Add user to the user database.
function add_user(username) {
    const stmt = db.prepare(`SELECT username from userinfo WHERE username=${username};`)
    const user = stmt.get(username)
    if (user === undefined) {
        let st = db.prepare('INSERT INTO userinfo (username, first_name, last_name, email, city, state) VALUES(?, ?, ?, ?, ?, ?)')
        //st.run(username, first_name, last_name, email, city, state)
    }
}

// Remove user from the user database
function rem_user(username) {
    const stmt = db.prepare(`DELETE from userinfo WHERE username=${username};`)
    stmt.run()
}

// Check if user is in database for login
function check_user(username) {
    const stmt = db.prepare(`SELECT username from userinfo WHERE username=${username};`)
    if (stmt.get(username) !== undefined) {
        return true
    }
    else {
        return false
    }
}

export {add_user, rem_user, check_user}