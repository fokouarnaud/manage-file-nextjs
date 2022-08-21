import { getAllPostIds, getPostData } from '../../lib/posts';
import Image from 'next/image';
import Head from 'next/head';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';

export default function Post({ postData }) {
  return (
    <div className=" mx-auto max-w-7xl">
      <div className=" flex flex-row justify-between">
        <div className=" shrink border-r border-gray-400 w-32 min-h-screen">
          <nav className="h-full">
            <div className="h-screen flex flex-col items-center justify-between sticky top-4">
              <div className="h-16 w-16 py-16 px-0"> <Image className="object-cover object-center" src="/images/logo.png" alt="logo" /></div>
              <div className="space-y-5">
                <div className="font-extrabold">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </div>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                  </svg>
                </div>

                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <div>
                  <hr className="border border-gray-400" />
                </div>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
              </div>
              <div><span></span></div>
            </div>

          </nav>

        </div>
        <main className="flex-auto mb-0 min-w-0">
          <div className="mb-16">
            <div className="flex justify-center">
                <div className="max-w-5xl mx-12 my-0 min-w-0 w-full">
                  <article>
                    <div>
                      <div className="py-0 px-6 max-w-6xl mx-auto w-full">

                      </div>
                      <div>
                        <header className="mt-20 mb-12">
                          <div className="flex flex-row justify-between items-start">
                            <div className="flex flex-row">
                              <div className="mr-6">
                                <a href="#" className="p-0 m-0">
                                  <div className="relative">
                                    <Image className="h-16 w-16 rounded-full bg-gray-400" src="/images/profil.png" alt="img_profil"/>
                                    <div className="h-16 w-16 absolute top-0 rounded-full shadow-gray-400"></div>
                                  </div>
                                </a>
                              </div>
                              <div className="flex flex-col justify-center">
                                <div className="text-base text-black font-sans font-normal">
                                  <div>
                                    <div className="inline-block">
                                      <a className="m-0 p-0" href="#">Fokou Arnaud</a>
                                    </div>
                                  </div>
                                  <div className="hidden pl-5 text-base text-black"></div>
                                </div>
                                <div className="flex flex-row items-center flex-wrap">
                                  <p className="text-gray-500 text-sm font-normal font-sans">
                                    <span>May 11</span>
                                  </p>
                                  <div className="py-0 px-2 inline-block">
                                    <span className="block">
                                      <span className="text-gray-500 text-sm">.</span>
                                    </span>
                                  </div>
                                  <div className="text-gray-500 text-sm">7 min read</div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-row items-center">
                              <div className="inline-flex">
                                <div className="pr-2 grow-0 shrink-0 basis-auto">
                                  <div>
                                    <div className="inline-block">
                                      <button className="m-0 p-0">
                                        <span className="py-3 px-1">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M20 5.34c-.67.41-1.4.7-2.18.87a3.45 3.45 0 0 0-5.02-.1 3.49 3.49 0 0 0-1.02 2.47c0 .28.03.54.07.8a9.91 9.91 0 0 1-7.17-3.66 3.9 3.9 0 0 0-.5 1.74 3.6 3.6 0 0 0 1.56 2.92 3.36 3.36 0 0 1-1.55-.44V10c0 1.67 1.2 3.08 2.8 3.42-.3.06-.6.1-.94.12l-.62-.06a3.5 3.5 0 0 0 3.24 2.43 7.34 7.34 0 0 1-4.36 1.49l-.81-.05a9.96 9.96 0 0 0 5.36 1.56c6.4 0 9.91-5.32 9.9-9.9v-.5c.69-.49 1.28-1.1 1.74-1.81-.63.3-1.3.48-2 .56A3.33 3.33 0 0 0 20 5.33" fill="#A8A8A8"></path></svg>
                                        </span>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div> 
                              <div className="inline-flex">
                                <div className="pr-2 grow-0 shrink-0 basis-auto">
                                  <div>
                                    <div className="inline-block">
                                      <button className="m-0 p-0">
                                        <span className="py-3 px-1">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M19.75 12.04c0-4.3-3.47-7.79-7.75-7.79a7.77 7.77 0 0 0-5.9 12.84 7.77 7.77 0 0 0 4.69 2.63v-5.49h-1.9v-2.2h1.9v-1.62c0-1.88 1.14-2.9 2.8-2.9.8 0 1.49.06 1.69.08v1.97h-1.15c-.91 0-1.1.43-1.1 1.07v1.4h2.17l-.28 2.2h-1.88v5.52a7.77 7.77 0 0 0 6.7-7.71" fill="#A8A8A8"></path></svg>
                                        </span>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                               <div className="inline-flex">
                                <div className="pr-2 grow-0 shrink-0 basis-auto">
                                  <div>
                                    <div className="inline-block">
                                      <button className="m-0 p-0">
                                        <span className="py-3 px-1">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M19.75 5.39v13.22a1.14 1.14 0 0 1-1.14 1.14H5.39a1.14 1.14 0 0 1-1.14-1.14V5.39a1.14 1.14 0 0 1 1.14-1.14h13.22a1.14 1.14 0 0 1 1.14 1.14zM8.81 10.18H6.53v7.3H8.8v-7.3zM9 7.67a1.31 1.31 0 0 0-1.3-1.32h-.04a1.32 1.32 0 0 0 0 2.64A1.31 1.31 0 0 0 9 7.71v-.04zm8.46 5.37c0-2.2-1.4-3.05-2.78-3.05a2.6 2.6 0 0 0-2.3 1.18h-.07v-1h-2.14v7.3h2.28V13.6a1.51 1.51 0 0 1 1.36-1.63h.09c.72 0 1.26.45 1.26 1.6v3.91h2.28l.02-4.43z" fill="#A8A8A8"></path></svg>
                                        </span>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div> 
                              <div className="inline-flex">
                                <div className="pr-2 grow-0 shrink-0 basis-auto">
                                  <div>
                                    <div className="inline-block">
                                      <button className="m-0 p-0">
                                        <span className="py-3 px-1">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path   d="M3.57 14.67c0-.57.13-1.11.38-1.6l.02-.02v-.02l.02-.02c0-.02 0-.02.02-.02.12-.26.3-.52.57-.8L7.78 9v-.02l.01-.02c.44-.41.91-.7 1.44-.85a4.87 4.87 0 0 0-1.19 2.36A5.04 5.04 0 0 0 8 11.6L6.04 13.6c-.19.19-.32.4-.38.65a2 2 0 0 0 0 .9c.08.2.2.4.38.57l1.29 1.31c.27.28.62.42 1.03.42.42 0 .78-.14 1.06-.42l1.23-1.25.79-.78 1.15-1.16c.08-.09.19-.22.28-.4.1-.2.15-.42.15-.67 0-.16-.02-.3-.06-.45l-.02-.02v-.02l-.07-.14s0-.03-.04-.06l-.06-.13-.02-.02c0-.02 0-.03-.02-.05a.6.6 0 0 0-.14-.16l-.48-.5c0-.04.02-.1.04-.15l.06-.12 1.17-1.14.09-.09.56.57c.02.04.08.1.16.18l.05.04.03.06.04.05.03.04.04.06.1.14.02.02c0 .02.01.03.03.04l.1.2v.02c.1.16.2.38.3.68a1 1 0 0 1 .04.25 3.2 3.2 0 0 1 .02 1.33 3.49 3.49 0 0 1-.95 1.87l-.66.67-.97.97-1.56 1.57a3.4 3.4 0 0 1-2.47 1.02c-.97 0-1.8-.34-2.49-1.03l-1.3-1.3a3.55 3.55 0 0 1-1-2.51v-.01h-.02v.02zm5.39-3.43c0-.19.02-.4.07-.63.13-.74.44-1.37.95-1.87l.66-.67.97-.98 1.56-1.56c.68-.69 1.5-1.03 2.47-1.03.97 0 1.8.34 2.48 1.02l1.3 1.32a3.48 3.48 0 0 1 1 2.48c0 .58-.11 1.11-.37 1.6l-.02.02v.02l-.02.04c-.14.27-.35.54-.6.8L16.23 15l-.01.02-.01.02c-.44.42-.92.7-1.43.83a4.55 4.55 0 0 0 1.23-3.52L18 10.38c.18-.21.3-.42.35-.65a2.03 2.03 0 0 0-.01-.9 1.96 1.96 0 0 0-.36-.58l-1.3-1.3a1.49 1.49 0 0 0-1.06-.42c-.42 0-.77.14-1.06.4l-1.2 1.27-.8.8-1.16 1.15c-.08.08-.18.21-.29.4a1.66 1.66 0 0 0-.08 1.12l.02.03v.02l.06.14s.01.03.05.06l.06.13.02.02.01.02.01.02c.05.08.1.13.14.16l.47.5c0 .04-.02.09-.04.15l-.06.12-1.15 1.15-.1.08-.56-.56a2.3 2.3 0 0 0-.18-.19c-.02-.01-.02-.03-.02-.04l-.02-.02a.37.37 0 0 1-.1-.12c-.03-.03-.05-.04-.05-.06l-.1-.15-.02-.02-.02-.04-.08-.17v-.02a5.1 5.1 0 0 1-.28-.69 1.03 1.03 0 0 1-.04-.26c-.06-.23-.1-.46-.1-.7v.01z" fill="#A8A8A8"></path></svg>
                                        </span>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="inline-flex my-0 mr-2 ml-6 items-center">
                                <div className=" pr-2 grow-0 shrink-0 basis-auto">
                                  <div>
                                    <div className="inline-block">
                                      <button className="m-0 p-0">
                                        <span className="py-3 px-1">
                                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none"  aria-label="Add to list bookmark button"><path d="M18 2.5a.5.5 0 0 1 1 0V5h2.5a.5.5 0 0 1 0 1H19v2.5a.5.5 0 1 1-1 0V6h-2.5a.5.5 0 0 1 0-1H18V2.5zM7 7a1 1 0 0 1 1-1h3.5a.5.5 0 0 0 0-1H8a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V7z" fill="#292929"></path></svg>
                                        </span>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </header>
                      
                        <section>
                          <div className="break-words ">
                            <div>
                              <h1 className="mt-2 -mb-1 tracking-tight text-5xl font-bold ">Introducing Flutter 3</h1>
                            </div>
                            <div>
                              <h2 className=" tracking-normal not-italic mt-3 text-xl -mb-1 text-gray-500">
                              The culmination of our journey to multiplatform UI development on phone, desktop, and web
                              </h2>
                            </div>
                            <p className="tracking-[.003em] leading-8 text-2xl mt-8 -mb-1 font-serif">
                                <em className="italic text-xl text-gray-800">

                                We’re delighted to announce the launch of Flutter 3 as part of the 
                                Google I/O keynote. Flutter 3 completes our roadmap from a mobile-centric to a multiplatform framework, with the availability of macOS and Linux desktop app support, along with improvements to Firebase integration,
                                 new productivity and performance features, and support for Apple Silicon.
                                </em>
                            </p>
                            <figure className="mt-20 clear-both mx-auto m-0">
                                  <div className="z-auto cursor-zoom-in ease-out relative w-full">

                                    <div className="max-w-6xl mx-auto">
                                    <Image alt="first_image" className="h-auto max-w-full align-middle" src="https://miro.medium.com/max/700/0*ZQ9Xa7CINFVMA95w" />
                                    </div>
                                  </div>
                            </figure>
                            <h1 className="mt-12 tracking-normal  text-3xl -mb-1 font-semibold " >
                            The journey to Flutter 3
                            </h1>
                            <p className="mt-8 tracking-[-.003em] leading-8 text-xl text-gray-800 -mb-1 font-serif">
                            We started Flutter as an attempt to revolutionize app development: 
                            combining the iterative development model of the web with hardware-accelerated graphics rendering and pixel-level control that were previously the preserve of games. Over the last four years since Flutter 1.0 beta, we’ve gradually built on these foundations, adding new framework capabilities and new widgets, deeper integration with the underlying platforms,
                            a rich library of packages and many performance and tooling improvements.
                            </p>
                            <figure className="mt-20 clear-both mx-auto m-0">
                                  <div className="z-auto cursor-zoom-in ease-out relative w-full">

                                    <div className="max-w-6xl mx-auto">
                                    <Image alt="first_image" className="h-auto max-w-full align-middle" src="https://miro.medium.com/max/700/0*pL2z2iYzWPrMu5hw"/>
                                    </div>
                                  </div>
                            </figure>
                            <p className="mt-8 tracking-[-.003em] leading-8 text-xl text-gray-800 -mb-1 font-serif">
                           As the product has matured, more of you have started to build apps with it. Today there are over 500,000 apps built with Flutter. Analytics from 
                           research firms like <a className="underline text-inherit" href="https://www.data.ai/en/" rel="noreferrer" target="_blank">data.ai</a>, along with public testimonials,
                            show Flutter is used by a <a className="underline text-inherit" href="https://flutter.dev/showcase" rel="noreferrer" target="_blank">broad list of customers</a>
                            {" "} in many segments: from social apps like <a className="underline text-inherit" href="https://play.google.com/store/apps/details?id=com.tencent.mm&amp;hl=en_US&amp;gl=US" rel="noreferrer" target="_blank">WeChat</a> 
                             to finance and banking apps like <a className="underline text-inherit" rel="noreferrer" href="https://apps.apple.com/us/app/betterment-investing-saving/id393156562"  target="_blank">Betterment</a> and {" "}
                              <a className="underline text-inherit" rel="noreferrer" href="https://play.google.com/store/apps/details?id=com.nu.production&amp;hl=en_US&amp;gl=US" target="_blank">Nubank</a>;
                               from commerce apps like <a className="underline text-inherit" rel="noreferrer" href="https://play.google.com/store/apps/details?id=com.zzkko&amp;hl=en_US&amp;gl=US" target="_blank">SHEIN</a> {" "}
                               and <a className="underline text-inherit" rel="noreferrer" href="https://apps.apple.com/us/app/trip-com-hotels-flights-trains/id681752345"  target="_blank">trip.com</a> 
                               to lifestyle apps like <a className="underline text-inherit" href="https://fastic.com/" rel="noreferrer" target="_blank">Fastic</a> 
                               and <a className="underline text-inherit" rel="noreferrer" href="https://auspreneur.com.au/tabcorp-adopts-googles-flutter-platform/"  target="_blank">Tabcorp</a>;
                                from companion apps like <a className="underline text-inherit" href="https://www.press.bmwgroup.com/global/article/detail/T0328610EN/the-my-bmw-app:-new-features-and-tech-insights-for-march-2021?language=en" rel="noreferrer" target="_blank">My BMW</a>{" "}
                                 to public institutions such as the <a className="underline text-inherit" rel="noreferrer" href="https://apps.apple.com/app/id1506827551"  target="_blank">Brazil government</a>.
                            </p>
                            <blockquote className="m-0 pl-12"><p className=" mt-10 -mb-1 text-3xl text-gray-500 font-light tracking-[-.009em]" >Today there are over 500,000 apps built with Flutter.</p></blockquote>
                            <figure className="mt-20 clear-both m-0">
                                  <div className="mx-auto  relative ">

                                    <div className="pb-96 ">
                                   
                                    <iframe   className="h-full w-full left-0 top-0    absolute" src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2F8RmsstcNE1Y%3Ffeature%3Doembed&amp;display_name=YouTube&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D8RmsstcNE1Y&amp;image=https%3A%2F%2Fi.ytimg.com%2Fvi%2F8RmsstcNE1Y%2Fhqdefault.jpg&amp;key=a19fcc184b9711e1b4764040d3dc5c07&amp;type=text%2Fhtml&amp;schema=youtube" title="ByteDance (Flutter Dev Story)"   >

                                    </iframe>
                                    </div>
                                  </div>
                            </figure>
                            <p className="mt-8 tracking-[-.003em] leading-8 text-xl text-gray-800 -mb-1 font-serif">
                            Developers tell us that Flutter helps build beautiful apps more quickly for more platforms. In our most recent user study:
                            </p>
                            <ul>
                              <li className="mt-8 tracking-[-.003em] text-gray-800 list-disc -mb-1 text-xl pl-0 ml-12 font-serif">
                              91% of developers agreed that Flutter reduced the time it took to build and publish an app.
                              </li> 
                              <li className="mt-8 tracking-[-.003em] text-gray-800 list-disc -mb-1 text-xl pl-0 ml-12 font-serif">
                              85% of developers agreed that Flutter made their app more beautiful than before.
                              </li> 
                              <li className="mt-8 tracking-[-.003em] text-gray-800 list-disc -mb-1 text-xl pl-0 ml-12 font-serif">
                              85% agreed that it enabled them to publish their app for more platforms than before.
                              </li>
                            </ul>
                            <p className="mt-8 tracking-[-.003em] leading-8 text-xl text-gray-800 -mb-1 font-serif">
                            In a <a className="underline text-inherit" href="https://tech-blog.sonos.com/posts/renovating-setup-with-flutter/" rel="noreferrer"  target="_blank">recent blog post by Sonos</a>{" "}
                             discussing their <mark className="text-current cursor-pointer bg-gray-200">revamped </mark>setup experience, they emphasized the second of these:
                            a rich library of packages and many performance and tooling improvements.
                            </p>
                            <blockquote 
                            className="-ml-8 pl-8 shadow-[rgba(41,41,41,1)_3px_0_0_0_inset] "><p className="mt-8 -mb-1 tracking-[-.003em] leading-8 text-xl text-gray-700 ">“It is not an exaggeration to say that [Flutter] has unlocked a degree of “<em className="font-normals">premium</em>” unlike anything our team had delivered before. Most important to our designers, the ease with which new UIs can be built means that our team spends less time saying “no” to specs and more time iterating on them. If this sounds worth it, we’d recommend giving Flutter a try — we’re glad we did.”</p></blockquote>
                          </div>

                        </section>
                      </div>

                    </div>

                  </article>
                </div>
            </div>
          </div>
        </main>
        <div className="w-96 min-h-screen border-l border-gray-600 py-0 px-12">
          <div className="relative h-full w-full">
            <div className="sticky top-0 mt-0">
              <div className="min-h-screen flex flex-col">
                <div className="grow shrink-0 basis-auto " >
                  <div>
                    <div className="pt-16 flex flex-row items-center">

                      <div className="grow shrink-0 basis-auto">
                        <span><p className="m-0 p-0">
                          <button className=" w-full normal-case border-solid border border-black bg-black pt-2 px-5 pb-3 text-white rounded-full">
                            Get started
                          </button>
                        </p></span>
                      </div>
                      <div className=" font-normal text-blue-600 ml-10">
                        <span><a href="#" className="m-0 p-0">Sign In</a></span>
                      </div>
                    </div>

                  </div>
                  <div className="py-16 px-0">
                    <div className=" flex flex-row border rounded-3xl border-gray-500">
                      <div className="" aria-describedby="searchResults" aria-labelledby="searchResults">
                      </div>
                      <span className=" pt-3 pr-3 pb-2 pl-3 ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </span>
                      <input className="bg-transparent border-none outline-0 outline-none outline-current  pt-2 px-0 pb-3 mr-8 text-black text-base font-sans" role="combobox" aria-controls="searchResults" aria-expanded="false" aria-label="search"  placeholder="Search"  />
                    </div>
                  </div>

                  <div className="mt-16"></div>
                  <a href="#" className="m-0 p-0">
                    <div className="relative">
                      <Image alt="my-profil" src="/images/profil.png" className="w-32 h-32 rounded-full"/>
                    </div>
                  </a>
                  <div className="mt-6"></div>
                  <a className="m-0 p-0"  href="#"><h2 className=" text-gray-900 text-2xl tracking-normal font-medium">Fokou Arnaud</h2></a>
                  <div className="mt-2"></div>
                  <p className="text-gray-600"><span className="text-gray-500 text-2xl font-normal"><button className="p-0 m-0">8.2K Followers</button></span></p>
                  <div className="mt-4"></div>
                  <p className="text-gray-600 text-base">Product Manager for Flutter (a framework for building mobile apps) and Dart (a modern, client-optimized programming language) at Google.</p>
                </div>
                <div className="py-10 px-0 flex flex-row flex-wrap ">
                  <div className="mr-3"> <a href="#" className="p-0 m-0"><p className="text-base text-gray-700" >Help</p></a></div>
                  <div className="mr-3"> <a href="#" className="p-0 m-0" ><p className="text-base text-gray-700">Status</p></a></div>
                  <div className="mr-3"> <a href="#" className="p-0 m-0" ><p className="text-base text-gray-700" >Blog</p></a></div>
                  <div className="mr-3"> <a href="#" className="p-0 m-0" ><p className="text-base text-gray-700">Careers</p></a></div>
                  <div className="mr-3"> <a href="#" className="p-0 m-0" ><p className="text-base text-gray-700">Privacy</p></a></div>
                  <div className="mr-3"> <a href="#" className="p-0 m-0" ><p className="text-base text-gray-700">Terms</p></a></div>
                  <div className="mr-3"> <a href="#" className="p-0 m-0" ><p className="text-base text-gray-700">About</p></a></div>
                  <div className="mr-3"> <a href="#" className="p-0 m-0" ><p className="text-base text-gray-700">Knowable</p></a></div>
                </div>

              </div>
            </div>

          </div>


        </div>
      </div>

    </div>
  );
}


export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
