// import axios from 'axios';
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router';
// import Menubar from './Menubar.js';
// import Nav from './Nav.jsx'
// const Addproject = () => {
//     const initialValues={name: "", reason: "", type:"", division:"", category:"", priority:"", department:"", startdate:"", enddate:"", location:""};
//     const [formValues, setFormValues]=useState(initialValues);
//     const [formerror, setFormerror]=useState({});
//     const handleChange = (e)=>{
//         console.log(e.target);
//         const {name, value}=e.target;
//         setFormValues({...formValues, [name]:value});
//         console.log(formValues);
//     }
// const redirect=useNavigate();
// const handleSubmit =  async(e) => {
//     e.preventDefault();
//     setFormerror(validate(formValues));
//     if(formValues.name!=='' && formValues.reason!=='' && formValues.type!=='' &&  formValues.division!=='' &&  formValues.category!=='' &&  formValues.priority!=='' &&  formValues.department!=='' &&  formValues.startdate!=='' &&  formValues.enddate!==''  &&  formValues.location!=='' ){
//         await axios.post('http://localhost:8080/projectupload',formValues).then((Response) => {
//             alert("Project Inserted Success");
//             redirect('/Projectlist');
//         }).catch((error)=>{
//             alert("Failed");
//         });     
//     }
//     else{
//         alert("Pleses Fill All Fields..")
//     }
// }
// const validate=(values)=>{
//     const error={};
//     if(!values.name){
//         error.name="Project Name is required:";
//     }
//     if(!values.reason){
//         error.reason="Reason is required:";
//     }
//     if(!values.type){
//         error.type="Type is required:";
//     }
//     if(!values.division){
//         error.division="Division is required:";
//     }
//     if(!values.category){
//         error.category="category is required:";
//     }
//     if(!values.priority){
//         error.priority="priority is required:";
//     }
//     if(!values.department){
//         error.department="department is required:";
//     }
//     if(!values.startdate){
//         error.startdate="startdate is required:";
//     }
//     if(!values.enddate){
//         error.enddate="enddate is required:";
//     }
//     if(!values.location){
//         error.location="location is required:";
//     }
//     return error;
// }
//     return (
//         <>
//             <div className="container-fluid">
//                 <Nav />
//                 <div className="row">
//                     <Menubar />
//                     <div class="col-10 m-0 p-2 ">
//                         <form onSubmit={handleSubmit}>

                        
//                         <div className="p-2" style={{ "border": "1px solid black", "box-shadow": "0px 0px 10px rgba(0,0,0,0.5)" }}>
//                             <div class="p-2 shadow-lg">
//                                 <h3 class="h4 p-2 text-light" style={{ "background-image": "linear-gradient(to left, #ffffff, #bdc6e0, #FF77CC, rgb(255, 122, 89))" }}>ADD NEW PROJECT</h3>
//                             </div>
//                             <div className='row m-0 p-0 mt-3'>
//                                 <div className='col-7'>
//                                     <textarea className='form-control' name='name' placeholder='Enter Project Name' onChange={handleChange}></textarea>
//                                     <p className='font-weight-normal text-danger m-0 p-0'>{formerror.name}</p>
//                                 </div><br/>
                                
//                             </div>
//                             <div className='row m-0 p-0'>
//                             <div className='col-4'>
//                                 <label className='h6 mt-2 p-0 m-0'>Reason</label>
//                                     <select className='form-control' name='reason' onChange={handleChange}>
//                                         <option value="Not Selected">Select---</option>
//                                         <option value="Business">Business</option>
//                                         <option value="Dealership">Dealership</option>
//                                         <option value="Transport">Transport</option>
//                                         <option value="For Collage">For Collage</option>
//                                         <option value="Personal">Personal</option>
//                                     </select>
//                                     <p className='font-weight-normal text-danger m-0 p-0'>{formerror.reason}</p>
//                                 </div>
//                             <div className='col-4'>
//                                 <label className='h6 mt-2 p-0 m-0'>Type</label>
//                                 <select className='form-control' name='type' onChange={handleChange}>
//                                 <option value="Not Selected">Select---</option>
//                                         <option value="Internal">Internal</option>
//                                         <option value="External">External</option>
//                                         <option value="Vendor">Vendor</option>
//                                         </select>
//                                         <p className='font-weight-normal text-danger m-0 p-0'>{formerror.type}</p>
//                                 </div>
//                             <div className='col-4'>
//                                 <label className='h6 mt-2 p-0 m-0'>Division</label>
//                                 <select className='form-control' name='division' onChange={handleChange}>
//                                 <option value="Not Selected">Select---</option>
//                                         <option value="Compressor">Compressor</option>
//                                         <option value="Filters">Filters</option>
//                                         <option value="Pumps">Pumps</option>
//                                         <option value="Glass">Glass</option>
//                                         <option value="Water Heater">Water Heater</option>
//                                         </select>
//                                         <p className='font-weight-normal text-danger m-0 p-0'>{formerror.division}</p>
//                                 </div>
//                             <div className='col-4'>
//                                 <label className='h6 mt-2 p-0 m-0'>Category</label>
//                                 <select className='form-control' name='category' onChange={handleChange}>
//                                 <option value="Not Selected">Select---</option>
//                                         <option value="Quality A">Quality A</option>
//                                         <option value="Quality B">Quality B</option>
//                                         <option value="Quality C">Quality C</option>
//                                         <option value="Quality D">Quality D</option>
//                                         </select>
//                                         <p className='font-weight-normal text-danger m-0 p-0'>{formerror.category}</p>
//                                 </div>
//                             <div className='col-4'>
//                                 <label className='h6 mt-2 p-0 m-0'>Priority</label>
//                                 <select className='form-control' name='priority' onChange={handleChange}>
//                                 <option value="Not Selected">Select---</option>
//                                         <option value="High">High</option>
//                                         <option value="Medium">Medium</option>
//                                         <option value="Low">Low</option>
//                                         </select>
//                                         <p className='font-weight-normal text-danger m-0 p-0'>{formerror.priority}</p>
//                                 </div>
//                             <div className='col-4'>
//                                 <label className='h6 mt-2 p-0 m-0'>Department</label>
//                                 <select className='form-control' name='department' onChange={handleChange}>
//                                 <option value="Not Selected">Select---</option>
//                                         <option value="Stratergy">Stratergy</option>
//                                         <option value="Finance">Finance</option>
//                                         <option value="Quality">Quality</option>
//                                         <option value="Maintenance">Maintenance</option>
//                                         <option value="Stores">Stores</option>
//                                         <option value="Stores">HR</option>
//                                         </select>
//                                         <p className='font-weight-normal text-danger m-0 p-0'>{formerror.department}</p>
//                                 </div>
//                                 <div className='col-4'>
//                                 <label className='h6 mt-2 p-0 m-0'>Start Date As Per Business Plan</label>
//                                     <input type="date" className='form-control' value={formValues.startdate} onChange={handleChange} name="startdate"/>
//                                     <p className='font-weight-normal text-danger m-0 p-0'>{formerror.startdate}</p>
//                                 </div>
//                                 <div className='col-4'>
//                                 <label className='h6 mt-2 p-0 m-0'>End Date As Per Business Plan</label>
//                                     <input type="date" className='form-control' value={formValues.enddate} onChange={handleChange} name="enddate"/>
//                                     <p className='font-weight-normal text-danger m-0 p-0'>{formerror.enddate}</p>
//                                 </div>
//                                 <div className='col-4'>
//                                 <label className='h6 mt-2 p-0 m-0'>Location</label>
//                                 <select className='form-control' name='location' onChange={handleChange}>
//                                 <option value="Not Selected">Select---</option>
//                                         <option value="Pune">Pune</option>
//                                         <option value="Mumbai">Mumbai</option>
//                                         <option value="Nasik">Nasik</option>
//                                         <option value="Ahmednagar">Ahmednagar</option>
//                                         <option value="Goa">Goa</option>
//                                         </select>
//                                         <p className='font-weight-normal text-danger m-0 p-0'>{formerror.location}</p>
//                                 </div>
//                                 <div className='col-4'>
//                                 <label className='h6 mt-5 '>Status : Registered</label>
//                                 </div>
//                             <div className='col-12 text-center'>
//                             <button className="btn btn-outline-primary mt-1 font-weight-bold p-2 mb-1" onClick={handleSubmit}>SAVE PROJECT</button>
//                                 </div>
//                         </div>
//                         </div>
//                         </form>

//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default Addproject;







import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import Menubar from './Menubar.js';
import Nav from './Nav.jsx';

const Addproject = () => {
    const initialValues = { name: "", reason: "", type: "", division: "", category: "", priority: "", department: "", startdate: "", enddate: "", location: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formError, setFormError] = useState({});
    const handleChange = (e) => {
        console.log(e.target);
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        console.log(formValues);
    }
    const redirect = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormError(validate(formValues));
        if (formValues.name !== '' && formValues.reason !== '' && formValues.type !== '' && formValues.division !== '' && formValues.category !== '' && formValues.priority !== '' && formValues.department !== '' && formValues.startdate !== '' && formValues.enddate !== '' && formValues.location !== '') {
            await axios.post('http://localhost:8080/projectupload', formValues).then((Response) => {
                alert("Project Inserted Successfully");
                redirect('/Projectlist');
            }).catch((error) => {
                alert("Failed");
            });
        } else {
            alert("Please Fill All Fields..")
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
        return error;
    }
    return (
        <>
            <div className="container-fluid">
                <Nav />
                <div className="row">
                    <Menubar />
                    <div className="col-12 col-md-10 m-0 p-0 addprolist">
                        <form onSubmit={handleSubmit}>
                            <div className="p-2" style={{ "border": "1px solid black", "box-shadow": "0px 0px 10px rgba(0,0,0,0.5)" }}>
                                <div className="p-2 shadow-lg">
                                    <h3 className="h4 p-2 text-light" style={{ "background-image": "linear-gradient(to left, #ffffff, #bdc6e0, #FF77CC, rgb(255, 122, 89))" }}>ADD NEW PROJECT</h3>
                                </div>
                                <div className="row m-0 p-0 mt-3">
                                    <div className="col-12">
                                        <textarea className="form-control" name="name" placeholder="Enter Project Name" onChange={handleChange}></textarea>
                                        <p className="font-weight-normal text-danger m-0 p-0">{formError.name}</p>
                                    </div>
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
                                    <div className="col-12 text-center mb-5">
                                        <button className="btn btn-outline-primary mt-1 font-weight-bold p-2 mb-1" onClick={handleSubmit}>SAVE PROJECT</button>
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

