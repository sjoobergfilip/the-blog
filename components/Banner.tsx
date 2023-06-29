import { client } from "@/lib/sanity.client";
import Image from "next/image";
import urlFor from "@/lib/urlFor";
import { groq } from "next-sanity";
import { FiArrowRight } from "react-icons/fi";
import ClientSideRoute from "./ClientSideRoute";

const query = groq`
    *[_type == 'post'] {
        ...,
        author ->,
        categories[]->
    } | order(_createdAt desc) [0]
`;

const Banner = async () => {
    const latestPost = await client.fetch(query);
    return (
        <div className='relative w-full banner'>
            <Image
                className='object-cover'
                src={urlFor(latestPost.mainImage).url()}
                alt={latestPost.title}
                fill
            ></Image>
            <div className='w-full h-full flex justify-between rounded p-7 text-white drop-shadow-lg bg-gradient-to-t from-black via-transparent to-transparent'>
                <div className='flex justify-end h-full max-w-lg flex-col pb-7'>
                    <div className='flex'>
                        <h3 className='uppercase pb-7 font-bold text-5xl text-[#C79433] text-right mr-4 '>
                            {" "}
                            {new Date(latestPost._createdAt).toLocaleDateString(
                                "sv",
                                {
                                    day: "numeric",
                                    month: "short",
                                }
                            )}
                        </h3>
                        <ClientSideRoute
                            key={latestPost._id}
                            route={`nyhet/${latestPost.slug.current}`}
                        >
                            <h3 className='uppercase pb-7 font-bold text-5xl'>
                                {latestPost.title}
                            </h3>
                            <p className='text-sm italic ml-2'>
                                {latestPost.description}
                            </p>
                            <div className='flex justify-between italic ml-2 mt-4'>
                                <div className='flex justify-center items-center'>
                                    <Image
                                        className='h-10 w-10 rounded-full mr-4'
                                        src={urlFor(
                                            latestPost.author.image
                                        ).url()}
                                        alt={latestPost.author.name}
                                        width={40}
                                        height={40}
                                    ></Image>
                                    <p>{latestPost.author.twitterName}</p>
                                </div>
                                <div className='text-3xl text-[#C79433]'>
                                    {" "}
                                    <FiArrowRight />{" "}
                                </div>
                            </div>
                        </ClientSideRoute>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
