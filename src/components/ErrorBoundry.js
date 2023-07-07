import React, {Component} from 'react';


class ErrorBoundry extends Component {
    constructor(){
        super();
        this.state = {
            hasError: false
        };
    }

    componentDidCatch(error, info) {
        this.setState({hasError: true});
    }

    render(){
        //const {hasError} = this.state;
        if(this.state.hasError){
            return <h1>Oooops. That is not good!</h1>
        }
        return this.props.children;
    }
}

export default ErrorBoundry;