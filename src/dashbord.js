import { NavLink } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import Nav from './Nav.jsx';
import Menubar from "./Menubar.js";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import { CategoryScale } from 'chart.js';
import Chart from 'chart.js/auto';
import './index.css';
Chart.register(CategoryScale);

const Dashbord = () => {
    const [total, setTotal] = useState([]);
    const [running, setCounter] = useState([]);
    const [closed, setClosed] = useState([]);
    const [cancelled, setCancelled] = useState([]);
    const [closuredelay, setClosuredelay] = useState([]);

    const [stratergytotal, setstratergytotal] = useState([]);
    const [stratergyclosed, setstratergyclosed] = useState([]);
    const [financetotal, setfinancetotal] = useState([]);
    const [financeclosed, setfinanceclosed] = useState([]);
    const [qualitytotal, setqualitytotal] = useState([]);
    const [qualityclosed, setqualityclosed] = useState([]);
    const [maintenancetotal, setmaintenancetotal] = useState([]);
    const [maintenanceclosed, setmaintenanceclosed] = useState([]);
    const [storestotal, setstorestotal] = useState([]);
    const [storesclosed, setstoresclosed] = useState([]);
    const [hrtotal, sethrtotal] = useState([]);
    const [hrclosed, sethrclosed] = useState([]);

    useEffect(() => {
        loadCounter();
    }, []);

    const loadCounter = async () => {
        const result = await axios.get('http://localhost:8080/counterdata');

        console.log("result", result)
        setTotal(result.data.total.total);
        setCounter(result.data.running.running);
        setClosed(result.data.closed.closed);
        setCancelled(result.data.cancelled.cancelled);
        setClosuredelay(result.data.closuredelay.closuredelay);
        setstratergytotal(result.data.stratergytotal.stratergytotal);
        setstratergyclosed(result.data.stratergyclosed.stratergyclosed);
        setfinancetotal(result.data.financetotal.financetotal);
        setfinanceclosed(result.data.financeclosed.financeclosed);
        setqualitytotal(result.data.qualitytotal.qualitytotal);
        setqualityclosed(result.data.qualityclosed.qualityclosed);
        setmaintenancetotal(result.data.maintenancetotal.maintenancetotal);
        setmaintenanceclosed(result.data.maintenanceclosed.maintenanceclosed);
        setstorestotal(result.data.storestotal.storestotal);
        setstoresclosed(result.data.storesclosed.storesclosed);
        sethrtotal(result.data.hrtotal.hrtotal);
        sethrclosed(result.data.hrclosed.hrclosed);
    }

    const totalProjectData = [stratergytotal, financetotal, qualitytotal, maintenancetotal, storestotal, hrtotal];
    const closedProjectData = [stratergyclosed, financeclosed, qualityclosed, maintenanceclosed, storesclosed, hrclosed];

    const barChartData = {
        labels: ["STRATERGY", "FINANCE", "QUALITY", "MAINTENANCE", "STORES", "HR"],
        datasets: [
            {
                data: totalProjectData,
                label: "Total Projects",
                borderColor: "#3333ff",
                backgroundColor: "#025AAB",
                fill: true
            },
            {
                data: closedProjectData,
                label: "Closed Projects",
                borderColor: "#ff3333",
                backgroundColor: "#5AA647",
                fill: true
            }
        ]
    };

    const session = sessionStorage.getItem('data');
    if (!session) {
        return (<>
            <NavLink to='/' className='h1 text-danger'>  You Are Not Logged In Please Login..</NavLink>
        </>);
    } else {
        return (
            <>
                <div className="container-fluid">
                    <Nav />
                    <div className="row">
                    <Menubar />
                        <div className="col-10 m-0 p-2">
                            <div className="p-2 dashboard-container" >
                                <div className="row">
                                    <div className="text-center col-12 col-sm-3 col-md-4 col-lg-2  shadow card alert alert-primary dashboard-card">
                                        <h4 className="m-0 p-0">Total Projects</h4>
                                        <h2 className="m-0 p-0">{total}</h2>
                                    </div>
                                    <div className="text-center col-12 col-sm-3 col-md-4 col-lg-2  shadow card alert alert-success dashboard-card">
                                        <h4 className="m-0 p-0">Running </h4>
                                        <h2 className="m-0 p-0">{running}</h2>
                                    </div>
                                    <div className="text-center col-12 col-sm-3 col-md-4 col-lg-2   shadow card alert alert-warning dashboard-card">
                                        <h4 className="m-0 p-0">Closed </h4>
                                        <h2 className="m-0 p-0">{closed}</h2>
                                    </div>
                                    <div className="text-center col-12 col-sm-3 col-md-4 col-lg-2 d-none d-lg-block shadow card alert alert-secondary dashboard-card">
                                        <h4 className="m-0 p-0">Closure Delay</h4>
                                        <h2 className="m-0 p-0">{closuredelay}</h2>
                                    </div>
                                    <div className="text-center col-12 col-sm-3 col-md-4 col-lg-2 d-none d-lg-block shadow card alert alert-danger dashboard-card">
                                        <h4 className="m-0 p-0">Cancelled</h4>
                                        <h2 className="m-0 p-0">{cancelled}</h2>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="chart-container">
                                    <Bar
                                        type="bar"
                                        options={{
                                            title: {
                                                display: false,
                                                text: "Project Data",
                                                fontSize: 15
                                            },
                                            legend: {
                                                display: false,
                                                position: "top"
                                            },
                                            plugins: {
                                                datalabels: {
                                                    display: true,
                                                    color: "black"
                                                }
                                            }
                                        }}
                                        data={barChartData}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Dashbord;
