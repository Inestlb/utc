import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, User, Tag, Share2 } from 'lucide-react';

// In a real application, this would come from a CMS or API
const blogPosts = [
  {
    id: 1,
    slug: 'new-product-line-announcement',
    title: 'Announcing Our New Line of Industrial Pumps',
    excerpt: 'We are excited to introduce our latest range of high-efficiency industrial pumps designed for demanding environments.',
    date: 'June 15, 2023',
    author: 'Robert Johnson',
    authorRole: 'Chief Executive Officer',
    category: 'Product News',
    imageUrl: '/images/blog/pumps.jpg',
    content: `
      <p>We are thrilled to announce the launch of our new line of industrial pumps, designed specifically for demanding environments and applications. After years of research and development, we've created a range of pumps that set new standards for efficiency, durability, and performance.</p>

      <h2>Key Features</h2>

      <p>Our new industrial pump line includes several innovative features:</p>

      <ul>
        <li><strong>Enhanced Energy Efficiency:</strong> Up to 30% more energy-efficient than previous models, helping reduce operational costs.</li>
        <li><strong>Advanced Materials:</strong> Constructed with corrosion-resistant alloys that extend service life in harsh environments.</li>
        <li><strong>Smart Monitoring:</strong> Integrated sensors and IoT connectivity for real-time performance monitoring and predictive maintenance.</li>
        <li><strong>Modular Design:</strong> Easily serviceable components that reduce maintenance time and costs.</li>
        <li><strong>Versatile Applications:</strong> Suitable for a wide range of industries including oil and gas, mining, chemical processing, and water treatment.</li>
      </ul>

      <h2>Industry-Leading Performance</h2>

      <p>During extensive field testing, our new pumps demonstrated exceptional performance metrics:</p>

      <ul>
        <li>Reduced energy consumption by an average of 27%</li>
        <li>Extended maintenance intervals by up to 40%</li>
        <li>Decreased downtime by 35% compared to industry standards</li>
        <li>Improved flow rates by 15-20% depending on the model</li>
      </ul>

      <p>These improvements translate directly to cost savings and increased productivity for our clients.</p>

      <h2>Global Availability</h2>

      <p>The new pump line will be available worldwide starting July 1, 2023. Our global distribution network ensures prompt delivery and local support in over 50 countries.</p>

      <p>For clients with existing equipment, we offer comprehensive upgrade packages and trade-in options to facilitate the transition to our new technology.</p>

      <h2>Commitment to Sustainability</h2>

      <p>In line with our corporate sustainability goals, the new pump line was designed with environmental impact in mind. The improved energy efficiency reduces carbon footprint, while the longer service life and recyclable components minimize waste.</p>

      <h2>Learn More</h2>

      <p>We invite you to explore our new industrial pump line and discover how it can benefit your operations. Our team of experts is ready to provide detailed information, technical specifications, and customized solutions for your specific needs.</p>

      <p>Contact our sales team or visit our product catalog to learn more about this exciting addition to our product portfolio.</p>
    `,
    relatedPosts: [2, 5, 6]
  },
  {
    id: 2,
    slug: 'industry-trends-2023',
    title: 'Top Industrial Equipment Trends for 2023',
    excerpt: 'Explore the latest trends shaping the industrial equipment market and how they might impact your business.',
    date: 'May 22, 2023',
    author: 'Sarah Chen',
    authorRole: 'Chief Operations Officer',
    category: 'Industry Insights',
    imageUrl: '/images/blog/trends.jpg',
    content: `<p>The industrial equipment sector continues to evolve rapidly, driven by technological advancements, changing market demands, and global economic factors. This article explores the key trends that are shaping the industry in 2023.</p>`,
    relatedPosts: [1, 3, 4]
  },
  {
    id: 3,
    slug: 'sustainable-manufacturing',
    title: 'Sustainable Manufacturing: The Future of Industry',
    excerpt: 'How sustainable practices are transforming manufacturing and creating new opportunities for businesses.',
    date: 'April 10, 2023',
    author: 'Michael Rodriguez',
    authorRole: 'Chief Technical Officer',
    category: 'Sustainability',
    imageUrl: '/images/blog/sustainability.jpg',
    content: `<p>Sustainability is no longer just a buzzword in the manufacturing sector—it's becoming a fundamental business imperative. This article examines how sustainable practices are reshaping industrial operations.</p>`,
    relatedPosts: [2, 4, 5]
  },
  {
    id: 4,
    slug: 'international-trade-challenges',
    title: 'Navigating International Trade Challenges in 2023',
    excerpt: 'A comprehensive guide to overcoming common obstacles in global industrial equipment trade.',
    date: 'March 5, 2023',
    author: 'Robert Johnson',
    authorRole: 'Chief Executive Officer',
    category: 'Global Trade',
    imageUrl: '/images/blog/trade.jpg',
    content: `<p>International trade in industrial equipment presents unique challenges, from regulatory compliance to logistics complexities. This guide provides practical strategies for success in global markets.</p>`,
    relatedPosts: [2, 3, 6]
  },
  {
    id: 5,
    slug: 'maintenance-best-practices',
    title: 'Best Practices for Industrial Equipment Maintenance',
    excerpt: 'Expert tips to extend the lifespan of your industrial equipment and minimize downtime.',
    date: 'February 18, 2023',
    author: 'Michael Rodriguez',
    authorRole: 'Chief Technical Officer',
    category: 'Maintenance',
    imageUrl: '/images/blog/maintenance.jpg',
    content: `<p>Effective maintenance strategies are essential for maximizing equipment lifespan and minimizing costly downtime. This article shares expert recommendations for industrial equipment maintenance.</p>`,
    relatedPosts: [1, 3, 6]
  },
  {
    id: 6,
    slug: 'case-study-mining',
    title: 'Case Study: Equipment Solutions for Mining Operations',
    excerpt: 'How our custom equipment solutions helped a major mining operation improve efficiency by 35%.',
    date: 'January 30, 2023',
    author: 'Sarah Chen',
    authorRole: 'Chief Operations Officer',
    category: 'Case Study',
    imageUrl: '/images/blog/mining.jpg',
    content: `<p>This case study examines how our tailored equipment solutions transformed operations for a major mining company, resulting in significant efficiency improvements and cost savings.</p>`,
    relatedPosts: [1, 4, 5]
  },
];

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const post = blogPosts.find((post) => post.slug === params.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.',
    };
  }

  return {
    title: `${post.title} | Industrial Export Company Blog`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = post.relatedPosts.map(id =>
    blogPosts.find(post => post.id === id)
  ).filter(Boolean);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Link
              href="/blog"
              className="inline-flex items-center text-gray-300 hover:text-white mb-6"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
            <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <div className="flex items-center text-gray-300">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center text-gray-300">
                <User className="h-4 w-4 mr-2" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Tag className="h-4 w-4 mr-2" />
                <span>{post.category}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <p className="text-gray-500">Featured image placeholder</p>
              {/* In a real application, you would use an actual image */}
              {/* <Image
                src={post.imageUrl}
                alt={post.title}
                width={1200}
                height={600}
                className="rounded-lg w-full h-full object-cover"
              /> */}
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />

            {/* Share Links */}
            <div className="mt-12 pt-6 border-t border-gray-200">
              <div className="flex items-center">
                <span className="text-gray-700 font-medium mr-4">Share this article:</span>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Share2 className="h-4 w-4" />
                    <span className="sr-only">Share</span>
                  </Button>
                  {/* In a real application, you would add actual social media sharing buttons */}
                </div>
              </div>
            </div>

            {/* Author Bio */}
            <div className="mt-12 p-6 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-4">
                <div className="bg-gray-200 rounded-full w-16 h-16 flex items-center justify-center">
                  <span className="text-gray-500">Photo</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{post.author}</h3>
                  <p className="text-gray-600">{post.authorRole}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Related Articles</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.slice(0, 3).map((relatedPost) => (
                <div key={relatedPost?.id} className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100">
                  <div className="h-48 bg-gray-200 flex items-center justify-center">
                    <p className="text-gray-500">Image placeholder</p>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                        {relatedPost?.category}
                      </span>
                      <span className="text-gray-500 text-xs">
                        {relatedPost?.date}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{relatedPost?.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {relatedPost?.excerpt}
                    </p>
                    <Link
                      href={`/blog/${relatedPost?.slug}`}
                      className="text-primary font-medium flex items-center hover:underline"
                    >
                      Read More
                      <ArrowLeft className="ml-1 h-4 w-4 rotate-180" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button asChild variant="outline">
                <Link href="/blog">
                  View All Articles
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
