import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { getPosts, getPostsByCategory, postSortOrder , voteForPost} from '../../actions'
import { connect } from 'react-redux'
import {arrayFromObject } from '../../utils/helpers'
import { Link } from 'react-router-dom'
import _ from 'lodash';
import { Button } from 'react-bootstrap'


class Posts extends Component{

  componentDidMount(){
     if(this.props.match != null){
        const { category } = this.props.match.params;
        
        console.log('## DidUpdate ReadableIndex category ' + category);
        
        if( category != null){
          this.props.getPostsByCategory(category);
        }else{
          this.props.getPosts();
        }
      }else{
        this.props.getPosts();
      }
  }

 onPostOrderChange = ({target}) => { 
    this.props.postSortOrder(target.value);
  }

  render(){

    const { posts, match, sortPostsBy, voteForPost} = this.props

    const orderedPosts = _.sortBy(posts, this.props.postsOrder).reverse()

   //console.log('   this post ' + JSON.stringify(postArray))
   console.log(' ---- RENDER POST ' + JSON.stringify(orderedPosts))

    return(
      <div className="Posts">
            <h1> Posts render </h1>
             <select onChange={(event) => this.props.postSortOrder({sortBy : event.target.value})}>
                    <option value='voteScore'>Votes</option>
                    <option value='timestamp'>Date</option>
                  </select>
            <ol >
              {orderedPosts.map((post) =>(
                 <li key={post.id}>
                    <p>{post.title} Votes: {post.voteScore} -- 
                        <Button onClick={() => voteForPost(post, 'upVote')}  > + </Button>
                        <Button onClick={() => voteForPost(post, 'downVote')} > - </Button>
                        <Link to={`/${post.category}/${post.id}`}>Detail</Link>
                    </p>
                 </li>
              ))}
              </ol>
      </div>
    )    
  }
}

function mapStateToProps(state) {
    const posts = state.posts
    const { postsOrder } = state;
    return { posts, postsOrder }
}

 
export default connect(mapStateToProps, { getPosts, getPostsByCategory, postSortOrder, voteForPost })(Posts)
