import { createBrowserRouter } from 'react-router-dom'
import Career from '../pages/career/Career.tsx'
import Center from '../pages/account/Center.tsx'
import Settings from '../pages/account/Settings.tsx'

export const router = createBrowserRouter([
  { path: '', element: <Career /> },
  { path: 'career', element: <Career /> },
  {
    path: 'account', children: [
      { path: 'center', element: <Center /> },
      { path: 'settings', element: <Settings /> },
    ]
  },
])

export default router
