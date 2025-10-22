import { getQuestionService } from '@/servicies/question'
import { resetComponents } from '@/store/component'
import { resetPageInfo } from '@/store/pageInfo'
import { useRequest } from 'ahooks'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router'

function useLoadQuestionData() {
  const { id = '' } = useParams()
  const dispatch = useDispatch()

  const { data, loading, error, run } = useRequest(
    async (id: string) => {
      if (!id) throw new Error('没有问卷 id')
      const data = await getQuestionService(id)
      return data
    },
    {
      manual: true,
    }
  )

  useEffect(() => {
    if (!data) return

    const {
      title = '',
      desc = '',
      js = '',
      css = '',
      isPublished = false,
      componentList = [],
    } = data

    // 获取默认的 selectedId
    let selectedId = ''
    if (componentList.length > 0) {
      selectedId = componentList[0].fe_id // 默认选中第一个组件
    }

    // 把 componentList 存储到 Redux store 中
    dispatch(resetComponents({ componentList, selectedId, copiedComponent: null }))

    // 把 pageInfo 存储到 redux store
    dispatch(resetPageInfo({ title, desc, js, css, isPublished }))
  }, [data])

  // 判断 id 变化，执行 ajax 加载问卷数据
  useEffect(() => {
    run(id)
  }, [id])

  return { loading, error }
}

export default useLoadQuestionData
