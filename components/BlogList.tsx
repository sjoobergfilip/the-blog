import urlFor from "@/lib/urlFor";
import Image from "next/image";
import { Post } from "@/typings";
import ClientSideRoute from "./ClientSideRoute";
import { FiArrowRight } from "react-icons/fi";

type Props = {
    posts: Post[];
};
const BlogList = ({ posts }: Props) => {
    return (
        <div className='max-w-5xl mx-auto'>
            <hr className='mb-10' />

            <div className='grid grid-cols-1 gap-x-10 gap-y-16 px-10 pb-24 md:grid-cols-2'>
                {/* Posts */}
                {posts.map((post) => (
                    <ClientSideRoute
                        key={post._id}
                        route={`nyhet/${post.slug.current}`}
                    >
                        <div className='group flex cursor-pointer flex-col'>
                            <div className='relative h-80 w-full'>
                                <Image
                                    className='object-cover object-left lg:object-center'
                                    src={urlFor(post.mainImage).url()}
                                    alt={post.title}
                                    fill
                                ></Image>
                            </div>
                            <div className='mt-5 flex-1'>
                                <div className='flex'>
                                    <h3 className='uppercase font-bold text-2xl text-[#C79433] text-right mr-4 leading-none'>
                                        {" "}
                                        {new Date(post._createdAt)
                                            .toLocaleDateString("sv", {
                                                day: "numeric",
                                                month: "short",
                                            })
                                            .split(".")
                                            .join("")}
                                    </h3>
                                    <h3 className='uppercase font-bold text-2xl mr-4 leading-none'>
                                        {post.title}
                                    </h3>
                                </div>
                                <div className='flex items-center space-x-2 mb-4'>
                                    {post.categories.map((category: any) => (
                                        <p
                                            key={category._id}
                                            className='mt-4 rounded-full bg-[#0C2309] px-3 py-1 text-sm uppercase text-white'
                                        >
                                            {category.title}
                                        </p>
                                    ))}
                                </div>
                                <p className='text-gray-500 line-clamp-2'>
                                    {post.description}
                                </p>
                                <div className='flex justify-between mt-4'>
                                    <div className='flex justify-center items-center'>
                                        <Image
                                            className='h-10 w-10 rounded-full'
                                            src={urlFor(
                                                post.author.image
                                            ).url()}
                                            alt={post.author.name}
                                            width={40}
                                            height={40}
                                        ></Image>
                                        <p className='text-gray-500 line-clamp-2'>
                                            {post.author.twitterName}
                                        </p>
                                    </div>
                                    <div className='text-3xl text-[#C79433]'>
                                        <FiArrowRight />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ClientSideRoute>
                ))}
            </div>
        </div>
    );
};

export default BlogList;
