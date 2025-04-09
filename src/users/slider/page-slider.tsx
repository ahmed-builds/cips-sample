import React, { useEffect, useState } from "react";

interface SliderImageProp {
    imgLink: string;
    imgAltText: string;
    imgDescription: string;
    imgTitle: string;
}

interface PageSliderProps {
    sliderImages: SliderImageProp[];
    customHeight: string;
}

export default function PageSlider({ sliderImages, customHeight }: PageSliderProps) {

    const [showImage, setShowImage] = useState(0);
    const nextImage = () => {
        setShowImage((prev) => (prev + 1) % sliderImages.length);
    }
    const prevImage = () => {
        setShowImage((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
    }

    useEffect(() => {
        const interval = setInterval(nextImage, 10000); // Change image every 10 seconds
        return () => clearInterval(interval);
    });

    return (
        <div
            style={{
                minHeight: `${customHeight}`,
                position: 'relative'
            }}
        >
            {/* Left Arrow Button */}
            <button
                className="absolute top-1/2 z-10 left-0 transition-all duration-500 transform -translate-y-1/2 hover:cursor-pointer p-2 hover:bg-red-600"
                onClick={prevImage}
            >
                <i className="bi bi-chevron-left text-2xl text-white"></i>
            </button>
            {
                sliderImages.map((image, index) => (
                    <div key={index} style={{
                        minHeight: `${customHeight}`,
                        position: 'absolute',
                        width: '100%'
                    }}>
                        <img
                            src={image.imgLink}
                            alt={image.imgAltText}
                            className={`absolute top-0 left-0 object-center object-cover z-0
                                ${showImage === index ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000 ease-in-out h-full`}
                            style={{
                                minWidth: '100%',
                            }}
                        />
                        <div className="absolute bottom-10 w-full">

                            {image.imgTitle && showImage === index && (
                                <div
                                    className="w-full text-center text-white font-bold bg-black/40 py-2 text-xl"
                                    style={{ zIndex: showImage === index ? 9 : 0 }}
                                >
                                    {image.imgTitle}
                                </div>
                            )}
                            {image.imgDescription && showImage === index && (
                                <div
                                    className="w-full text-center text-white bg-black/40 py-2"
                                    style={{ zIndex: showImage === index ? 9 : 0 }}
                                >
                                    {image.imgDescription}
                                </div>
                            )}
                        </div>
                    </div>
                ))
            }
            <div className="absolute bottom-1 text-white z-9 w-full text-center flex flex-row gap-2 justify-center">
                {
                    sliderImages.map((image, index) => (
                        <span key={index} onClick={() => { setShowImage(index) }} className="hover:cursor-pointer">
                            <i className={`bi ${showImage === index ? 'bi-circle-fill' : 'bi-circle'} transition-all duration-700`}></i>
                        </span>
                    ))
                }
            </div>
            {/* Right Arrow Button */}
            <button
                className="absolute top-1/2 z-10 right-0 transition-all duration-500 transform -translate-y-1/2 hover:cursor-pointer p-2 hover:bg-red-600"
                onClick={nextImage}
            >
                <i className="bi bi-chevron-right text-2xl text-white"></i>
            </button>
        </div>
    );
}
