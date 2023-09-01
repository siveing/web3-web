"use client";

import LoadingScreen from "@/components/shared/Loading/loading";
import { useAppSelector } from "@/contexts/hook";
import { loadingSelector } from "@/contexts/loading/loading.slice";
import { ThirdwebProvider, bloctoWallet, coinbaseWallet, frameWallet, localWallet, metamaskWallet, rainbowWallet, trustWallet, walletConnect, zerionWallet } from "@thirdweb-dev/react";
import React from "react";

function RootComponent({ children }: { children: React.ReactNode }) {
    /**
     * Can i use the state of redux toolkit here?
     * Let see
     */
    const { isLoading } = useAppSelector(loadingSelector);

    return (
        <ThirdwebProvider
            supportedWallets={
                [
                    metamaskWallet(),
                    coinbaseWallet(),
                    walletConnect(),
                    localWallet(),
                    trustWallet(),
                    zerionWallet(),
                    bloctoWallet(),
                    frameWallet(),
                    rainbowWallet(),
                ]
            }
            clientId="22973d2b8a28ccef55bc18451453ffaf"
        >
            {isLoading && (
                <LoadingScreen />
            )}
            {children}
        </ThirdwebProvider>
    );
}

export default RootComponent;