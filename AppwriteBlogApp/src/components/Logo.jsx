import React from "react";
import Logoimg from "../../assets/logoimg.png"

function Logo({ width = "100px" }) {
    return (
        <div>
            <img src={Logoimg} alt="Logo" className="w-24"></img>
        </div>
    )
}

export default Logo;