"use client"

import Image from "next/image"
import { Dispatch, SetStateAction } from "react"
import { UseFormReset } from "react-hook-form"
import { Input } from "../page"

interface RightSectionProps {
    reset: UseFormReset<Input>
    setData: Dispatch<SetStateAction<Input>>
    data: Input
}

export default function RightSection({ reset, setData, data }: RightSectionProps) {
    return (
        <div className='flex flex-col items-start p-16 rounded-lg justify-center gap-6 max-w-[500px] w-full h-full  bg-white'>
            <Image src={'/icon-success.svg'} width={70} height={70} alt='icon-success' />
            <h1 className='text-2xl text-darkGray font-bold w-full md:text-5xl'>Thanks for subscribing!</h1>
            <p className='text-sm text-darkGray '>A confirmation link has been sent to <span className='font-bold'>{data.email}</span>. Please open it and click the button inside to confirm your subscription.</p>
            <button
                className='p-3 hover:shadow-primary-hover hover:bg-tomato-gradient-to-right  rounded-lg bg-darkGray text-white w-full'
                onClick={() => {
                    reset()
                    setData({ email: '' })
                }}>
                Dismiss message
            </button>
        </div>

    )
}