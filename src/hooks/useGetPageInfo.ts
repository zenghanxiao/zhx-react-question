import { useSelector } from 'react-redux'
import type { StoreType } from '@/store'
import type { PageInfoType } from '@/store/pageInfo'

function useGetPageInfo() {
  const pageInfo = useSelector<StoreType, PageInfoType>((state) => state.pageInfo)
  return pageInfo
}

export default useGetPageInfo
