import { useQuery } from "@tanstack/react-query"


const usemySelectedClass = (email) => {
    const { data: mySelectedClasses = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const response = await fetch(`${import.meta.env.VITE_link}/selectedClass?email=${email}`)
            return response.json()
        },
    })
    return [mySelectedClasses, refetch]
}

export default usemySelectedClass