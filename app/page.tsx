"use client"

import Image from 'next/image'
import { useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import LeftSection from './components/left-section'
import RightSection from './components/right-section'

export type Input = {
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
        <LeftSection
          errors={errors}
          handleSubmit={handleSubmit}
          processForm={processForm}
          register={register}
        />
      )}

      {data.email.length > 0 && (
        <RightSection
          data={data}
          reset={reset}
          setData={setData}
        />
      )}
      <p className='mt-3'>Made by <a href='https://www.linkedin.com/in/juanibocchi/' className='font-bold hover:underline text-blue-400'>@Juan Ignacio</a> | Frontend Mentor challange</p>
    </main>
  )
}
