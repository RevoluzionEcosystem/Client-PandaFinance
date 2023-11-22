"use client"

import { ReactNode, useEffect, useRef, useState } from "react"

export default function RevealOnScroll({
    children,
}: {
    children: ReactNode
}) {
    const [isVisible, setIsVisible] = useState(false) 
    const ref = useRef(null) 
    const classes = `transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}` 

    useEffect(() => { 
        const scrollObserver = new IntersectionObserver(([entry]) => { 
            if (entry.isIntersecting) { 
                setIsVisible(true) 
                scrollObserver.unobserve(entry.target) 
            } 
        }) 
  
        scrollObserver.observe(ref.current) 
  
        return () => { 
            if (ref.current) { 
                scrollObserver.unobserve(ref.current) 
            } 
        } 
    }, []) 
  
    return ( 
        <div ref={ref} className={classes}> 
            {children} 
        </div> 
    ) 
} 