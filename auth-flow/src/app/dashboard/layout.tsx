'use client';

import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode}) {
    return (
        <div className="min-h-screen bg-black">
            {children}
        </div>
    )
}