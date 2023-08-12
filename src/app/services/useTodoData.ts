import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios"
import { Todo } from "../interface/todo";

const fetchData = async (): AxiosPromise<Todo[]> => {
    const response = axios.get('https://dummyjson.com/todos');
    return response;
}

export function api(){
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['todo-data'],
        retry: 2
    })

    return {
        ...query,
        data: query.data?.data
    }
}