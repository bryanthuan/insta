import React, { Component } from 'react';

class Comments extends Component {
   renderComment = (comment, i) => {
      return (
         <div className="comment" key={i}>
            <p>
               <strong>{comment.user}</strong>
               {comment.text}
               <button onClick={this.props.removeComment.bind(null,this.props.postId, i)} className="remove-comment">&times;</button>
            </p>
         </div>
      );
   };
   handleSubmit= e => {
      e.preventDefault();      
      const { postId } = this.props;
      const author = this.refs.author.value;
      const comment = this.refs.comment.value;    
      this.props.addComment(postId,author,comment );
      this.refs.commentForm.reset();
   };

   render() {
      return (
         <div className="comments"> 
            {this.props.postComments.map(this.renderComment)}
            <form onSubmit={(e) => this.handleSubmit(e)} ref="commentForm" className="comment-form">
               <input type="text" ref="author" placeholder="author"/>
               <input type="text" ref="comment" placeholder="comment"/>
               <input type="submit" hidden/>
            </form>
         </div>
      );
   }
}

export default Comments;   