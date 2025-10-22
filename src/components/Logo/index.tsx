import { HOME_PATHNAME, MANAGE_INDEX_PATHNAME } from '@/router'
import { useEffect, useState, type FC } from 'react'
import styles from './index.module.scss'
import { Link } from 'react-router'
import { Space, Typography } from 'antd'
import { FormOutlined } from '@ant-design/icons'
import useGetUserInfo from '@/hooks/useGetUserInfo'

const { Title } = Typography

const Logo: FC = () => {
  const { username } = useGetUserInfo()

  const [pathname, setPathname] = useState(HOME_PATHNAME)

  useEffect(() => {
    if (username) {
      setPathname(MANAGE_INDEX_PATHNAME)
    }
  }, [username])

  return (
    <div className={styles.container}>
      <Link to={pathname}>
        <Space>
          <Title>
            <FormOutlined />
          </Title>
          <Title>小慕问卷</Title>
        </Space>
      </Link>
    </div>
  )
}

export default Logo
