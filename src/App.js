import React from 'react';

// router
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// styling
import './App.css';

// data
import data from './data.json'

// components
import Menu from './Menu/Menu';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        {/* dropdown menu */}
        <Menu/>
        {/* routes */}
        <Switch>
          {/* map same data as dropdown to 
            create route for each item */}
          {data.menu.map(item =>{
            return(
              <Route key={item.id}
                exact path={item.route} 
                component={null} />
            )
          })}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
