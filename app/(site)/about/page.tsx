import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';

export const metadata = {
  title: 'About Us | Industrial Export Company',
  description: 'Learn about our company history, mission, and values',
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900 text-white">
        <div className="absolute inset-0 opacity-20 bg-[url('/images/about-hero.jpg')] bg-cover bg-center"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-6">About Our Company</h1>
            <p className="text-xl text-gray-300">
              Since 1985, Industrial Export Co. has been a leading provider of high-quality
              industrial equipment and components for global markets.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Industrial Export Co. was founded in 1985 with a simple mission: to provide
                high-quality industrial equipment to global markets. What began as a small
                export business has grown into a comprehensive industrial solutions provider
                with clients in over 50 countries.
              </p>
              <p className="text-gray-600 mb-4">
                Our founder, John Smith, recognized the need for reliable industrial equipment
                in emerging markets. With his engineering background and international business
                experience, he established a company that bridges the gap between manufacturers
                and global customers.
              </p>
              <p className="text-gray-600">
                Today, we continue to build on this foundation, combining technical expertise
                with global reach to deliver solutions that help our clients succeed in their
                industries.
              </p>
            </div>
            <div className="bg-gray-200 rounded-lg overflow-hidden h-80 flex items-center justify-center">
              <p className="text-gray-500">Company image placeholder</p>
              {/* In a real application, you would use an actual image */}
              {/* <Image
                src="/images/company-history.jpg"
                alt="Company history"
                fill
                className="object-cover"
              /> */}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Mission & Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We are guided by a commitment to excellence, integrity, and customer satisfaction
              in everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality Excellence</h3>
              <p className="text-gray-600">
                We are committed to providing products that meet the highest standards of
                quality and reliability. Every item we offer undergoes rigorous testing
                and quality control.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Customer Focus</h3>
              <p className="text-gray-600">
                Our customers' success is our success. We work closely with clients to
                understand their needs and provide solutions that help them achieve their
                business objectives.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Global Perspective</h3>
              <p className="text-gray-600">
                With clients in over 50 countries, we understand the complexities of
                international business. We leverage this global perspective to provide
                solutions that work across different markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Leadership Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet the experienced professionals who guide our company's strategy and operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="bg-gray-200 rounded-full w-40 h-40 mx-auto mb-4 flex items-center justify-center">
                <span className="text-gray-500">Photo</span>
                {/* In a real application, you would use an actual image */}
                {/* <Image
                  src="/images/team/ceo.jpg"
                  alt="CEO"
                  width={160}
                  height={160}
                  className="rounded-full object-cover"
                /> */}
              </div>
              <h3 className="text-xl font-semibold">Robert Johnson</h3>
              <p className="text-gray-600 mb-2">Chief Executive Officer</p>
              <p className="text-sm text-gray-500">
                With over 25 years of experience in industrial manufacturing and international trade.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="text-center">
              <div className="bg-gray-200 rounded-full w-40 h-40 mx-auto mb-4 flex items-center justify-center">
                <span className="text-gray-500">Photo</span>
              </div>
              <h3 className="text-xl font-semibold">Sarah Chen</h3>
              <p className="text-gray-600 mb-2">Chief Operations Officer</p>
              <p className="text-sm text-gray-500">
                Expert in supply chain management and operational efficiency with global experience.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="text-center">
              <div className="bg-gray-200 rounded-full w-40 h-40 mx-auto mb-4 flex items-center justify-center">
                <span className="text-gray-500">Photo</span>
              </div>
              <h3 className="text-xl font-semibold">Michael Rodriguez</h3>
              <p className="text-gray-600 mb-2">Chief Technical Officer</p>
              <p className="text-sm text-gray-500">
                Engineering leader with expertise in industrial equipment design and innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Global Network</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Whether you're looking for industrial equipment or partnership opportunities,
            we're here to help you succeed in the global marketplace.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
              <Link href="/contact">
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              <Link href="/products">
                Browse Products
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
