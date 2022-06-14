import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import { HelloWorld } from './components/HelloWorld';
import { Navbar, NavbarBrand } from 'reactstrap';
import { Comment } from './components/Comment';
import { Account } from './components/Account';
import { Store } from './components/Store';
import { Stock } from './components/Stock';
import { Warning } from './components/Warning';
import { Form } from './components/Form';
import { Garage } from './components/Garage';
import { Welcome } from './components/Welcome';
import { Car } from './components/Car';
import { Menu } from './components/Menu';
import { Component } from 'react';
import { DISHES } from './shared/dishes';

const comment = {
  date: new Date(),
  text: 'I hope you enjoy my restaurant!',
  author: {
    name: 'alberto',
    avatarUrl: 'images/alberto.png',
  },
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
    };
  }
  // const user = {
  //   id: '1',
  //   name: 'thi no',
  // };
  // const store = {
  //   itemName: 'rose',
  //   number: 1000,
  // };

  // const cities = ['Jaipur', 'Jodhpur', 'Udaipur', 'Pune', 'Chandigarh'];
  // const names = cities.map((c) => <li>{c}</li>);

  render() {
    return (
      <div className='App'>
        {/* <h1>Hello, {formatName(user)}</h1>
      <Hello msg='Hello bro' user={user} />
      <HelloWorld /> */}
        {/* <Navbar dark color='primary'>
        <div className='container'>
          <NavbarBrand href='/'>Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar> */}
        {/* <Account /> */}
        {/* <Comment
        date={comment.date}
        text={comment.text}
        author={comment.author}
      /> */}
        {/* <Stock /> */}
        {/* <Warning /> */}
        {/* <Form /> */}
        {/* <ul>
        {names}
      </ul> */}
        {/* <Welcome name='Van' />
      <Welcome name='Thuy Kieu' />
      <Welcome name='Thuy van' /> */}
        {/* <Garage /> */}
        {/* <Car /> */}
        <Menu dishes={this.state.dishes} />
      </div>
    );
  }
}

export default App;
