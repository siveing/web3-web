'use client';

import { NATIVE_TOKEN_ADDRESS, useBalance } from "@thirdweb-dev/react";
import { Card, CardContent } from "../ui/card";

function Web3List() {
    const { data } = useBalance(NATIVE_TOKEN_ADDRESS);

    return (
        <Card>
            <CardContent className="p-6">
                {data?.symbol} {' '}
                {data?.displayValue}
            </CardContent>
        </Card>

    );
}

export default Web3List;