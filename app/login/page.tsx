import FormLogin from "@/components/login/form-login";
import { Card, CardContent } from "@/components/ui/card";

function Login() {
    return (
        <Card>
            <CardContent>
                <div className="pt-4">
                    <FormLogin />
                </div>
            </CardContent>
        </Card>
    );
}

export default Login;