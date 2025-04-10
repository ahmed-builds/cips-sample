import React from "react";
export default function ComponentMandate() {
    return (
        <div className="flex flex-row justify-between align-middle flex-wrap transition-all duration-1000 ease-in-out">
            <div className={`flex flex-col justify-center align-middle xs:w-1/2 sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 2xl:w-1/4 min-h-80 bg-slate-50 text-center p-4 hover:border-b-5 hover:border-red-800 border-transparent border-b-5`}>
                <div className="flex flex-row justify-center align-middle text-center mb-4">
                    <img src="https://images.unsplash.com/photo-1554941426-e9604e34bc94" alt="Identify" className="rounded-full size-30" />
                </div>
                <div className="uppercase font-bold text-xl text-red-700 mb-2">Identify</div>
                <div className="text-center">Identify Description</div>
            </div>
            <div className={`flex flex-col justify-center align-middle xs:w-1/2 sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 2xl:w-1/4 min-h-80 bg-slate-100 text-center p-4 hover:border-b-5 hover:border-red-800 border-transparent border-b-5`}>
                <div className="flex flex-row justify-center align-middle text-center mb-4">
                    <img src="https://images.unsplash.com/photo-1518972458649-b0f242a400ff" alt="Document" className="rounded-full size-30" />
                </div>
                <div className="uppercase font-bold text-xl text-red-700 mb-2">Document</div>
                <div className="text-center">Document Description</div>
            </div>
            <div className={`flex flex-col justify-center align-middle xs:w-1/2 sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 2xl:w-1/4 min-h-80 bg-slate-200 text-center p-4 hover:border-b-5 hover:border-red-800 border-transparent border-b-5`}>
                <div className="flex flex-row justify-center align-middle text-center mb-4">
                    <img src="https://images.unsplash.com/photo-1554941426-a965fb2b9258" alt="Disseminate" className="rounded-full size-30" />
                </div>
                <div className="uppercase font-bold text-xl text-red-700 mb-2">Disseminate</div>
                <div className="text-center">Disseminate Description</div>
            </div>
            <div className={`flex flex-col justify-center align-middle xs:w-1/2 sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 2xl:w-1/4 min-h-80 bg-slate-300 text-center p-4 hover:border-b-5 hover:border-red-800 border-transparent border-b-5`}>
                <div className="flex flex-row justify-center align-middle text-center mb-4">
                    <img src="https://images.unsplash.com/photo-1535406208535-1429839cfd13" alt="Replicate" className="rounded-full size-30" />
                </div>
                <div className="uppercase font-bold text-xl text-red-700 mb-2">Replicate</div>
                <div className="text-center">Replicate Description</div>
            </div>
        </div>
    );
}