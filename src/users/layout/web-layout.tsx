import React, { ReactNode, useEffect, useRef } from "react";
import TopBar from "./topbar/top-bar";
import WebHeader from "./header/web-header";
import WebFooter from "./footer/web-footer";
import WebMenu from "./menu/web-menu";
import { useDispatch } from "react-redux";
import { reducerHeaderSize } from "./topbar/header-size-slicer";

interface WebLayoutProps {
    children: ReactNode;
}


export default function WebLayout({ children }: WebLayoutProps) {
    const dispatch = useDispatch();

    // Reference to the header
    const headerRef = useRef<HTMLHeadingElement | null>(null);
    // State to store the header height

    // Function to update the header height dynamically
    
    // Effect hook to listen for window resize
    useEffect(() => {
        const updateHeaderHeight = () => {
            if (headerRef.current) {
                const newHeight = headerRef.current.offsetHeight;
                dispatch(reducerHeaderSize(newHeight));
            }
        };
        // Set initial header height
        updateHeaderHeight();

        // Add event listener on resize to update header height
        window.addEventListener('resize', updateHeaderHeight);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', updateHeaderHeight);
        };
    }, [dispatch]);

    return (
        <>
            <header ref={headerRef} className="w-full">
                <TopBar />
                <WebHeader />
                <WebMenu />
            </header>
            <main className="mb-1">
                {children}                
            </main>
            <footer className="w-full">
                <WebFooter />
            </footer>
        </>
    );
}