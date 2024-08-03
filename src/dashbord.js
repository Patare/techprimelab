import React, { useEffect, useState } from 'react';
import Nav from './Nav.jsx';
import Menubar from "./Menubar.js";
import { NavLink, useNavigate } from 'react-router-dom';
import axios from "axios";
import { Bar } from "react-chartjs-2";
import { CategoryScale } from 'chart.js';
import Chart from 'chart.js/auto';
import './index.css';
Chart.register(CategoryScale);

const Dashboard = () => {
    const redirect = useNavigate();
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

    const handleLogout = () => {
        sessionStorage.removeItem('data');
        redirect('/');
    };

    useEffect(() => {
        loadCounter();
        loadChart();
    }, []);

    const loadCounter = async () => {
        const result = await axios.get('http://localhost:8080/counterdata');
        setTotal(result.data.total);
        setCounter(result.data.running);
        setClosed(result.data.closed);
        setCancelled(result.data.cancelled);
        setClosuredelay(result.data.closuredelay);
    }

    const loadChart = async () => {
        const result = await axios.get('http://localhost:8080/chartdata');
        setstratergytotal(result.data.stratergytotal);
        setstratergyclosed(result.data.stratergyclosed);
        setfinancetotal(result.data.financetotal);
        setfinanceclosed(result.data.financeclosed);
        setqualitytotal(result.data.qualitytotal);
        setqualityclosed(result.data.qualityclosed);
        setmaintenancetotal(result.data.maintenancetotal);
        setmaintenanceclosed(result.data.maintenanceclosed);
        setstorestotal(result.data.storestotal);
        setstoresclosed(result.data.storesclosed);
        sethrtotal(result.data.hrtotal);
        sethrclosed(result.data.hrclosed);
    }

    const totalProjectData = [stratergytotal, financetotal, qualitytotal, maintenancetotal, storestotal, hrtotal];
    const closedProjectData = [stratergyclosed, financeclosed, qualityclosed, maintenanceclosed, storesclosed, hrclosed];
    const percentages = closedProjectData.map((c, i) => ((c / totalProjectData[i]) * 100).toFixed(0) + '%');
    // const [barThickness, setBarThickness] = useState(1);
    // useEffect(() => {
    //     const handleResize = () => {
    //         if (window.innerWidth <= 768) {
    //             setBarThickness(60);
    //         } else {
    //             setBarThickness(15); 
    //         }
    //     };
    
    //     window.addEventListener('resize', handleResize);
    
    //     // Initial check
    //     handleResize();
    
    //     return () => window.removeEventListener('resize', handleResize);
    // }, []);
    
    const barChartData = {
        labels: ["STR", "FIN", "QLT", "MAN", "STO", "HR"],
        datasets: [
            {
                data: totalProjectData,
                label: "Total Projects",
                backgroundColor: "#025AAB",
                fill: true,
                barThickness: 10,
                borderWidth: 1,
                maxBarThickness: 10,
            },
            {
                data: closedProjectData,
                label: "Closed Projects",
                backgroundColor: "#5AA647",
                fill: true,
                barThickness: 10,
                borderWidth: 1,
                maxBarThickness: 10,
            }
        ]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                position: 'bottom',
            },
            tooltip: {
                callbacks: {
                    label: (context) => `${context.dataset.label}: ${context.raw}`,
                },
            },
        },
        scales: {
            x: {
                beginAtZero: true,
                stacked: false,
                maxBarThickness: 10,
                barPercentage: 0.5,
                categoryPercentage: 0.5,
                ticks: {
                    callback: function (value, index, values) {
                        return `${this.getLabelForValue(value)} ${percentages[index]}`;
                    }
                },
            },
            y: {
                beginAtZero: true,
                stacked: false,
                ticks: {
                    stepSize: 2,
                },
            },
        },
    };

    const session = sessionStorage.getItem('data');
    if (!session) {
        return (
            <NavLink to='/' className='h1 text-danger'>You Are Not Logged In Please Login..</NavLink>
        );
    } else {
        return (
            <div className="container-fluid">
            <Nav />
            <div className="headDash"><span>  &nbsp; Dashboard
            <img src="img/Logo.svg" className="d-none d-md-block"  width="60px" height="53px" alt="" />
          
              <span style={{position:"relative",left:"190px"}} onClick={handleLogout}><i className="fas fa-sign-out-alt text-white"></i></span> 
                </span></div>
                <div className="row" style={{ margin: "10px" }}>
                    <div className="col-md-1" style={{ position: "relative", right: "40px" }}><Menubar /></div>
                    <div className="col-10 m-0 p-0">
                        <div className="p-0 dashboard-container">
                            <div className="row flex-nowrap">
                                <div className="col-12 col-sm-3 col-md-4 col-lg-2 shadow card dashboard-card">
                                    <h6 className="m-0 p-0">Total Projects</h6>
                                    <h2 className="m-0 p-0">{total}</h2>
                                </div>
                                <div className="col-12 col-sm-3 col-md-4 col-lg-2 shadow card dashboard-card">
                                    <h6 className="m-0 p-0">Running</h6>
                                    <h2 className="m-0 p-0">{running}</h2>
                                </div>
                                <div className="col-12 col-sm-3 col-md-4 col-lg-2 shadow card dashboard-card">
                                    <h6 className="m-0 p-0">Closed</h6>
                                    <h2 className="m-0 p-0">{closed}</h2>
                                </div>
                                <div className="col-12 col-sm-3 col-md-4 col-lg-2 shadow card dashboard-card">
                                    <h6 className="m-0 p-0">Closure Delay</h6>
                                    <h2 className="m-0 p-0">{closuredelay}</h2>
                                </div>
                                <div className="col-12 col-sm-3 col-md-4 col-lg-2 shadow card dashboard-card">
                                    <h6 className="m-0 p-0">Cancelled</h6>
                                    <h2 className="m-0 p-0">{cancelled}</h2>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="chart-container">
                                <p className='dsbordhed'>Department wise - Total Vs Closed</p>
                                <div className='chart'>
                                    <Bar
                                    className='barrr' 
                                        options={options}
                                        data={barChartData}
                                    />
                                </div>
                            </div>
                        </div>
                        {/* <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                            {percentages.map((percentage, index) => (
                                <div key={index} style={{ textAlign: 'center', marginRight: '20px' }}>
                                    <p style={{ fontWeight: 'bold', fontSize: '16px' }}>{percentage}</p>
                                    <p>{barChartData.labels[index]}</p>
                                </div>
                            ))}
                        </div> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;
