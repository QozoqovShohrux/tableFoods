import { Redirect, Route, Switch } from "react-router";

const Routes = ({ routes }) => {
    return ( <
        Switch > {
            routes.map((route) => ( 
                route?.redirect ? <Redirect key={route.redirect} {...route} to={route.redirect}/> : 
                <
                Route {...route }
                key = { route.path }
                / > 
            ))
        } <
        /
        Switch >
    );
}

export default Routes;