import React, { Component } from 'react'
import { getPosts, postSortOrder , voteForPost, deletePost} from '../../actions/post'
import { getPostsByCategory} from '../../actions/post'
import { connect } from 'react-redux'
import {arrayFromObject } from '../../utils/helpers'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import {withRouter} from 'react-router-dom'
import {compose} from 'recompose'



class Posts extends Component{

  componentDidMount(){
     if(this.props.category != null){
        const { category } = this.props;
        
        
       if( category != null){
          this.props.getPostsByCategory(category);
        }else{
          this.props.getPosts();
        }
      }else{
        this.props.getPosts();
      }

  }

  componentDidUpdate(prevProps){

    if(prevProps.category !== this.props.category){
      if(this.props.category){
        this.props.getPostsByCategory(this.props.category);
      }else{
        this.props.getPosts();
      }

    }
  }


  render(){
    const { posts, voteForPost, postOrder, deletePost} = this.props
    const postsArray = arrayFromObject(posts)
    const filteredPosts = postsArray.filter(post => !post.deleted );

     filteredPosts.sort(function(a, b) {
        if (postOrder === 'timestamp') {
          return (a.timestamp > b.timestamp)
            ? -1
            : 1
        } else {
          return (a.voteScore > b.voteScore)
            ? -1
            : 1
        }
      })

    return(
      <div className="Posts">
            <h1> Posts </h1>
             <select onChange={(event) => this.props.postSortOrder({sortBy : event.target.value})}>
                    <option value='voteScore'>Votes</option>
                    <option value='timestamp'>Date</option>
                  </select>
            <ol >
              {filteredPosts.map((post) =>(
                 <li key={post.id}>
                    <p>
                      <b>{post.title} </b> by <b> {post.author} </b> 
                      <Button onClick={() => voteForPost(post, 'upVote')}  > + </Button>
                      <Button onClick={() => voteForPost(post, 'downVote')} > - </Button>
                      <Button onClick={() => deletePost(post.id)} > Del </Button>
                    </p>
                    <p>
                        <Link to={`/${post.category}/${post.id}`}>Detail</Link>
                        -                          
                        <Link to={`/edit/${post.id}`}>Edit Post </Link>
                        <br/>
                    </p>
                    <p>Votes: {post.voteScore}</p>
                    <p>Comments: {post.commentCount} </p>
                 </li>
              ))}
              </ol>
      </div>
    )    
  }
}

const mapStateToProps = ({ postOrder, posts, post}) => ({ postOrder,posts, post})

 
const enhance = compose(
  connect(mapStateToProps, { getPosts, getPostsByCategory, postSortOrder, voteForPost, deletePost }),
  withRouter
)
export default enhance(Posts)