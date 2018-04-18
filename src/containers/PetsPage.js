import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { fetchPets } from '../actions';
import PetsNew from './PetsNew';
import PetsShow from './PetsShow';
import PetsList from '../components/PetsList';

class PetsPage extends Component {

  componentDidMount() {
    this.props.fetchPets();
  }

  render() {
    const url = this.props.match.url
    return (
      <div>
        <h1>Pets Page</h1>
        <Switch>
          <Route path={`${url}/new`} component={PetsNew} />
          <Route path={`${url}/:petId`} component={PetsShow} />
          <Route exact path={url} render={() => <PetsList pets={this.props.pets} />} />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    pets: state.pets
  };
}

export default connect(mapStateToProps, { fetchPets })(PetsPage);
