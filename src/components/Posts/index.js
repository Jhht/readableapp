import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { getPosts, getPostsByCategory, postSortOrder} from '../../actions'
import { connect } from 'react-redux'
import {arrayFromObject } from '../../utils/helpers'
import { Link } from 'react-router-dom'
import _ from 'lodash';




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

    const { posts, match, sortPostsBy} = this.props

    const sortOptions = ["timestamp", "voteScore"]

    const postSortOrder = sortPostsBy || sortOptions[0]

    const postArray = arrayFromObject(posts, 'id')
    console.log('   this  ' + JSON.stringify(postArray))

    postArray.sort(function(a, b) {
      if (postSortOrder === 'timestamp') {
        return (a.timestamp > b.timestamp)
          ? -1
          : 1
      } else {
        return (a.voteScore > b.voteScore)
          ? -1
          : 1
      }
    })

    console.log('   this post ' + JSON.stringify(postArray))


    return(
      <div className="Posts">
            <h1> Posts render </h1>
             <select value={postSortOrder} onChange={(event) => this.props.postSortOrder(event.target.value)}>
                    <option value='voteScore'>Votes</option>
                    <option value='timestamp'>Date</option>
                  </select>
            <ol >
              {postArray.map((post) =>(
                 <li key={post.id}>
                    <p>{post.title}</p>
                    <Link to={`/${post.category}/${post.id}`}>Detail</Link>
                 </li>
              ))}
              </ol>
      </div>
    )    
  }
}

const mapStateToProps = ({ posts, sortPostsBy }) => ({ posts, sortPostsBy })
 
export default connect(mapStateToProps, { getPosts, getPostsByCategory, postSortOrder })(Posts)
