'use client'

import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

interface Props {
  allowedRoles: string[]
  children: React.ReactNode
}

export default function RoleGuard({ allowedRoles, children }: Props) {
  const { user } = useAuthStore()
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      router.replace('/login')
      return
    }

    if (!allowedRoles.includes(user.role)) {
      router.replace('/') // o a una página 403
    }
  }, [user])

  if (!user || !allowedRoles.includes(user.role)) {
    return null
  }

  return <>{children}</>
}