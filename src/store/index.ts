import { configureStore } from '@reduxjs/toolkit'
import countReducer, { type CountType } from './count'
import userReducer, { type UserStateType } from './user'
import componentReducer, { type ComponentsStateType } from './component'
import pageInfoReducer, { type PageInfoType } from './pageInfo'

export interface StoreType {
  count: CountType
  user: UserStateType
  component: ComponentsStateType
  pageInfo: PageInfoType
}

export default configureStore({
  reducer: {
    count: countReducer,
    user: userReducer,
    component: componentReducer,
    pageInfo: pageInfoReducer,
  },
})
