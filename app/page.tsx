"use client"

import Image from 'next/image'
import { useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form"

type Input = {
  email: string
}

export default function Home() {
  const [data, setData] = useState<Input>({ email: '' })

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors }
  } = useForm<Input>({
    defaultValues: {
      email: ''
    }
  })

  const processForm: SubmitHandler<Input> = data => setData(data)


  return (

    <main className="flex min-h-screen flex-col items-center justify-center p-10 md:p-5 bg-charcolGray">
      {!data.email.length && (
        <article className='bg-white grid md:grid-cols-2  grid-cols-1 rounded-xl place-items-center max-w-[800px] w-full'>
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
                  type="text"
                  id="emailInput"
                  className='border border-slate-600 p-3 rounded-md w-full'
                  placeholder='email@company.com'
                  {...register('email', { required: 'Valid email required' })}
                />

                <button type='submit' className='p-3 rounded-lg bg-darkGray text-white w-full'>
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
      )}

      {data.email.length > 0 && (
        <div className='flex flex-col items-start p-16 rounded-lg justify-center gap-6 max-w-[500px] w-full h-full  bg-white'>
          <Image src={'/icon-success.svg'} width={70} height={70} alt='icon-success' />
          <h1 className='text-2xl text-darkGray font-bold w-full md:text-5xl'>Thanks for subscribing!</h1>
          <p className='text-sm text-darkGray '>A confirmation link has been sent to <span className='font-bold'>{data.email}</span>. Please open it and click the button inside to confirm your subscription.</p>
          <button
            className='p-3 rounded-lg bg-darkGray text-white w-full'
            onClick={() => {
              reset()
              setData({ email: '' })
            }}>
            Dismiss message
          </button>
        </div>

      )}
      <a href='https://www.linkedin.com/in/juanibocchi/' className='font-bold hover:underline text-blue-400'>Made by @juanigna</a>
    </main>
  )
}
