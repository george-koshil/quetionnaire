import { useSearchParams } from "react-router-dom"
import { useEffect } from 'react'

type useQueryStateReturnType = [
  string | null,
  (newValue: string | number) => void
]

const useQueryState = (key: string, initialValue: string | number): useQueryStateReturnType => {
  const [params, setParams] = useSearchParams()

  // Setup initial value to url when hook defined
  useEffect(() => {
    setParams({ [key]: initialValue.toString() })
  }, [])
  
  const updateValue = (newValue: string | number) => {
    setParams({ [key]: newValue.toString()})
  }

  const value = params.get(key)

  return [value, updateValue]
}

export default useQueryState