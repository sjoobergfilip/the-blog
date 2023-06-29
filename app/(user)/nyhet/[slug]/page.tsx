import { client } from "@/lib/sanity.client";
import urlFor from "@/lib/urlFor";
import { groq } from "next-sanity";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { RichTextComponent } from "@/components/RichTextComponent";

type Props = {
    params: {
        slug: "string";
    };
};

const Post = async ({ params: { slug } }: Props) => {
    const query = groq`
        *[_type=='post' && slug.current == $slug][0]
        {
            ...,
            author ->,
            categories[]->,
        }
    `;

    const post = await client.fetch(query, { slug });

    console.log(post);

    return (
        <article className='px-10 pb-28 pt-10'>
            <section className='space-y-2 border'>
                <div className='min-h-56 relative flex flex-col justify-between md:flex-row'>
                    <div className='absolute top-0 h-full w-full p-10 opacity-20 blur-sm'>
                        <Image
                            className='mx-auto object-cover object-center'
                            src={urlFor(post.mainImage).url()}
                            alt={post.author.name}
                            fill
                        ></Image>
                    </div>
                    <section className='w-full bg-[#0C2309] p-5 text-[#fff]'>
                        <div className='flex flex-col justify-between gap-y-5 md:flex-row'>
                            <div>
                                <h1 className='text-4xl font-extrabold uppercase underline decoration-[#C79433] decoration-4'>
                                    {post.title}
                                </h1>
                                <p>
                                    {new Date(
                                        post._createdAt
                                    ).toLocaleDateString("sv", {
                                        day: "numeric",
                                        month: "long",
                                        year: "numeric",
                                    })}
                                </p>
                            </div>
                            <div className='flex items-center space-x-2'>
                                <Image
                                    className='h-10 w-10 rounded-full'
                                    src={urlFor(post.author.image).url()}
                                    alt={post.author.name}
                                    width={40}
                                    height={40}
                                ></Image>
                                <div className='w-64'>
                                    <h3 className='text-lg font-bold'>
                                        {post.author.twitterName}
                                    </h3>
                                    <div>{/* TODO: Author BIO */}</div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2 className='pt-10 italic'>{post.description}</h2>
                            <div className='mt-auto flex items-center justify-end space-x-2'>
                                {post.categories.map((category: any) => (
                                    <p
                                        key={category._id}
                                        className='mt-4 rounded-full bg-[#C79433] px-3 py-1 text-sm font-semibold text-white'
                                    >
                                        {category.title}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>
            </section>
            <section className='max-w-3xl ml-auto mr-auto mt-5'>
                <PortableText
                    components={RichTextComponent}
                    value={post.body}
                ></PortableText>
            </section>
        </article>
    );
};

export default Post;
