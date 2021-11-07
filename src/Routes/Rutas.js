import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PrivateLayout from '../Layout/PrivateLayout'
import PublicLayout from '../Layout/PublicLayout'
import Dashboard from '../Pages/Admin/Dashboard'
import Roles from '../Pages/Admin/Roles';
import Ventas from '../Pages/Admin/Ventas';
import Index from '../Pages/Public/Index';
const Rutas = () =>{
    return (
        <Router>
            <Switch>
                <Route path={['/dash', '/roles', '/ventas', '/productos']}>
                    <PrivateLayout>
                        <Switch>
                            <Route path='/dash'>
                                <Dashboard/>
                            </Route>
                            <Route path='/roles'>
                                <Roles/>
                            </Route>
                            <Route path='/ventas'>
                                <Ventas/>
                            </Route>
                            <Route path='/productos'>
                                <Productos/>
                            </Route>
                        </Switch>
                    </PrivateLayout>
                </Route>
                <Route path='/'>
                    <PublicLayout/>
                        <Index/>
                </Route>
            </Switch>
        </Router>
    );
}

export default Rutas;