import * as React from 'react'
import 'app/styles/loginModal'
import 'app/styles/grid'
import FacebookIcon from 'app/icons/facebook'
import TwitterIcon from 'app/icons/twitter'
import ExitIcon from 'app/icons/cross'

export default ({ actions }) =>
    <div className="login-modal--container">
      <div className="login-modal--header">
        <button onClick={actions.modal.hide}><ExitIcon size="3rem" /></button>
      </div>
      <div className="login-explainer">sign in to zine</div>
      <button
        onClick={() => actions.auth.facebook.signUp().then(actions.modal.hide)}
        className="login-facebook-button"
      >
        <FacebookIcon size="2rem" color="#FFF" className="login-button--icon" />
        login with facebook
      </button>
      <button
        onClick={() => actions.auth.twitter.signUp().then(actions.modal.hide)}
        className="login-twitter-button"
      >
        <TwitterIcon size="2rem" color="#FFF" className="login-button--icon" />
        login with twitter
      </button>
      <button
        onClick={() => actions.auth.email.signUp()}
        className="login-email-button"
      >sign in with email</button>
    </div>