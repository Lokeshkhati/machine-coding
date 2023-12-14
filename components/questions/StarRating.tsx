'use client'

import { useState } from "react"
import Heading from "../Heading"

const StarRating = ({ numOfStars }: { numOfStars: number }) => {
    const stars = Array.from({ length: numOfStars }).fill(null)
    const [rating, setRating] = useState(2)
    const [hoverIndex, setHoverIndex] = useState(0)
    return (
        <div className=" flex flex-col items-center justify-center gap-y-6 h-full">
            <Heading>Star Rating</Heading>
            <div className="flex gap-6">
                {
                    stars.map((_, index) => <span key={index}
                        className=" cursor-pointer "
                        onClick={() => setRating(index + 1)}
                        onMouseEnter={() => setHoverIndex(index + 1)}
                        onMouseLeave={() => setHoverIndex(0)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-gray-900 h-20 w-20"
                            fill={index < (hoverIndex || rating) ? 'orange' : 'white'}
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                            />
                        </svg>
                    </span>)
                }
            </div>
        </div >
    )
}
export default StarRating