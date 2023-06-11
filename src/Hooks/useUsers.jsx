import { useQuery } from "@tanstack/react-query"


const useUsers = () => {
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const response = await fetch(`${import.meta.env.VITE_link}/users`)
            return response.json()
        },
    })
    return [users, refetch]
}

export default useUsers