import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Blog | Industrial Export Company',
  description: 'Latest news, industry insights, and company updates',
};

// In a real application, this would come from a CMS or API
const blogPosts = [
  {
    id: 1,
    slug: 'new-product-line-announcement',
    title: 'Announcing Our New Line of Industrial Pumps',
    excerpt: 'We are excited to introduce our latest range of high-efficiency industrial pumps designed for demanding environments.',
    date: 'June 15, 2023',
    category: 'Product News',
    imageUrl: '/images/blog/pumps.jpg',
  },
  {
    id: 2,
    slug: 'industry-trends-2023',
    title: 'Top Industrial Equipment Trends for 2023',
    excerpt: 'Explore the latest trends shaping the industrial equipment market and how they might impact your business.',
    date: 'May 22, 2023',
    category: 'Industry Insights',
    imageUrl: '/images/blog/trends.jpg',
  },
  {
    id: 3,
    slug: 'sustainable-manufacturing',
    title: 'Sustainable Manufacturing: The Future of Industry',
    excerpt: 'How sustainable practices are transforming manufacturing and creating new opportunities for businesses.',
    date: 'April 10, 2023',
    category: 'Sustainability',
    imageUrl: '/images/blog/sustainability.jpg',
  },
  {
    id: 4,
    slug: 'international-trade-challenges',
    title: 'Navigating International Trade Challenges in 2023',
    excerpt: 'A comprehensive guide to overcoming common obstacles in global industrial equipment trade.',
    date: 'March 5, 2023',
    category: 'Global Trade',
    imageUrl: '/images/blog/trade.jpg',
  },
  {
    id: 5,
    slug: 'maintenance-best-practices',
    title: 'Best Practices for Industrial Equipment Maintenance',
    excerpt: 'Expert tips to extend the lifespan of your industrial equipment and minimize downtime.',
    date: 'February 18, 2023',
    category: 'Maintenance',
    imageUrl: '/images/blog/maintenance.jpg',
  },
  {
    id: 6,
    slug: 'case-study-mining',
    title: 'Case Study: Equipment Solutions for Mining Operations',
    excerpt: 'How our custom equipment solutions helped a major mining operation improve efficiency by 35%.',
    date: 'January 30, 2023',
    category: 'Case Study',
    imageUrl: '/images/blog/mining.jpg',
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-6">Industry Insights & Updates</h1>
            <p className="text-xl text-gray-300 mb-8">
              Stay informed with the latest news, trends, and insights from the industrial equipment sector.
            </p>
            <div className="flex gap-4">
              <Button asChild variant="secondary">
                <Link href="#featured">
                  Latest Articles
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
                <Link href="/contact">
                  Subscribe to Updates
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section id="featured" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Featured Article</h2>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
            <div className="lg:col-span-2 bg-gray-200 rounded-lg h-80 flex items-center justify-center">
              <p className="text-gray-500">Featured image placeholder</p>
              {/* In a real application, you would use an actual image */}
              {/* <Image
                src={blogPosts[0].imageUrl}
                alt={blogPosts[0].title}
                fill
                className="rounded-lg object-cover"
              /> */}
            </div>
            <div className="lg:col-span-3">
              <div className="flex gap-3 mb-3">
                <span className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">
                  {blogPosts[0].category}
                </span>
                <span className="text-gray-500 text-sm py-1">
                  {blogPosts[0].date}
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4">{blogPosts[0].title}</h3>
              <p className="text-gray-600 mb-6">
                {blogPosts[0].excerpt}
              </p>
              <Button asChild>
                <Link href={`/blog/${blogPosts[0].slug}`}>
                  Read Full Article
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Latest Articles</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <p className="text-gray-500">Image placeholder</p>
                  {/* In a real application, you would use an actual image */}
                  {/* <Image
                    src={post.imageUrl}
                    alt={post.title}
                    width={400}
                    height={200}
                    className="w-full h-full object-cover"
                  /> */}
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-xs">
                      {post.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-primary font-medium flex items-center hover:underline"
                  >
                    Read More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest industry news, product updates,
            and exclusive content delivered straight to your inbox.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="bg-white text-primary hover:bg-gray-100">
                Subscribe
              </Button>
            </div>
            <p className="text-sm mt-3 text-white/80">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
