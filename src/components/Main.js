import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom';

import Single from './Single';
import PhotoGrid from './PhotoGrid';

class Main extends Component {
   render() {
      const {match} = this.props;
      return (
         <div>
            <h1>
               <Link to="/">Insta Things</Link>
            </h1>            
            <Route path="/view/:postId" component={Single}/>
            <Route exact path={match.url} component={PhotoGrid}/>
         </div>
      );
   }
}

export default Main;