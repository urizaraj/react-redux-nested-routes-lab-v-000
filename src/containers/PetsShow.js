import React from 'react';
import { connect } from 'react-redux';

const PetsShow = ({ pet }) =>
  <div className="col-md-8">
    <h2>{pet.name}</h2>
    <p>{pet.description}</p>
  </div>;

const mapStateToProps = (state, ownProps) => {
  const petId = parseInt(ownProps.match.params.petId)

  const pet = state.pets.find(({ id }) => id === petId)

  return (pet ? { pet } : { pet: {} })
}

export default connect(mapStateToProps)(PetsShow);
