import React from "react";

export default function WebFooter() {
    return (
        <div id="footer" className="border-t-stone-500 border-t-4 bg-stone-700 text-white pt-4">
            <div id="footer-nav" className="w-11/12 m-auto mb-2 flex xs:flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row leading-8 gap-5">
                <div className="xs:w-full sm:w-full md:w-full lg:w-1/3 xl:w-1/3 2xl:w-1/3">
                    <div className="font-bold text-xl">Centre for Innovations in Public Systems (CIPS)</div>
                    <p>College Park Campus (CPC) of Administrative Staff College of India (ASCI)</p>
                    <p>Road No. 3, Banjara Hills, Hyderabad - 500 034, India</p>
                    <p>Phone: +91 40 66720720 | Fax: +91 40 66720721</p>
                    <p>E-mail: mail2director@cips.org.in</p>
                </div>
                <div className="xs:w-full sm:w-full md:w-full lg:w-1/3 xl:w-1/3 2xl:w-1/3">
                    <ul>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Opportunities</a></li>
                        <li><a href="#">Website Policies</a></li>
                        <li><a href="#">Disclaimer</a></li>
                        <li><a href="#">Webmail</a></li>
                    </ul>
                </div>
                <div className="xs:w-full sm:w-full md:w-full lg:w-1/3 xl:w-1/3 2xl:w-1/3">
                    <ul>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Opportunities</a></li>
                        <li><a href="#">Website Policies</a></li>
                        <li><a href="#">Disclaimer</a></li>
                        <li><a href="#">Webmail</a></li>
                    </ul>
                </div>
            </div>
            <div id="footer-social" className="bg-stone-900 text-center">
                <div className="w-11/12 m-auto flex flex-row justify-center align-middle gap-5 text-lg [&>*]:transition-all [&>*]:duration-1000 [&>*]:ease-in-out [&>*]:hover:bg-stone-950">
                    <a href="#" className="size-15 flex flex-col align-middle justify-center"><i className="bi bi-facebook"></i></a>
                    <a href="#" className="size-15 flex flex-col align-middle justify-center"><i className="bi bi-twitter-x"></i></a>
                    <a href="#" className="size-15 flex flex-col align-middle justify-center"><i className="bi bi-youtube"></i></a>
                    <a href="#" className="size-15 flex flex-col align-middle justify-center"><i className="bi bi-linkedin"></i></a>
                </div>
            </div>
            <div id="footer-bottom" className="bg-stone-950">
                <div className="w-11/12 m-auto text-center py-5">
                    <p>Disclaimer: This website is designed by Mohammed Ahmed.</p>
                </div>
            </div>
        </div>
    );
}