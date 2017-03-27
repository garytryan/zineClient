import * as React from 'react'
import 'app/styles/zineHomePosts'
import Post from 'app/components/Post'

export default ({ posts }) =>
  posts.size ?
    <div className="zine-home-posts--container">
      <div className="row">
        {posts.map((post, index) => <Post {...post.toJS()} key={index} />)}
      </div>
    </div> :
    <div>no posts</div>
