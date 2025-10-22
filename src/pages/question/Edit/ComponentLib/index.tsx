import { componentConfGroup, type ComponentConfType } from '@/components/QuestionComponents'
import { Typography } from 'antd'
import { useCallback, type FC } from 'react'
import styles from './index.module.scss'
import { useDispatch } from 'react-redux'
import { addComponent } from '@/store/component'
import { nanoid } from 'nanoid'

const { Title } = Typography

const GenComponent: FC<ComponentConfType> = (props: ComponentConfType) => {
  const { title, type, Component, defaultProps } = props
  const dispatch = useDispatch()

  const handleClick = useCallback(() => {
    dispatch(
      addComponent({
        fe_id: nanoid(),
        type,
        title,
        props: defaultProps,
      })
    )
  }, [])

  return (
    <div className={styles.wrapper} onClick={handleClick}>
      <div className={styles.component}>
        <Component />
      </div>
    </div>
  )
}

const ComponentLib: FC = () => {
  return (
    <>
      {componentConfGroup.map((group, index) => {
        const { groupId, groupName, components } = group

        return (
          <div key={groupId}>
            <Title level={3} style={{ fontSize: '16px', marginTop: index > 0 ? '20px' : '0' }}>
              {groupName}
            </Title>
            <div>
              {components.map((c) => (
                <GenComponent key={c.type} {...c} />
              ))}
            </div>
          </div>
        )
      })}
    </>
  )
}

export default ComponentLib
