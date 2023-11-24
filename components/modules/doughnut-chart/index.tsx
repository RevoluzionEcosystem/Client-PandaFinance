import { CSSProperties, FC, useEffect, useRef, useState } from "react"
import { nAmount } from "../../../lib/helpers"

import general from "../../../data/lang/en/general.json"

interface DoughnutChartData {
    title: string
    value: number
    color: string
}

const terms = general["terms"]

const DoughnutChart: FC<{ data: DoughnutChartData[] }> = ({ data }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const [hoverIndex, setHoverIndex] = useState<number | null>(null)

    const handleHover = (index: number | null) => {
        setHoverIndex(index)
    }

    useEffect(() => {
        if (canvasRef.current) {
            const canvas = canvasRef.current
            const ctx = canvas.getContext("2d")
            if (ctx) {
                let total = 0
                data.forEach((item) => (total += item.value))

                let startAngle = -Math.PI / 2
                const centerX = canvas.width / 2
                const centerY = canvas.height / 2
                const radius = Math.min(canvas.width, canvas.height) / 2

                data.forEach((item, index) => {
                    const sliceAngle = (2 * Math.PI * item.value) / total

                    ctx.fillStyle = item.color
                    ctx.beginPath()
                    ctx.moveTo(centerX, centerY)
                    ctx.arc(centerX, centerY, radius, startAngle, startAngle + sliceAngle)
                    ctx.closePath()
                    ctx.fill()

                    canvas.onmousemove = (e) => {
                        const rect = canvas.getBoundingClientRect()
                        const x = e.clientX - rect.left
                        const y = e.clientY - rect.top

                        ctx.clearRect(0, 0, canvas.width, canvas.height)
                        data.forEach((item, i) => {
                            const sliceAngle = (2 * Math.PI * item.value) / total

                            ctx.fillStyle = item.color
                            ctx.beginPath()
                            ctx.moveTo(centerX, centerY)
                            ctx.arc(centerX, centerY, radius, startAngle, startAngle + sliceAngle)
                            ctx.closePath()
                            ctx.fill()

                            if (ctx.isPointInPath(x, y)) {
                                handleHover(i)
                            }
                            startAngle += sliceAngle
                        })
                    }

                    startAngle += sliceAngle
                })
            }
        }
    }, [data])

    return (
        <div className="h-[400px]">
            <div className="absolute">
                <canvas className="" ref={canvasRef} width={400} height={400} />
                {hoverIndex !== null ? (
                    <div className="z-[30] top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] absolute p-6 border-4 border-foreground rounded-full bg-background block text-foreground text-center">
                        <p>{data[hoverIndex].title}</p>
                        <p>{terms.value}: {nAmount(data[hoverIndex].value, 2, 1)}</p>
                    </div>
                ) : (
                    <div className="z-[30] top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] absolute p-6 border-4 border-foreground rounded-full bg-background block text-foreground text-center">
                        <p>{terms.tokenomics}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default DoughnutChart
