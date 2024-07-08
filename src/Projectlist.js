import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import Menubar from './Menubar.js';
import Nav from './Nav.jsx'
import './index.css';
import ReactPaginate from 'react-paginate';

const Projectlist = () => {
    const [data, setData] = useState([]);
    const [searchApiData, setsearchApiData] = useState([]);
    const [filterVal, setFilterVal] = useState('');
    const [pageNumber, setPageNumber] = useState(0);
    const dataPerPage = 5;
    const pagesVisited = pageNumber * dataPerPage;
    const pageCount = Math.ceil(data.length / dataPerPage);
    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async () => {
        const result = await axios.get('http://localhost:8080/projectlist');
        setData(result.data);
        setsearchApiData(result.data);
    };

    const handleSort = (e) => {
        const sortedData = [...data].sort((a, b) => {
            return a[e.target.value].toLowerCase() > b[e.target.value].toLowerCase() ? 1 : -1;
        });
        setData(sortedData);
    };

    const handleFilter = (e) => {
        if (e.target.value === '') {
            setData(searchApiData);
        } else {
            const filterData = searchApiData.filter(item =>
                item.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
                item.reason.toLowerCase().includes(e.target.value.toLowerCase()) ||
                item.type.toLowerCase().includes(e.target.value.toLowerCase()) ||
                item.division.toLowerCase().includes(e.target.value.toLowerCase()) ||
                item.category.toLowerCase().includes(e.target.value.toLowerCase()) ||
                item.priority.toLowerCase().includes(e.target.value.toLowerCase()) ||
                item.department.toLowerCase().includes(e.target.value.toLowerCase()) ||
                item.location.toLowerCase().includes(e.target.value.toLowerCase()) ||
                item.status.toLowerCase().includes(e.target.value.toLowerCase())
            );
            setData(filterData);
        }
        setFilterVal(e.target.value);
    };

    const displayData = data.slice(pagesVisited, pagesVisited + dataPerPage).map(data => {
        return (
            <tr key={data.pid}>
                <td className='px-1 py-2'>{data.pid}</td>
                <td className='px-1 py-2 font-weight-bold'>{data.name} <br />
                    <span className='font-weight-normal'>{data.startdate.slice(0, 10)} to {data.enddate.slice(0, 10)}</span>
                </td>
                <td className='px-1 py-2'>{data.reason}</td>
                <td className='px-1 py-2'>{data.type}</td>
                <td className='px-1 py-2'>{data.division}</td>
                <td className='px-1 py-2'>{data.category}</td>
                <td className='px-1 py-2'>{data.priority}</td>
                <td className='px-1 py-2'>{data.department}</td>
                <td className='px-1 py-2'>{data.location}</td>
                <td className='px-1 py-2' style={{ color: data.status === "Running" ? "green" : data.status === "Closed" ? "black" : data.status === "Cancelled" ? "red" : "blue" }}>{data.status}</td>
                <td className='px-1 py-2'>
                    <NavLink className='btn btn-primary btn-sm mr-1' to={`/projectstart/${data.pid}`}>Start</NavLink>
                    <NavLink className='btn btn-warning btn-sm mr-1' to={`/projectclose/${data.pid}`}>Close</NavLink>
                    <NavLink className='btn btn-danger btn-sm' to={`/projectcancel/${data.pid}`}>Cancel</NavLink>
                </td>
            </tr>
        );
    });

    const displayCards = data.slice(pagesVisited, pagesVisited + dataPerPage).map(data => {
        return (
            <div key={data.pid} className="card mb-3">
                <div className="card-body">
                <h5 className="card-title">
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <span style={{ flexGrow: 1 }}>{data.name}</span>
                            <span style={{ color: data.status === "Running" ? "green" : data.status === "Closed" ? "black" : data.status === "Cancelled" ? "red" : "blue" }}>{data.status}</span>
                        </div>
                    </h5>
                    <p className="card-text">{data.startdate.slice(0, 10)} to {data.enddate.slice(0, 10)}</p>
                    <p className="card-text"><strong>Reason: </strong>{data.reason}</p>
                    <p className="card-text"><strong>Type: </strong>{data.type}</p>
                    <p className="card-text"><strong>Division: </strong>{data.division}</p>
                    <p className="card-text"><strong>Category: </strong>{data.category}</p>
                    <p className="card-text"><strong>Priority: </strong>{data.priority}</p>
                    <p className="card-text"><strong>Department: </strong>{data.department}</p>
                    <p className="card-text"><strong>Location: </strong>{data.location}</p>
                    <p className="card-text" style={{ color: data.status === "Running" ? "green" : data.status === "Closed" ? "black" : data.status === "Cancelled" ? "red" : "blue" }}><strong>Status: </strong>{data.status}</p>
                    <div className="btn-group" role="group" aria-label="Manage buttons">
                        <NavLink className='btn btn-primary btn-sm' to={`/projectstart/${data.pid}`}>Start</NavLink>
                        <NavLink className='btn btn-warning btn-sm' to={`/projectclose/${data.pid}`}>Close</NavLink>
                        <NavLink className='btn btn-danger btn-sm' to={`/projectcancel/${data.pid}`}>Cancel</NavLink>
                    </div>
                </div>
            </div>
        );
    });

    return (
        <>
            <div className="container-fluid">
                <Nav />
                <div className="row">
                    <Menubar />
                    <div className="col-md-10 col-12 m-0 p-0 listleft" >
                        <div className="p-2" style={{ border: "1px solid black", boxShadow: "0px 0px 10px rgba(0,0,0,0.5)" }}>
                            <div className="p-2 shadow-lg">
                                <h3 className="h4 p-2 text-light" style={{ backgroundImage: "linear-gradient(to left, #ffffff, #bdc6e0, #FF77CC, rgb(255, 122, 89))" }}>Project List</h3>
                            </div>
                            <div className="row align-items-center mb-3">
                                <div className="col-md-6">
                                    <input placeholder="Search..." className='h5 p-2 mt-2 alert alert-success bg-alert' value={filterVal} onInput={(e) => handleFilter(e)} style={{ border: "none", outline: "none", borderBottom: "4px solid black" }}></input>
                                </div>
                                <div className="col-md-6 col-12 text-md-right">
                                    <label className='h5 mr-2'>Sort By:</label>
                                    <select className='p-2 alert alert-success bg-alert' style={{ border: "none", outline: "none", borderBottom: "4px solid black", fontSize: "20px" }} onChange={handleSort}>
                                        <option>Choose</option>
                                        <option value={'name'}>Name</option>
                                        <option value={'reason'}>Reason</option>
                                        <option value={'type'}>Type</option>
                                        <option value={'division'}>Division</option>
                                        <option value={'category'}>Category</option>
                                        <option value={'priority'}>Priority</option>
                                        <option value={'department'}>Department</option>
                                        <option value={'location'}>Location</option>
                                        <option value={'status'}>Status</option>
                                    </select>
                                </div>
                            </div>
                            <div className="d-none d-md-block">
                                <table className='table p-0 table-bordered text-center table-hover shadow-lg'>
                                    <thead className='bg-danger text-light'>
                                        <tr>
                                            <th className='p-2' scope="col">ID</th>
                                            <th className='p-2' scope="col">Name</th>
                                            <th className='p-2' scope="col">Reason</th>
                                            <th className='p-2' scope="col">Type</th>
                                            <th className='p-2' scope="col">Division</th>
                                            <th className='p-2' scope="col">Category</th>
                                            <th className='p-2' scope="col">Priority</th>
                                            <th className='p-2' scope="col">Department</th>
                                            <th className='p-2' scope="col">Location</th>
                                            <th className='p-2' scope="col">Status</th>
                                            <th className='p-2' scope="col">Manage</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {displayData}
                                    </tbody>
                                </table>
                            </div>
                            <div className="d-block d-md-none">
                                {displayCards}
                            </div>
                            <div className='col-12 mb-5 pagination'>
                                <ReactPaginate
                                    previousLabel={"Previous"}
                                    nextLabel={"Next"}
                                    pageCount={pageCount}
                                    onPageChange={changePage}
                                    containerClassName={"paginationbtn"}
                                    previousLinkClassName={"previousbtn"}
                                    nextLinkClassName={"nextbtn"}
                                    disabledClassName={"paginationDisabled"}
                                    activeClassName={"paginationActive"}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Projectlist;
