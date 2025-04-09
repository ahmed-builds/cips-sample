import React from "react";

export default function ComponentReach() {
    return (
        <form action="" className="flex flex-col gap-4 w-full">
            <div className="flex flex-col w-full">
                <input type="text" name="reachName" id="reachName" className="w-full p-2 border-1 border-gray-100" placeholder="Name*"/>
            </div>
            <div className="flex flex-col w-full">
                <input type="email" name="reachMail" id="reachMail" className="w-full p-2 border-1 border-gray-100" placeholder="eMail*"/>
            </div>
            <div className="flex flex-col w-full">
                <input type="text" name="reachNumber" id="reachNumber" className="w-full p-2 border-1 border-gray-100" placeholder="Contact*"/>
            </div>
            <div className="flex flex-col w-full">
                <textarea name="reachMessage" id="reachMessage" className="w-full p-2 border-1 border-gray-100 resize-none" rows={7} placeholder="Message*"/>
            </div>
            <div className="flex flex-col w-full">
                <button type="submit" className="p-2 text-white bg-red-600 hover:bg-red-800 hover:cursor-pointer transition-all duration-1000 ease-in-out">Send <i className="bi bi-send"></i></button>
            </div>
        </form>
    );
}