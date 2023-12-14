'use client'
import { useState } from "react"
import Heading from "../Heading"
const config = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
]
const flattenConfig = config.flat()

const GridLight = () => {

    const [order, setOrder] = useState<number[]>([])
    const [isDeactivating, setIsDeactivating] = useState(false)

    const deactivateCell = () => {

        setIsDeactivating(true)
        const timerId = setInterval(() => {

            setOrder((prevOrder) => {
                const newOrder = prevOrder.slice()
                newOrder.pop()
                if (newOrder.length === 0) {
                    clearInterval(timerId)
                    setIsDeactivating(false)
                }

                return newOrder
            })
        }, 300)


    }

    const clickHandler = (index: number) => {

        const newOrder = [...order, index]
        setOrder(newOrder)
        if (newOrder.length === flattenConfig.length - 1) {
            deactivateCell()
        }
    }
    return (
        <div className=" flex flex-col items-center justify-center gap-y-6 h-full">
            <Heading>Grid Light</Heading>

            <div className="grid grid-cols-3 gap-4 w-[20rem] h-[20rem] ">
                {
                    flattenConfig.map((value, index) => (
                        <>
                            {
                                value ? <button key={index}
                                    style={{ backgroundColor: order.includes(index) ? "green" : "white" }}
                                    className='border-2 border-gray-900'
                                    onClick={() => clickHandler(index)}
                                    disabled={order.includes(index)}
                                > </button>
                                    : <span key={index} />
                            }
                        </>
                    ))
                }
            </div>
        </div>
    )
}
export default GridLight