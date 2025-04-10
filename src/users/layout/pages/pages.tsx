import React, { ReactNode } from "react";

interface pageProps {
    pageContent: ReactNode;
}

export default function Pages({ pageContent }: pageProps) {

    return (
        <section id="page_content" className="w-11/12 m-auto flex flex-col gap-4 mt-4 text-lg leading-8.5">
            {pageContent}
        </section>
    );
}