import useGetComponentInfo from '@/hooks/useGetComponentInfo'
import { FileTextOutlined, SettingOutlined } from '@ant-design/icons'
import { useEffect, useState, type FC } from 'react'
import ComponentProp from '../ComponentProp'
import PageSetting from '../PageSetting'
import { Tabs } from 'antd'

enum TAB_KEYS {
  PROP_KEY = 'prop',
  SETTING_KEY = 'setting',
}

const RightPanel: FC = () => {
  const [activeKey, setActiveKey] = useState(TAB_KEYS.PROP_KEY)
  const { selectedId } = useGetComponentInfo()

  useEffect(() => {
    if (selectedId) {
      setActiveKey(TAB_KEYS.PROP_KEY)
    } else {
      setActiveKey(TAB_KEYS.SETTING_KEY)
    }
  }, [selectedId])

  const tabsItems = [
    {
      key: TAB_KEYS.PROP_KEY,
      label: '属性',
      icon: <FileTextOutlined />,
      children: <ComponentProp />,
    },
    {
      key: TAB_KEYS.SETTING_KEY,
      label: '页面设置',
      icon: <SettingOutlined />,
      children: <PageSetting />,
    },
  ]

  return <Tabs activeKey={activeKey} items={tabsItems} />
}

export default RightPanel
