"use client";

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import * as z from "zod"
import { TUser, authSelector, setCurrentUser } from "@/contexts/auth/auth.slice";
import { useAppDispatch, useAppSelector } from "@/contexts/hook";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { setLoading } from "@/contexts/loading/loading.slice";

const formSchema: any = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    phone: z.string(),
    email: z.string(),
    password: z.string().min(2, {
        message: "Password must be at least 2 characters.",
    }),
})

const defaultValues: TUser = {
    username: "",
    phone: "",
    email: "",
    password: ""
};

function FormLogin() {

    const dispatch = useAppDispatch();
    const router = useRouter();
    const { auth } = useAppSelector(authSelector);

    const form = useForm<object>({
        resolver: zodResolver(formSchema),
        defaultValues
    })

    type TAuthForm = Pick<TUser, "username" | "password">;

    function onSubmit(values: any) {
        if (signIn(values)) {
            dispatch(setCurrentUser(values))
            router.push('/dashboard');

            setTimeout(() => {
                dispatch(setLoading(false));
            }, 1200);
        }
    }

    function signIn(values: TAuthForm): boolean {
        if (values.username !== undefined && values.password !== undefined) {
            dispatch(setLoading(true));
            return true;
        }
        dispatch(setLoading(false));
        return false;
    }

    useEffect(() => {
        if (auth) {
            router.push('/dashboard');
            return;
        }
    }, [])

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-3">
                <FormField
                    name={'username' as never}
                    control={form.control}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Username</FormLabel>
                            <FormControl>
                                <Input autoCorrect="false" autoComplete="false" placeholder="Username" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    name={'password' as never}
                    control={form.control}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input autoCorrect="false" autoComplete="false" placeholder="Password" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button className="mt-2">Login</Button>
            </form>
        </Form>
    );
}

export default FormLogin;