import Image from "next/image";
import urlFor from "@/lib/urlFor";
import { FiArrowRight } from "react-icons/fi";
import ClientSideRoute from "./ClientSideRoute";

const Banner = (post: any) => {
    return (
        <div className='relative w-full banner custom-min-height'>
            <Image
                className='object-cover'
                src={urlFor(post.mainImage).url()}
                alt={post.title}
                fill
            ></Image>
            <div className='w-full h-full flex justify-between rounded p-7 text-white drop-shadow-lg bg-gradient-to-t from-black via-transparent to-transparent'>
                <div className='flex justify-end h-full max-w-lg flex-col pb-7'>
                    <div className='flex'>
                        <h3 className='uppercase pb-7 font-bold text-3xl md:text-5xl text-[#C79433] text-right mr-4 '>
                            {new Date(post._createdAt).toLocaleDateString(
                                "sv",
                                {
                                    day: "numeric",
                                    month: "short",
                                }
                            )}
                        </h3>
                        <ClientSideRoute
                            key={post._id}
                            route={`nyhet/${post.slug.current}`}
                        >
                            <h3 className='uppercase pb-7 font-bold text-3xl md:text-5xl'>
                                {post.title}
                            </h3>
                            <div className='hidden md:inline'>
                                <p className='text-sm italic ml-2'>
                                    {post.description}
                                </p>
                                <div className='flex justify-between italic ml-2 mt-4'>
                                    <div className='flex justify-center items-center'>
                                        <Image
                                            className='h-10 w-10 rounded-full mr-4'
                                            src={urlFor(
                                                post.author.image
                                            ).url()}
                                            alt={post.author.name}
                                            width={40}
                                            height={40}
                                        ></Image>
                                        <p>{post.author.twitterName}</p>
                                    </div>
                                    <div className='text-3xl text-[#C79433]'>
                                        <FiArrowRight />
                                    </div>
                                </div>
                            </div>
                        </ClientSideRoute>
                    </div>
                    <ClientSideRoute
                        key={post._id}
                        route={`nyhet/${post.slug.current}`}
                    >
                        <div className='md:hidden'>
                            <p className='text-sm italic ml-2'>
                                {post.description}
                            </p>
                            <div className='flex justify-between italic ml-2 mt-4'>
                                <div className='flex justify-center items-center'>
                                    <Image
                                        className='h-10 w-10 rounded-full mr-4'
                                        src={urlFor(post.author.image).url()}
                                        alt={post.author.name}
                                        width={40}
                                        height={40}
                                    ></Image>
                                    <p>{post.author.twitterName}</p>
                                </div>
                                <div className='text-3xl text-[#C79433]'>
                                    <FiArrowRight />
                                </div>
                            </div>
                        </div>
                    </ClientSideRoute>
                </div>
            </div>
        </div>
    );
};

export default Banner;
