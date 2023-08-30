import ListTodo from "@/components/todo/list-todo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function Todo() {
    return (
        <div>
            <div className="space-x-3">
                <Button asChild>
                    <Link href="http://localhost:3030/api#/">TO API</Link>
                </Button>

                <Button asChild>
                    <Link href="/todo/create"> Create TODO</Link>
                </Button>
            </div>

            <div className="my-3">
                <ListTodo />
            </div>
        </div>
    );
}

export default Todo;