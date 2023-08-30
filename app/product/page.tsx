import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
    title: "Product",
    description: "Example dashboard app built using the components.",
}

async function getProduct(skip?: number, limit?: number) {
    const res = await fetch(`http://localhost:3000/api/dummy?skip=${skip}&limit=${limit || 10}`);
    return res.json();
}

export default async function ProductListPage() {
    const { data } = await getProduct(10);

    return (
        <>
            <div className="flex-col md:flex">
                <div className="flex-1">

                    <div className="flex items-center justify-between space-y-2">
                        <div className="flex items-center space-x-2">
                            <Button>Next</Button>
                        </div>
                    </div>

                    <div className="grid grid-cols-4 gap-4 mt-4">
                        {data?.products.map((product: any) => (
                            <Card key={product?.id}>
                                <CardHeader>
                                    <CardTitle>{product?.title}</CardTitle>
                                    <CardDescription>{product?.description}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <img src={product?.thumbnail} alt={product?.title} />
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}