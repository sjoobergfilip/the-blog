import urlFor from "@/lib/urlFor";
import Image from "next/image";
import { Post } from "@/typings";
import ClientSideRoute from "./ClientSideRoute";

type Props = {
    posts: Post[];
};
const BlogList = ({ posts }: Props) => {
    return (
        <div>
            <hr className='mb-10' />

            <div className='grid grid-cols-1 gap-x-10 gap-y-16 px-10 pb-24 md:grid-cols-2'>
                {/* Posts */}
                {posts.map((post) => (
                    <ClientSideRoute
                        key={post._id}
                        route={`nyhet/${post.slug.current}`}
                    >
                        <div className='group flex cursor-pointer flex-col'>
                            <div className='relative h-80 w-full transform-gpu drop-shadow-xl transition-transform duration-200 ease-out group-hover:scale-105'>
                                <Image
                                    className='object-cover object-left lg:object-center'
                                    src={urlFor(post.mainImage).url()}
                                    alt={post.title}
                                    fill
                                ></Image>
                                <div className='absolute bottom-0 flex w-full justify-between rounded bg-neutral-900 bg-opacity-20 p-5 text-white drop-shadow-lg backdrop-blur-lg'>
                                    <div>
                                        <p className='font-bold'>
                                            {post.title}
                                        </p>
                                        <p className='transform-gpu subpixel-antialiased'>
                                            {new Date(
                                                post._createdAt
                                            ).toLocaleDateString("en-US", {
                                                day: "numeric",
                                                month: "long",
                                                year: "numeric",
                                            })}
                                        </p>
                                    </div>

                                    <div className='flex flex-col gap-y-2 md:flex-row md:gap-x-2'>
                                        {post.categories.map((category) => (
                                            <div
                                                key={category._id}
                                                className='h-fit rounded-full bg-[#F7AB0A] px-3 py-1 text-center text-sm font-semibold text-black'
                                            >
                                                <p>{category.title}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className='mt-5 flex-1'>
                                <p className='text-lg font-bold underline'>
                                    {post.title}
                                </p>
                                <p className='text-gray-500 line-clamp-2'>
                                    {post.description}
                                </p>
                            </div>
                        </div>
                    </ClientSideRoute>
                ))}
            </div>
        </div>
    );
};

export default BlogList;
