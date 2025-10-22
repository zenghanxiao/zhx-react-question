import { getUserInfoService } from '@/servicies/user'
import { loginReducer } from '@/store/user'
import { useRequest } from 'ahooks'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import useGetUserInfo from './useGetUserInfo'

function useLoadUserData() {
  const dispatch = useDispatch()
  const [waitingUserData, setWaitingUserData] = useState(true)

  const { run } = useRequest(getUserInfoService, {
    manual: true,
    onSuccess(result) {
      const { username, nickname } = result
      dispatch(loginReducer({ username, nickname }))
    },
    onFinally() {
      setWaitingUserData(false)
    },
  })

  const { username } = useGetUserInfo()
  useEffect(() => {
    if (username) {
      setWaitingUserData(false)
      return
    }
    run()
  }, [username])

  return { waitingUserData }
}

export default useLoadUserData
