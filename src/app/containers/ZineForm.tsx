import React from 'react'
import { connect } from 'react-redux'
import ZineForm from 'app/components/ZineForm'
import { reduxForm, SubmissionError } from 'redux-form/immutable'
import uploadImage from 'app/webAPI/image'
import saveZine from 'app/actions/zine/saveZine'
import deleteZine from 'app/actions/zine/deleteZine'
import closeSlideout from 'app/actions/UI/slideout/closeSlideout'
import { requestFetchZine } from 'app/webAPI/zine'
import { createZine } from 'app/constants/Zine'
import { withRouter } from 'react-router'


const mapStateToProps = (state, props) => ({
  initialValues: props.zine || createZine()
})

const mapDispatchToProps = (dispatch, { history }) => ({
  save: zine => dispatch(saveZine(zine))
    .then(action => {
      if(action.error) throw new SubmissionError({ _error: action.meta.message })

      history.push(`/${zine.name}`)
      dispatch(closeSlideout())
    }),

  delete: zine => {
    dispatch(deleteZine(zine))
    dispatch(closeSlideout())
    history.push('/')
  }
})

const asyncValidate = zine =>
  requestFetchZine({ name: zine.name.trim() })
    .then(response => {
      if(
        response.status === 200 &&
        response.body.id !== zine.id
      ) {
        if(response.body.ownerId === zine.ownerId) {
          throw { name: `you already own a zine named ${zine.name}` }
        } else {
          throw { name: `this zine name is already taken` }
        }
      }
    })

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'zine',
  enableReinitialize: true,
  asyncValidate,
  asyncBlurFields: ['name']
})(ZineForm)))
