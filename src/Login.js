import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import './index.css';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };


    const initialValues={uname: "", password: ""};
       const [formValues, setFormValues]=useState(initialValues);
       const [formerror, setFormerror]=useState({});
       const handleChange = (e)=>{
           console.log(e.target);
           const {name, value}=e.target;
           setFormValues({...formValues, [name]:value});
           console.log(formValues);
       }
   const redirect=useNavigate();
   const handleSubmit =  async(e) => {
       e.preventDefault();
       setFormerror(validate(formValues));
       console.log(formValues);
       const result=await axios.post('http://localhost:8080/login',formValues)
       if(result.data.length>=1){
           console.log(result.data[0]);
           sessionStorage.setItem("data",true);
           alert("Login Success");
           redirect('/dashbord');
       }
       else{
        //    alert('Login Failed Please Try Again Later')
       }
   }
   const validate=(values)=>{
       const error={};
       if(!values.uname){
           error.uname="Username is required:";
       }
       if(!values.password){
           error.password="Password is required:";
       }
       if(!values.invaild){
        error.invaild="Invalid Username or Password";
       }
       return error;
   }



    return (
        <section className="text-center">
            <div className="p-0 bg-image">
                <svg width="100%" height="auto" viewBox="0 0 1366 472" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <title>Login Background</title>
                    <desc>Created with sketchtool.</desc>
                    <defs>
                        <linearGradient x1="90.7329503%" y1="50.735091%" x2="18.6243087%" y2="50%" id="linearGradient-1">
                            <stop stopColor="#0474DA" offset="0%"></stop>
                            <stop stopColor="#044E92" offset="100%"></stop>
                        </linearGradient>
                        <path d="M0,0 L1366,0 L1366,472 L87,472 C38.9512268,472 5.88427763e-15,433.048773 0,385 L0,0 L0,0 Z" id="path-2"></path>
                    </defs>
                    <g id="Web" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <g id="Login">
                            <g id="login-bg-1">
                                <mask id="mask-3" fill="white">
                                    <use xlinkHref="#path-2"></use>
                                </mask>
                                <use id="Mask" fill="url(#linearGradient-1)" xlinkHref="#path-2"></use>
                                <ellipse id="Oval" fill="#389AF3" opacity="0.29031808" mask="url(#mask-3)" cx="869.5" cy="127" rx="323.5" ry="313"></ellipse>
                            </g>
                        </g>
                    </g>
                </svg>
            </div>
            <div className="container d-flex justify-content-center align-items-center" style={{ height: "80vh" }}>
                <div className="card mx-1 mx-md-5 shadow-5-strong bg-body-tertiary">
                    <div className="card-body py-5">
                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-12 col-12">
                                <h5 className="fw-bold mb-4">Login to get started</h5>
                                <div className="col-12 mt-3 mb-4">
                                    <form>
                                        <div className="p-0 bg-white mt-5 labellogin" style={{ borderRadius: "10px" }}>
                                            <label htmlFor="uname">Email</label>
                                            <input
                                                type="text"
                                                placeholder="UserName"
                                                name="uname"
                                                required
                                                className="w-100 p-2"
                                                id="uname"
                                                value={formValues.uname} onChange={handleChange}
                                                style={{ fontSize: "18px" }}
                                            />
                                     <p className='font-weight-normal text-danger' style={{"height":'30px'}}>{formerror.uname}</p>
                                            <br />

                                            <label htmlFor="password" className="mt-2">Password</label>
                                            <div className="d-flex align-items-center">
                                                <input
                                                    type={showPassword ? "text" : "password"}
                                                    placeholder="Password"
                                                    name="password"
                                                    required
                                                    className="w-100 p-2"
                                                    id="password"
                                                    value={formValues.password} onChange={handleChange}
                                                    style={{ fontSize: "18px" }}
                                                />
                                               
                                                <span onClick={togglePasswordVisibility} style={{ cursor: "pointer", marginLeft: "-30px" }}>
                                                    {showPassword ? (
                                                        <i className="fa fa-eye-slash" aria-hidden="true"></i>
                                                    ) : (
                                                        <i className="fa fa-eye" aria-hidden="true"></i>
                                                    )}
                                                </span>
                                            
                                                
                                            </div>
                                            <p className='font-weight-normal text-danger'>{formerror.password}</p>
                                            <button className="btn btn-primary mt-4 font-weight-bold mb-0" onClick={handleSubmit} type="submit">LOGIN</button>
                                        </div>
                                        <p className='font-weight-normal text-danger mt-5 w-100'>{formerror.invaild}</p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Login;
