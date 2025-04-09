import React from "react";
const kbArray = [
    {
        "kbId": 1,
        "kbTitle": "Innovative Practices",
        "kbNumber": 500,
    },
    {
        "kbId": 2,
        "kbTitle": "Publications",
        "kbNumber": 20,
    },
    {
        "kbId": 3,
        "kbTitle": "Events",
        "kbNumber": 50,
    },
    {
        "kbId": 4,
        "kbTitle": "Replications",
        "kbNumber": 5,
    },
    {
        "kbId": 5,
        "kbTitle": "Focus Areas",
        "kbNumber": 4,
    },
    {
        "kbId": 6,
        "kbTitle": "Projects",
        "kbNumber": 15,
    }
];

export default function ComponentKnowledgeBank() {
    return (
        <div className="container flex flex-col flex-wrap justify-center align-middle transition-all duration-1000 ease-in-out">
            <div className="text-center text-4xl font-bold mb-12">Some fun facts about us</div>
            <div className="flex flex-row flex-wrap justify-center align-middle">
                {
                    kbArray.map(kbdata => (
                        <div key={kbdata.kbId} className="flex flex-col justify-center align-middle xs:w-1/2 sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 2xl:w-1/3 text-center transition-all duration-1000 ease-in-out">
                            <div className="font-extralight text-6xl mb-4">{kbdata.kbNumber}</div>
                            <div className="uppercase font-semibold xs:mb-10 sm:mb-10 md:mb-10 lg:mb-7 xl:mb-7 2xl:mb-10 text-lg">{kbdata.kbTitle}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}