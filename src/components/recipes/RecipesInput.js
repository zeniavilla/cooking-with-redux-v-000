import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addRecipe } from '../../actions/recipes';
import { AddIngredients } from '../ingredients/AddIngredients';


export class RecipesInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      calories: '',
    };
  }

  handleNameChange(event) {
    this.setState({
      name: event.target.value
    })
  }

  handleCaloriesChange(event) {
  this.setState({
    calories: event.target.value
  })
  }

  handleSubmit(event) {
    event.preventDefault();

    let recipe = Object.assign({}, this.state, {ingredientIds: this.props.selectedIngredients});

    this.props.addRecipe(recipe);
  }

  render(){
    return(
        <form onSubmit={event => this.handleSubmit(event)}>
          
          <p>
            <input name="name" onChange={event => this.handleNameChange(event)} type="text" placeholder="Recipe name" value={this.state.name}/>
          </p>

          <p>
            <AddIngredients />
          </p>

          <input type="submit" value="Add Recipe"/>
        </form>
    )
  }
}

const mapStateToProps = (state) => {
  return { selectedIngredients: state.recipeForm.ingredientIds };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ addRecipe: addRecipe }, dispatch);
}

export const ConnectedRecipesInput = connect(mapStateToProps, mapDispatchToProps)(RecipesInput);