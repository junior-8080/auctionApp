import { useMutation } from '@tanstack/react-query'
// import { authService } from '@base/services'
// import { errorToast, successToast } from '@core/utils'

// import { useToast } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import { authApi } from '../lib/authApi'
import { toast } from 'react-toastify'

export function useSignUp() {
    // const toast = useToast()
    const router = useRouter()

    const { mutate, isLoading } = useMutation({
        mutationFn: authApi.signUp,
        onSuccess: () => {
            // alert("'Erreur', 'Une erreur est survenue.'")
            toast.success("Signup Successful")
            router.push('/login')
        },
        onError: () => {
            // alert("'Erreur', 'Une erreur est survenue.'")
            toast.error("Something went wrong.try again")
        }
    })

    return {
        signup: mutate,
        isLoading
    }
}
