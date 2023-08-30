import FormTodo from "@/components/todo/form-todo";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

function TodoCreate() {
    return (
        <div>
            <div className="space-x-3">
                <Button asChild>
                    <Link href="/todo"> Back</Link>
                </Button>
            </div>

            <Card className="my-3">
                <CardContent>
                    <div className="pt-4">
                        <FormTodo />
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

export default TodoCreate;