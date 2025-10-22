import useGetUserInfo from '@/hooks/useGetUserInfo'
import { LOGIN_PATHNAME } from '@/router'
import { logoutReducer } from '@/store/user'
import { message } from '@/utils/AntdGlobal'
import { removeToken } from '@/utils/userToken'
import { UserOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import type { FC } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router'

const UserInfo: FC = () => {
  const nav = useNavigate()
  const dispatch = useDispatch()

  const { username, nickname } = useGetUserInfo()

  function logout() {
    dispatch(logoutReducer())
    removeToken()
    message.success('退出成功')
    nav(LOGIN_PATHNAME)
  }

  const UserInfo = (
    <>
      <span style={{ color: '#e8e8e8' }}>
        <UserOutlined />
        {nickname}
      </span>
      <Button type='link' onClick={logout}>
        退出
      </Button>
    </>
  )

  const Login = <Link to={LOGIN_PATHNAME}>登录</Link>

  return <div>{username ? UserInfo : Login}</div>
}

export default UserInfo
