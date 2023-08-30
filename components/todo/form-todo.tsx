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
import { useRouter } from "next/navigation";
import axios from "@/configs/axois";

const formSchema: any = z.object({
    title: z.string().min(2, {
        message: "Title must be at least 2 characters.",
    }),
    description: z.string().min(2, {
        message: "Description must be at least 2 characters.",
    }),
    person: z.string().min(1, {
        message: "Person must be at least 2 characters.",
    }),
})

export interface ITodo {
    title: string;
    person: string;
    description: string;
}

const defaultValues: ITodo = {
    title: "",
    description: "",
    person: "",
};

function FormTodo() {
    const router = useRouter();
    const form = useForm<object>({
        resolver: zodResolver(formSchema),
        defaultValues
    })

    async function onSubmit(values: any) {
        if (values.title !== undefined && values.description !== undefined) {
            await axios.post(`todo`, values).then(({ data }: { data: ITodo }) => {
                if (data) {
                    router.push('/todo');
                }
            }).catch((err) => {
                console.log(err);
            })
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-3">
                <FormField
                    name={'title' as never}
                    control={form.control}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Title</FormLabel>
                            <FormControl>
                                <Input autoCorrect="false" autoComplete="false" placeholder="Title" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    name={'description' as never}
                    control={form.control}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                                <Input autoCorrect="false" autoComplete="false" placeholder="Description" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    name={'person' as never}
                    control={form.control}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Person</FormLabel>
                            <FormControl>
                                <Input autoCorrect="false" autoComplete="false" placeholder="Person" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button className="mt-2" type="submit">Create</Button>
            </form>
        </Form>
    );
}

export default FormTodo;