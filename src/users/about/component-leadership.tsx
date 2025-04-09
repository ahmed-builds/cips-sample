import React from "react";
const leadershipArray = [
    {
        'leaderID': 1,
        'leaderName': 'Shri. K Padmanabhaiah',
        'leaderDesg': 'Chairman, Advisory Council - CIPS',
        'leaderAdDg': 'Chairperson, CoG - ASCI & Former Home Secretary, GoI',
        'leaderAddn': 'IAS (Retd.)',
        'leaderImag': 'Padmanabhaiah.jpeg'
    },
    {
        'leaderID': 2,
        'leaderName': 'Dr. N Ramesh Kumar',
        'leaderDesg': 'Chairman, Steering Committee - CIPS',
        'leaderAdDg': 'Director General, ASCI',
        'leaderAddn': 'IAS (Retd.)',
        'leaderImag': 'drnrameshkumar.webp'
    },
    {
        'leaderID': 3,
        'leaderName': 'Dr. Valli Manickam',
        'leaderDesg': 'Director (i/c), CIPS',
        'leaderAdDg': 'Professor & Centre Director, Centre for Innovation and Technology, Dean of Research and Management Studies',
        'leaderAddn': '',
        'leaderImag': 'Dr-Valli-Manickam.png'
    }
];

export default function ComponentLeaderShip() {
    return (
        <div className="flex flex-col justify-center align-middle transition-all duration-1000 ease-in-out">
            <div className="text-center text-4xl font-bold mb-5 transition-all duration-1000 ease-in-out">Leadership</div>
            <div className="container flex xs:flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row justify-center align-middle gap-5 transition-all duration-1000 ease-in-out">

                {
                    leadershipArray.map((leader, index) => (
                        <div key={index} className="flex xs:w-full sm:w-full md:w-full lg:w-1/3 xl:w-1/3 2xl:w-1/3 xs:flex-row sm:flex-row md:flex-row lg:flex-col xl:flex-col 2xl:flex-col transition-all duration-1000 ease-in-out">
                            <div className="mb-4 text-center flex justify-center align-middle xs:w-1/3 sm:w-1/3 md:w-1/3 lg:w-full xl:w-full 2xl:w-full transition-all duration-1000 ease-in-out">
                                <img
                                    src={`${process.env.PUBLIC_URL}/images/${leader.leaderImag}`} alt={`${leader.leaderName}`}
                                    className="rounded-3xl size-45 object-center object-cover xs:mr-5 sm:mr-5 md:mr-5 shadow-gray-600 shadow-md"
                                />
                            </div>
                            <div className="flex flex-col xs:text-left sm:text-left md:text-left lg:text-center xl:text-center 2xl:text-center justify-center xs:w-2/3 sm:w-2/3 md:w-2/3 lg:w-full xl:w-full 2xl:w-full transition-all duration-1000 ease-in-out">
                                <div>
                                    <span className="font-bold text-xl">{leader.leaderName}</span>
                                    {leader.leaderAddn && (
                                        `, ${leader.leaderAddn}`
                                    )}
                                </div>
                                <div className="font-extralight text-md">
                                    {leader.leaderDesg}
                                </div>
                                <div className="font-extralight text-md">
                                    {leader.leaderAdDg}
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}