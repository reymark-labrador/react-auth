import { Route, Redirect, RouteProps } from "react-router-dom";

interface PrivateRouteProps extends RouteProps {
    redirectPath?: string // redirect path if don't authenticate route
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({component, redirectPath="/login" }) => {
    const auth = localStorage.getItem('auth-token');

    return auth ? (
        <Route component={component}/>
    ): (
        <Redirect to={redirectPath} />
    );
}