var express = require('express');
var mysql = require('mysql');
var url = require('url');
var cors = require('cors');
var app = express();
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var session = require('express-session');
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requesetd-With,Content-Type,Accept");
    next();
});
app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000",
    method: ["GET", "POST"],
    credentials: true
}));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    key: "adminid",
    secret: "loginsafely",
    resave: true,
    saveUninitialized: true,
    cookie: {
        expires: 60 * 60 * 24,
    },
}))
var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'techprimelab'
});


app.post('/login', (req, res) => {
    var sql = `SELECT * FROM admin WHERE uname='${req.body.uname}' AND password='${req.body.password}'`;
    con.query(sql, (err, result) => {
        if (err) {
            res.status(500).send({ msg: "An error occurred, please try again later." });
        } else if (result.length >= 1) {
            res.send(result);
        } else {
            res.status(401).send({ msg: "Invalid Username or Password" });
        }
    });
});


app.post('/projectupload', (req, res) => {
    var sql = `insert into project (name,reason,type,division,category,priority,department,startdate,enddate,location,status,projectmanger) values ('${req.body.name}','${req.body.reason}','${req.body.type}','${req.body.division}','${req.body.category}','${req.body.priority}','${req.body.department}','${req.body.startdate}','${req.body.enddate}','${req.body.location}','Registered','${req.body.projectmanger}')`;
    con.query(sql, (err, result) => {
        if (err) throw err;
        res.send(JSON.stringify({ "status": 200, "error": null, "response": result }));
    });
});

app.get('/projectlist', (req, res) => {
    var sql = 'select * from project';
    con.query(sql, (err, data) => {
        res.send(data);
    })
});

app.get('/projectlistSort/:sortby', (req, res) => {
    const sortby = req.params.sortby;
    let sql = 'SELECT * FROM project';
    
    con.query(sql, (err, data) => {
        if (err) throw err;
        switch (sortby) {
            case 'name':
                data.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'reason':
                data.sort((a, b) => a.reason.localeCompare(b.reason));
                break;
            case 'type':
                data.sort((a, b) => a.type.localeCompare(b.type));
                break;
            case 'division':
                data.sort((a, b) => a.division.localeCompare(b.division));
                break;
            case 'category':
                data.sort((a, b) => a.category.localeCompare(b.category));
                break;
            case 'priority':
                data.sort((a, b) => a.priority.localeCompare(b.priority));
                break;
            case 'department':
                data.sort((a, b) => a.department.localeCompare(b.department));
                break;
            case 'location':
                data.sort((a, b) => a.location.localeCompare(b.location));
                break;
            case 'status':
                data.sort((a, b) => a.status.localeCompare(b.status));
                break;
                case 'projectmanger':
                    data.sort((a, b) => a.projectmanger.localeCompare(b.projectmanger));
                    break;
            default:
                break;
        }
        res.send(data);
    });
});

app.get('/projectsearch/:q', (req, res) => {
    const query = req.params.q;
    let sql = `SELECT * FROM project WHERE 
               name LIKE ? OR 
               reason LIKE ? OR 
               type LIKE ? OR 
               division LIKE ? OR 
               category LIKE ? OR 
               priority LIKE ? OR 
               department LIKE ? OR 
               location LIKE ? OR 
               status LIKE ? OR
               projectmanger LIKE ?
               `;

    const searchQuery = `%${query}%`;
    const values = [searchQuery, searchQuery, searchQuery, searchQuery, searchQuery, searchQuery, searchQuery, searchQuery, searchQuery,searchQuery];

    con.query(sql, values, (err, results) => {
        if (err) throw err;
        res.send(results);
    });
});

app.post('/projectState/:id/:status', (req, res) => {
    var id = req.params.id;
    var status = req.params.status;
    var sql = `update project set status='${status}' where pid='${id}'`;
    con.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

var date = new Date();
var currentDate = date.toISOString();
app.get('/counterdata', (req, res) => {
    const currentDate = new Date().toISOString().slice(0, 10); 
    var sql = `
        SELECT
            COUNT(*) AS total,
            COUNT(CASE WHEN status = 'Running' THEN 1 END) AS running,
            COUNT(CASE WHEN status = 'Closed' THEN 1 END) AS closed,
            COUNT(CASE WHEN status = 'Running' AND enddate < '${currentDate}' THEN 1 END) AS closuredelay,
            COUNT(CASE WHEN status = 'Cancelled' THEN 1 END) AS cancelled
        FROM project
    `;

    con.query(sql, (err, result) => {
        if (err) {
            res.status(500).send({ error: "Database query failed", details: err });
        } else {
            res.send(JSON.stringify(result[0]));
        }
    });
});



app.get('/chartdata', (req, res) => {
    const currentDate = new Date().toISOString().slice(0, 10); 

    var sql = `
        SELECT
            COUNT(CASE WHEN department = 'stratergy' THEN 1 END) AS stratergytotal,
            COUNT(CASE WHEN department = 'stratergy' AND status = 'Closed' THEN 1 END) AS stratergyclosed,
            COUNT(CASE WHEN department = 'finance' THEN 1 END) AS financetotal,
            COUNT(CASE WHEN department = 'finance' AND status = 'Closed' THEN 1 END) AS financeclosed,
            COUNT(CASE WHEN department = 'quality' THEN 1 END) AS qualitytotal,
            COUNT(CASE WHEN department = 'quality' AND status = 'Closed' THEN 1 END) AS qualityclosed,
            COUNT(CASE WHEN department = 'maintenance' THEN 1 END) AS maintenancetotal,
            COUNT(CASE WHEN department = 'maintenance' AND status = 'Closed' THEN 1 END) AS maintenanceclosed,
            COUNT(CASE WHEN department = 'stores' THEN 1 END) AS storestotal,
            COUNT(CASE WHEN department = 'stores' AND status = 'Closed' THEN 1 END) AS storesclosed,
            COUNT(CASE WHEN department = 'hr' THEN 1 END) AS hrtotal,
            COUNT(CASE WHEN department = 'hr' AND status = 'Closed' THEN 1 END) AS hrclosed
        FROM project
    `;

    con.query(sql, (err, result) => {
        if (err) {
            res.status(500).send({ error: "Database query failed", details: err });
        } else {
            res.send(JSON.stringify(result[0]));
        }
    });
});

app.listen(8080);