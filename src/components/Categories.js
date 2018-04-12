import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getAllCategories} from '../actions/category'
import {withRouter} from 'react-router-dom'
import {compose} from 'recompose'



class Categories extends Component {

  componentDidMount(){
    this.props.getAllCategories();
  }

  render() {  
    const { categories } = this.props
    const list = categories.map((categorie) => {
      return (
        <li key={categorie.name}>
          <Link to={`/${categorie.name}`}>{categorie.name}</Link>
        </li>
     
      )
    })
    
    return(
      <div className="Categories">
        <ul className="Categories-List">
          <All />
          {list}
          <li>
            <Link to={`/new`}>Add new Post </Link>
          </li>
        </ul>
      </div>
    )
  }
}

const All = () => {
  return(
    <li key='All'>
      <Link to='/'>All</Link>
    </li>
  )
}

const mapStateToProps = ({ categories}) => ({ categories})


const enhance = compose(
  connect(mapStateToProps, {getAllCategories} ),
  withRouter
)
export default enhance(Categories)