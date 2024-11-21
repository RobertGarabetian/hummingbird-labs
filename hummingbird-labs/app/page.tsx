import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import {
  ArrowRight,
  Code2,
  Globe,
  Laptop,
  MessageSquare,
  Rocket,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { BirdIcon as Hummingbird } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full glass-card z-50 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Hummingbird className="h-6 w-6" />
              <span className="text-xl font-bold">Hummingbird Labs</span>
            </div>
            <NavigationMenu>
              <NavigationMenuList className="hidden md:flex gap-6">
                <NavigationMenuItem>
                  <Link href="#services" legacyBehavior passHref>
                    <NavigationMenuLink className="text-sm font-medium">
                      Services
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="#process" legacyBehavior passHref>
                    <NavigationMenuLink className="text-sm font-medium">
                      Process
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="#testimonials" legacyBehavior passHref>
                    <NavigationMenuLink className="text-sm font-medium">
                      Testimonials
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <Button className="bg-primary hover:bg-primary/90">
              <Link href="#contact" legacyBehavior passHref>
                Get Quote
              </Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold leading-tight mb-6">
                Highly Converting Websites For
                <span className="text-primary"> Service Based Businesses</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                We skyrocket your leads and enquiries by reinventing your online
                presence, supplying you with high quality sales appointments.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">
                  View Our Work
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2426&q=80"
                alt="Web Design"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the sections remain the same, just updating the styling */}
      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We offer comprehensive web solutions tailored for local businesses
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Code2 className="h-8 w-8" />}
              title="Custom Web Design"
              description="Beautiful, responsive websites that reflect your brand and convert visitors into customers."
            />
            <ServiceCard
              icon={<Rocket className="h-8 w-8" />}
              title="Local SEO"
              description="Boost your local search rankings and get found by customers in your area."
            />
            <ServiceCard
              icon={<MessageSquare className="h-8 w-8" />}
              title="Content Strategy"
              description="Engaging content that speaks to your audience and drives business growth."
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We follow a proven process to ensure your project&apos;s success
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="p-6 glass-card">
              <div className="mb-4">
                <span className="text-4xl font-bold text-primary">01</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Discovery</h3>
              <p className="text-muted-foreground">
                We learn about your business, goals, and target audience
              </p>
            </Card>
            <Card className="p-6 glass-card">
              <div className="mb-4">
                <span className="text-4xl font-bold text-primary">02</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Strategy</h3>
              <p className="text-muted-foreground">
                We create a custom plan tailored to your needs
              </p>
            </Card>
            <Card className="p-6 glass-card">
              <div className="mb-4">
                <span className="text-4xl font-bold text-primary">03</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Design & Development
              </h3>
              <p className="text-muted-foreground">
                We bring your vision to life with precision and care
              </p>
            </Card>
            <Card className="p-6 glass-card">
              <div className="mb-4">
                <span className="text-4xl font-bold text-primary">04</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Launch & Support</h3>
              <p className="text-muted-foreground">
                We ensure a smooth launch and provide ongoing support
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Don&apos;t just take our word for it - hear from our satisfied
              clients
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="Hummingbird Labs transformed our online presence. Our bookings have increased by 50% since launching our new website!"
              author="Sarah Johnson"
              business="Bloom Spa & Wellness"
              image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            />
            <TestimonialCard
              quote="Professional, creative, and results-driven. They understood exactly what our restaurant needed to stand out online."
              author="Michael Chen"
              business="The Golden Plate"
              image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            />
            <TestimonialCard
              quote="The best investment we've made for our business. Our new website has helped us reach more customers than ever before."
              author="Lisa Martinez"
              business="Clean Pro Services"
              image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-muted-foreground mb-6">
                Let&apos;s discuss how we can help your business grow online.
                Fill out the form and we&apos;ll get back to you within 24
                hours.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-primary" />
                  <span>Over 100+ local businesses served</span>
                </div>
                <div className="flex items-center gap-3">
                  <Laptop className="h-5 w-5 text-primary" />
                  <span>Custom-tailored solutions</span>
                </div>
                <div className="flex items-center gap-3">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  <span>24/7 support</span>
                </div>
              </div>
            </div>
            <div className="glass-card p-8 rounded-lg">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary/10 py-12">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Globe className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">Hummingbird Labs</span>
              </div>
              <p className="text-muted-foreground">
                Transforming local businesses with stunning web design and
                digital solutions.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Web Design</li>
                <li>Local SEO</li>
                <li>Content Strategy</li>
                <li>Digital Marketing</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>About Us</li>
                <li>Our Work</li>
                <li>Blog</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>hello@hummingbirdlabs.com</li>
                <li>(555) 123-4567</li>
                <li>123 Web Street</li>
                <li>San Francisco, CA 94105</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary/20 mt-12 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Hummingbird Labs. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
