  import { Card, CardContent } from "@/components/ui/card";
  import { Button } from "@/components/ui/button";
  import { Target, Eye, Heart, Users, Lightbulb, Shield } from "lucide-react";
  import { Link } from "wouter";

  export default function About() {
    return (
      <div className="py-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 to-blue-50 py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Storezee, about us!
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              <strong>We’re here to revolutionize freedom of movement.</strong>
              For too long, luggage has chained us down - dragging us, limiting us.
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              <strong>Storezee breaks those chains.</strong>
            We give you the freedom to explore, to live, to move - without baggage.
            We’re not just a service
            <strong>- we’re your trusted companion on every journey.</strong>
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              <strong>Storezee - Freedom begins when the weight ends.</strong>
            </p>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Vision */}
              <Card className="border-0 shadow-xl rounded-3xl">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center">
                      <Eye className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed">
                  <strong>To create a world where no one is held back by baggage - physical or mental.</strong>
                  <p>
                    We believe freedom begins when you're unburdened.
  Whether you're exploring a city, chasing dreams, or simply taking a break -
                    <strong>Storezee is here to carry the load, so you don’t have to.</strong>We're not just storing luggage -
                    <strong>we're enabling moments, movement, and memories.</strong>
                  </p>
                  </p>
                </CardContent>
              </Card>

              {/* Mission */}
              <Card className="border-0 shadow-xl rounded-3xl">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center">
                      <Target className="w-6 h-6 text-gray-900" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    <strong>To redefine how the world stores and moves - by making luggage-free living accessible to everyone.</strong>
                    <p>We’re on a mission to remove the burden of bags from daily life, not just for travelers but for anyone, anywhere, anytime.
  With secure, verified spaces and a human-first delivery network,</p>
                    <strong>Storezee empowers people to roam free, live light, and trust that we’ve got their back.</strong>
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why We Built Storezee */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why We Built Storezee
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We’ve all been there - stuck with bags when all we wanted was to roam freely.
  Travel isn’t meant to be weighed down by luggage. It’s about movement, discovery, and freedom.
  We built Storezee to lift that weight - literally.
  To give you the power to explore, shop, meet, and move without bags holding you back.
  Because we believe every moment matters - and luggage shouldn’t stand in the way.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <Lightbulb className="w-4 h-4 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">The Problem</h3>
                    <p className="text-gray-600">
                      Bags don’t belong everywhere.
  But life doesn’t wait for check-ins or safe spots.
                    <p>Whether you’re:</p>
                    <p>1. Heading to a stadium, where bags aren’t allowed,</p>
                    <p>2. Attending an exam or job interview, where you must leave belongings outside,</p>
                    <p>3. Visiting a hospital or government office, where security is tight,
  -you’re left with one question: Where do I keep my bag?</p>
  Most people ignore this everyday inconvenience - until they’re stuck with their luggage and no place to go.
                    </p>

                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <Shield className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Our Solution</h3>
                    <p className="text-gray-600">
                      Storezee is not just for travelers.
  It’s for anyone who needs to be free - even if just for a few hours.

  We’ve built a verified network of secure local storage spaces, supported by trusted Saathi and Rakshaks and smart tech. From pickup to storage to return - it’s effortless, fast, and safe.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Real Impact</h3>
                    <p className="text-gray-600">
                      We’re not just building a luggage storage network - we’re designing a more convenient way of moving through life. With Storezee, we envision a future where no one is held back by bags - whether you're a traveler, a job applicant heading to an interview, a student at an exam center, or a parent at a hospital.
                      Our platform aims to empower people with the freedom to focus on moments that matter - while creating thousands of micro-entrepreneurship opportunities for local storage rakshaks and delivery Saathis across India.
                      By reducing stress, saving time, and generating income, Storezee is committed to making urban living smoother, safer, and smarter - one bag at a time.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <Heart className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Future Vision</h3>
                    <p className="text-gray-600">
                      Expanding across cities with smarter services - from luggage care to personalized travel support - to make every journey seamless and memorable.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Values */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Core Values
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                The heart of Storezee beats with purpose - everything we create, offer, and improve is driven by these non-negotiable values.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg rounded-2xl text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Security First</h3>
                  <p className="text-gray-600">
                  We don’t take chances with your belongings. From secure smart locks to verified partners, we’re obsessed with protecting what’s yours.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg rounded-2xl text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Users className="w-8 h-8 text-gray-900" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Powered by Community</h3>
                  <p className="text-gray-600">
                    We uplift locals by turning idle spaces into micro-businesses, generating income while building a network of helpful hands across every city.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg rounded-2xl text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Traveler-Centric Mindset</h3>
                  <p className="text-gray-600">
                    We don’t just serve customers - we serve fellow explorers. Every feature is designed to eliminate friction, anxiety, and inconvenience from your journey.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 to-blue-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Join Our Journey
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Be part of the travel revolution. Whether you're a traveler, potential partner, 
              or just curious about what we're building, we'd love to hear from you.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/team">
                <Button size="lg" className="text-lg px-8 py-6 rounded-2xl">
                  Meet Our Team
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-2xl">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }