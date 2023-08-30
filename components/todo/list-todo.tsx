'use client'

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { useEffect, useState } from "react";
import { ITodo } from "./form-todo";
import axios from "@/configs/axois";

function ListTodo() {
    const [todos, SetTodos] = useState<ITodo[]>();

    useEffect(() => {
        axios.get(`todo`).then(({ data }: { data: ITodo[] }) => {
            SetTodos(data);
        })
    }, [])

    return (
        <Table>
            <TableCaption>A list of your recent todo.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Description</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>

                {todos?.map((todo: ITodo) => (
                    <TableRow key={todo?.title}>
                        <TableCell>{todo?.title}</TableCell>
                        <TableCell>{todo?.description}</TableCell>
                    </TableRow>
                ))}

            </TableBody>
        </Table>

    );
}

export default ListTodo;