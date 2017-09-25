import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom';

import Single from './Single';
import PhotoGrid from './PhotoGrid';

class Main extends Component {
   render() {
      const {match} = this.props;
      console.log(this.props);
      
      return (
         <div>
            <h1>
               <Link to="/">Insta Things</Link>
            </h1>   
 
            <Route 
               path="/view/:postId"
               render={(props) => (<Single {...this.props} {...props} />)}
               />
            <Route 
               exact 
               path={match.url} 
               render={(props) => (<PhotoGrid {...this.props} {...props}/>)}/>
         </div>
      );
   }
}

export default Main;