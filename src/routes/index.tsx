import type { FC } from 'react'
import { Navigate, RouteObject } from 'react-router-dom'
import { useRoutes } from 'react-router-dom'

import Career from '../pages/career/Career.tsx'
import Center from '../pages/account/Center.tsx'
import Settings from '../pages/account/Settings.tsx'
import LayoutPage from '../pages/layout'
import Login from '../pages/login'

const routeList: RouteObject[] = [
  // { path: '', element: <LayoutPage /> },
  { path: 'login', element: <Login /> },
  {
    path: '/', element: <LayoutPage />,
    children: [
      { path: '', element: <Navigate to="career" /> },
      { path: 'career', element: <Career /> },
      { path: '/account', element: <Center /> },
      { path: '/account/center', element: <Center /> },
      { path: '/account/settings', element: <Settings /> },
    ]
  },
]

const RenderRouter: FC = () => {
  const element = useRoutes(routeList)

  return element
}

export default RenderRouter
