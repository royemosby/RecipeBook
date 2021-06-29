import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import Header from './common/Header'
import MainContainer from './main/MainContainer'
import ShowUser from './user/ShowUser'
import NewUser from './user/NewUser'
import ShowRecipe from './recipes/ShowRecipe'
import NewRecipe from './recipes/NewRecipe'
import EditRecipe from './recipes/EditRecipe'
import NoMatch from './common/NoMatch'
import history from './history'

function App() {
  return (
    <div id="appWrapper">
      <Router history={history}>
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
            <Route path="/recipes/:recipeId" component={ShowRecipe} />
            <Route
              exact
              path="/recipes/:recipeId/edit"
              component={EditRecipe}
            />
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App
