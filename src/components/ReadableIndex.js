import React, {Component} from 'react'
import Posts from './Posts'
import Categories from './Categories'
import {withRouter} from 'react-router-dom'



class ReadableIndex extends Component  {

	render(){
		console.log('index ' + JSON.stringify(this.props))
		return(
		  <div>
		    <h1> Readable Index </h1>
		    <Categories />
			<Posts category={this.props.match.params.category}/>		 
			</div>
		)
	}
}

export default withRouter(ReadableIndex)
