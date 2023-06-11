import { useQuery } from "@tanstack/react-query"


const useMyClass = (email) => {
    const { data: myAllClass = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const response = await fetch(`${import.meta.env.VITE_link}/myClass?email=${email}`)
            return response.json()
        },
    })
    return [myAllClass, refetch]
}

export default useMyClass