import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import './App.css';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formValues, setFormValues] = useState({ uname: '', password: '' });
    const [formError, setFormError] = useState({ uname: '', password: '' });
    const [formerror, setformerror] = useState({});

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const validate = (values) => {
        let errors = {};
        if (!values.uname) {
            errors.uname = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(values.uname)) {
            errors.uname = 'Email is invalid';
        }
        if (!values.password) {
            errors.password = 'Password is required';
        } else if (values.password.length < 4) {
            errors.password = 'Password is invalid';
        }
        setFormError(errors);
        return Object.keys(errors).length === 0;
    };

    const redirect = useNavigate();    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const isValid = validate(formValues);
    
        if (isValid) {
            try {
                const result = await axios.post('http://localhost:8080/login', formValues);
                if (result.data.length >= 1) {
                    console.log(result.data[0]);
                    sessionStorage.setItem("data", true);
                    redirect('/dashbord');
                } 
            } catch (error) {   
                if (error.response && error.response.data && error.response.data.msg) {
                    setformerror({ invalid: error.response.data.msg });
                } else {
                    setformerror({ invalid: "Login failed, please try again later." });
                }
            }
        }
    };
    
    return (
        <>
<div className=' login_page'>
<div  className='mobile_back d-block d-sm-none'>
    <img src="img/bg_imgmobile.jpeg"  width="100%" height="300px" alt="" />
</div>
<div className='backgorund d-none d-md-block'>
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

                 <div className='loginheader text-center'>
               
                          <svg  width="85px" height="76px" viewBox="0 0 85 76" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                
               <title>25CE3F74-69C5-4CAA-809C-4F9E459FA386</title>
              <desc>Created with sketchtool.</desc>
              <defs>
              <polyline id="path-1" points="0.0905798687 26.9751313 0.0905798687 9.62490153 15.6139606 0.085 0.0905798687 26.9751313"></polyline>
              <linearGradient x1="91.1816144%" y1="103.253005%" x2="10.6273106%" y2="-0.915793988%" id="linearGradient-3">
              <stop stop-color="#FFFFFF" offset="0%"></stop>
              <stop stop-color="#FFFFFF" offset="100%"></stop>
              </linearGradient>
              <polyline id="path-4" points="31.0515974 0.085 15.5282166 9.62490153 0.00371991247 0.085 31.0515974 0.085"></polyline>
              <linearGradient x1="173.571009%" y1="55.0276852%" x2="-68.1430848%" y2="45.192974%" id="linearGradient-6">
              <stop stop-color="#FFFFFF" offset="0%"></stop>
              <stop stop-color="#FFFFFF" offset="100%"></stop>
              </linearGradient>
              <polyline id="path-7" points="15.5282166 26.9751313 0.00371991247 0.085 15.5282166 9.62490153 15.5282166 26.9751313"></polyline>
              <linearGradient x1="91.1875357%" y1="103.253005%" x2="10.6216495%" y2="-0.915793988%" id="linearGradient-9">
              <stop stop-color="#FFFFFF" offset="0%"></stop>
              <stop stop-color="#FFFFFF" offset="100%"></stop>
              </linearGradient>
              <polyline id="path-10" points="15.5789934 0.0392450766 15.5789934 17.3900328 0.0550547046 26.9293764 15.5789934 0.0392450766"></polyline>
              <polyline id="path-12" points="0.0550547046 9.63178337 15.5789934 0.0924398249 31.1038621 9.63178337 0.0550547046 9.63178337"></polyline>
              <polyline id="path-14" points="0.141356674 0.0392450766 15.6662254 26.9293764 0.141356674 17.3900328 0.141356674 0.0392450766"></polyline>
              <polyline id="path-16" points="15.5890372 0.179857768 15.5890372 17.5300875 0.0664004376 27.0701751 15.5890372 0.179857768"></polyline>
              <linearGradient x1="91.1770974%" y1="103.253005%" x2="10.6316292%" y2="-0.915793988%" id="linearGradient-18">
              <stop stop-color="#FFFFFF" offset="0%"></stop>
              <stop stop-color="#FFFFFF" offset="100%"></stop>
              </linearGradient>
              <polyline id="path-19" points="0.0664004376 9.58658643 15.5890372 0.0464989059 31.1150219 9.58658643 0.0664004376 9.58658643"></polyline>
              <linearGradient x1="173.571009%" y1="55.0276403%" x2="-68.1430848%" y2="45.1930169%" id="linearGradient-21">
              <stop stop-color="#FFFFFF" offset="0%"></stop>
              <stop stop-color="#FFFFFF" offset="100%"></stop>
              </linearGradient>
              <polyline id="path-22" points="0.151400438 0.179857768 15.6773851 27.0701751 0.151400438 17.5300875 0.151400438 0.179857768"></polyline>
              <linearGradient x1="91.1948615%" y1="103.253005%" x2="10.6146454%" y2="-0.915793988%" id="linearGradient-24">
              <stop stop-color="#FFFFFF" offset="0%"></stop>
              <stop stop-color="#FFFFFF" offset="100%"></stop>
              </linearGradient>
              <polyline id="path-25" points="15.6686433 0.181159737 15.6686433 17.5308315 0.146006565 27.070919 15.6686433 0.181159737"></polyline>
              <linearGradient x1="91.1788064%" y1="103.253005%" x2="10.6299953%" y2="-0.915793988%" id="linearGradient-27">
              <stop stop-color="#FFFFFF" offset="0%"></stop>
              <stop stop-color="#FFFFFF" offset="100%"></stop>
              </linearGradient>
              <polyline id="path-28" points="0.146006565 9.58733042 15.6686433 0.0472428884 31.193884 9.58733042 0.146006565 9.58733042"></polyline>
              <linearGradient x1="173.571009%" y1="55.0278812%" x2="-68.1430848%" y2="45.1927865%" id="linearGradient-30">
              <stop stop-color="#FFFFFF" offset="0%"></stop>
              <stop stop-color="#FFFFFF" offset="100%"></stop>
              </linearGradient>
              <polyline id="path-31" points="0.0450109409 0.181159737 15.5702516 27.070919 0.0450109409 17.5308315 0.0450109409 0.181159737"></polyline>
              <linearGradient x1="91.1926231%" y1="103.253005%" x2="10.6167855%" y2="-0.915793988%" id="linearGradient-33">
              <stop stop-color="#FFFFFF" offset="0%"></stop>
              <stop stop-color="#FFFFFF" offset="100%"></stop>
              </linearGradient>
              </defs>
              <g id="Web" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="Login" transform="translate(-641.000000, -70.000000)">
              <g id="Logo" transform="translate(641.000000, 70.000000)">
              <g id="Group-40" transform="translate(42.488654, 38.808917)">
               <mask id="mask-2" fill="white">
                   <use xlinkHref="#path-1"></use>
               </mask>
               <g id="Clip-39"></g>
               <polyline id="Fill-38" stroke="#035FB2" fill="url(#linearGradient-3)" mask="url(#mask-2)" points="0.0905798687 26.9751313 0.0905798687 9.62490153 15.6139606 0.085 0.0905798687 26.9751313"></polyline>
              </g>
              <g id="Group-43" transform="translate(27.051018, 38.808917)">
               <mask id="mask-5" fill="white">
                   <use xlinkHref="#path-4"></use>
               </mask>
               <g id="Clip-42"></g>
               <polyline id="Fill-41" stroke="#035FB2" fill="url(#linearGradient-6)" mask="url(#mask-5)" points="31.0515974 0.085 15.5282166 9.62490153 0.00371991247 0.085 31.0515974 0.085"></polyline>
              </g>
              <g id="Group-46" transform="translate(27.051018, 38.808917)">
               <mask id="mask-8" fill="white">
                   <use xlinkHref="#path-7"></use>
               </mask>
               <g id="Clip-45"></g>
               <polyline id="Fill-44" stroke="#035FB2" fill="url(#linearGradient-9)" mask="url(#mask-8)" points="15.5282166 26.9751313 0.00371991247 0.085 15.5282166 9.62490153 15.5282166 26.9751313"></polyline>
              </g>
              <g id="Group-49" transform="translate(26.865022, 9.235613)">
               <mask id="mask-11" fill="white">
                   <use xlinkHref="#path-10"></use>
               </mask>
               <g id="Clip-48"></g>
               <polyline id="Fill-47" stroke="#035FB2" fill="#FFFFFF" mask="url(#mask-11)" points="15.5789934 0.0392450766 15.5789934 17.3900328 0.0550547046 26.9293764 15.5789934 0.0392450766"></polyline>
              </g>
              <g id="Group-52" transform="translate(26.865022, 26.533206)">
               <mask id="mask-13" fill="white">
                   <use xlinkHref="#path-12"></use>
               </mask>
               <g id="Clip-51"></g>
               <polyline id="Fill-50" stroke="#035FB2" fill="#FFFFFF" mask="url(#mask-13)" points="0.0550547046 9.63178337 15.5789934 0.0924398249 31.1038621 9.63178337 0.0550547046 9.63178337"></polyline>
              </g>
              <g id="Group-55" transform="translate(42.302659, 9.235613)">
               <mask id="mask-15" fill="white">
                   <use xlinkHref="#path-14"></use>
               </mask>
               <g id="Clip-54"></g>
               <polyline id="Fill-53" stroke="#035FB2" fill="#FFFFFF" mask="url(#mask-15)" points="0.141356674 0.0392450766 15.6662254 26.9293764 0.141356674 17.3900328 0.141356674 0.0392450766"></polyline>
              </g>
              <path d="M26.9200766,36.1649891 L57.968884,36.1649891 L42.4440153,9.27485777 L26.9200766,36.1649891 Z M62.7095405,38.9011707 L22.1805361,38.9011707 L42.4440153,3.80305252 L62.7095405,38.9011707 L62.7095405,38.9011707 Z" id="Fill-56" fill="#FFFFFF" opacity="0"></path>
              <path d="M47.7303829,6.7023523 C47.7303829,9.65094092 45.3394092,12.0378228 42.3928665,12.0378228 C39.4483698,12.0378228 37.0573961,9.65094092 37.0573961,6.7023523 C37.0573961,3.75543764 39.4483698,1.36874179 42.3928665,1.36874179 C45.3394092,1.36874179 47.7303829,3.75543764 47.7303829,6.7023523" id="Fill-57" fill="#81ECFF"></path>
              <path d="M42.3928665,2.73599562 C40.204442,2.73599562 38.4257659,4.51578775 38.4257659,6.7023523 C38.4257659,8.89021882 40.204442,10.6698249 42.3928665,10.6698249 C44.582035,10.6698249 46.3633151,8.89021882 46.3633151,6.7023523 C46.3633151,4.51578775 44.582035,2.73599562 42.3928665,2.73599562 Z M42.3928665,13.4058206 C38.6969475,13.4058206 35.6890263,10.3986433 35.6890263,6.7023523 C35.6890263,3.00643326 38.6969475,0 42.3928665,0 C46.0908315,0 49.0987527,3.00643326 49.0987527,6.7023523 C49.0987527,10.3986433 46.0908315,13.4058206 42.3928665,13.4058206 L42.3928665,13.4058206 Z" id="Fill-58" fill="#FFFFFF"></path>
              <path d="M65.6741247,37.5314989 C65.6741247,40.4813895 63.2859409,42.8682713 60.3367943,42.8682713 C57.3922976,42.8682713 55.0033698,40.4813895 55.0033698,37.5314989 C55.0033698,34.5862582 57.3922976,32.1978884 60.3367943,32.1978884 C63.2859409,32.1978884 65.6741247,34.5862582 65.6741247,37.5314989" id="Fill-59" fill="#FFFFFE"></path>
              <path d="M60.3367943,33.5655142 C58.1496718,33.5655142 56.3724836,35.3451204 56.3724836,37.5314989 C56.3724836,39.7199234 58.1496718,41.5013895 60.3367943,41.5013895 C62.5257768,41.5013895 64.3072429,39.7199234 64.3072429,37.5314989 C64.3072429,35.3451204 62.5257768,33.5655142 60.3367943,33.5655142 Z M60.3367943,44.2366411 C56.6406893,44.2366411 53.635744,41.2296499 53.635744,37.5314989 C53.635744,33.8363239 56.6406893,30.8295186 60.3367943,30.8295186 C64.0340153,30.8295186 67.0432385,33.8363239 67.0432385,37.5314989 C67.0432385,41.2296499 64.0340153,44.2366411 60.3367943,44.2366411 L60.3367943,44.2366411 Z" id="Fill-60" fill="#1A4D83"></path>
              <path d="M29.8848468,37.5314989 C29.8848468,40.4800875 27.4946171,42.8669694 24.5478884,42.8669694 C21.6033917,42.8669694 19.21186,40.4800875 19.21186,37.5314989 C19.21186,34.5845842 21.6033917,32.1978884 24.5478884,32.1978884 C27.4946171,32.1978884 29.8848468,34.5845842 29.8848468,37.5314989" id="Fill-61" fill="#FFFFFE"></path>
              <path d="M24.5478884,33.5655142 C22.3596499,33.5655142 20.5807877,35.3451204 20.5807877,37.5314989 C20.5807877,39.7199234 22.3596499,41.4999015 24.5478884,41.4999015 C26.7370569,41.4999015 28.519267,39.7199234 28.519267,37.5314989 C28.519267,35.3451204 26.7370569,33.5655142 24.5478884,33.5655142 Z M24.5478884,44.2353392 C20.8506674,44.2353392 17.8442341,41.2281619 17.8442341,37.5314989 C17.8442341,33.8363239 20.8506674,30.8295186 24.5478884,30.8295186 C28.2452954,30.8295186 31.2537746,33.8363239 31.2537746,37.5314989 C31.2537746,41.2281619 28.2452954,44.2353392 24.5478884,44.2353392 L24.5478884,44.2353392 Z" id="Fill-62" fill="#1A4D83"></path>
              <g id="Group-65" transform="translate(9.009442, 39.924891)">
               <mask id="mask-17" fill="white">
                   <use xlinkHref="#path-16"></use>
               </mask>
               <g id="Clip-64"></g>
               <polyline id="Fill-63" stroke="#035FB2" fill="url(#linearGradient-18)" mask="url(#mask-17)" points="15.5890372 0.179857768 15.5890372 17.5300875 0.0664004376 27.0701751 15.5890372 0.179857768"></polyline>
              </g>
              <g id="Group-68" transform="translate(9.009442, 57.408479)">
               <mask id="mask-20" fill="white">
                   <use xlinkHref="#path-19"></use>
               </mask>
               <g id="Clip-67"></g>
               <polyline id="Fill-66" stroke="#035FB2" fill="url(#linearGradient-21)" mask="url(#mask-20)" points="0.0664004376 9.58658643 15.5890372 0.0464989059 31.1150219 9.58658643 0.0664004376 9.58658643"></polyline>
              </g>
              <g id="Group-71" transform="translate(24.447079, 39.924891)">
               <mask id="mask-23" fill="white">
                   <use xlinkHref="#path-22"></use>
               </mask>
               <g id="Clip-70"></g>
               <polyline id="Fill-69" stroke="#035FB2" fill="url(#linearGradient-24)" mask="url(#mask-23)" points="0.151400438 0.179857768 15.6773851 27.0701751 0.151400438 17.5300875 0.151400438 0.179857768"></polyline>
              </g>
              <path d="M9.07584245,66.9950656 L40.1244639,66.9950656 L24.5984792,40.1047484 L9.07584245,66.9950656 Z M44.8651204,69.7303173 L4.33574398,69.7303173 L24.5984792,34.6331291 L44.8651204,69.7303173 L44.8651204,69.7303173 Z" id="Fill-72" fill="#FFFFFF" opacity="0.0115094866"></path>
              <path d="M29.8848468,37.5314989 C29.8848468,40.4800875 27.4946171,42.8669694 24.5478884,42.8669694 C21.6041357,42.8669694 19.21186,40.4800875 19.21186,37.5314989 C19.21186,34.5845842 21.6041357,32.1978884 24.5478884,32.1978884 C27.4946171,32.1978884 29.8848468,34.5845842 29.8848468,37.5314989" id="Fill-73" fill="#81ECFF"></path>
              <path d="M24.5478884,33.5655142 C22.3596499,33.5655142 20.5807877,35.3451204 20.5807877,37.5314989 C20.5807877,39.7199234 22.3596499,41.4999015 24.5478884,41.4999015 C26.7370569,41.4999015 28.519267,39.7199234 28.519267,37.5314989 C28.519267,35.3451204 26.7370569,33.5655142 24.5478884,33.5655142 Z M24.5478884,44.2353392 C20.8527133,44.2353392 17.8442341,41.2281619 17.8442341,37.5314989 C17.8442341,33.8363239 20.8527133,30.8291466 24.5478884,30.8291466 C28.2452954,30.8291466 31.2537746,33.8363239 31.2537746,37.5314989 C31.2537746,41.2281619 28.2452954,44.2353392 24.5478884,44.2353392 L24.5478884,44.2353392 Z" id="Fill-74" fill="#FFFFFF"></path>
              <path d="M47.8298906,68.3613895 C47.8298906,71.3112801 45.4409628,73.6981619 42.4925602,73.6981619 C39.5473195,73.6981619 37.1583917,71.3112801 37.1583917,68.3613895 C37.1583917,65.4155908 39.5473195,63.027221 42.4925602,63.027221 C45.4409628,63.027221 47.8298906,65.4155908 47.8298906,68.3613895" id="Fill-75" fill="#FFFFFE"></path>
              <path d="M42.4925602,64.3950328 C40.3046937,64.3950328 38.5267615,66.174267 38.5267615,68.3613895 C38.5267615,70.549628 40.3046937,72.3305361 42.4925602,72.3305361 C44.6815427,72.3305361 46.4622648,70.549628 46.4622648,68.3613895 C46.4622648,66.174267 44.6815427,64.3950328 42.4925602,64.3950328 Z M42.4925602,75.0665317 C38.7964551,75.0665317 35.7907659,72.0587965 35.7907659,68.3613895 C35.7907659,64.6662144 38.7964551,61.6590372 42.4925602,61.6590372 C46.1892232,61.6590372 49.1975164,64.6662144 49.1975164,68.3613895 C49.1975164,72.0587965 46.1892232,75.0665317 42.4925602,75.0665317 L42.4925602,75.0665317 Z" id="Fill-76" fill="#1A4D83"></path>
              <path d="M12.0406127,68.3613895 C12.0406127,71.3092341 9.65038293,73.696674 6.70309628,73.696674 C3.75859956,73.696674 1.36762582,71.3092341 1.36762582,68.3613895 C1.36762582,65.4141028 3.75859956,63.027221 6.70309628,63.027221 C9.65038293,63.027221 12.0406127,65.4141028 12.0406127,68.3613895" id="Fill-77" fill="#81ECFF"></path>
              <path d="M6.70309628,64.3950328 C4.51467177,64.3950328 2.73525164,66.174267 2.73525164,68.3613895 C2.73525164,70.548326 4.51467177,72.3284902 6.70309628,72.3284902 C8.89207877,72.3284902 10.6728009,70.548326 10.6728009,68.3613895 C10.6728009,66.174267 8.89207877,64.3950328 6.70309628,64.3950328 Z M6.70309628,75.0652298 C3.00643326,75.0652298 0,72.0580525 0,68.3613895 C0,64.6662144 3.00643326,61.6590372 6.70309628,61.6590372 C10.4010613,61.6590372 13.4095405,64.6662144 13.4095405,68.3613895 C13.4095405,72.0580525 10.4010613,75.0652298 6.70309628,75.0652298 L6.70309628,75.0652298 Z" id="Fill-78" fill="#FFFFFF"></path>
              <g id="Group-81" transform="translate(44.720602, 39.924891)">
               <mask id="mask-26" fill="white">
                   <use xlinkHref="#path-25"></use>
               </mask>
               <g id="Clip-80"></g>
               <polyline id="Fill-79" stroke="#035FB2" fill="url(#linearGradient-27)" mask="url(#mask-26)" points="15.6686433 0.181159737 15.6686433 17.5308315 0.146006565 27.070919 15.6686433 0.181159737"></polyline>
              </g>
              <g id="Group-84" transform="translate(44.720602, 57.408479)">
               <mask id="mask-29" fill="white">
                   <use xlinkHref="#path-28"></use>
               </mask>
               <g id="Clip-83"></g>
               <polyline id="Fill-82" stroke="#035FB2" fill="url(#linearGradient-30)" mask="url(#mask-29)" points="0.146006565 9.58733042 15.6686433 0.0472428884 31.193884 9.58733042 0.146006565 9.58733042"></polyline>
              </g>
              <g id="Group-87" transform="translate(60.344234, 39.924891)">
               <mask id="mask-32" fill="white">
                   <use xlinkHref="#path-31"></use>
               </mask>
               <g id="Clip-86"></g>
               <polyline id="Fill-85" stroke="#035FB2" fill="url(#linearGradient-33)" mask="url(#mask-32)" points="0.0450109409 0.181159737 15.5702516 27.070919 0.0450109409 17.5308315 0.0450109409 0.181159737"></polyline>
              </g>
              <path d="M44.8666083,66.9958096 L75.9144858,66.9958096 L60.3892451,40.1060503 L44.8666083,66.9958096 Z M80.6545842,69.7318053 L40.1265098,69.7318053 L60.3892451,34.6336871 L80.6545842,69.7318053 L80.6545842,69.7318053 Z" id="Fill-88" fill="#FFFFFF" opacity="0.0115094866"></path>
              <path d="M65.6761707,37.5329869 C65.6761707,40.4808315 63.2853829,42.8682713 60.3380963,42.8682713 C57.3935996,42.8682713 55.0026258,40.4808315 55.0026258,37.5329869 C55.0026258,34.5857002 57.3935996,32.1984464 60.3380963,32.1984464 C63.2853829,32.1984464 65.6761707,34.5857002 65.6761707,37.5329869" id="Fill-89" fill="#81ECFF"></path>
              <path d="M60.3380963,33.5664442 C58.1496718,33.5664442 56.3704376,35.3458643 56.3704376,37.5329869 C56.3704376,39.7199234 58.1496718,41.4999015 60.3380963,41.4999015 C62.5285667,41.4999015 64.3085449,39.7199234 64.3085449,37.5329869 C64.3085449,35.3458643 62.5285667,33.5664442 60.3380963,33.5664442 Z M60.3380963,44.2366411 C56.6414333,44.2366411 53.635,41.2296499 53.635,37.5329869 C53.635,33.8368818 56.6414333,30.8304486 60.3380963,30.8304486 C64.0362473,30.8304486 67.0445405,33.8368818 67.0445405,37.5329869 C67.0445405,41.2296499 64.0362473,44.2366411 60.3380963,44.2366411 L60.3380963,44.2366411 Z" id="Fill-90" fill="#FFFFFF"></path>
              <path d="M83.6200985,68.3621335 C83.6200985,71.3120241 81.2319147,73.6994639 78.2825821,73.6994639 C75.3373414,73.6994639 72.9485996,71.3120241 72.9485996,68.3621335 C72.9485996,65.4168928 75.3373414,63.027965 78.2825821,63.027965 C81.2319147,63.027965 83.6200985,65.4168928 83.6200985,68.3621335" id="Fill-91" fill="#81ECFF"></path>
              <path d="M78.2825821,64.3963348 C76.0956455,64.3963348 74.3167834,66.1750109 74.3167834,68.3621335 C74.3167834,70.550372 76.0956455,72.3310941 78.2825821,72.3310941 C80.4723085,72.3310941 82.2522867,70.550372 82.2522867,68.3621335 C82.2522867,66.1750109 80.4723085,64.3963348 78.2825821,64.3963348 Z M78.2825821,75.0670897 C74.587221,75.0670897 71.5815317,72.0593545 71.5815317,68.3621335 C71.5815317,64.6665864 74.587221,61.6601532 78.2825821,61.6601532 C81.9798031,61.6601532 84.9877243,64.6665864 84.9877243,68.3621335 C84.9877243,72.0593545 81.9798031,75.0670897 78.2825821,75.0670897 L78.2825821,75.0670897 Z" id="Fill-92" fill="#FFFFFF"></path>
              <path d="M47.8313786,68.3621335 C47.8313786,71.3105361 45.4396608,73.6974179 42.4931182,73.6974179 C39.5478775,73.6974179 37.1570897,71.3105361 37.1570897,68.3621335 C37.1570897,65.4155908 39.5478775,63.027965 42.4931182,63.027965 C45.4396608,63.027965 47.8313786,65.4155908 47.8313786,68.3621335" id="Fill-93" fill="#81ECFF"></path>
              <path d="M42.4931182,64.3963348 C40.3046937,64.3963348 38.5252735,66.1750109 38.5252735,68.3621335 C38.5252735,70.549628 40.3046937,72.3297921 42.4931182,72.3297921 C44.6828446,72.3297921 46.4635667,70.549628 46.4635667,68.3621335 C46.4635667,66.1750109 44.6828446,64.3963348 42.4931182,64.3963348 Z M42.4931182,75.0665317 C38.7964551,75.0665317 35.7900219,72.0593545 35.7900219,68.3621335 C35.7900219,64.6665864 38.7964551,61.6601532 42.4931182,61.6601532 C46.1910832,61.6601532 49.1997484,64.6665864 49.1997484,68.3621335 C49.1997484,72.0593545 46.1910832,75.0665317 42.4931182,75.0665317 L42.4931182,75.0665317 Z" id="Fill-94" fill="#FFFFFF"></path>
              </g>
              </g>
              </g>
              </svg>
     <p className='text-white'>Online Project Mangement</p>
         </div>
         <div className="container logincontener">
            <div className="login-card">
                <div className="">
                    <h6 className="login-title">Login to get started</h6>
                    <form className='from' onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="uname" style={{ color: formError.uname ? 'red' : '#a2a2a2' }}>Email</label>
                            <input
                                type="text"
                                name="uname"
                                id="uname"
                                value={formValues.uname}
                                onChange={handleChange}
                               
                                className={`w-100 p-2 ${formError.uname? 'border-danger' : 'border-secondary'}`}
                            />
                            {formError.uname && <span className="error-text">{formError.uname}</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="password" style={{ color: formError.password ? 'red' : '#a2a2a2' }}>Password</label>
                            <div className="password-wrapper">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    id="password"
                                    value={formValues.password}
                                    onChange={handleChange}
                                    className={`w-100 p-2 ${formError.password ? 'border-danger' : 'border-secondary'}`}
                                />
                                <span onClick={togglePasswordVisibility} className="toggle-password">
                                    {showPassword ? (
                                        <i className="fa fa-eye-slash" aria-hidden="true"></i>
                                    ) : (
                                        <i className="fa fa-eye" aria-hidden="true"></i>
                                    )}
                                </span>
                            </div>
                            {formError.password && <span className="error-text">{formError.password}</span>}
                        </div>
                        <div className="form-footer">
                            <a href="#" className="forgot-password">Forgot password?</a>
                        </div>
                      <button style={{backgroundColor:"#035FB2",color:"white"}} className="btn btn-  font-weight-bold mb-0" onClick={handleSubmit} type="submit">Login</button>

                    </form>
                    {formerror.invalid && <p className="error-text INVALIED">{formerror.invalid}</p>}
                </div>
            </div>
        </div>
        </div>
        </>
    );
};

export default Login;

























// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router';
// import './index.css';

// const Login = () => {
//     const [showPassword, setShowPassword] = useState(false);

//     const togglePasswordVisibility = () => {
//         setShowPassword(!showPassword);
//     };


//     const initialValues={uname: "", password: ""};
//        const [formValues, setFormValues]=useState(initialValues);
//        const [formerror, setformerror]=useState({});
//        const handleChange = (e)=>{
//         //    console.log(e.target);
//            const {name, value}=e.target;
//            setFormValues({...formValues, [name]:value});
//         //    console.log(formValues);
//        }
//    const redirect=useNavigate();
//    const handleSubmit = async (e) => {
//     e.preventDefault();
//     const errors = validate(formValues);
//     setformerror(errors);

//     if (Object.keys(errors).length === 0) {
//         try {
//             const result = await axios.post('http://localhost:8080/login', formValues);
//             if (result.data.length >= 1) {
//                 console.log(result.data[0]);
//                 sessionStorage.setItem("data", true);
//                 // alert("Login Success");
//                 redirect('/dashbord');
//             } else {
//                 setformerror({ invalid: "Invalid Username or Password" });
//             }
//         } catch (error) {
//             console.error("Login failed:", error);
//             setformerror({ invalid: "Login failed, please try again later." });
//         }
//     }
// };
//    const validate=(values)=>{
//        const error={};
//        if(!values.uname){
//            error.uname="Username is required:";
//        }
//        if(!values.password){
//            error.password="Password is required:";
//        }
      
//        return error;
//    }



//     return (
//         <section className="text-center">
//             <div className="p-0 bg-image">
//                 <svg width="100%" height="auto" viewBox="0 0 1366 472" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
//                     <title>Login Background</title>
//                     <desc>Created with sketchtool.</desc>
//                     <defs>
//                         <linearGradient x1="90.7329503%" y1="50.735091%" x2="18.6243087%" y2="50%" id="linearGradient-1">
//                             <stop stopColor="#0474DA" offset="0%"></stop>
//                             <stop stopColor="#044E92" offset="100%"></stop>
//                         </linearGradient>
//                         <path d="M0,0 L1366,0 L1366,472 L87,472 C38.9512268,472 5.88427763e-15,433.048773 0,385 L0,0 L0,0 Z" id="path-2"></path>
//                     </defs>
//                     <g id="Web" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
//                         <g id="Login">
//                             <g id="login-bg-1">
//                                 <mask id="mask-3" fill="white">
//                                     <use xlinkHref="#path-2"></use>
//                                 </mask>
//                                 <use id="Mask" fill="url(#linearGradient-1)" xlinkHref="#path-2"></use>
//                                 <ellipse id="Oval" fill="#389AF3" opacity="0.29031808" mask="url(#mask-3)" cx="869.5" cy="127" rx="323.5" ry="313"></ellipse>
//                             </g>
//                         </g>
//                     </g>
//                 </svg>       
//             </div>
//             <div className='loginheader'>
               
//             <svg  width="85px" height="76px" viewBox="0 0 85 76" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
 
//  <title>25CE3F74-69C5-4CAA-809C-4F9E459FA386</title>
// <desc>Created with sketchtool.</desc>
// <defs>
// <polyline id="path-1" points="0.0905798687 26.9751313 0.0905798687 9.62490153 15.6139606 0.085 0.0905798687 26.9751313"></polyline>
// <linearGradient x1="91.1816144%" y1="103.253005%" x2="10.6273106%" y2="-0.915793988%" id="linearGradient-3">
// <stop stop-color="#FFFFFF" offset="0%"></stop>
// <stop stop-color="#FFFFFF" offset="100%"></stop>
// </linearGradient>
// <polyline id="path-4" points="31.0515974 0.085 15.5282166 9.62490153 0.00371991247 0.085 31.0515974 0.085"></polyline>
// <linearGradient x1="173.571009%" y1="55.0276852%" x2="-68.1430848%" y2="45.192974%" id="linearGradient-6">
// <stop stop-color="#FFFFFF" offset="0%"></stop>
// <stop stop-color="#FFFFFF" offset="100%"></stop>
// </linearGradient>
// <polyline id="path-7" points="15.5282166 26.9751313 0.00371991247 0.085 15.5282166 9.62490153 15.5282166 26.9751313"></polyline>
// <linearGradient x1="91.1875357%" y1="103.253005%" x2="10.6216495%" y2="-0.915793988%" id="linearGradient-9">
// <stop stop-color="#FFFFFF" offset="0%"></stop>
// <stop stop-color="#FFFFFF" offset="100%"></stop>
// </linearGradient>
// <polyline id="path-10" points="15.5789934 0.0392450766 15.5789934 17.3900328 0.0550547046 26.9293764 15.5789934 0.0392450766"></polyline>
// <polyline id="path-12" points="0.0550547046 9.63178337 15.5789934 0.0924398249 31.1038621 9.63178337 0.0550547046 9.63178337"></polyline>
// <polyline id="path-14" points="0.141356674 0.0392450766 15.6662254 26.9293764 0.141356674 17.3900328 0.141356674 0.0392450766"></polyline>
// <polyline id="path-16" points="15.5890372 0.179857768 15.5890372 17.5300875 0.0664004376 27.0701751 15.5890372 0.179857768"></polyline>
// <linearGradient x1="91.1770974%" y1="103.253005%" x2="10.6316292%" y2="-0.915793988%" id="linearGradient-18">
// <stop stop-color="#FFFFFF" offset="0%"></stop>
// <stop stop-color="#FFFFFF" offset="100%"></stop>
// </linearGradient>
// <polyline id="path-19" points="0.0664004376 9.58658643 15.5890372 0.0464989059 31.1150219 9.58658643 0.0664004376 9.58658643"></polyline>
// <linearGradient x1="173.571009%" y1="55.0276403%" x2="-68.1430848%" y2="45.1930169%" id="linearGradient-21">
// <stop stop-color="#FFFFFF" offset="0%"></stop>
// <stop stop-color="#FFFFFF" offset="100%"></stop>
// </linearGradient>
// <polyline id="path-22" points="0.151400438 0.179857768 15.6773851 27.0701751 0.151400438 17.5300875 0.151400438 0.179857768"></polyline>
// <linearGradient x1="91.1948615%" y1="103.253005%" x2="10.6146454%" y2="-0.915793988%" id="linearGradient-24">
// <stop stop-color="#FFFFFF" offset="0%"></stop>
// <stop stop-color="#FFFFFF" offset="100%"></stop>
// </linearGradient>
// <polyline id="path-25" points="15.6686433 0.181159737 15.6686433 17.5308315 0.146006565 27.070919 15.6686433 0.181159737"></polyline>
// <linearGradient x1="91.1788064%" y1="103.253005%" x2="10.6299953%" y2="-0.915793988%" id="linearGradient-27">
// <stop stop-color="#FFFFFF" offset="0%"></stop>
// <stop stop-color="#FFFFFF" offset="100%"></stop>
// </linearGradient>
// <polyline id="path-28" points="0.146006565 9.58733042 15.6686433 0.0472428884 31.193884 9.58733042 0.146006565 9.58733042"></polyline>
// <linearGradient x1="173.571009%" y1="55.0278812%" x2="-68.1430848%" y2="45.1927865%" id="linearGradient-30">
// <stop stop-color="#FFFFFF" offset="0%"></stop>
// <stop stop-color="#FFFFFF" offset="100%"></stop>
// </linearGradient>
// <polyline id="path-31" points="0.0450109409 0.181159737 15.5702516 27.070919 0.0450109409 17.5308315 0.0450109409 0.181159737"></polyline>
// <linearGradient x1="91.1926231%" y1="103.253005%" x2="10.6167855%" y2="-0.915793988%" id="linearGradient-33">
// <stop stop-color="#FFFFFF" offset="0%"></stop>
// <stop stop-color="#FFFFFF" offset="100%"></stop>
// </linearGradient>
// </defs>
// <g id="Web" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
// <g id="Login" transform="translate(-641.000000, -70.000000)">
// <g id="Logo" transform="translate(641.000000, 70.000000)">
// <g id="Group-40" transform="translate(42.488654, 38.808917)">
//  <mask id="mask-2" fill="white">
//      <use xlinkHref="#path-1"></use>
//  </mask>
//  <g id="Clip-39"></g>
//  <polyline id="Fill-38" stroke="#035FB2" fill="url(#linearGradient-3)" mask="url(#mask-2)" points="0.0905798687 26.9751313 0.0905798687 9.62490153 15.6139606 0.085 0.0905798687 26.9751313"></polyline>
// </g>
// <g id="Group-43" transform="translate(27.051018, 38.808917)">
//  <mask id="mask-5" fill="white">
//      <use xlinkHref="#path-4"></use>
//  </mask>
//  <g id="Clip-42"></g>
//  <polyline id="Fill-41" stroke="#035FB2" fill="url(#linearGradient-6)" mask="url(#mask-5)" points="31.0515974 0.085 15.5282166 9.62490153 0.00371991247 0.085 31.0515974 0.085"></polyline>
// </g>
// <g id="Group-46" transform="translate(27.051018, 38.808917)">
//  <mask id="mask-8" fill="white">
//      <use xlinkHref="#path-7"></use>
//  </mask>
//  <g id="Clip-45"></g>
//  <polyline id="Fill-44" stroke="#035FB2" fill="url(#linearGradient-9)" mask="url(#mask-8)" points="15.5282166 26.9751313 0.00371991247 0.085 15.5282166 9.62490153 15.5282166 26.9751313"></polyline>
// </g>
// <g id="Group-49" transform="translate(26.865022, 9.235613)">
//  <mask id="mask-11" fill="white">
//      <use xlinkHref="#path-10"></use>
//  </mask>
//  <g id="Clip-48"></g>
//  <polyline id="Fill-47" stroke="#035FB2" fill="#FFFFFF" mask="url(#mask-11)" points="15.5789934 0.0392450766 15.5789934 17.3900328 0.0550547046 26.9293764 15.5789934 0.0392450766"></polyline>
// </g>
// <g id="Group-52" transform="translate(26.865022, 26.533206)">
//  <mask id="mask-13" fill="white">
//      <use xlinkHref="#path-12"></use>
//  </mask>
//  <g id="Clip-51"></g>
//  <polyline id="Fill-50" stroke="#035FB2" fill="#FFFFFF" mask="url(#mask-13)" points="0.0550547046 9.63178337 15.5789934 0.0924398249 31.1038621 9.63178337 0.0550547046 9.63178337"></polyline>
// </g>
// <g id="Group-55" transform="translate(42.302659, 9.235613)">
//  <mask id="mask-15" fill="white">
//      <use xlinkHref="#path-14"></use>
//  </mask>
//  <g id="Clip-54"></g>
//  <polyline id="Fill-53" stroke="#035FB2" fill="#FFFFFF" mask="url(#mask-15)" points="0.141356674 0.0392450766 15.6662254 26.9293764 0.141356674 17.3900328 0.141356674 0.0392450766"></polyline>
// </g>
// <path d="M26.9200766,36.1649891 L57.968884,36.1649891 L42.4440153,9.27485777 L26.9200766,36.1649891 Z M62.7095405,38.9011707 L22.1805361,38.9011707 L42.4440153,3.80305252 L62.7095405,38.9011707 L62.7095405,38.9011707 Z" id="Fill-56" fill="#FFFFFF" opacity="0"></path>
// <path d="M47.7303829,6.7023523 C47.7303829,9.65094092 45.3394092,12.0378228 42.3928665,12.0378228 C39.4483698,12.0378228 37.0573961,9.65094092 37.0573961,6.7023523 C37.0573961,3.75543764 39.4483698,1.36874179 42.3928665,1.36874179 C45.3394092,1.36874179 47.7303829,3.75543764 47.7303829,6.7023523" id="Fill-57" fill="#81ECFF"></path>
// <path d="M42.3928665,2.73599562 C40.204442,2.73599562 38.4257659,4.51578775 38.4257659,6.7023523 C38.4257659,8.89021882 40.204442,10.6698249 42.3928665,10.6698249 C44.582035,10.6698249 46.3633151,8.89021882 46.3633151,6.7023523 C46.3633151,4.51578775 44.582035,2.73599562 42.3928665,2.73599562 Z M42.3928665,13.4058206 C38.6969475,13.4058206 35.6890263,10.3986433 35.6890263,6.7023523 C35.6890263,3.00643326 38.6969475,0 42.3928665,0 C46.0908315,0 49.0987527,3.00643326 49.0987527,6.7023523 C49.0987527,10.3986433 46.0908315,13.4058206 42.3928665,13.4058206 L42.3928665,13.4058206 Z" id="Fill-58" fill="#FFFFFF"></path>
// <path d="M65.6741247,37.5314989 C65.6741247,40.4813895 63.2859409,42.8682713 60.3367943,42.8682713 C57.3922976,42.8682713 55.0033698,40.4813895 55.0033698,37.5314989 C55.0033698,34.5862582 57.3922976,32.1978884 60.3367943,32.1978884 C63.2859409,32.1978884 65.6741247,34.5862582 65.6741247,37.5314989" id="Fill-59" fill="#FFFFFE"></path>
// <path d="M60.3367943,33.5655142 C58.1496718,33.5655142 56.3724836,35.3451204 56.3724836,37.5314989 C56.3724836,39.7199234 58.1496718,41.5013895 60.3367943,41.5013895 C62.5257768,41.5013895 64.3072429,39.7199234 64.3072429,37.5314989 C64.3072429,35.3451204 62.5257768,33.5655142 60.3367943,33.5655142 Z M60.3367943,44.2366411 C56.6406893,44.2366411 53.635744,41.2296499 53.635744,37.5314989 C53.635744,33.8363239 56.6406893,30.8295186 60.3367943,30.8295186 C64.0340153,30.8295186 67.0432385,33.8363239 67.0432385,37.5314989 C67.0432385,41.2296499 64.0340153,44.2366411 60.3367943,44.2366411 L60.3367943,44.2366411 Z" id="Fill-60" fill="#1A4D83"></path>
// <path d="M29.8848468,37.5314989 C29.8848468,40.4800875 27.4946171,42.8669694 24.5478884,42.8669694 C21.6033917,42.8669694 19.21186,40.4800875 19.21186,37.5314989 C19.21186,34.5845842 21.6033917,32.1978884 24.5478884,32.1978884 C27.4946171,32.1978884 29.8848468,34.5845842 29.8848468,37.5314989" id="Fill-61" fill="#FFFFFE"></path>
// <path d="M24.5478884,33.5655142 C22.3596499,33.5655142 20.5807877,35.3451204 20.5807877,37.5314989 C20.5807877,39.7199234 22.3596499,41.4999015 24.5478884,41.4999015 C26.7370569,41.4999015 28.519267,39.7199234 28.519267,37.5314989 C28.519267,35.3451204 26.7370569,33.5655142 24.5478884,33.5655142 Z M24.5478884,44.2353392 C20.8506674,44.2353392 17.8442341,41.2281619 17.8442341,37.5314989 C17.8442341,33.8363239 20.8506674,30.8295186 24.5478884,30.8295186 C28.2452954,30.8295186 31.2537746,33.8363239 31.2537746,37.5314989 C31.2537746,41.2281619 28.2452954,44.2353392 24.5478884,44.2353392 L24.5478884,44.2353392 Z" id="Fill-62" fill="#1A4D83"></path>
// <g id="Group-65" transform="translate(9.009442, 39.924891)">
//  <mask id="mask-17" fill="white">
//      <use xlinkHref="#path-16"></use>
//  </mask>
//  <g id="Clip-64"></g>
//  <polyline id="Fill-63" stroke="#035FB2" fill="url(#linearGradient-18)" mask="url(#mask-17)" points="15.5890372 0.179857768 15.5890372 17.5300875 0.0664004376 27.0701751 15.5890372 0.179857768"></polyline>
// </g>
// <g id="Group-68" transform="translate(9.009442, 57.408479)">
//  <mask id="mask-20" fill="white">
//      <use xlinkHref="#path-19"></use>
//  </mask>
//  <g id="Clip-67"></g>
//  <polyline id="Fill-66" stroke="#035FB2" fill="url(#linearGradient-21)" mask="url(#mask-20)" points="0.0664004376 9.58658643 15.5890372 0.0464989059 31.1150219 9.58658643 0.0664004376 9.58658643"></polyline>
// </g>
// <g id="Group-71" transform="translate(24.447079, 39.924891)">
//  <mask id="mask-23" fill="white">
//      <use xlinkHref="#path-22"></use>
//  </mask>
//  <g id="Clip-70"></g>
//  <polyline id="Fill-69" stroke="#035FB2" fill="url(#linearGradient-24)" mask="url(#mask-23)" points="0.151400438 0.179857768 15.6773851 27.0701751 0.151400438 17.5300875 0.151400438 0.179857768"></polyline>
// </g>
// <path d="M9.07584245,66.9950656 L40.1244639,66.9950656 L24.5984792,40.1047484 L9.07584245,66.9950656 Z M44.8651204,69.7303173 L4.33574398,69.7303173 L24.5984792,34.6331291 L44.8651204,69.7303173 L44.8651204,69.7303173 Z" id="Fill-72" fill="#FFFFFF" opacity="0.0115094866"></path>
// <path d="M29.8848468,37.5314989 C29.8848468,40.4800875 27.4946171,42.8669694 24.5478884,42.8669694 C21.6041357,42.8669694 19.21186,40.4800875 19.21186,37.5314989 C19.21186,34.5845842 21.6041357,32.1978884 24.5478884,32.1978884 C27.4946171,32.1978884 29.8848468,34.5845842 29.8848468,37.5314989" id="Fill-73" fill="#81ECFF"></path>
// <path d="M24.5478884,33.5655142 C22.3596499,33.5655142 20.5807877,35.3451204 20.5807877,37.5314989 C20.5807877,39.7199234 22.3596499,41.4999015 24.5478884,41.4999015 C26.7370569,41.4999015 28.519267,39.7199234 28.519267,37.5314989 C28.519267,35.3451204 26.7370569,33.5655142 24.5478884,33.5655142 Z M24.5478884,44.2353392 C20.8527133,44.2353392 17.8442341,41.2281619 17.8442341,37.5314989 C17.8442341,33.8363239 20.8527133,30.8291466 24.5478884,30.8291466 C28.2452954,30.8291466 31.2537746,33.8363239 31.2537746,37.5314989 C31.2537746,41.2281619 28.2452954,44.2353392 24.5478884,44.2353392 L24.5478884,44.2353392 Z" id="Fill-74" fill="#FFFFFF"></path>
// <path d="M47.8298906,68.3613895 C47.8298906,71.3112801 45.4409628,73.6981619 42.4925602,73.6981619 C39.5473195,73.6981619 37.1583917,71.3112801 37.1583917,68.3613895 C37.1583917,65.4155908 39.5473195,63.027221 42.4925602,63.027221 C45.4409628,63.027221 47.8298906,65.4155908 47.8298906,68.3613895" id="Fill-75" fill="#FFFFFE"></path>
// <path d="M42.4925602,64.3950328 C40.3046937,64.3950328 38.5267615,66.174267 38.5267615,68.3613895 C38.5267615,70.549628 40.3046937,72.3305361 42.4925602,72.3305361 C44.6815427,72.3305361 46.4622648,70.549628 46.4622648,68.3613895 C46.4622648,66.174267 44.6815427,64.3950328 42.4925602,64.3950328 Z M42.4925602,75.0665317 C38.7964551,75.0665317 35.7907659,72.0587965 35.7907659,68.3613895 C35.7907659,64.6662144 38.7964551,61.6590372 42.4925602,61.6590372 C46.1892232,61.6590372 49.1975164,64.6662144 49.1975164,68.3613895 C49.1975164,72.0587965 46.1892232,75.0665317 42.4925602,75.0665317 L42.4925602,75.0665317 Z" id="Fill-76" fill="#1A4D83"></path>
// <path d="M12.0406127,68.3613895 C12.0406127,71.3092341 9.65038293,73.696674 6.70309628,73.696674 C3.75859956,73.696674 1.36762582,71.3092341 1.36762582,68.3613895 C1.36762582,65.4141028 3.75859956,63.027221 6.70309628,63.027221 C9.65038293,63.027221 12.0406127,65.4141028 12.0406127,68.3613895" id="Fill-77" fill="#81ECFF"></path>
// <path d="M6.70309628,64.3950328 C4.51467177,64.3950328 2.73525164,66.174267 2.73525164,68.3613895 C2.73525164,70.548326 4.51467177,72.3284902 6.70309628,72.3284902 C8.89207877,72.3284902 10.6728009,70.548326 10.6728009,68.3613895 C10.6728009,66.174267 8.89207877,64.3950328 6.70309628,64.3950328 Z M6.70309628,75.0652298 C3.00643326,75.0652298 0,72.0580525 0,68.3613895 C0,64.6662144 3.00643326,61.6590372 6.70309628,61.6590372 C10.4010613,61.6590372 13.4095405,64.6662144 13.4095405,68.3613895 C13.4095405,72.0580525 10.4010613,75.0652298 6.70309628,75.0652298 L6.70309628,75.0652298 Z" id="Fill-78" fill="#FFFFFF"></path>
// <g id="Group-81" transform="translate(44.720602, 39.924891)">
//  <mask id="mask-26" fill="white">
//      <use xlinkHref="#path-25"></use>
//  </mask>
//  <g id="Clip-80"></g>
//  <polyline id="Fill-79" stroke="#035FB2" fill="url(#linearGradient-27)" mask="url(#mask-26)" points="15.6686433 0.181159737 15.6686433 17.5308315 0.146006565 27.070919 15.6686433 0.181159737"></polyline>
// </g>
// <g id="Group-84" transform="translate(44.720602, 57.408479)">
//  <mask id="mask-29" fill="white">
//      <use xlinkHref="#path-28"></use>
//  </mask>
//  <g id="Clip-83"></g>
//  <polyline id="Fill-82" stroke="#035FB2" fill="url(#linearGradient-30)" mask="url(#mask-29)" points="0.146006565 9.58733042 15.6686433 0.0472428884 31.193884 9.58733042 0.146006565 9.58733042"></polyline>
// </g>
// <g id="Group-87" transform="translate(60.344234, 39.924891)">
//  <mask id="mask-32" fill="white">
//      <use xlinkHref="#path-31"></use>
//  </mask>
//  <g id="Clip-86"></g>
//  <polyline id="Fill-85" stroke="#035FB2" fill="url(#linearGradient-33)" mask="url(#mask-32)" points="0.0450109409 0.181159737 15.5702516 27.070919 0.0450109409 17.5308315 0.0450109409 0.181159737"></polyline>
// </g>
// <path d="M44.8666083,66.9958096 L75.9144858,66.9958096 L60.3892451,40.1060503 L44.8666083,66.9958096 Z M80.6545842,69.7318053 L40.1265098,69.7318053 L60.3892451,34.6336871 L80.6545842,69.7318053 L80.6545842,69.7318053 Z" id="Fill-88" fill="#FFFFFF" opacity="0.0115094866"></path>
// <path d="M65.6761707,37.5329869 C65.6761707,40.4808315 63.2853829,42.8682713 60.3380963,42.8682713 C57.3935996,42.8682713 55.0026258,40.4808315 55.0026258,37.5329869 C55.0026258,34.5857002 57.3935996,32.1984464 60.3380963,32.1984464 C63.2853829,32.1984464 65.6761707,34.5857002 65.6761707,37.5329869" id="Fill-89" fill="#81ECFF"></path>
// <path d="M60.3380963,33.5664442 C58.1496718,33.5664442 56.3704376,35.3458643 56.3704376,37.5329869 C56.3704376,39.7199234 58.1496718,41.4999015 60.3380963,41.4999015 C62.5285667,41.4999015 64.3085449,39.7199234 64.3085449,37.5329869 C64.3085449,35.3458643 62.5285667,33.5664442 60.3380963,33.5664442 Z M60.3380963,44.2366411 C56.6414333,44.2366411 53.635,41.2296499 53.635,37.5329869 C53.635,33.8368818 56.6414333,30.8304486 60.3380963,30.8304486 C64.0362473,30.8304486 67.0445405,33.8368818 67.0445405,37.5329869 C67.0445405,41.2296499 64.0362473,44.2366411 60.3380963,44.2366411 L60.3380963,44.2366411 Z" id="Fill-90" fill="#FFFFFF"></path>
// <path d="M83.6200985,68.3621335 C83.6200985,71.3120241 81.2319147,73.6994639 78.2825821,73.6994639 C75.3373414,73.6994639 72.9485996,71.3120241 72.9485996,68.3621335 C72.9485996,65.4168928 75.3373414,63.027965 78.2825821,63.027965 C81.2319147,63.027965 83.6200985,65.4168928 83.6200985,68.3621335" id="Fill-91" fill="#81ECFF"></path>
// <path d="M78.2825821,64.3963348 C76.0956455,64.3963348 74.3167834,66.1750109 74.3167834,68.3621335 C74.3167834,70.550372 76.0956455,72.3310941 78.2825821,72.3310941 C80.4723085,72.3310941 82.2522867,70.550372 82.2522867,68.3621335 C82.2522867,66.1750109 80.4723085,64.3963348 78.2825821,64.3963348 Z M78.2825821,75.0670897 C74.587221,75.0670897 71.5815317,72.0593545 71.5815317,68.3621335 C71.5815317,64.6665864 74.587221,61.6601532 78.2825821,61.6601532 C81.9798031,61.6601532 84.9877243,64.6665864 84.9877243,68.3621335 C84.9877243,72.0593545 81.9798031,75.0670897 78.2825821,75.0670897 L78.2825821,75.0670897 Z" id="Fill-92" fill="#FFFFFF"></path>
// <path d="M47.8313786,68.3621335 C47.8313786,71.3105361 45.4396608,73.6974179 42.4931182,73.6974179 C39.5478775,73.6974179 37.1570897,71.3105361 37.1570897,68.3621335 C37.1570897,65.4155908 39.5478775,63.027965 42.4931182,63.027965 C45.4396608,63.027965 47.8313786,65.4155908 47.8313786,68.3621335" id="Fill-93" fill="#81ECFF"></path>
// <path d="M42.4931182,64.3963348 C40.3046937,64.3963348 38.5252735,66.1750109 38.5252735,68.3621335 C38.5252735,70.549628 40.3046937,72.3297921 42.4931182,72.3297921 C44.6828446,72.3297921 46.4635667,70.549628 46.4635667,68.3621335 C46.4635667,66.1750109 44.6828446,64.3963348 42.4931182,64.3963348 Z M42.4931182,75.0665317 C38.7964551,75.0665317 35.7900219,72.0593545 35.7900219,68.3621335 C35.7900219,64.6665864 38.7964551,61.6601532 42.4931182,61.6601532 C46.1910832,61.6601532 49.1997484,64.6665864 49.1997484,68.3621335 C49.1997484,72.0593545 46.1910832,75.0665317 42.4931182,75.0665317 L42.4931182,75.0665317 Z" id="Fill-94" fill="#FFFFFF"></path>
// </g>
// </g>
// </g>
// </svg>
//                 <p className='text-white mt-2'>Online Project Mangement</p>
//             </div>
//             <div className="container d-flex justify-content-center align-items-center" style={{ height: "90vh" }}>
//     <div className="card mx-1 mx-md-5 shadow-5-strong bg-body-tertiary">
//         <div className="card-body py-5">
//             <div className="row d-flex justify-content-center">
//                 <div className="col-lg-12 col-12">
//                     <p className="mb-4 h5 ">Login to get started</p>
//                     <div className="col-12 mt-3 mb-4">
//                         <form>
//                             <div className="p-0 bg-white mt-5 labellogin" style={{ borderRadius: "10px" }}>
//                                 <label htmlFor="uname" style={{ color: formerror.uname ? 'red' : '#a2a2a2' }}>Email</label>
//                                 <input
//                                     type="text"
//                                     name="uname"
//                                     required
//                                     className={`w-100 p-2 ${formerror.uname ? 'border-danger' : 'border-secondary'}`}
//                                     id="uname"
//                                     value={formValues.uname}
//                                     onChange={handleChange}
//                                     style={{ fontSize: "18px" }}
//                                 />
//                                 <p className='font-weight-normal text-danger mt-0'>{formerror.uname}</p>

//                                 <label htmlFor="password" style={{ color: formerror.password ? 'red' : '#a2a2a2' }} className="mt-3">Password</label>
//                                 <div className="d-flex align-items-center">
//                                     <input
//                                         type={showPassword ? "text" : "password"}
//                                         name="password"
//                                         required
//                                         className={`w-100 p-2 ${formerror.password ? 'border-danger' : 'border-secondary'}`}
//                                         id="password"
//                                         value={formValues.password}
//                                         onChange={handleChange}
//                                         style={{ fontSize: "18px" }}
//                                     />
//                                     <span onClick={togglePasswordVisibility} style={{ cursor: "pointer", marginLeft: "-30px" }}>
//                                         {showPassword ? (
//                                             <i className="fa fa-eye-slash" aria-hidden="true"></i>
//                                         ) : (
//                                             <i className="fa fa-eye" aria-hidden="true"></i>
//                                         )}
//                                     </span>
//                                 </div>
//                              <span>
//                                 <p className='font-weight-normal text-danger mt-0'>{formerror.password}</p>

//                                 <div className="position-relative mt-0">
//                                     <a href="#" className='position-relative' style={{ left: "110px",fontSize:"14px",top:"-20px"}}>Forget password?</a>
//                                 </div>

//                                 <button style={{backgroundColor:"#035FB2",color:"white"}} className="btn btn- mt-5 font-weight-bold mb-0" onClick={handleSubmit} type="submit">Login</button>
//                                 </span>
//                             </div>
                       
//                             {formerror.invalid && <p>{formerror.invalid}</p>}
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>

//         </section>
//     );
// }

// export default Login;







  // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     const isValid = validate(formValues);

    //     if (isValid) {
    //         try {
    //             const result = await axios.post('http://localhost:8080/login', formValues);
    //             if (result.data.length >= 1) {
    //                 console.log(result.data[0]);
    //                 sessionStorage.setItem("data", true);
    //                 redirect('/dashbord');
    //             } else {
    //                 setformerror({ invalid: "Invalid Username or Password" });

    //             }
    //         } catch (error) {
    //             console.error("Login failed:", error);
    //             setformerror({ invalid: "Login failed, please try again later." });
    //         }
    //     }
    // };

