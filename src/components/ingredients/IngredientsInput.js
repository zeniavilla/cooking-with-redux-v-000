import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createIngredient } from '../../actions/ingredients'

export class IngredientsInput extends Component {
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
    });
  }

  handleCaloriesChange(event) {
    this.setState({
      calories: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.createIngredient(this.state)
  }

  render(){
    return(
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>

          <input name="name" onChange={event => this.handleNameChange(event)} placeholder="Ingredient name" type="text"/><br />

          <input name="calories" onChange={event => this.handleCaloriesChange(event)} placeholder="Calories" type="text"/><br />

          <input type="submit" value="Add Ingredient"/>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ createIngredient: createIngredient }, dispatch);
};

export const ConnectedIngredientsInput = connect(null, mapDispatchToProps)(IngredientsInput);
