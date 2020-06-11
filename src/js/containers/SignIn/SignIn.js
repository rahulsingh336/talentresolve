import { connect } from 'react-redux';
import { SignIn } from "../../components/ui/SignIn"
import { userActions } from './actions';

function mapState(state) {
    const { loggingIn } = state.authentication;
    return { loggingIn };
}

const actionCreators = {
    login: userActions.login,
    logout: userActions.logout
};

const connectedLoginPage = connect(mapState, actionCreators)(SignIn);
export { connectedLoginPage as LoginPage };