import { useState, useEffect } from "react"


const useFetch = (url, callback) => {
  const [data, setData] = useState()
  const [error,setError] = useState('')
  const [loading,setLoading] = useState(true)

  const fetchData = async () => {
    
    setLoading(true)
    setError('')
    try {
      const response = await fetch(url)
      const data = await response.json()
      if(data.error){
        setError(data.error.message)
      }else{
        setData(callback(data))
      }
    } catch (error) {
      setError('Bad Request')
    }finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return [
    data,
    loading,
    error,
    fetchData
  ]

}

export default useFetch