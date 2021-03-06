import createFetchAction from 'app/utils/actions/createFetchAction'
import { requestSavePost } from 'app/webAPI/post'
import uploadImage from 'app/webAPI/image'
import { isArray } from 'lodash'

export default (post:webAPI.Request.ZinePost) =>
  createFetchAction('POST:SAVE', requestSavePost, post)()
