const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json()); // This parses incoming requests with JSON payloads
app.use(bodyParser.urlencoded({ extended: true })); // This parses incoming requests with URL-encoded payloads

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'StorageManagement',
});
app.get('/', (re, res) => {
    return res.json("from Backend site");
});
app.get('/category', (req, res) => {
    const sql = "Select * From tbCategory";
    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    })
})
app.get('/:table', (req, res) => {
    const table = req.params.table;
    const sql = "Select * From ??";
    db.query(sql, table, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    })
})

app.post('/tbCategory/add', (req, res) => {
    let data = {
        Category_Name: req.body.name,
        Category_Description: req.body.description
    };
    let sql = 'INSERT INTO tbCategory SET ?';
    db.query(sql, data, (err, result) => {
        if (err) throw err;
        res.send('Data added...');
    });
});
app.post('/tbProduct/add', (req, res) => {
    let data = {
        Product_Name: req.body.Product_Name,
        Product_Description: req.body.Product_Description,
        Product_Price: req.body.Product_Price,
        Product_Image: req.body.Product_Image,
    };
    let sql = 'INSERT INTO tbProduct SET ?';
    db.query(sql, data, (err, result) => {
        if (err) throw err;
        res.send('Data added...');
    });
});
app.delete('/delete/:table/:id', (req, res) => {
    const table = req.params.table;
    const id = req.params.id;
    let sql = `DELETE FROM ?? WHERE Category_ID = ?`;
    db.query(sql, [table, id], (err, result) => {
        if (err) throw err;
        res.send('Data deleted...');
    });
});
app.listen(8081, () => {
    console.log("Listening!");
});