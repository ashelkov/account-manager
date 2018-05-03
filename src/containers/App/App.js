import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AppHeader from '../../components/NavigationHeader/NavigationHeader';

const App = () => (
  <Router>
    <div>
      <AppHeader />
      <div className="container">
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
      </div>
    </div>
  </Router>
);

const Home = () => (
  <div>
    <h2>Home</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
      atque, maiores! Autem eius illo nisi, odio quas repellendus vel vero!
      Dolore fugiat inventore laudantium magni quae quas sequi similique
      voluptatum!
    </p>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius et fuga
      laudantium, neque officia perferendis repudiandae sit voluptas. Deserunt
      distinctio doloremque eum excepturi fugiat natus perspiciatis, porro quasi
      quos voluptas!
    </p>
  </div>
);

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

export default App;
