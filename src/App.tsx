import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import ItemsPage from './pages/ItemsPage';
import TopBar from './components/topBar';
import { store } from './store';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (

    <div className="App">
      <Provider store={store}>
        <TopBar />
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={ItemsPage} />
          </Switch>
        </BrowserRouter>
        <ToastContainer autoClose={2000} position="bottom-right" />
      </Provider>
    </div>
  );
}

export default App;
