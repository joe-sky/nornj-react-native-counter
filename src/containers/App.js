import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { registerComponent } from 'nornj';
import Counter from '../components/Counter';
import * as CounterActions from '../actions/counter';

function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(CounterActions, dispatch);
}

export default registerComponent('App', connect(mapStateToProps, mapDispatchToProps)(Counter));
