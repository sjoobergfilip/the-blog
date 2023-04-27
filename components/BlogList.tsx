import { Post } from "@/typings";

type Props = {
    posts: Post[];
};
const BlogList = ({ posts }: Props) => {
    console.log(posts.length);
    return <div>Bloglist</div>;
};

export default BlogList;
