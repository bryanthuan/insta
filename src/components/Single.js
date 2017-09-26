import React, { Component } from 'react';
import Photo from './Photo';
// import comment
import Comments from './Comments';
class Single extends Component {
   render() {
      const {match} = this.props;
      // index of the post
      const i = this.props.posts.findIndex(post => post.code === match.params.postId);
      const post = this.props.posts[i];

      const postComments = this.props.comments[match.params.postId] || [];
      // get us the post
      return (
         <div className="single-photo">
            <Photo i={i} post={post} {...this.props} />
            <Comments postComments={postComments} />
         </div>
      );
   }
}

export default Single;