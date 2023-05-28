'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs'
import {
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillLinkedin,
} from 'react-icons/ai'
import restFulApi from '@public/images/rest-api.png'
import NodeJs from '@public/images/NodeJs.png'
import web1 from '@public/images/web1.png'
import web2 from '@public/images/web2.png'
import web3 from '@public/images/web3.png'
import web4 from '@public/images/web4.png'
import web5 from '@public/images/web5.png'
import web6 from '@public/images/web6.png'

const Portfolio = () => {
  const [isDarkMode, setIsDarkMode] = useState(true)

  const handleDarkModeToggle = () => {
    setIsDarkMode(prevState => !prevState)
  }

  return (
    <main className={`${isDarkMode ? 'dark' : ''}`}>
      <div className="bg-white px-10 dark:bg-gray-800 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="flex justify-between py-10 mb-12">
            <h2 className="text-lg font-bold cursor-pointer dark:text-white">
              ATLASLLC
            </h2>
            <ul className="flex items-center md:gap-5 lg:gap-10">
              <li>
                {isDarkMode ? (
                  <BsFillSunFill
                    className="text-2xl text-white"
                    onClick={handleDarkModeToggle}
                  />
                ) : (
                  <BsFillMoonStarsFill
                    className="text-2xl"
                    onClick={handleDarkModeToggle}
                  />
                )}
              </li>
              <li>
                <Link
                  href={'#'}
                  as="#"
                  className="bg-gradient-to-r from-cyan-500 to-teal-500
                   rounded-md py-2 px-3 text-white text-sm ml-4 md:text-md
              "
                >
                  Resume
                </Link>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h1
              className="text-5xl text-teal-600 py-2 font-medium
              dark:text-teal-300 md:text-6xl md:pb-6"
            >
              Tariq Atlas
            </h1>
            <h3 className="text-lg py-2 dark:text-white md:text-xl md:font-semibold">
              Developer and designer.
            </h3>
            <p
              className="text-md py-5 text-gray-800 leading-8 
                        dark:text-gray-200
                        md:max-w-sm md:mx-auto md:text-lg"
            >
              Freelancer providing services for programming needs, join me down
              below.
            </p>
            <div
              className="flex justify-center gap-16 py-3 text-3xl
                     text-gray-600 dark:text-gray-200 md:pt-14"
            >
              <AiFillTwitterCircle />
              <AiFillGithub />
              <AiFillLinkedin />
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-2xl pb-1 font-semibold dark:text-white">
              Services i offer
            </h3>
            <p className="text-gray-800 leading-8 py-2 text-md dark:text-gray-200">
              Since the beginning of my journey as a freelance web developer,
              I've done remote work for{' '}
              <span className="text-teal-500 dark:text-tael-200">
                agencies{' '}
              </span>
              consulted for{' '}
              <span className="text-teal-500 dark:text-teal-200">
                startups{' '}
              </span>
              and collaborated with talented people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-gray-800 leading-8 py-2 text-md dark:text-gray-200">
              I offer from a wide range of services, including full stack web
              development, programming and teaching.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-xl p-10 rounded-xl my-10 dark:bg-gray-200 lg:flex-1">
              <Image
                src={restFulApi}
                alt="restFul api"
                height={100}
                className="rounded-lg mx-auto"
              />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Fast And Secure API's
              </h3>
              <p className="py-2">
                creating secure, fast, robust restFul Api's and integrating with
                third-party services
              </p>
              <h4 className="py-4 text-teal-600">Development tools I use</h4>
              <p className="py-1 text-gray-800">Node.Js</p>
              <p className="py-1 text-gray-800">Express.Js</p>
              <p className="py-1 text-gray-800">MongoDB</p>
            </div>
            <div className="text-center shadow-xl p-10 rounded-xl my-10 dark:bg-gray-200 lg:flex-1">
              <Image
                src={web5}
                alt="beautiful design"
                height={100}
                className="rounded-lg mx-auto"
              />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautiful Designs
              </h3>
              <p className="py-2">
                creating beautiful and responsive modern webpages.
              </p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <p className="py-1 text-gray-800">PhotoShop</p>
              <p className="py-1 text-gray-800">Figma</p>
              <p className="py-1 text-gray-800">TailwandCss</p>
            </div>
            <div className="text-center shadow-xl p-10 rounded-xl my-10 dark:bg-gray-200 lg:flex-1">
              <Image
                src={NodeJs}
                alt="node Js"
                height={100}
                className="rounded-lg mx-auto"
              />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Node Js Applications
              </h3>
              <p className="py-2">
                creating high-performance web applications that are both
                scalable and secure
              </p>
              <h4 className="py-4 text-teal-600">Development tools I use</h4>
              <p className="py-1 text-gray-800">Node.Js</p>
              <p className="py-1 text-gray-800">Express.Js</p>
              <p className="py-1 text-gray-800">MongoDB</p>
            </div>
          </div>
        </section>
        <section>
          <h3 className="text-2xl pb-4 font-semibold dark:text-white">
            Portfolio
          </h3>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <Image
                width={'100%'}
                height={'100%'}
                className="rounded-lg object-cover shadow-xl"
                src={web3}
                alt="website 3"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                width={'100%'}
                height={'100%'}
                className="rounded-lg object-cover shadow-xl"
                src={web2}
                alt="website 2"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                width={'100%'}
                height={'100%'}
                className="rounded-lg object-cover shadow-xl"
                src={web6}
                alt="website 6"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                width={'100%'}
                height={'100%'}
                className="rounded-lg object-cover shadow-xl"
                src={web4}
                alt="website 4"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                width={'100%'}
                height={'100%'}
                className="rounded-lg object-cover shadow-xl"
                src={web5}
                alt="website 5"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                width={'100%'}
                height={'100%'}
                className="rounded-lg object-cover shadow-xl"
                src={web1}
                alt="website 1"
              />
            </div>
          </div>
        </section>
      </div>
      <div className="flex flex-col md:flex-row justify-between bg-blue-900 max-w-full text-gray-200 p-10">
        <div className="pb-3">
          <h4 className="pb-2">
            <strong>author : </strong>
            Tariq Atlas
          </h4>
          <div className="flex flex-col max-w-fit w-full">
            <Link href={'#'} as={'#'} className="pb-1 underline font-light ">
              Resume
            </Link>
            <Link href={'#'} as={'#'} className="pb-1 underline font-light">
              Github Repos
            </Link>
          </div>
        </div>
        <div>
          <p className="pb-1">
            <strong>Contact : </strong>+93711444606
          </p>
          <p className="pb-1">
            <strong>Email : </strong>tariqatlas7@gmail.com
          </p>
        </div>
      </div>
    </main>
  )
}

export default Portfolio
