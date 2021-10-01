import { connect } from 'react-redux';

import Counter from './Counter';
import { counterPageActions } from './actions';
import { TState } from './types';

const mapStateToProps = ({ counter }: TState) => ({
  counter,
});

const mapDispatchToProps = {
  increment: counterPageActions.increment,
  decrement: counterPageActions.decrement,
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
