"use client";

import LoadingScreen from "@/components/shared/Loading/loading";
import { useAppSelector } from "@/contexts/hook";
import { loadingSelector } from "@/contexts/loading/loading.slice";
import React from "react";

function RootComponent({ children }: { children: React.ReactNode }) {
    /**
     * Can i use the state of redux toolkit here?
     * Let see
     */
    const { isLoading } = useAppSelector(loadingSelector);

    return (
        <>
            {isLoading && (
                <LoadingScreen />
            )}
            {children}
        </>
    );
}

export default RootComponent;