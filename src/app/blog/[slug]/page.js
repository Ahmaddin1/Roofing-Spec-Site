import { notFound } from "next/navigation";
import BlogPostTemplate from "@/components/blog/BlogPostTemplate";
import { blogPostMap, blogPosts } from "@/data/blog";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = blogPostMap[slug];

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

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = blogPostMap[slug];

  if (!post) {
    notFound();
  }

  return <BlogPostTemplate post={post} />;
}
