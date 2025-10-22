import { Tabs } from 'antd'
import type { FC } from 'react'
import { AppstoreAddOutlined, BarsOutlined } from '@ant-design/icons'
import ComponentLib from '../ComponentLib'
import Layers from '../Layers'

const LeftPanel: FC = () => {
  const tabsItems = [
    {
      key: 'componentLib',
      label: '组件库',
      icon: <AppstoreAddOutlined />,
      children: <ComponentLib />,
    },
    {
      key: 'layers',
      label: '图层',
      icon: <BarsOutlined />,
      children: <Layers />,
    },
  ]

  return <Tabs defaultActiveKey='componentLib' items={tabsItems} />
}

export default LeftPanel
