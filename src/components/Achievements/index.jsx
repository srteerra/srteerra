import React from "react"
import Image from "next/image"
import { Fade, Slide } from "react-awesome-reveal"
import { FaVuejs } from "react-icons/fa"
import { BiLinkExternal, BiTrophy } from "react-icons/bi"
import { DiBootstrap, DiNodejsSmall, DiMongodb, DiHtml5, DiCss3Full, DiReact } from "react-icons/di"
import { SiVuedotjs, SiSolidity, SiWeb3Dotjs, SiMiro, SiAdobexd, SiTailwindcss } from "react-icons/si"
import { FiFigma } from "react-icons/fi"
import { TbBrandNextjs } from "react-icons/tb"

const experience = [
    { 
        event: "Incubadora ACE-II 2022",
        track: "Doycoin",
        date: "January 2022 - April 2022",
        location: "Juarez, MX",
        place: "Winner",
        desc: "A decentralized web application where, through donations, a staking is created to plant trees with Crypto without stopping. Because the donation is self-regenerating. A business model crafted for web3 enthusiasts",
        repo: "https://github.com/srteerra/doycoin",
        stack: [
            { skill: "Vue", icon: <FaVuejs className="my-auto"/>},
            { skill: "Bootstrap", icon: <DiBootstrap className="my-auto"/>},
            { skill: "Node.js", icon: <DiNodejsSmall className="my-auto"/>},
            { skill: "Vuex", icon: <SiVuedotjs className="my-auto"/>},
            { skill: "Solidity", icon: <SiSolidity className="my-auto"/>},
            { skill: "Web3.js", icon: <SiWeb3Dotjs className="my-auto"/>},
        ],
        images: [
            {
                name: "incubadora utcj",
                img: <Image
                    src="hackathons/utcj-inc.png"
                    alt=""
                    width={140}
                    height={70}
                />,
            }
        ]
    },
    { 
        event: "Talent Land Hackathon 2022",
        track: "AstraZeneca",
        date: "April 2022",
        location: "Guadalajara, MX",
        place: "Semi-finalist",
        desc: "An application to solve the AstraZeneca problem, where scientists needed a place to present their ideas and research and thus connect with other researchers from different parts of the world. This idea was developed in just 2 days and reached the prototype phase.",
        repo: "https://github.com/srteerra/covid19-global-research-tracker",
        stack: [
            { skill: "Vue", icon: <FaVuejs className="my-auto"/>},
            { skill: "Bootstrap", icon: <DiBootstrap className="my-auto"/>},
            { skill: "Node.js", icon: <DiNodejsSmall className="my-auto"/>},
            { skill: "MongoDB", icon: <DiMongodb className="my-auto"/>},
        ],
        images: [
            {
                name: "talent land",
                img: <Image
                    src="hackathons/talent-jalisco.png"
                    alt=""
                    width={200}
                    height={100}
                />,
            },
            {
                name: "astrazeneca",
                img: <Image
                    src="hackathons/astrazeneca.png"
                    alt=""
                    width={200}
                    height={100}
                />
            }
        ]
    },
    { 
        event: "Utel Hackathon",
        track: "Chambeando",
        date: "September 2022",
        location: "Remote",
        place: "2nd Place",
        desc: "A solution was provided to the difficulty of finding jobs in Latin America for people with disabilities. Providing you with a website where they will filter the jobs of your selection and thus find the best option according to your needs.",
        prize: "$3,000 USD",
        stack: [
            { skill: "HTML", icon: <DiHtml5 className="my-auto"/>},
            { skill: "CSS", icon: <DiCss3Full className="my-auto"/>},
            { skill: "Miro", icon: <SiMiro className="my-auto"/>},
            { skill: "Figma", icon: <FiFigma className="my-auto"/>},
            { skill: "AdobeXd", icon: <SiAdobexd className="my-auto"/>},
        ],
        images: [
            {
                name: "utel",
                img: <Image
                    src="hackathons/utel.png"
                    alt=""
                    width={100}
                    height={50}
                />,
            },
            {
                name: "ucamp",
                img: <Image
                    src="hackathons/ucamp.png"
                    alt=""
                    width={100}
                    height={50}
                />
            }
        ]
    },
    { 
        event: "Talent Blockchain Land Hackathon 2022",
        track: "RSK/IOV Labs",
        date: "November 2022",
        location: "Monterrey, MX",
        place: "Winner",
        desc: "Bitcoffee is a CrowdFunding Dapp on the RSK network, in which anyone can raise funds for their personal interests, campaigns, charity funds, etc as well as for their followers can follow their goals, this through the use of crypto assets such as RBTC, Stablecoins from RSK or our own token BITC (Bitcoffee Token).",
        prize: "$6,000 USD",
        repo: "https://github.com/srteerra/bitcoffee",
        stack: [
            { skill: "Vue", icon: <FaVuejs className="my-auto"/>},
            { skill: "Bootstrap", icon: <DiBootstrap className="my-auto"/>},
            { skill: "Node.js", icon: <DiNodejsSmall className="my-auto"/>},
            { skill: "Vuex", icon: <SiVuedotjs className="my-auto"/>},
            { skill: "Solidity", icon: <SiSolidity className="my-auto"/>},
            { skill: "Web3.js", icon: <SiWeb3Dotjs className="my-auto"/>},
        ],
        images: [
            {
                name: "talent land",
                img: <Image
                    src="hackathons/talent-land.png"
                    alt=""
                    width={140}
                    height={70}
                />,
            },
            {
                name: "rsk",
                img: <Image
                    src="hackathons/rsk.jpg"
                    alt=""
                    width={140}
                    height={70}
                />
            }
        ]
    },
    { 
        event: "Etherfuse Solana Blockchain Hackathon 2023",
        track: "Solana Decaf",
        date: "February 2023",
        location: "CDMX, MX",
        place: "3rd Place",
        desc: "Dashy is a decentralized platform built under the solana blockchain that allows users to streamline money transfers through the use of easily accessible QRs.",
        prize: "$500 USD",
        repo: "https://github.com/srteerra/dashy",
        stack: [
            { skill: "React", icon: <DiReact className="my-auto"/>},
            { skill: "Next.js", icon: <TbBrandNextjs className="my-auto"/>},
            { skill: "Tailwind CSS", icon: <SiTailwindcss className="my-auto"/>},
        ],
        images: [
            {
                name: "etherfuse",
                img: <Image
                    src="hackathons/etherfuse.png"
                    alt=""
                    width={140}
                    height={70}
                />,
            },
            {
                name: "solana",
                img: <Image
                    src="hackathons/solana.jpg"
                    alt=""
                    width={140}
                    height={70}
                />
            },
            {
                name: "decaf",
                img: <Image
                    src="hackathons/decaf.png"
                    alt=""
                    width={140}
                    height={70}
                />
            }
        ]
    },
    { 
        event: "Solana Grizzlython Hackathon",
        track: "Dashy",
        date: "March 2023",
        location: "Remote",
        banner: true,
        place: "Only Participant",
        desc: "Dashy is a decentralized platform built under the solana blockchain that allows users to streamline money transfers through the use of easily accessible QRs.",
        repo: "https://github.com/srteerra/dashy",
        stack: [
            { skill: "React", icon: <DiReact className="my-auto"/>},
            { skill: "Next.js", icon: <TbBrandNextjs className="my-auto"/>},
            { skill: "Tailwind CSS", icon: <SiTailwindcss className="my-auto"/>},
        ],
        images: [
            {
                name: "grizzlython",
                img: <Image
                    src="hackathons/grizzlython.png"
                    alt=""
                    width={1000}
                    height={200}
                />,
            },
        ]
    },
]

const AchievementsSection = () => {
  return (
    <section id="achievements">
      <div className="my-auto pb-12 md:py-40 mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
        <h1 className="text-center font-bold text-4xl mb-20 md:mb-12">
            Achievements
            <hr className="w-6 h-1 mx-auto my-4 bg-red-400 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-wrap justify-center align-middle gap-12 text-left">
            {experience.map(({event, track, location, place, repo, date, stack, prize, images, banner, desc}, idx) => {
                return (
                    <div className="w-100 mx-auto border-4 rounded-xl dark:bg-stone-700" key={idx}>
                        <div className="md:p-12">
                            <p className="my-2 capitalize opacity-60">
                                {date}
                            </p>
                            <h1 className="text-2xl font-bold text-left capitalize">
                                {event} - <span className="font-light">{track}</span>
                            </h1>
                            <p className="text-xl font-semibold text-red-400 capitalize">
                                {location}
                            </p>
                            {place === "Winner" &&
                                <p className="text-xl my-6 font-bold text-justify flex align-middle text-yellow-500"><span className="flex align-middle my-auto mr-2"><BiTrophy size={20} /></span>{place} {prize ? <span> - {prize}</span> : <></>}</p>
                            }
                            {place === "Semi-finalist" &&
                                <p className="text-xl my-6 font-bold text-justify flex align-middle text-stone-500 dark:text-stone-300"><span className="flex align-middle my-auto mr-2"><BiTrophy size={20} /></span>{place} {prize ? <span> - {prize}</span> : <></>}</p>
                            }
                            {place === "2nd Place" &&
                                <p className="text-xl my-6 font-bold text-justify flex align-middle text-stone-500 dark:text-stone-300"><span className="flex align-middle my-auto mr-2"><BiTrophy size={20} /></span>{place} {prize ? <span> - {prize}</span> : <></>}</p>
                            }
                            {place === "3rd Place" &&
                                <p className="text-xl my-6 font-bold text-justify flex align-middle text-orange-800 dark:text-orange-400"><span className="flex align-middle my-auto mr-2"><BiTrophy size={20} /></span>{place} {prize ? <span> - {prize}</span> : <></>}</p>
                            }
                            {place === "Only Participant" &&
                                <p className="text-xl my-6 font-bold text-justify flex align-middle"><span className="flex align-middle my-auto mr-2"><BiTrophy size={20} /></span>{place}</p>
                            }
                            <p className="text-md my-6 text-justify">
                                {desc || ""}
                            </p>
                            <p className="my-2 capitalize">
                                {repo ? <a href={repo} className="font-bold underline flex align-middle"><span className="flex align-middle my-auto mr-2"><BiLinkExternal/></span>Project link</a> : <></>}
                            </p>
                            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
                                {(stack).map(({icon, skill}, idx) => {
                                    return (
                                        <Fade key={idx} direction="up" delay={`${idx}0`} triggerOnce fraction={0} cascade>
                                            <p
                                                key={idx}
                                                className="bg-gray-200 flex align-middle px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                                            >
                                                <span className="flex align-middle my-auto mr-2">{icon}</span> {skill}
                                            </p>
                                        </Fade>
                                    )
                                })}
                            </div>
                        </div>
                        {images ? 
                            (banner ? <div className="w-100 flex justify-center my-auto gap-4 align-middle mx-auto bg-white rounded-t-full">
                                {(images).map(({name, img}, idx) => {
                                    return (
                                        <div key={idx} className="my-auto self-center">
                                            {img}
                                        </div>
                                    )
                                })}
                            </div> : <div className="w-100 flex justify-center my-auto gap-4 align-middle pb-12 dark:pb-4 mx-auto bg-white p-6 md:rounded-t-full">
                                <Fade direction="up" delay={1200} triggerOnce className="my-auto self-center">
                                    {(images).map(({name, img}, idx) => {
                                        return (
                                            <div key={idx} className="my-auto self-center">
                                                {img}
                                            </div>
                                        )
                                    })}
                                </Fade>
                            </div>)
                        : <></>}
                    </div>
                )
            })}
        </div>
      </div>
    </section>
  )
}

export default AchievementsSection