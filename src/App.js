import React, {useEffect} from 'react'; 
import './App.css';
import SearchBar from './components/layout/SearchBar';
import Logs from './components/logs/Logs';
import AddBtn  from './components/layout/AddBtn';
import { Provider} from 'react-redux';
import store from './Store';

const App = () => { 
  return ( 
    <Provider store={store} className="App">
         <SearchBar></SearchBar>
         <AddBtn></AddBtn>
         <Logs></Logs> 
    </Provider>
  );
}

export default App;
