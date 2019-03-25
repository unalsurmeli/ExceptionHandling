import React, {Component} from 'react';
import * as Sentry from '@sentry/browser';

class ErrorBoundary extends Component {
    state = {
        hasError: null
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            hasError: error
        });

        Sentry.withScope(scope => {
            Object.keys(errorInfo).forEach(key => {
                scope.setExtra(key, errorInfo[key]);
            });
            Sentry.captureException(error);
        });
    }

    render() {
        const { hasError } = this.state;
        const { children } = this.props;
        return (
            <div>
                {
                    hasError && <div>Hatalar bilgimiz dahilinde</div>
                }
                {
                    !hasError && children
                }
            </div>
        );
    }
}

ErrorBoundary.propTypes = {};

export default ErrorBoundary;