import React from 'react';
import Login from './components/Login';
import Home from './components/Home';
import { Switch, Route ,BrowserRouter as Router} from 'react-router-dom';
class App extends React.Component {

   async componentDidMount(){

    }

    render(){
    
        return(
         <div className="app-routes">
            <Router>
                <Switch>
                <Route path="/home" component={Home} />
                <Route path="/" component={Login} />
                </Switch>
            </Router> 
        </div>
        );
    }
}

export default App;