import React, { Component } from 'react';
import Photo from './Photo';
// import comment
import Comments from './Comments';
class Single extends Component {
   render() {
      const {match} = this.props;
      // console.log(match);
      // index of the post
      const i = this.props.posts.findIndex(post => post.code === match.params.postId);
      const post = this.props.posts[i];
      console.log(post);
      // get us the post
      return (
         <div className="single-photo">
            <Photo i={i} post={post} {...this.props} />
            <Comments />
         </div>
      );
   }
}

export default Single;