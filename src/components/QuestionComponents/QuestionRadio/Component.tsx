import { Radio, Typography } from 'antd'
import { QuestionRadioDefaultProps, type QuestionRadioPropsType } from './interface'
import type React from 'react'
import { type FC } from 'react'

const { Paragraph } = Typography

const style: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
}

const Component: FC<QuestionRadioPropsType> = (props: QuestionRadioPropsType) => {
  const { title, options = [], value, isVertical } = { ...QuestionRadioDefaultProps, ...props }

  const optionsFinal = options.map((o) => {
    return {
      label: o.text,
      value: o.value,
    }
  })

  return (
    <div>
      <Paragraph strong>{title}</Paragraph>
      <Radio.Group style={isVertical ? style : undefined} value={value} options={optionsFinal} />
    </div>
  )
}

export default Component
