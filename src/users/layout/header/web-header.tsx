import React from "react";
import { useDispatch } from "react-redux";
import { reducerToggleButton } from "../menu/menu-slicer";
import '../menu/menu.css';

export default function WebHeader() {
    
    const dispatch = useDispatch();
    function toggleMenuBtn() {
        dispatch(reducerToggleButton('open'));
    }

    return (
        <>
            <div id="brand" className="w-11/12 m-auto mb-2 min-h-25 flex xs:flex-row sm:flex-row md:flex-row lg:flex-row xl:flex-row 2xl:flex-row xs:gap-3 sm:gap-3 md:gap-3 lg:gap-3 xl:gap-3 2xl-gap-3">

                <div id="siteIdentity" className="flex xs:flex-col sm:flex-row md:flex-row lg:flex-row 2xl:flex-row xs:w-10/12 sm:w-10/12 md:w-10/12 lg:w-3/4 2xl:w-1/2 gap-2 justify-center align-middle">
                    <div id="siteLogo" className="flex flex-col justify-center min-w-20">
                        <img src={`${process.env.PUBLIC_URL}/images/site-logo.png`} alt="CIPS Logo" width='100%' className="xs:size-20" />
                    </div>

                    <div id="siteTitle" className="flex flex-col justify-center gap-1">
                        <div className="text-2xl font-bold text-red-600">
                            Centre for Innovations in Public Systems (CIPS)
                        </div>
                        <div className="text-md font-semibold text-blue-600">
                            (An Autnomous Centre of Administrative Staff College of India Established by the Government of India)
                        </div>
                    </div>
                </div>

                <div id="mobileMenuButton" className="2xl:hidden xl:hidden lg:hidden md:block sm:block xs:block xs:w-2/12 sm:w-2/12 md:w-2/12 text-center">
                    <button className="bi bi-menu-button text-white bg-red-600 hover:bg-red-800 hover:cursor-pointer text-center hover:transition-all hover:ease-in-out hover:duration-700 size-20 text-3xl" onClick={()=>{toggleMenuBtn()}}></button>
                </div>

                <div id="siteNotifications" className="xs:hidden sm:hidden md:hidden lg:flex xl:flex 2xl:flex lg:w-1/4 xl:w-1/2 2xl:w-1/2 justify-center align-middle text-center">
                    Imp Notifications
                </div>
            </div>
        </>
    );
}