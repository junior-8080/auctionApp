import React from 'react'
import { useAuth } from '@auth/hooks/useAuth'
import { useMutation } from '@tanstack/react-query'
import { authApi } from '@auth/lib/authApi'
import { setToken } from '@lib/cookies'
// import { useToast } from '@chakra-ui/react
import { useRouter } from 'next/navigation'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function useLogin(onComplete?: () => void) {
  const { actions } = useAuth()
  // const toast = useToast()
  const router = useRouter()

  const { mutate, isLoading } = useMutation({
    mutationFn: authApi.loginAdmin,
    onSuccess: ({ user, token }) => {
      actions.setIsLoggedIn(true)
      actions.setUser(user)
      setToken(token)
      toast.success("Login Successful")
      onComplete?.()
      router.push('/')
    },
    onError: () => {
      toast.error("Something went wrong.try again")
    }
  })

  return {
    login: mutate,
    isLoading
  }
}

export default useLogin
