import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { recipeFormAddIngredient } from '../../actions/ingredients'

export class AddIngredient extends Component {
  constructor(props) {
    super(props);
  }

  handleClick(event) {
    this.props.recipeFormAddIngredient(this.props.id);
  }

  render(){
    return(
      <div>
        <button onClick={event => this.handleClick(event)}>{this.props.name}</button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ recipeFormAddIngredient: recipeFormAddIngredient }, dispatch);
}

export const ConnectedAddIngredient = connect(null, mapDispatchToProps)(AddIngredient);