import type { StoreType } from '@/store'
import type { ComponentsStateType } from '@/store/component'
import { useSelector } from 'react-redux'

function useGetComponentInfo() {
  const components = useSelector<StoreType, ComponentsStateType>((state) => state.component)

  const { componentList = [], selectedId, copiedComponent } = components

  const selectedComponent = componentList.find((c) => c.fe_id === selectedId)

  return {
    componentList,
    selectedId,
    selectedComponent,
    copiedComponent,
  }
}

export default useGetComponentInfo
