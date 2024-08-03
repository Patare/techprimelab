import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import Menubar from './Menubar.js';
import Nav from './Nav.jsx';

const Addproject = () => {

    const initialValues = { name: "", reason: "", type: "", division: "", category: "", priority: "", department: "", startdate: "", enddate: "", location: "" ,projectmanger:""};
    const [formValues, setFormValues] = useState(initialValues);
    const [formError, setFormError] = useState({});

    const handleLogout = () => {
        sessionStorage.removeItem('data');
        redirect('/');
    };

    const handleChange = (e) => {
        // console.log(e.target);
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        // console.log(formValues);
    }
    const redirect = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormError(validate(formValues));
        if (formValues.name !== '' && formValues.reason !== '' && formValues.type !== '' && formValues.division !== '' && formValues.category !== '' && formValues.priority !== '' && formValues.department !== '' && formValues.startdate !== '' && formValues.enddate !== '' && formValues.location !== '' && formValues.projectmanger !=='') {
            await axios.post('http://localhost:8080/projectupload', formValues).then((Response) => {
                // alert("Project Inserted Successfully");
                redirect('/Projectlist');
            }).catch((error) => {
              
            });
        } else {
         
        }
    }
    const validate = (values) => {
        const error = {};
        if (!values.name) {
            error.name = "Project Name is required:";
        }
        if (!values.reason) {
            error.reason = "Reason is required:";
        }
        if (!values.type) {
            error.type = "Type is required:";
        }
        if (!values.division) {
            error.division = "Division is required:";
        }
        if (!values.category) {
            error.category = "Category is required:";
        }
        if (!values.priority) {
            error.priority = "Priority is required:";
        }
        if (!values.department) {
            error.department = "Department is required:";
        }
        if (!values.startdate) {
            error.startdate = "Start date is required:";
        }
        if (!values.enddate) {
            error.enddate = "End date is required:";
        }
        if (!values.location) {
            error.location = "Location is required:";
        }
        if (!values.projectmanger) {
            error.projectmanger = "project manger is required:";
        }
        return error;
    }
    return (
        <>
            <div className="container-fluid">
                <Nav />
                <div className="headDash"><span> Create Project
                <img src="img/Logo.svg" className="d-none d-md-block" width="60px" height="53px" alt="" />
                          <span style={{position:"relative",left:"140px"}} onClick={handleLogout}><i className="fas fa-sign-out-alt text-white"></i></span> 
                        </span></div>
                <div className="row" style={{margin:"10px"}}>
                    <div className="col-md-1" style={{position:"relative",right:"40px"}}><Menubar /></div>
                    
                    <div className="col-12 col-md-11 m-0 p-0 addprolist card">
                        <form onSubmit={handleSubmit}>
                            <div className="p-2" >
                                <div className="row m-0 p-0 mt-3">
                                    <div className="col-12 col-md-10">
                                        <textarea className="form-control w-100" name="name" placeholder="Enter Project Name" onChange={handleChange}></textarea>
                                        <p className="font-weight-normal text-danger m-0 p-0">{formError.name}</p>
                                    </div>
                                </div>
                                <div className="col-12 col-md-10">
                                        <input className="form-control " name="projectmanger" placeholder="Enter project manger Name" onChange={handleChange}></input>
                                        <p className="font-weight-normal text-danger m-0 p-0">{formError.projectmanger}</p>
                                    </div>
                                <div className="row m-0 p-0">
                                    <div className="col-12 col-md-4">
                                        <label className="h6 mt-2 p-0 m-0">Reason</label>
                                        <select className="form-control" name="reason" onChange={handleChange}>
                                            <option value="Not Selected">Select---</option>
                                            <option value="Business">Business</option>
                                            <option value="Dealership">Dealership</option>
                                            <option value="Transport">Transport</option>
                                            <option value="For Collage">For Collage</option>
                                            <option value="Personal">Personal</option>
                                        </select>
                                        <p className="font-weight-normal text-danger m-0 p-0">{formError.reason}</p>
                                    </div>
                                    <div className="col-12 col-md-4">
                                        <label className="h6 mt-2 p-0 m-0">Type</label>
                                        <select className="form-control" name="type" onChange={handleChange}>
                                            <option value="Not Selected">Select---</option>
                                            <option value="Internal">Internal</option>
                                            <option value="External">External</option>
                                            <option value="Vendor">Vendor</option>
                                        </select>
                                        <p className="font-weight-normal text-danger m-0 p-0">{formError.type}</p>
                                    </div>
                                    <div className="col-12 col-md-4">
                                        <label className="h6 mt-2 p-0 m-0">Division</label>
                                        <select className="form-control" name="division" onChange={handleChange}>
                                            <option value="Not Selected">Select---</option>
                                            <option value="Compressor">Compressor</option>
                                            <option value="Filters">Filters</option>
                                            <option value="Pumps">Pumps</option>
                                            <option value="Glass">Glass</option>
                                            <option value="Water Heater">Water Heater</option>
                                        </select>
                                        <p className="font-weight-normal text-danger m-0 p-0">{formError.division}</p>
                                    </div>
                                    <div className="col-12 col-md-4">
                                        <label className="h6 mt-2 p-0 m-0">Category</label>
                                        <select className="form-control" name="category" onChange={handleChange}>
                                            <option value="Not Selected">Select---</option>
                                            <option value="Quality A">Quality A</option>
                                            <option value="Quality B">Quality B</option>
                                            <option value="Quality C">Quality C</option>
                                            <option value="Quality D">Quality D</option>
                                        </select>
                                        <p className="font-weight-normal text-danger m-0 p-0">{formError.category}</p>
                                    </div>
                                    <div className="col-12 col-md-4">
                                        <label className="h6 mt-2 p-0 m-0">Priority</label>
                                        <select className="form-control" name="priority" onChange={handleChange}>
                                            <option value="Not Selected">Select---</option>
                                            <option value="High">High</option>
                                            <option value="Medium">Medium</option>
                                            <option value="Low">Low</option>
                                        </select>
                                        <p className="font-weight-normal text-danger m-0 p-0">{formError.priority}</p>
                                    </div>
                                    <div className="col-12 col-md-4">
                                        <label className="h6 mt-2 p-0 m-0">Department</label>
                                        <select className="form-control" name="department" onChange={handleChange}>
                                            <option value="Not Selected">Select---</option>
                                            <option value="Stratergy">Stratergy</option>
                                            <option value="Finance">Finance</option>
                                            <option value="Quality">Quality</option>
                                            <option value="Maintenance">Maintenance</option>
                                            <option value="Stores">Stores</option>
                                            <option value="HR">HR</option>
                                        </select>
                                        <p className="font-weight-normal text-danger m-0 p-0">{formError.department}</p>
                                    </div>
                                    <div className="col-12 col-md-4">
                                        <label className="h6 mt-2 p-0 m-0">Start Date As Per Business Plan</label>
                                        <input type="date" className="form-control" value={formValues.startdate} onChange={handleChange} name="startdate" />
                                        <p className="font-weight-normal text-danger m-0 p-0">{formError.startdate}</p>
                                    </div>
                                    <div className="col-12 col-md-4">
                                        <label className="h6 mt-2 p-0 m-0">End Date As Per Business Plan</label>
                                        <input type="date" className="form-control" value={formValues.enddate} onChange={handleChange} name="enddate" />
                                        <p className="font-weight-normal text-danger m-0 p-0">{formError.enddate}</p>
                                    </div>
                                    <div className="col-12 col-md-4">
                                        <label className="h6 mt-2 p-0 m-0">Location</label>
                                        <select className="form-control" name="location" onChange={handleChange}>
                                            <option value="Not Selected">Select---</option>
                                            <option value="Pune">Pune</option>
                                            <option value="Mumbai">Mumbai</option>
                                            <option value="Nasik">Nasik</option>
                                            <option value="Ahmednagar">Ahmednagar</option>
                                            <option value="Goa">Goa</option>
                                        </select>
                                        <p className="font-weight-normal text-danger m-0 p-0">{formError.location}</p>
                                    </div>
                                  
                                    <div className="col-12 col-md-4">
                                        <label className="h6 mt-5">Status : Registered</label>
                                    </div>
                                    <div className="col-12 text-center mt-3 savebtn">
                                        <button className="btn btn mt-1 p-2 mb-1 text-white" onClick={handleSubmit}>Save Project</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Addproject;

