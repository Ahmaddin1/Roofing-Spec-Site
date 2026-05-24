import { notFound } from "next/navigation";
import BlogPostTemplate from "@/components/blog/BlogPostTemplate";
import { blogPostMap, blogPosts } from "@/data/blog";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }) {
  const post = blogPostMap[params.slug];

  if (!post) {
    return {};
  }

  return {
    title: `${post.title} | Summit Roofing Co.`,
    description: post.description,
    alternates: {
      canonical: post.canonical,
    },
  };
}

export default function BlogPostPage({ params }) {
  const post = blogPostMap[params.slug];

  if (!post) {
    notFound();
  }

  return <BlogPostTemplate post={post} />;
}
