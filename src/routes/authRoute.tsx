import { Route, Redirect, RouteProps } from "react-router-dom";

interface AuthRouteProps extends RouteProps {
    redirectPath?: string // redirect path if don't authenticate route
}

export const AuthRoute: React.FC<AuthRouteProps> = ({component, redirectPath="/" }) => {
    const auth = localStorage.getItem('auth-token');

    return auth ? (
        <Redirect to={redirectPath} />
    ): (
        <Route component={component}/> 
    );
}