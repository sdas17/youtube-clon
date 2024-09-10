import { Provider } from 'react-redux';
import './App.css';
import Body from './Component/Body';
import Header from './Component/Header';
import Store from './Utils/Store';

function App() {
  return (
    <>
      <Provider store={Store}>
        <Header />
        <Body />
      </Provider>
 
    </>
   
  );
}

export default App;
