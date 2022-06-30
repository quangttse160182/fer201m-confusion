import './App.css';
import { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/Main';
import { ConfigureStore } from './redux/configureStore';
import { Provider } from 'react-redux';

const store = ConfigureStore();

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='App'>
        {/* <Provider store={store}> */}
          <BrowserRouter>
            <Main />
          </BrowserRouter>
        {/* </Provider> */}
      </div>
    );
  }
}

export default App;
