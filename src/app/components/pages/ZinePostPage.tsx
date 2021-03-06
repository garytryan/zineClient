import * as React from 'react'
import AppTools from 'app/components/AppTools'
import MasterPage from 'app/components/pages/ZineMasterPage'
import PostReader from 'app/components/PostReader'
import 'app/styles/zinePostPage'
import { Helmet } from "react-helmet"

const getFirstImageURL = body => {
  if(body.entityMap.length) {
    return body.entityMap[0].data.url
  }
}

export default ({ zine, user, post, actions, history }) =>
  <AppTools
    zine={zine}
    user={user}
    post={post}
    actions={actions}
    history={history}
  >
    <MasterPage zine={zine} user={user} >
      <div className="zine--post-page--container">
      { post && <h1 className="zine--post-page--title">{ post.title }</h1> }
      {
        (post && post.body) ?
          <div className="zine--post-page--body">
            <PostReader rawEditorState={post.body} />
          </div> :
          null
      }
      </div>
      {
        post &&
          <Helmet>
            <meta property="og:url" content={location.href} />
            <meta property="og:type" content="article" />
            <meta property="og:title" content={post.title} />
            <meta property="og:image" content={getFirstImageURL(post.body.toJS())} />
          </Helmet>
      }
    </MasterPage>
  </AppTools>
