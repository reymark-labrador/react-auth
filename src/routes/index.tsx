import { Switch, Route } from "react-router-dom";
import { Login } from '../pages/auth/login';
import { Register } from '../pages/auth/register';
import { Landing } from '../pages/landing';
import { NotFound } from '../pages/notFound';
import { PrivateRoute } from '../routes/privateRoute';
import { AuthRoute } from '../routes/authRoute';

export const Routes: React.FC = () => {
    return (
        <Switch>
            <AuthRoute path={"/login"} exact component={Login} />
            <AuthRoute path={"/register"} exact component={Register} />
            <PrivateRoute path={"/"} exact component={Landing}/>
            <Route component={NotFound} />
        </Switch>
    );
};