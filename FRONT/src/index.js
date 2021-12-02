import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from 'src/components/App';
import store from 'src/store';

const rootReactElement = (
  // lance le store Redux qui contient les éléments du state
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

const target = document.getElementById('root');

ReactDom.render(rootReactElement, target);

