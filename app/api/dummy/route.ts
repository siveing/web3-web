import { NextResponse } from 'next/server'

export const dynamic = 'auto'
export const dynamicParams = true
// export const revalidate = false
// export const fetchCache = 'auto'
// export const runtime = 'nodejs'
// export const preferredRegion = 'auto'

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const skip = searchParams.get('skip') || 0;
    const limit = searchParams.get('limit') || 10;

    const res = await fetch(`https://dummyjson.com/products?skip=${skip}&limit=${limit}`, {
        headers: {
            'Content-Type': 'application/json'
        },
    });
    const data = await res.json()
    return NextResponse.json({ data })
}