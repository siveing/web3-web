import { NextResponse, type NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const isAuth = request.cookies.get('isLoggedIn');
    const url = request.url;

    if(isAuth && url.includes('login')){
        return NextResponse.redirect(new URL('/dashboard', url));
    }
    
    if (!isAuth) {
        return NextResponse.redirect(new URL('/login', url));
    }
}

export const config = {
    matcher: [
        '/dashboard',
        '/product',
        '/todo'
    ]
}