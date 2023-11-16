"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import Loader from "../loader"

export default function Splash() {
    const router = useRouter()

    useEffect(() => {
        const delay = 1500
        const navigateToAnotherPage = () => {
            router.push('/home')
        }
    
        const timer = setTimeout(navigateToAnotherPage, delay)
    
        return () => clearTimeout(timer)
    }, [])
    
    return (
        <Loader />
    )
}