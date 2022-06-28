import { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import { DishDetail } from './DishDetail';
import { DISHES } from '../shared/dishes';
import { Menu } from './Menu';
import { Footer } from './Footer';
import { Header } from './Header';

export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null,
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
        <Menu
          dishes={this.state.dishes}
          onClick={(dishId) => this.onDishSelect(dishId)}
        />
        <DishDetail
          dish={
            this.state.dishes.filter(
              (dish) => dish.id === this.state.selectedDish
            )[0]
          }
        />
        <Footer />
      </div>
    );
  }
}
