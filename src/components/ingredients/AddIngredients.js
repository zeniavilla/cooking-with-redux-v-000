import React, { Component } from 'react';
import { ConnectedAddIngredient } from './AddIngredient'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { unselectedIngredients, findIngredientById } from '../../reducers/ingredients';

export class AddIngredients extends Component {
  constructor(props) {
    super(props)
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render(){
    let addIngredients = this.props.unselectedIngredients &&  this.props.unselectedIngredients.map((ingredient) => {
    return <ConnectedAddIngredient {...ingredient} /> })

    let ingredients = this.props.selectedIngredients && this.props.selectedIngredients.map((ingredient) => {
    return <li> {ingredient.name} </li> })

    return(
      <div>
        <div>
          Ingredients
          {ingredients}
        </div>
        <div>
          Add More Ingredients
          {addIngredients}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  let selectedIngredients = state.recipeForm.ingredientIds.map(function(ingredientId){
    return findIngredientById(ingredientId, state.ingredients)
  })
  return {ingredients: state.ingredients || [],
    selectedIngredients: selectedIngredients || [],
    unselectedIngredients: unselectedIngredients(state.ingredients, state.recipeForm.ingredientIds) || []}
}

export const ConnectedAddIngredients =  connect(mapStateToProps)(AddIngredients)
