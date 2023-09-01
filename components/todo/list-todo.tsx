'use client'

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { useCallback, useEffect, useState } from "react";
import { ITodo } from "./form-todo";
import axios from "@/configs/axois";
import { Button } from "../ui/button";
import { Check, Edit, Loader, Trash2Icon } from "lucide-react";

function ListTodo() {
    const [todos, SetTodos] = useState<ITodo[]>([]);

    const fetchData = useCallback(() => {
        axios.get(`todo`).then(({ data }: { data: ITodo[] }) => {
            SetTodos(data);
        })
    }, []);

    useEffect(() => {
        fetchData()
    }, [])

    const handleRemove = (id: number): void => {
        axios.delete(`todo/${id}`).then(({ data }) => {
            if (data?.affected) {
                fetchData()
            }
        })
    }

    const handleStatus = (id: number): void => {
        axios.patch(`todo/${id}/DONE`).then(({ data }) => {
            if (data?.affected) {
                fetchData();
            }
        })
    }

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {todos?.length > 0 ? (
                    <>
                        {todos?.map((todo: ITodo) => (
                            <TableRow key={todo?.title}>
                                <TableCell>{todo?.title}</TableCell>
                                <TableCell>{todo?.description}</TableCell>
                                <TableCell className="flex items-center space-x-2">
                                    <Button variant={'outline'}>
                                        <Edit />
                                    </Button>
                                    <Button variant={'outline'} onClick={() => handleStatus(todo?.id as number)}>
                                        {todo?.status == "DONE" ? (
                                            <Check color="green" />
                                        ) : (
                                            <Loader color="green" />
                                        )}
                                    </Button>
                                    <Button variant={'outline'} onClick={(): void => handleRemove(todo?.id as number)}>
                                        <Trash2Icon />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </>
                ) : (
                    <TableRow>
                        <TableCell colSpan={3} className="text-center">No Data.</TableCell>
                    </TableRow>
                )}
            </TableBody>
        </Table>

    );
}

export default ListTodo;