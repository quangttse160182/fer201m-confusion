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

const comment = {
  date: new Date(),
  text: 'Welcome to react component',
  author: {
    name: 'vanttn',
    avatarUrl: 'images/logo.jpg',
  },
};

function App() {
  const user = {
    id: '1',
    name: 'thi no',
  };
  const store = {
    itemName: 'rose',
    number: 1000,
  };

  const cities = ['Jaipur', 'Jodhpur', 'Udaipur', 'Pune', 'Chandigarh'];
  const names = cities.map((c) => <li>{c}</li>);

  return (
    <div className='App'>
      {/* <h1>Hello, {formatName(user)}</h1>
      <Hello msg='Hello bro' user={user} />
      <HelloWorld /> */}
      <Navbar dark color='primary'>
        <div className='container'>
          <NavbarBrand href='/'>Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      {/* <Account /> */}
      {/* <Comment
        date={comment.date}
        text={comment.text}
        author={comment.author}
      /> */}
      {/* <Stock /> */}
      {/* <Warning /> */}
      {/* <Form /> */}
      <ul>
        {names}
      </ul>
    </div>
  );
}

export default App;
