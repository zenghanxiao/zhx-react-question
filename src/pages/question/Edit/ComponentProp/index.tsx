import { getComponentConfByType, type ComponentPropsType } from '@/components/QuestionComponents'
import useGetComponentInfo from '@/hooks/useGetComponentInfo'
import { changeComponentProps } from '@/store/component'
import type { FC } from 'react'
import { useDispatch } from 'react-redux'

const NoProp: FC = () => {
  return <div style={{ textAlign: 'center' }}>未选中组件</div>
}

const ComponentProp: FC = () => {
  const dispatch = useDispatch()

  const { selectedComponent } = useGetComponentInfo()
  if (!selectedComponent) return <NoProp />

  const { type, props, isLocked, isHidden } = selectedComponent
  const componentConf = getComponentConfByType(type)
  if (!componentConf) return <NoProp />

  const changeProps = (newProps: ComponentPropsType) => {
    if (!selectedComponent) return
    const { fe_id } = selectedComponent
    dispatch(changeComponentProps({ fe_id, newProps }))
  }

  const { PropComponent } = componentConf

  return <PropComponent {...props} onChange={changeProps} disabled={isLocked || isHidden} />
}

export default ComponentProp
