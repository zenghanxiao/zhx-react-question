import type { StoreType } from '@/store'
import type { UserStateType } from '@/store/user'
import { useSelector } from 'react-redux'

function useGetUserInfo() {
  const { username, nickname } = useSelector<StoreType, UserStateType>((state) => state.user)
  return { username, nickname }
}

export default useGetUserInfo
