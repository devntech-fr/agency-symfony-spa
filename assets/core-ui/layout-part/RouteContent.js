import React, { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { CContainer, CSpinner } from '@coreui/react'
import getRoutes from '../routes/RouterProvider'

const RouteContent = ({ demo }) => {
  const routes = getRoutes(demo);
  return (
      <Suspense fallback={<CSpinner color="primary" />}>
          <Routes>
              {routes.map((route, idx) => {
                  return (
                      route.element && (
                          <Route
                              key={idx}
                              path={route.path}
                              exact={route.exact}
                              name={route.name}
                              element={<route.element />}
                          />
                      )
                  )
              })}
              <Route path="/" element={<Navigate to="dashboard" replace />} />
          </Routes>
      </Suspense>
  )
}

export default React.memo(RouteContent)
