import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


class LoginPage extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="col-md-6 col-md-offset-3">
                <h2>Login</h2>
            </div>
        );
    }
}

function mapState(state) {
    const { loggingIn } = state.authentication;
    return { loggingIn };
}


const connectedLoginPage = connect(mapState)(LoginPage);
export { connectedLoginPage as LoginPage };