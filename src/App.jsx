import * as React from 'react';
import './App.css';
import {Provider} from 'react-redux';

import FormComponent from './components/FormComponent';

import store from './Store';

class App extends React.Component {
  render() {
    return (
        <Provider store = {store}>
          <div className="App">
              <FormComponent/>
          </div>
        </Provider>
    );
  }
}
export default App;