import axios from 'axios'
import { useCallback, useEffect, useState } from 'react'

export interface IAxios {
    method: string,
    url: string
}

export const useFetch: ({method, url}: IAxios) => any = ({method, url}) => {

    const [data, setData] = useState<any>(null)
    const [isLoading, setIsLoading] = useState<boolean>(true)


    const fetchData = useCallback(async () => {
        const response = await axios({method: method, baseURL: url})

        setData(response.data)
        setIsLoading(false)
    }, [])

    useEffect(() => {
        fetchData()
    }, [])


    return [data, isLoading]


}
