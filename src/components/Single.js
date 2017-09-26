import React, { Component } from 'react';
import Photo from './Photo';
// import comment
import Comments from './Comments';
class Single extends Component {
   render() {
      const {match} = this.props;
      const { postId } = match.params;
      // index of the post
      const i = this.props.posts.findIndex(post => post.code === postId);
      const post = this.props.posts[i];

      const postComments = this.props.comments[postId] || [];
      // get us the post
      return (
         <div className="single-photo">
            <Photo i={i} post={post} {...this.props} />
            <Comments 
               postId={postId} 
               postComments={postComments}
               addComment={this.props.addComment}
               removeComment={this.props.removeComment}
            />
         </div>
      );
   }
}

export default Single;