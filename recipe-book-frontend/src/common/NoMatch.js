import React from 'react'
import { useLocation, Link } from 'react-router-dom'

function NoMatch() {
  let location = useLocation()

  return (
    <div className="skeleton">
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
      <Link to="/">
        <div className="linky">Go back home</div>
      </Link>
    </div>
  )
}

export default NoMatch
