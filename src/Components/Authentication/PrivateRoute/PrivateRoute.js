import React from 'react'
import { Spinner } from 'react-bootstrap'
import { Redirect, Route } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'

export const PrivateRoute = ({ children, ...rest }) => {
    const {user, loading} = useAuth()
    if(loading){ return  <Spinner animation="grow" />}
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.uid ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  )
}
