import { previewData } from "next/headers";
import { groq } from "next-sanity";
import { client } from "@/lib/sanity.client";
import PreviewSuspense from "../../components/PreviewSuspense";
import PreviweBlogList from "@/components/PreviewBlogList";
import BlogList from "@/components/BlogList";
import Banner from "@/components/Banner";

const query = groq`
    *[_type == 'post'] | order(_createdAt desc)
    {
        ...,
        author ->,
        categories[]->,
    }
`;

const HomePage = async () => {
    const posts = await client.fetch(query);
    const filterdArray = posts.slice(1);

    if (previewData()) {
        return (
            <>
                <Banner />
                <PreviewSuspense
                    fallback={
                        <div role='status'>
                            <p className='text-center text-lg animate-pulse text-[#D6AF33]'>
                                Loading preview data...
                            </p>
                        </div>
                    }
                >
                    <PreviweBlogList query={query} />
                </PreviewSuspense>
            </>
        );
    }

    return (
        <>
            <Banner />
            <BlogList posts={filterdArray} />
        </>
    );
};

export default HomePage;
