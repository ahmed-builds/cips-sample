import React, { Suspense, useEffect } from "react";
import PageSlider from "../slider/page-slider";
import { useSelector } from "react-redux";

// Lazy load components
const ComponentAboutPage = React.lazy(() => import('../about/component-about').then(module => ({ default: module.AboutPageComponent })));
const ComponentMandate = React.lazy(() => import('../about/component-mandate'));
const ComponentKnowledgeBank = React.lazy(() => import('../knowledge-bank/component-kb'));
const ComponentAwards = React.lazy(() => import('../awards/component-awards'));
const ComponentLeaderShip = React.lazy(() => import('../about/component-leadership'));
const ComponentReach = React.lazy(() => import('../reach/component-reach'));

const images = [
  { imgLink: 'https://images.unsplash.com/photo-1554941426-e9604e34bc94', imgAltText: '', imgDescription: 'Description 1', imgTitle: 'T1' },
  { imgLink: 'https://images.unsplash.com/photo-1518972458649-b0f242a400ff', imgAltText: '', imgDescription: 'Description 2', imgTitle: 'T2' },
  { imgLink: 'https://images.unsplash.com/photo-1554941426-a965fb2b9258', imgAltText: '', imgDescription: 'Description 3', imgTitle: 'T3' },
  { imgLink: 'https://images.unsplash.com/photo-1535406208535-1429839cfd13', imgAltText: '', imgDescription: 'Description 4', imgTitle: 'T4' },
  { imgLink: 'https://images.unsplash.com/photo-1685900464809-5edadb95da37', imgAltText: '', imgDescription: '', imgTitle: 'T5' }
]

// Error Boundary Component
const ErrorBoundary = ({ children }: any) => {
  return (
    <ErrorBoundary fallback={<div>Something went wrong while loading content.</div>}>
      {children}
    </ErrorBoundary>
  );
};



export default function HomePage() {
  const sliderHeight: number = useSelector((storeHeader: any) => storeHeader.header.stateHeaderSize);
  useEffect(() => {
    const handleScrollToHash = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    // Scroll on initial page load if a hash is present
    handleScrollToHash();

    // Listen for changes in the hash (anchor links)
    window.addEventListener('hashchange', handleScrollToHash);

    // Clean up event listener on component unmount
    return () => window.removeEventListener('hashchange', handleScrollToHash);
  }, []);

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <section id="slider" className="min-h-full">
          <PageSlider sliderImages={images} customHeight={`calc(100vh - ${sliderHeight}px)`} />
        </section>
        <section id="cips_mandate" className="min-h-80">
          <ComponentMandate />
        </section>
        <section id="about" className="py-15 min-h-150 flex flex-row">
          <ComponentAboutPage />
        </section>
        <section id="kb" className="bg-blue-700/30 py-10 min-h-150 flex flex-row ">
          <ComponentKnowledgeBank />
        </section>
        <section id="leadership" className="py-15 min-h-150 flex flex-row">
          <ComponentLeaderShip />
        </section>
        <section id="awards" className="bg-lime-200 py-10 min-h-150 flex flex-row">
          <ComponentAwards />
        </section>
        <section id="reach" className="py-15 min-h-150 flex flex-row">
          <div className="w-11/12 m-auto flex flex-col">

            <div className="text-center text-4xl font-bold mb-5 transition-all duration-1000 ease-in-out">Reach Us</div>

            <div className="xs:w-10/12 sm:w-10/12 md:w-10/12 lg:w-11/12 xl:w-11/12 2xl:w-11/12 m-auto flex justify-center align-middle xs:flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row ring-2 ring-gray-200 min-h-120 transition-all duration-1000 ease-in-out">

              <div className="xs:w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 2xl:w-1/2 transition-all duration-1000 ease-in-out">
                <img src={`${process.env.PUBLIC_URL}/images/ReachUs.jpg`} alt="Reach Us" className="object-center object-cover w-full xs:h-50 sm:h-50 md:h-50 lg:h-full xl:h-full 2xl:h-full transition-all duration-1000 ease-in-out" width='100%' height='100%' />
              </div>

              <div className="flex flex-col justify-center align-middle xs:w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 2xl:w-1/2 p-8 transition-all duration-1000 ease-in-out">
                <ComponentReach />
              </div>

            </div>
          </div>
        </section>
      </Suspense>
    </>
  );
}
