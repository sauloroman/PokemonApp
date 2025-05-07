import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export const PrivateRoutes: React.FC = () => {

  const isAuthenticated = true

  return isAuthenticated ? <Outlet /> : <Navigate to={'/login'}/>
}
