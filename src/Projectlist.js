import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Menubar from './Menubar.js';
import Nav from './Nav.jsx'
import './index.css';
import ReactPaginate from 'react-paginate';

const Projectlist = () => {
    const redirect = useNavigate();
    const [data, setData] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const dataPerPage = 5;
    const pagesVisited = pageNumber * dataPerPage;
    const [showSortOptions, setShowSortOptions] = useState(false);

    const toggleSortOptions = () => {
      setShowSortOptions(!showSortOptions);
    };
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
    };

    const handleProjectState = async(id,status)=>{
        // console.log(id,status);
            await axios.post(`http://localhost:8080/projectState/${id}/${status}`,{})
            loadUser();
    }


        const handleSort = async (e) => {
            // console.log("tafget value",e.target.value);
            const result = await axios.get(`http://localhost:8080/projectlistSort/${e.target.value}`);
            // console.log("res",result);
            setData(result.data);            
        };
        const handleSearch = async (e)=>{
            if(e.target.value===""){
                loadUser();
            }else{
                const result = await axios.get(`http://localhost:8080/projectsearch/${e.target.value}`);
                setData(result.data);
            }
            // setsearchApiData(result.data);
        }

    const handleLogout = () => {
        sessionStorage.removeItem('data');
        redirect('/');
    };

// laptop
    const displayData = data.slice(pagesVisited, pagesVisited + dataPerPage).map(data => {
        return (
            <tr key={data.pid} className='tableData'>
                <td className='px-0 py-0 name font-weight-bold'>{data.name} <br />
                    <span className=' font-weight-normal' style={{fontSize:"14.5px", whiteSpace: "nowrap" }}>{data.startdate.slice(0, 10)} to {data.enddate.slice(0, 10)}</span>
                </td>
                <td className='allrecord reson px-1 py-4'>{data.reason}</td>
                <td className='allrecord px-1 py-4'>{data.type}</td>
                <td className='allrecord px-1 py-4'>{data.division}</td>
                <td className='allrecord px-1 py-4'>{data.category}</td>
                <td className='allrecord px-1 py-4'>{data.priority}</td>
                <td className='allrecord px-1 py-4'>{data.department}</td>
                <td className='allrecord px-1 py-4'>{data.location}</td>
                <td className='allstatus px-1 py-4' >{data.status}</td>   
                <td className='allstatus px-1 py-4'>{data.projectmanger}</td>       
                <td className='allbtn px-1 py-4 d-flex border-bottom-0 justify-content-between'>
                  <button style={{borderRadius:"20px",backgroundColor:"#025AAB"}} onClick={()=>handleProjectState(data.pid, "Running")} className=' btn btn- btn-sm mr-1 text-white'>Start</button>
                        <button style={{borderRadius:"20px"}} onClick={()=>handleProjectState(data.pid, "Closed")} className=' btn btn-outline-priary btn-sm mr-1'>Close</button>
                        <button style={{borderRadius:"20px"}} onClick={()=>handleProjectState(data.pid, "Cancelled")} className=' btn btn-outline-primary btn-sm mr-1'>Cancel</button>
                    </td>
            </tr>
        );
    });

        // mobile
    const displayCards = data.slice(pagesVisited, pagesVisited + dataPerPage).map(data => {
        return (
            <div key={data.pid} className="card mb-3">
                <div className="card-body">
                <h5 className="card-title">
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <span style={{ flexGrow: 1 }}>{data.name}</span>
                            <span className='h6' style={{ color: data.status === "Running" ? "black" : data.status === "Closed" ? "black" : data.status === "Cancelled" ? "black" : "black" }}>{data.status}</span>
                        </div>
                    </h5>
                    <p className="card-text">{data.startdate.slice(0, 10)} to {data.enddate.slice(0, 10)}</p>
                    <p className="card-text">Reason: <span>{data.reason}</span></p>
                    <p className="card-text">Type: <span>{data.type}</span> &nbsp;*Category: <span>{data.category}</span></p>
                    <p className="card-text">Div: <span>{data.division}</span>&nbsp; *Dept: <span>{data.department}</span></p>
                    <p className="card-text">Priority: <span>{data.priority}</span></p>
                    <p className="card-text">Location: <span>{data.location}</span></p>
                    <p className="card-text">projectmanger: <span>{data.projectmanger}</span></p>
                    <div className="btn-group mobileview" role="group" aria-label="Manage buttons">
                        <button style={{borderRadius:"20px",backgroundColor:"#025AAB"}} onClick={()=>handleProjectState(data.pid, "Running")} className=' btn btn- btn-sm mr-2 text-white'>Start</button>
                        <button style={{borderRadius:"20px"}} onClick={()=>handleProjectState(data.pid, "Closed")} className=' btn  btn-outline-primary btn-sm mr-2'>Close</button>
                        <button style={{borderRadius:"20px"}} onClick={()=>handleProjectState(data.pid, "Cancelled")} className=' btn  btn-outline-primary btn-sm mr-2'>Cancel</button>
                    </div>
                </div>
            </div>
        );
    });

    return (
        <>
            <div className="container-fluid">
                <Nav />

                <div className="headDash"><span> Project Listing
                <img src="img/Logo.svg" className="d-none d-md-block"  width="60px" height="53px" alt="" />
                        <span style={{position:"relative",left:"175px"}} onClick={handleLogout}><i className="fas fa-sign-out-alt text-white"></i></span> 
                        </span></div>

                <div className="row" style={{margin:"10px"}}>
                <div className="col-md-1" style={{position:"relative",right:"40px"}}><Menubar /></div>
                    <div className="col-md-11 card col-12 m-0 p-0 listleft" >
                        <div className="p-2" >
                            <div className="row align-items-center mb-3">
                                <div className="col-md-6 col-6">
                                    <input placeholder="Search..." className='h5 p-2 mt-2 mr-5  bg-white' onInput={(e) => handleSearch(e)} style={{ border: "none", outline: "none", borderBottom: "2px solid black" }}></input>
                                </div>
                                <div className="col-md-6 col-6 text-md-right text-right">
      <label className='h6 d-none d-md-block  sort-label' style={{position:"relative",right:"120px", top:"25px", fontSize:"20px"}}>Sort By:</label>
      <i className="fa-solid fa-align-left d-block d-md-none" onClick={toggleSortOptions} style={{ cursor: 'pointer' }}></i>
      
      {/* Desktop view */}
      <select className='p-0 bg-white d-none d-md-inline' style={{ position: "relative", left: "0px",top:"-8px", border: "none", outline: "none", borderBottom: "2px solid black", fontSize: "17px" }} onChange={handleSort}>
        <option value='name'>Priority</option>
        <option value='reason'>Reason</option>
        <option value='type'>Type</option>
        <option value='division'>Division</option>
        <option value='category'>Category</option>
        <option value='priority'>Priority</option>
        <option value='department'>Department</option>
        <option value='location'>Location</option>
        <option value='status'>Status</option>
        <option value='projectmanger'>projectmanger</option>
      </select>
      
      {/* Mobile view */}
      <div className={`sort-options-container ${showSortOptions ? 'show' : ''}`}>
        <label className='h6' style={{ fontSize: "15.5px", color: "#3E4551"}}>Sort Project By:</label>
        <button className="close-button" style={{marginTop:"-7px"}} onClick={toggleSortOptions}>X</button>
        <ul className='p-0 bg-white mt-2' style={{ border: "none", outline: "none", borderBottom: "2px solid black", fontSize: "14px",color:"#3E4551",  lineHeight: "19px",fontFamily: "Open Sans" }} onChange={handleSort}>
        <li className='mt-2' onClick={() => handleSort({ target: { value: 'priority' } })}>Priority</li>
    <li className='mt-2' onClick={() => handleSort({ target: { value: 'division' } })}>Division</li>
    <li className='mt-2' onClick={() => handleSort({ target: { value: 'category' } })}>Category</li>
    <li className='mt-2' onClick={() => handleSort({ target: { value: 'status' } })}>Status</li>
        </ul>
      </div>
    </div>
    </div>
                            <div className="d-none d-md-block">
                                <table className='table p-0   shadow-lg'>
                                    <thead className='text-dark' style={{backgroundColor:"#EBF5FF"}}>
                                        <tr style={{backgroundColor:"#EBF5FF"}}>
                                            <th className='p-2 hedname' scope="col">Name</th>
                                            <th className='p-2 hedertable' scope="col">Reason</th>
                                            <th className='p-2 hedertable' scope="col">Type</th>
                                            <th className='p-2 hedertable' scope="col">Division</th>
                                            <th className='p-2 hedertable' scope="col">Category</th>
                                            <th className='p-2 hedertable' scope="col">Priority</th>
                                            <th className='p-2 hedertable' scope="col">Department</th>
                                            <th className='p-2 hedertable' scope="col">Location</th>
                                            <th className='p-2 hedertable' scope="col">Status</th>
                                            <th className='p-2 hedertable' scope="col">Project Manager</th>
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
                                    previousLabel={"<<"}
                                    nextLabel={">>"}
                                    pageCount={pageCount}
                                    onPageChange={changePage}
                                    containerClassName={"paginationbtn"}
                                    previousLinkClassName={"previousbtn"}
                                    nextLinkClassName={"nextbtn"}
                                    disabledClassName={"paginationDisabled"}
                                    activeClassName={"paginationActive"}
                                    pageRangeDisplayed={4}
                                    marginPagesDisplayed={1}    
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
