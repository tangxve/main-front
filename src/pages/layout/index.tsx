import type { FC } from 'react'
import { Layout } from 'antd'
import { Outlet } from 'react-router-dom'
import Header from './Header.tsx'
import Menu from './Menu'

const { Sider, Content } = Layout

const LayoutPage: FC = () => {

  return (
    <Layout className="layout-page h-screen">
      <Header />
      <Layout>
        <Sider>
          <Menu/>
        </Sider>
        <Content className="layout-page-content">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}

export default LayoutPage
