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
    var sql = `select * from admin where uname='${req.body.uname}' AND password='${req.body.password}'`;
    con.query(sql, (err, result) => {
        if (result.length >= 1) {
            res.send(result);
        }
        else {
            res.send(err);
        }
    })
})
app.post('/projectupload', (req, res) => {
    var sql = `insert into project (name,reason,type,division,category,priority,department,startdate,enddate,location,status) values ('${req.body.name}','${req.body.reason}','${req.body.type}','${req.body.division}','${req.body.category}','${req.body.priority}','${req.body.department}','${req.body.startdate}','${req.body.enddate}','${req.body.location}','Registered')`;
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
app.post('/projectstart/:id', (req, res) => {
    var id = req.params.id;
    var sql = `update project set status='Running' where pid='${id}'`;
    con.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});
app.post('/projectclose/:id', (req, res) => {
    var id = req.params.id;
    var sql = `update project set status='Closed' where pid='${id}'`;
    con.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});
app.post('/projectcancel/:id', (req, res) => {
    var id = req.params.id;
    var sql = `update project set status='Cancelled' where pid='${id}'`;
    con.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});
var date = new Date();
var currentDate = date.toISOString();
app.get('/counterdata', (req, res) => {
    var sql = `select COUNT(status) AS total from project`;
    con.query(sql, (err, result) => {
        var sql = `select COUNT(status) AS running from project where status="Running"`;
        con.query(sql, (err1, result1) => {
            var sql = `select COUNT(status) AS closed from project where status="Closed"`;
            con.query(sql, (err1, result2) => {
                var sql = `select COUNT(status) AS cancelled from project where status="Cancelled"`;
                con.query(sql, (err1, result3) => {
                    var sql = `select COUNT(status) AS closuredelay from project where status="Running" AND enddate<"${currentDate}"`;
                    con.query(sql, (err1, result4) => {
                        var sql = `select COUNT(*) AS stratergytotal from project where department="stratergy"`;
                        con.query(sql, (err1, result5) => {
                            var sql = `select COUNT(*) AS stratergyclosed from project where department="stratergy" AND status="Closed"`;
                            con.query(sql, (err1, result6) => {
                                var sql = `select COUNT(*) AS financetotal from project where department="finance"`;
                                con.query(sql, (err1, result7) => {
                                    var sql = `select COUNT(*) AS financeclosed from project where department="finance" AND status="Closed"`;
                                    con.query(sql, (err1, result8) => {
                                        var sql = `select COUNT(*) AS qualitytotal from project where department="quality"`;
                                        con.query(sql, (err1, result9) => {
                                            var sql = `select COUNT(*) AS qualityclosed from project where department="quality" AND status="Closed"`;
                                            con.query(sql, (err1, result10) => {
                                                var sql = `select COUNT(*) AS maintenancetotal from project where department="maintenance"`;
                                                con.query(sql, (err1, result11) => {
                                                    var sql = `select COUNT(*) AS maintenanceclosed from project where department="maintenance" AND status="Closed"`;
                                                    con.query(sql, (err1, result12) => {
                                                        var sql = `select COUNT(*) AS storestotal from project where department="stores"`;
                                                        con.query(sql, (err1, result13) => {
                                                            var sql = `select COUNT(*) AS storesclosed from project where department="stores" AND status="Closed"`;
                                                            con.query(sql, (err1, result14) => {
                                                                var sql = `select COUNT(*) AS hrtotal from project where department="hr"`;
                                                                con.query(sql, (err1, result15) => {
                                                                    var sql = `select COUNT(*) AS hrclosed from project where department="hr" AND status="Closed"`;
                                                                    con.query(sql, (err1, result16) => {
                                                                        res.send(JSON.stringify({ "total": result[0], "running": result1[0], "closed": result2[0], "cancelled": result3[0], "closuredelay": result4[0], "stratergytotal": result5[0], "stratergyclosed": result6[0], "financetotal": result7[0], "financeclosed": result8[0], "qualitytotal": result9[0], "qualityclosed": result10[0], "maintenancetotal": result11[0], "maintenanceclosed": result12[0], "storestotal": result13[0], "storesclosed": result14[0], "hrtotal": result15[0], "hrclosed": result16[0] }));
                                                                    });
                                                                });
                                                            });
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});
app.listen(8080);