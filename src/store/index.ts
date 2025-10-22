import { configureStore } from '@reduxjs/toolkit'
import countReducer, { type CountType } from './count'
import userReducer, { type UserStateType } from './user'
import componentReducer, { type ComponentsStateType } from './component'
import pageInfoReducer, { type PageInfoType } from './pageInfo'
import undoable, { excludeAction, type StateWithHistory } from 'redux-undo'

export interface StoreType {
  count: CountType
  user: UserStateType
  component: StateWithHistory<ComponentsStateType>
  pageInfo: PageInfoType
}

export default configureStore({
  reducer: {
    count: countReducer,
    user: userReducer,
    component: undoable(componentReducer, {
      limit: 20,
      filter: excludeAction([
        'component/resetComponents',
        'component/changeSelectedId',
        'component/selectPrevComponent',
        'component/selectNextComponent',
      ]),
    }),
    pageInfo: pageInfoReducer,
  },
})
