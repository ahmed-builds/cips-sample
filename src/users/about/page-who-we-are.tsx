import React from "react";
import { useSelector } from "react-redux";

export default function PageWhoWeAre() {
    const pageHeight: number = useSelector((storeHeader: any) => storeHeader.header.stateHeaderSize);
    return (
        <>
            <h1 className="text-3xl font-bold border-t-0 border-r-0 border-l-0 border-b-2 border-red-800/65 w-full pb-2 max-h-12 text-red-800">
                Who Are We
            </h1>
            <div style={{ minHeight: `calc(100vh - ${pageHeight}px)` }} className="text-justify">
                <p className="font-bold text-lg">Genesis</p>
                <p className="mb-4">The Thirteenth Finance Commission in its recommendations for the Years 2010 – 2015, inter alia, stated as follows (Volume-I of the Report, December 2009, Chapter-12, Grants-in-Aid).</p>

                <p className="mb-4 mt-4 text-lg">
                    <a href="https://cips.org.in/uploads/documents/Revised%20Concept%20Note%20of%20CIPS.pdf" className="font-bold text-blue-800 hover:text-blue-900" target="_blank" rel="noreferrer">
                        <i className="bi bi-link"></i> Concept Note of CIPS
                    </a>
                </p>

                <p className="mb-4">
                    <span className="font-bold">Vision:</span> Be the catalyst for the transformation of governance in public systems.
                </p>

                <p className="mb-4">
                    <span className="font-bold">Mission:</span> Nurture an eco-system and develop a culture of innovation in public systems.
                </p>

                <p className="font-bold">
                    Promoting Innovation
                </p>
                <p className="mb-2">
                    The President of India, in her address to Parliament in June 2009, committed the nation to a path of promoting innovation and unleashing the creativity of a billion people. She announced that the next ten years would be dedicated as the 'Decade of Innovation'. Innovation can play an important role in providing better alternatives, reducing costs, improving service levels and filling in availability deficits. The task is, therefore, not only to foster innovation, but also to promote it zealously. A number of appropriate, low cost and people-oriented innovations already introduced in various states have been documented by the National Innovation Foundation (NIF) and are being disseminated by them. These innovations relate mostly to individual initiatives in the private sector. The Commission feels that a number of equally relevant innovations exist in the government sector which needs to be recognised, documented and promoted amongst all State Governments. We note that a number of national programmes, like the mid-day meal scheme, were rooted in innovative schemes initially adopted at the state level. We, therefore, obtained from State Governments a description of the major innovations they have introduced in different sectors to improve service levels and reduce costs.
                </p>

                <p className="mb-4">
                    These innovations are in a variety of sectors like health, education, tourism and natural resource management and are aimed at improving service delivery. They also cover the improvement of governance and supply of justice. Based upon an analysis of the data received and suggestions of NIF, we have recommended a two-pronged initiative.
                </p>

                <p className="font-bold text-red-700">
                    Centre for Innovations in Public Systems (CIPS)
                </p>
                <p className="mb-2">
                    The first initiative is embodied in the request of the Andhra Pradesh Government for assistance to set up the Centre for Innovations in Public Systems (CIPS) at ASCI, Hyderabad. The CIPS will actively promote and disseminate among states practices which have enhanced service delivery, increased efficiency and led to cost reduction in public systems. It will also continuously scan the environment for new practices which it will add to its database, which will then be made available across states. It will conduct training programmes and enable experience sharing. The functioning of CIPS will be guided by an advisory council with all the chief secretaries of State Governments as its members, apart from Central Government representatives and independent experts.
                </p>

                <p className="mb-4">
                    The grant of Rs. 20 crore will be utilised for running the CIPS for a five-year period, after which it is expected to become self-sufficient. The grant will be released in one instalment during 2010-11. The modalities of the grant are further detailed in Annex 12.13. This provision is included under the state-specific grants for Andhra Pradesh (Para 12.127).
                </p>

                <p className="font-bold">
                    Establishment of a Centre for Innovations in Public Systems
                </p>
                <p className="mb-4">
                    In order to create a climate for accelerating and diffusing innovation in public systems through sharing of experiences across states and to facilitate the establishment of institutional and human capacities for innovation through knowledge sharing and mobilisation of practical help, recommendation granting an amount of Rs. 20 crore was made to establish a Centre for Innovations in Public System (CIPS) at the Administrative Staff College of India (ASCI), Hyderabad. The Centre will be governed through an advisory council, with representation from all states. A Steering Committee will assist states to transform creative ideas into sustainable practices. (Refer to Para 12.92).
                </p>
            </div>
        </>
    );
}