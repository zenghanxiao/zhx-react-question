import { useLocation, useNavigate } from 'react-router'
import useGetUserInfo from './useGetUserInfo'
import { useEffect } from 'react'
import {
  isLoginOrRegister,
  isNoNeedUserInfo,
  LOGIN_PATHNAME,
  MANAGE_INDEX_PATHNAME,
} from '@/router'

function useNavPage(waitingUserData: boolean) {
  const { username } = useGetUserInfo()
  const nav = useNavigate()
  const { pathname } = useLocation()

  useEffect(() => {
    if (waitingUserData) return

    if (username) {
      if (isLoginOrRegister(pathname)) {
        nav(MANAGE_INDEX_PATHNAME)
      }
      return
    }

    if (isNoNeedUserInfo(pathname)) {
      return
    } else {
      nav(LOGIN_PATHNAME)
    }
  }, [waitingUserData, username, pathname])
}

export default useNavPage
