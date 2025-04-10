import React from "react";
import Pages from "../layout/pages/pages";
import { Outlet, useParams } from "react-router-dom";

export function AboutPageComponent() {
    return (
        <div className="w-11/12 m-auto flex xs:flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row justify-center align-middle py-4 transition-all duration-1000 ease-in-out gap-4">
            <div className="xs:w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 2xl:w-1/2 xs:mb-4 sm:mb-4 md:mb-4 transition-all duration-1000 ease-in-out">
                <img src={`${process.env.PUBLIC_URL}/images/CIPS-Building.jpg`} alt="CIPS Office" className="object-center object-cover w-full h-auto" width='100%' height='100%'/>
            </div>
            <div className="flex flex-col justify-center align-middle xs:w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 2xl:w-1/2 transition-all duration-1000 ease-in-out">
                <div className="text-center text-4xl font-bold mb-5">About Us</div>
                <div className="text-center text-lg leading-8">
                    <p className="mb-4">
                        At CIPS, we believe in the power of innovation to revolutionize governance. From improving service delivery to creating cost-effective solutions, our mission is to make public systems smarter, faster, and more efficient. We empower states to adopt cutting-edge practices that drive sustainable development in key sectors like health, education, and governance.
                    </p>
                    <p>
                        With the support of the Thirteenth Finance Commission, we serve as a hub for collaboration, sharing success stories, and pioneering practices that make a real difference. Together, we're shaping the future of public systems.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default function PageAbout() {
    const pageParams = useParams();

    return (
        <Pages
            pageContent={pageParams ? <Outlet /> : <AboutPageComponent />}
        />
    );
}