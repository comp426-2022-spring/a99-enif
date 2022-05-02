"use strict";
const Database = require('better-sqlite3');
const reg_db = require('./reg_database.js')
const express = require('express')
const app = express()

// Add user to reg_database
app.post('/app/user/add', function(req, res) {
    let username = req.body.username
    let password = req.body.password
    let email = req.body.email
    let state = req.body.state
    const stmt = reg_db.prepare('SELECT username from userinfo WHERE username=' + username + ';')
    const user = stmt.get(username)

    // If username does not already exist, insert into database
    if (user === undefined) {
        const st = reg_db.prepare('INSERT INTO userinfo VALUES(?,?,?,?)')
        st.run(username, password, email, state)
        console.log('User Inserted into Database.')
        res.status(200).json();
    }
    // User already exists in database
    else {
        console.log('User Already Exists.')
        res.status(200).json();
    }
});

// Check if user is in database for login
app.post('/app/user/login', function(req, res) {
    let username = req.body.username
    let password = req.body.password
    if (username && password) {
        const stmt = reg_db.prepare('SELECT username from userinfo WHERE username=' + username + ';')
        const user = stmt.get(req.body.username)
        if (user !== undefined) { 
            console.log('Log in successful')
        }
    }
});