"use client" // this is a client component
import React from "react"
import { useState } from "react"
import { Link } from "react-scroll/modules"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { RiMoonFill, RiSunLine } from "react-icons/ri"
import { IoMdMenu, IoMdClose } from "react-icons/io"
import './navbar.css';  
import { Fade } from "react-awesome-reveal";


const NAV_ITEMS = [
  {
    label: "About",
    page: "about",
  },
  {
    label: "Experience",
    page: "experience",
  },
  {
    label: "Achievements",
    page: "achievements",
  },
  {
    label: "Projects",
    page: "projects",
  },
]

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()
  const [navbar, setNavbar] = useState(false)
  
  React.useEffect(() => {
    setTheme('light')
  }, [])

  return (
    <header className="w-full mx-auto p-4 sm:px-20">
      <div className="justify-between md:items-center md:flex">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Fade triggerOnce direction="down">
              <Link to="home">
                <div className="container flex items-center space-x-2">
                  <h2 className="text-2xl font-bold">Angel Lopez</h2>
                </div>
              </Link>
            </Fade>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
              </button>
            </div>
          </div>
        </div>

        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 animate__animated animate__bounce">
              {NAV_ITEMS.map((item, idx) => {
                return (
                  <Fade key={idx} triggerOnce direction="down" delay={`${idx}0`}>
                    <Link
                      key={idx}
                      to={item.page}
                      className={
                        "block lg:inline-block text-neutral-900  hover:text-neutral-500 dark:text-neutral-100 hover:cursor-pointer"
                      }
                      activeClass="active"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}
                      onClick={() => setNavbar(!navbar)}
                    >
                      {item.label}
                    </Link>
                  </Fade>
                )
              })}
              {/* {theme === "dark" ? (
                <Fade triggerOnce direction="down" delay={600}>
                  <button
                    onClick={() => setTheme("light")}
                    className="bg-slate-100 p-2 rounded-xl"
                  >
                    <RiSunLine size={25} color="black" />
                  </button>
                </Fade>
              ) : (
                <Fade triggerOnce direction="down" delay={600}>
                  <button
                    onClick={() => setTheme("dark")}
                    className="bg-slate-100 p-2 rounded-xl"
                  >
                    <RiMoonFill size={25} />
                  </button>
                </Fade>
              )} */}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}