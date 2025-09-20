"use client"

import { useTheme } from "next-themes"
import { HTMLAttributes, useEffect, useRef, useState } from "react"

export default function HalftoneFilter(props: HTMLAttributes<HTMLDivElement>) {
    const resolverRef = useRef<HTMLDivElement>(null)
    const [color, setColor] = useState("")
    const { resolvedTheme } = useTheme()

    useEffect(() => {
        // Wait for a while to make sure color gets resolved.
        setTimeout(() => {
            if (resolverRef.current) {
                const style = window.getComputedStyle(resolverRef.current)
                setColor(style.backgroundColor)
            }
        }, 50)
    }, [resolvedTheme])

    return (
        <div
            {...props}
            className={`w-full h-full z-10 absolute ${props.className}`}
            style={{
                ...props.style,
                backgroundColor: "transparent",
                backgroundImage: `radial-gradient(transparent 1px, ${color} 1px)`,
                backgroundSize: "4px 4px",
                backdropFilter: "brightness(1) blur(10px)",
            }}
        >
            <div ref={resolverRef} className="hidden bg-light-0 dark:bg-dark-0"></div>
        </div>
    )
}
