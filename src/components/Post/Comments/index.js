import React, { Component } from 'react'
import { connect } from 'react-redux'
import Comment from './comment'
import CreateComment from './CreateComment'
import { arrayFromObject} from '../../../utils/helpers.js'



class Comments extends Component {


	render () {
	    const {comments, post} = this.props
	    const commentCount = comments.length
	    const orderComments = arrayFromObject(comments)

	    console.log(' -- render comments ' + JSON.stringify(comments))
	    return (
	    	<div>
		     	<h3> Comments </h3>
		        {commentCount === 0 && (
		          <div>No comments yet.</div>
		        )} 
	    	<ol>
	    		{orderComments.map((comment) => (
	    			<li key={comment.id}>
         			<Comment key={comment.id} comment={comment} />
         			</li>
        		))}	  
        		< CreateComment post={post} history = {this.props.history}/>   
        	</ol>  
	        </div>
	    )
	}
}



const mapStateToProps = ({comments, post}) => ({comments, post})
export default connect(mapStateToProps)(Comments)