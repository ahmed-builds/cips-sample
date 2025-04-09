import React from "react";

export default function TopBar(){
    return(
        <div id="topbar" className="min-h-10 bg-stone-700 text-white flex flex-row w-full justify-center align-middle mb-2">
            <div className="container flex flex-row justify-end gap-2">
                <div><a href="">Login</a></div>
                <div>/</div>
                <div><a href="">Register</a></div>
            </div>
        </div>
    );
}