import type { FC } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increase, decrease, type CountType } from '@/store/count'
import type { StoreType } from '@/store/index'

const Count: FC = () => {
  const count = useSelector<StoreType, CountType>((state) => state.count)

  const dispatch = useDispatch()
  return (
    <div>
      <span>count: {count.value}</span>
      <button onClick={() => dispatch(increase())}>+</button>
      <button onClick={() => dispatch(decrease())}>-</button>
    </div>
  )
}

export default Count
