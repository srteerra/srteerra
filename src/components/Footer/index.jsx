import React from "react"
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai"
import { BsTelephoneFill } from "react-icons/bs"

const Footer = () => {
  return (
    <footer className="mx-auto">
        <div className="px-12 sm:px-6 py-12">
            <div className="flex flex-row items-center justify-center space-x-1 text-neutral-500 dark:text-neutral-100">
                © 2023 Angel Lopez<a href="/" className="hover:underline"></a>
            </div>
            <div className="mx-auto p-4 flex flex-col text-center text-neutral-900">
                <div className="flex flex-row items-center justify-center space-x-2 mb-1">
                    <a href="https://github.com/srteerra" rel="noreferrer" target="_blank">
                        <AiOutlineGithub
                        className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
                        size={30}
                        />
                    </a>
                    <a
                        href="https://www.instagram.com/srteerra/"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <AiOutlineInstagram
                        className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
                        size={30}
                        />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/imterra/"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <AiOutlineLinkedin
                        className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
                        size={30}
                        />
                    </a>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer