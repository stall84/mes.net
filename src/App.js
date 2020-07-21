import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Resume from './components/Resume';


export default function App() {
    return (
    <React.Fragment>
       <Route exact path='/' component={Home} />
       <Route path='/resume' component={Resume} />
    </React.Fragment>       
    )
}
