import type { FC } from 'react'
import { Typography, Input } from 'antd'
import { type QuestionTextareaPropsType, QuestionTextareaDefaultProps } from './interface'

const { Paragraph } = Typography
const { TextArea } = Input

const QuestionTextarea: FC<QuestionTextareaPropsType> = (props: QuestionTextareaPropsType) => {
  const { title, placeholder } = { ...QuestionTextareaDefaultProps, ...props }

  return (
    <div>
      <Paragraph strong>{title}</Paragraph>
      <div>
        <TextArea placeholder={placeholder}></TextArea>
      </div>
    </div>
  )
}

export default QuestionTextarea
