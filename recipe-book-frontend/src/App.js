import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import { connect } from 'react-redux'
import Header from './common/Header'
import MainContainer from './main/MainContainer'
import ShowUser from './user/ShowUser'
import NewUser from './user/NewUser'
import ShowRecipe from './recipes/ShowRecipe'
import NewRecipe from './recipes/NewRecipe'
import EditRecipe from './recipes/EditRecipe'
import NoMatch from './common/NoMatch'
import Toast from './common/Toast'
import RouteOrRedirect from './common/RouteOrRedirect'

function App(props) {
  return (
    <div id="appWrapper">
      {props.toastIsOpen ? <Toast /> : null}
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={MainContainer} />
            <Route exact path="/user" component={ShowUser} />
            <Route exact path="/user/new" component={NewUser} />
            <Route exact path="/recipes">
              <Redirect to="/" />
            </Route>
            <Route exact path="/recipes/new" component={NewRecipe} />
            <Route
              exact
              path="/recipes/:recipeId/edit"
              component={EditRecipe}
            />
            <RouteOrRedirect path="/recipes/:recipeId" component={ShowRecipe} />
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  )
}

const mapStateToProps = (props) => {
  return {
    toastIsOpen: props.ui.toastIsOpen,
  }
}

export default connect(mapStateToProps)(App)
