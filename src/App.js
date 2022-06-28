import './App.css';
import { Component } from 'react';
import { COMMENTS } from './shared/comments';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Contact } from './components/Contact';
import { Home } from './components/Home';
import { NoPage } from './components/NoPage';
import { Blogs } from './components/Blogs';
import { Menu } from './components/Menu';
import { Profile } from './components/Profile';
import { Main } from './components/Main';
import { MyForm } from './components/MyForm';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='App'>
        {/* <BrowserRouter>
          <div>
            <Switch>
              <Route path='/' exact component={Layout} />
              <Route path='/home' component={Home} />
              <Route path='/blogs' component={Blogs} />
              <Route path='/contact' component={Contact} />
              <Route path='/profile/:isLogin/:name' component={Profile} />
              <Route path='*' component={NoPage} />
            </Switch>
          </div>
        </BrowserRouter> */}
        <BrowserRouter>
          <Main />
        </BrowserRouter>
        {/* <MyForm /> */}
      </div>
    );
  }
}

export default App;
