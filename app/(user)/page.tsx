import { previewData } from "next/headers";
import { groq } from "next-sanity";
import { client } from "@/lib/sanity.client";
import PreviewSuspense from "../../components/PreviewSuspense";
import PreviweBlogList from "@/components/PreviewBlogList";
import BlogList from "@/components/BlogList";
import Banner from "@/components/Banner";

const query = groq`
    *[_type == 'post'] {
        ...,
        author ->,
        categories[]->,
    } | order(_createdAt desc)
`;

const HomePage = async () => {
    const posts = await client.fetch(query);

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
            <BlogList posts={posts} />;
        </>
    );
};

export default HomePage;
