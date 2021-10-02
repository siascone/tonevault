import { connect } from 'react-redux';
import Splash from './splash';

const mapStatetoProps = state => {
    return {
        state: state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        test: () => window.alert('Hello from the splash page')
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(Splash);