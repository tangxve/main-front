import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

const MenuList: FC = () => {
  const navigate = useNavigate()

  const onMenuClick = (path: string) => {
    navigate(path)
  }
  return (
    <>
      <div>房间</div>
      <div>主页</div>
      <div>云顶</div>
      <div onClick={() => onMenuClick('/')}>生涯</div>
      <div>商品</div>
      <div>战利品</div>
      <div>商店</div>
      <div onClick={() => onMenuClick('/account')}>用户</div>
      <div></div>
    </>
  )
}

export default MenuList
