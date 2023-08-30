'use client';

import { ModeToggle } from "@/components/shared/theme/mode-toggle";
import { Button } from "@/components/ui/button";
import { authSelector, logout } from "@/contexts/auth/auth.slice";
import { useAppDispatch, useAppSelector } from "@/contexts/hook";
import { IMainNav, navigatorSelector } from "@/contexts/navigator/navigator.slice";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Header() {
    const { mainNav } = useAppSelector(navigatorSelector);
    const { auth } = useAppSelector(authSelector);
    const dispatch = useAppDispatch();
    const router = useRouter()

    const handleLogout = (): void => {
        dispatch(logout({}));
        router.push('/');
    }

    return (
        <div className="sticky top-4 p-3 w-full bg-gray-300 dark:bg-white rounded-lg flex justify-between items-center my-4 text-black">
            <h1 className="font-bold">
                WEB3
            </h1>

            <div className="space-x-2">
                {mainNav?.map((item: IMainNav) => auth == item?.auth && (
                    <Link key={item?.title} href={item?.path}> {item?.title} </Link>
                ))}
            </div>

            <div className="flex items-center space-x-3">
                {auth && (
                    <Button onClick={handleLogout}>
                        Logout
                    </Button>
                )}
                <ModeToggle />
            </div>
        </div>
    );
}

export default Header;