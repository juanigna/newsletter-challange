"use client"

import Image from "next/image";
import { FieldErrors, SubmitHandler, UseFormHandleSubmit, UseFormRegister } from "react-hook-form";
import { Input } from "../page";

interface LeftSectionProps {
    handleSubmit: UseFormHandleSubmit<Input>
    processForm: SubmitHandler<Input>
    errors: FieldErrors<Input>
    register: UseFormRegister<Input>
}

export default function LeftSection({ errors, handleSubmit, processForm, register }: LeftSectionProps) {


    return (
        <article className='bg-white grid md:grid-cols-2  grid-cols-1 rounded-xl place-items-center max-w-[850px] w-full'>
            <div className='flex flex-col items-start gap-4 py-5 px-10 w-full order-2 md:order-1'>
                <h1 className='text-5xl text-charcolGray font-bold max-w-full'>Stay updated!</h1>
                <p className='text-sm text-charcolGray'>Join 60.000+ product managers receiving monthly updates on:</p>
                <ul className='flex flex-col items-start justify-center gap-3'>
                    <li className='flex justify-start items-center text-charcolGray gap-3'>
                        <Image src="/icon-list.svg" width={10} height={10} alt='icon-list' />
                        <p>Product discovery and building what matters</p>
                    </li>
                    <li className='flex justify-start items-center text-charcolGray gap-3'>
                        <Image src="/icon-list.svg" width={10} height={10} alt='icon-list' />
                        <p>Measuring to ensure updates are success</p>
                    </li>
                    <li className='flex justify-start items-center text-charcolGray gap-3'>
                        <Image src="/icon-list.svg" width={10} height={10} alt='icon-list' />
                        <p>And much more!</p>
                    </li>
                </ul>

                <div className='flex flex-col items-start justify-center gap-3 relative w-full text-charcolGray'>
                    <label htmlFor="emailInput" className='text-sm font-bold'>Email address</label>
                    <form onSubmit={handleSubmit(processForm)} className=' w-full flex flex-col items-start justify-center gap-3'>
                        {errors.email?.message && (
                            <p className='text-sm text-primary absolute right-0 top-3'>{errors.email.message}</p>
                        )}
                        <input
                            type="email"
                            id="emailInput"
                            className={`border border-slate-400 p-3 rounded-md w-full ${errors?.email?.message && " bg-red-200 placeholder-red-500 border-red-400 border-1 bg-opacity-90 "} `} //
                            placeholder='email@company.com'
                            {...register('email', { required: 'Valid email required' })}
                        />

                        <button type='submit' className={`hover:shadow-primary-hover hover:bg-tomato-gradient-to-right p-3 rounded-lg bg-darkGray text-white w-full `}>
                            Suscribe to monthly newsletter
                        </button>
                    </form>
                </div>
            </div>
            <div className='place-items-end flex flex-1 justify-end items-end w-full  p-4 order-1 md:order-2'>
                <Image className='hidden md:block' src='/illustration-sign-up-desktop.svg' alt='Sign up image' width={350} height={300} />
                <Image className='md:hidden block w-full rounded-xl' src='/illustration-sign-up-mobile.svg' alt='Sign up image' width={350} height={350} />
            </div>
        </article>
    )
}