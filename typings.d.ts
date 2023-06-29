import { Image, Reference, Slug } from "sanity";

type Base = {
    _createdAt: string;
    _id: string;
    _rev: string;
    _type: string;
    _updatedAt: string;
};

interface Post extends Base {
    auther: Autoher;
    body: Block[];
    categories: Category[];
    mainImage: Image;
    slug: Slug;
    title: string;
    description: string;
    author: Autoher;
}

interface Autoher extends Base {
    bio: Block[];
    image: Image;
    slug: Slug;
    title: string;
    name: string;
    twitterName: string;
}

interface Image {
    _type: "image";
    assets: Reference;
}

interface Referance {
    _ref: string;
    _type: "reference";
}

interface Slug {
    _type: "slug";
    current: string;
}

interface Block {
    _key: string;
    _type: "block";
    children: Span[];
    markDefs: any[];
    style: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
}

interface Span {
    _key: string;
    _type: "span";
    marks: string[];
    text: string;
}

interface category extends Base {
    description: string;
    title: string;
}

interface mainImage {
    _type: "image";
    assets: Reference;
}

interface Title {
    _type: "string";
    current: string;
}
