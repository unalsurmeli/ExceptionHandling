import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import User from "./User";
import ErrorBoundary from './ErrorBoundary'
import * as Sentry from '@sentry/browser';
import LogRocket from 'logrocket';

class App extends Component {
    state = {
        user: {
            name: "Zihni",
            userId: Math.random() * 1000
        }
    };

    componentDidMount() {

        const {name, userId} = this.state.user;
        Sentry.configureScope((scope) => {
            scope.setUser({
                'id': userId,
                'name': name
            })
        });

        LogRocket.identify('LOGROCKET_ORGANIZATION_INFO', {
            name: name,
            email: 'zihni@iyzico.com',

            // Add your own custom user variables here, ie:
            userId: userId,
        });
    }

    userDeleteHandler = () => {
        this.setState({
            user: null
        })
    };

    render() {

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <ErrorBoundary>
                        <User user={this.state.user}/>
                        <button onClick={this.userDeleteHandler}>Delete User</button>
                    </ErrorBoundary>
                </header>
            </div>
        );
    }
}

export default App;
