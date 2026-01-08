import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function Layout() {
    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Header />
            <main className="flex-1">
                <React.Suspense fallback={<div className="flex items-center justify-center h-full p-4">Loading...</div>}>
                    <Outlet />
                </React.Suspense>
            </main>
            <Footer />
        </div>
    );
}
