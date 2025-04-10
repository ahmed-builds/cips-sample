import React from "react";
import PageSlider from "../slider/page-slider";

const awardImages = [
    { imgLink: 'https://images.unsplash.com/photo-1554941426-e9604e34bc94', imgAltText: '', imgDescription: 'Description 1', imgTitle: 'T1' },
    { imgLink: 'https://images.unsplash.com/photo-1518972458649-b0f242a400ff', imgAltText: '', imgDescription: 'Description 2', imgTitle: 'T2' },
    { imgLink: 'https://images.unsplash.com/photo-1554941426-a965fb2b9258', imgAltText: '', imgDescription: 'Description 3', imgTitle: 'T3' },
    { imgLink: 'https://images.unsplash.com/photo-1535406208535-1429839cfd13', imgAltText: '', imgDescription: 'Description 4', imgTitle: 'T4' },
    { imgLink: 'https://images.unsplash.com/photo-1685900464809-5edadb95da37', imgAltText: '', imgDescription: '', imgTitle: 'T5' }
  ]

export default function ComponentAwards() {
    return (
        <div className="w-11/12 m-auto transition-all duration-1000 ease-in-out">
            <div className="text-center text-4xl font-bold mb-5 transition-all duration-1000 ease-in-out">CIPS Awarding Innovations</div>
            <div className="flex xs:flex-col-reverse sm:flex-col-reverse md:flex-col-reverse lg:flex-col-reverse xl:flex-row 2xl:flex-row gap-5">
                <div className="flex flex-col justify-center text-lg leading-8 xs:text-center sm:text-center md:text-center lg:text-center xl:text-justify 2xl:text-justify xs:w-full sm:w-full md:w-full lg:w-full xl:w-1/3 2xl:w-1/3">
                    <p className="mb-5">
                        We are dedicated to accelerating and spreading innovative solutions within public systems across India. We aim to identify, promote, and replicate successful innovations that can make a difference at the national level. CIPS is honoring outstanding innovations in Education, Environment, Health, Information Technology, and Rural Development. The awards recognize initiatives led by government agencies, PSUs, NGOs, private organizations, and individuals in border districts, Union Territories, Northeastern States, and Hill States.
                    </p>
                    <p>
                        <span className="font-bold">Eligibility:</span> Innovations should be operational for 2 to 5 years and have the potential for replication
                    </p>
                </div>
                <div className="text-lg leading-8 text-center xs:w-full sm:w-full md:w-full lg:full xl:w-2/3 2xl:w-2/3">
                    <PageSlider sliderImages={awardImages} customHeight={`500px`}/>
                </div>
            </div>
        </div>
    );
}