"use strict";
const Database = require('better-sqlite3');
const db = require('./database.js')
const express = require('express')
const app = express()

// Check if user is in database for login
app.use('app/auth', function(req, res) {
    let username = req.body.username
    if (username) {
        const stmt = db.prepare('SELECT username from userinfo WHERE username=' + username + ';')
        const user = stmt.get(req.body.username)
        if (user !== undefined) {
            console.log('Log in successful')
        }
    }
});