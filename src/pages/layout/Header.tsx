import type { FC } from 'react'
import { Layout } from 'antd'

const Header: FC = () => {
  return (
    <Layout.Header className="p-0">
      <div className="logo-wapr w-[200px] text-white text-center">logo</div>
      <div className="layout-page-header"></div>
    </Layout.Header>
  )
}

export default Header
