import React from 'react'
import check from "../../assets/icons/check.png"

const ContactPage = () => {
  return (
    <div className="px-5 md:px-10 xl:px-20 2xl:px-28 h-screen bg-white flex flex-col items-center mt-24">
        <img src={check} alt="" />
        <h3 className="text-center text-heading-3 2xl:text-7xl font-semibold leading-tight translate-y-10">
            Thank You for Reaching Out!
        </h3>
        <p className="mt-2 text-center max-w-md 2xl:max-w-2xl text-body-1 2xl:text-4xl text-accent-100 translate-y-10">
        Your message has been successfully sent. I appreciate you taking the time to get in touch. I'll review your message and get back to you as soon as possible.
        </p>
    </div>
  )
}

export default ContactPage