import { Redirect, Switch, Route } from 'react-router-dom';

import { Component } from 'react';
import { DISHES } from '../shared/dishes';
import { Menu } from './Menu';
import { Header } from './Header';
import { Footer } from './Footer';
import { Home } from './Home';

export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      // selectedDish: null,
    };
  }

  onDishSelect = (dishId) => {
    this.setState({
      selectedDish: dishId,
    });
  };

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path='/home' component={Home} />
          <Route
            exact
            path='/menu'
            component={() => <Menu dishes={this.state.dishes} />}
          />
          <Redirect to='/home' />
        </Switch>
        <Footer />
      </div>
    );
  }
}
