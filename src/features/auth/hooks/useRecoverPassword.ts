import React from 'react'
import { useAuth } from '@auth/hooks/useAuth'
import { useMutation } from '@tanstack/react-query'
import { authApi } from '@auth/lib/authApi'
import { setToken } from '@lib/cookies'
// import { useToast } from '@chakra-ui/react
import { useRouter } from 'next/navigation'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function useRecoverPassword(onComplete?: () => void) {
    const router = useRouter()
    const { mutate, isLoading } = useMutation({
        mutationFn: authApi.recoverPassword,
        onSuccess: ({ user, token }) => {
            // actions.setIsLoggedIn(true)
            toast.success("Login Successful")
            onComplete?.()
            router.push('/')
        },
        onError: () => {
            toast.error("Something went wrong.try again")
        }
    })

    return {
        recoverPassword: mutate,
        isLoading
    }
}

export default useRecoverPassword
