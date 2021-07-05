import React from 'react'
import match from '../assets/burnt-match.svg'
import { connect } from 'react-redux'

const Toast = (props) => {
  return (
    <div className="toast">
      <div>
        <img src={match} alt="" />
      </div>
      <div>
        <h2>RecipeBook Message</h2>
        <p>{props.message || 'Unspecified error.'}</p>
        <p>Click the "X" to dismiss.</p>
      </div>
      <div className="dismissToast" onClick={props.dismissToast}>
        ⓧ
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    message: state.ui.message,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dismissToast: () => dispatch({ type: 'DISMISS_TOAST' }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Toast)
