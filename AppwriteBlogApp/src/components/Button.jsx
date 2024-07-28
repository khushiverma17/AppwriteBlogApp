import React from "react";

function Button({
    children,
    type = 'button',
    bgColor = 'bg-blue-600',
    textColor = 'text-white',
    className = "",
    ...props
}) {
    return (
        <button className={`px-4 py-2 rounded-lg bg-[#1e4767] hover:bg-[#2a6b9d] active:bg-[#184356] ${textColor} ${className}`} {...props}>{children}</button>
    )
}
export default Button


