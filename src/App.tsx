import 'antd/dist/reset.css'
import './App.css'
import { App as Antapp } from 'antd'
import AntdGlobal from './utils/AntdGlobal'
import { RouterProvider } from 'react-router'
import router from './router'
// import Count from './components/Count'

function App() {
  return (
    <Antapp>
      <AntdGlobal />
      {/* <Count /> */}
      <RouterProvider router={router}></RouterProvider>
    </Antapp>
  )
}

export default App
