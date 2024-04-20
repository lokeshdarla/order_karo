'use client'

import { LoadingState } from '@/components/common/LoadingState'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push('/login')
    }, 2000)
  }, [router])

  return <LoadingState />
}
