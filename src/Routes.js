import React from 'react'
import { Route, Switch } from 'react-router-dom'

//Importando componentes 
import Home from './pages/Home'
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'

import Mini1 from './pages/Mini1'

//Class Routes

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/page1' component={Page1} />
        <Route exact path='/page2' component={Page2} />

        <Route path='/page1/page1.1' component={Mini1} />
        <Route
          render={() => {
            return <h1> Página não encontrada </h1>
          }}
        />
      </Switch>
    )
  }
}

export default Routes