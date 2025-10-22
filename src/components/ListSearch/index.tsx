import { LIST_SEARCH_PARAM_KEY } from '@/constants'
import { Input } from 'antd'
import { useEffect, useState, type ChangeEvent, type FC } from 'react'
import { useLocation, useNavigate, useSearchParams } from 'react-router'

const { Search } = Input

const ListSearch: FC = () => {
  const nav = useNavigate()
  const { pathname } = useLocation()

  const [value, setValue] = useState('')
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value)
  }

  const [searchParams] = useSearchParams()

  useEffect(() => {
    const curVal = searchParams.get(LIST_SEARCH_PARAM_KEY) || ''
    setValue(curVal)
  }, [searchParams])

  function handleSearch(value: string) {
    nav({
      pathname,
      search: `${LIST_SEARCH_PARAM_KEY}=${value}`,
    })
  }

  return (
    <Search
      size='large'
      allowClear
      placeholder='输入关键字'
      value={value}
      onChange={handleChange}
      onSearch={handleSearch}
      style={{ width: '260px' }}
    ></Search>
  )
}

export default ListSearch
