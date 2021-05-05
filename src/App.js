import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './App.css';
import RootComponent from './components/RootComponent';
import nameReducer from './redux/nameReducer';

const store = createStore(nameReducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <RootComponent />
      </div>
    </Provider>
  );
}

export default App;
