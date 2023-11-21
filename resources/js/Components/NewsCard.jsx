import React from 'react'
import {Card} from "flowbite-react";

export default function NewsCard({news}) {
    return (
        <div className="max-w-sm">
            {news.map((data, i) => {
                return (
                    <div>
                        <Card imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg">
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                {data.title}
                            </h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                {data.description}
                            </p>
                        </Card>
                    </div>
                )
            })}
        </div>
    )
}
