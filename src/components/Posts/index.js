import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { getPosts, getPostsByCategory} from '../../actions'
import { connect } from 'react-redux'
import {arrayFromObject } from '../../utils/helpers'
import { Link } from 'react-router-dom'



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



  render(){
    const { posts, match } = this.props
    const postArray = arrayFromObject(posts, 'id')
    return(
      <div className="Posts">
            <h1> Posts render </h1>
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

const mapStateToProps = ({ posts }) => ({ posts })
 
export default connect(mapStateToProps, { getPosts, getPostsByCategory })(Posts)
