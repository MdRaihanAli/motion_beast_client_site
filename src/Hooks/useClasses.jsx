import { useQuery } from "@tanstack/react-query"


const useClasses = () => {
    const { data: classes = [], refetch } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const response = await fetch(`classes.json`)
            return response.json()
        },
    })
    return [classes, refetch]
}

export default useClasses