import { connect } from 'react-redux'
import { createReduxAtomFactory } from 'redux-atom'

/**
 *  Create React Redux Atom Factory
 */
export default ({ Component, ...config }) =>
  ({ namespace, foreignReducer, rootSelector }) => {
    const module = createReduxAtomFactory(config)({ namespace, foreignReducer, rootSelector })
    const c = connect(
      state => ({ ...rootSelector(state) }),
      { ...module.actionCreators },
    )(Component)

    return { ...module, Component: c }
  }
