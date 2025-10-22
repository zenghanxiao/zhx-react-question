import { createBrowserRouter, type RouteObject } from 'react-router'
import MainLayout from '@/layouts/MainLayout'
import Home from '@/pages/Home'
import NotFound from '@/pages/NotFound'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import ManageLayout from '@/layouts/ManageLayout'
import List from '@/pages/manage/List'
import Trash from '@/pages/manage/Trash'
import Star from '@/pages/manage/Star'
import QuestionLayout from '@/layouts/QuestionLayout'
import Edit from '@/pages/question/Edit'
import Stat from '@/pages/question/Stat'

export const router: RouteObject[] = [
  {
    path: '/',
    Component: MainLayout,
    children: [
      {
        path: '/',
        Component: Home,
      },
      {
        path: 'login',
        Component: Login,
      },
      {
        path: 'register',
        Component: Register,
      },
      {
        path: 'manage',
        Component: ManageLayout,
        children: [
          {
            path: 'list',
            Component: List,
          },
          {
            path: 'star',
            Component: Star,
          },
          {
            path: 'trash',
            Component: Trash,
          },
        ],
      },
      {
        path: '*', // 404 路由配置，都写在最后（兜底）
        Component: NotFound,
      },
    ],
  },
  {
    path: 'question',
    Component: QuestionLayout,
    children: [
      {
        path: 'edit/:id',
        Component: Edit,
      },
      {
        path: 'stat/:id', // statistic 统计
        Component: Stat,
      },
    ],
  },
]

export default createBrowserRouter(router)

// 常用的路由，常量
export const HOME_PATHNAME = '/'
export const LOGIN_PATHNAME = '/login'
export const REGISTER_PATHNAME = '/register'
export const MANAGE_INDEX_PATHNAME = '/manage/list'

export function isLoginOrRegister(pathname: string) {
  if ([LOGIN_PATHNAME, REGISTER_PATHNAME].includes(pathname)) return true
  return false
}

export function isNoNeedUserInfo(pathname: string) {
  if ([HOME_PATHNAME, LOGIN_PATHNAME, REGISTER_PATHNAME].includes(pathname)) return true
  return false
}
