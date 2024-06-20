import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import authService from "../../appwrite/auth"
import { logout } from "../../store/authSlice"
import Skeleton from "../Skeleton"


function LogoutBtn() {
    const [loading, setLoading] = useState(false)
    let authStatus = useSelector(state => state.auth.status)
    const dispatch = useDispatch();
    const logoutHandler = () => {
        setLoading(true)
        authService.logout().then(() => {
            dispatch(logout())
            authStatus = false
            console.log("authstatus is ", authStatus);
        })
        setLoading(false)
    }

    if (loading) {
        return (
            <div><Skeleton /></div>
        )
    }
    return (
        <button className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
            onClick={logoutHandler}
        >
            Logout
        </button>
    )
}

export default LogoutBtn