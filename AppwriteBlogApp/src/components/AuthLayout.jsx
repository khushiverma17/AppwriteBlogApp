import React from "react";
import { useState} from "react";
import {useNavigate} from "react-router-dom"
import {useSelector } from "react-redux"
import { useEffect } from "react";

//this is a mechanism how to protect our pages and routes

export default function Protected({children, authentication = true}){
    const navigate= useNavigate();
    const [loader, setLoader]= useState(true)

    //check from store if the user is logged in or not
    const authStatus= useSelector(state=>state.auth.status)


    useEffect(()=>{
        // if(user is saying it is true(authentication) && checking from store)
        if(authentication && authStatus!==authentication){
            navigate("/login")
        }
        else if(!authentication && authStatus!==authentication){
            navigate("/")
        }
        setLoader(false);
    },[authStatus, navigate, authentication])

    return (
        loader ? <div>Loading...</div> : <>{children}</>
    )
}