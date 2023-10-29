"use client"

import { useEffect, useState } from "react"

export function Mounted() {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    return mounted
}