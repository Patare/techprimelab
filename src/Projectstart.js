import React from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router';
import {useEffect} from 'react';

const Projectstart = () => {
    const redi=useNavigate();
    const params=useParams();
    useEffect(()=>{
        loaduser();
    });
    var id=params.id;
    const loaduser=async()=>{
        await axios.post(`http://localhost:8080/projectstart/${id}`)
        .then(res => {
            redi('/projectlist');
        })
    }
    return (
        <>
        </>
    );
}

export default Projectstart;
