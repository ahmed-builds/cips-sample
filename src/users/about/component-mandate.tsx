import React from "react";
const mandateArray = [
    {
        "mandate_id": 1,
        "mandate_icon": "https://images.unsplash.com/photo-1554941426-e9604e34bc94",
        "mandate_alt": "1",
        "mandate_title": "identify",
        "mandate_desc": "description",
        "mandate_color": 50
    },
    {
        "mandate_id": 2,
        "mandate_icon": "https://images.unsplash.com/photo-1518972458649-b0f242a400ff",
        "mandate_alt": "2",
        "mandate_title": "document",
        "mandate_desc": "description",
        "mandate_color": 100
    },
    {
        "mandate_id": 3,
        "mandate_icon": "https://images.unsplash.com/photo-1554941426-a965fb2b9258",
        "mandate_alt": "3",
        "mandate_title": "disseminate",
        "mandate_desc": "description",
        "mandate_color": 200
    },
    {
        "mandate_id": 4,
        "mandate_icon": "https://images.unsplash.com/photo-1535406208535-1429839cfd13",
        "mandate_alt": "4",
        "mandate_title": "replicate",
        "mandate_desc": "description",
        "mandate_color": 300
    }
];
export default function ComponentMandate() {
    return (
        <div className="flex flex-row justify-between align-middle flex-wrap transition-all duration-1000 ease-in-out">
            {
                mandateArray.map(mandate => (
                    <div key={mandate.mandate_id} className={`flex flex-col justify-center align-middle xs:w-1/2 sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 2xl:w-1/4 min-h-80 bg-slate-${mandate.mandate_color} text-center p-4 hover:border-b-5 hover:border-red-800 border-transparent border-b-5`}>
                        <div className="flex flex-row justify-center align-middle text-center mb-4"><img src={`${mandate.mandate_icon}`} alt={`${mandate.mandate_alt}`} className="rounded-full size-30" /></div>
                        <div className="uppercase font-bold text-xl text-red-700 mb-2">{mandate.mandate_title}</div>
                        <div className="text-center">{mandate.mandate_desc}</div>
                    </div>
                ))
            }
        </div>

    );
}