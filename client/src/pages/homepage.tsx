import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Smartphone, Shield, Clock, Users, ArrowRight, Download ,Luggage, Cctv, Lightbulb } from "lucide-react";
import { Link } from "wouter";

export default function Homepage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-blue-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  On-Demand Luggage Storage Near You.
                  <span className="block text-secondary">Book, Track, & Enjoy Your Freedom with Storezee.</span>
                </h1>
                <p className="text-lg md:text-xl text-blue-100 max-w-lg">
                  Storezee is the secure luggage storage app that gives you instant access to nearby, verified locker locations. Enjoy live luggage tracking, doorstep Saathi pickup, and full insurance guaranteed. Free yourself from heavy bags!
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/install-app">
                  <Button size="lg" variant="secondary" className="text-lg px-8 py-6 rounded-2xl">
                    <Download className="w-5 h-5 mr-2" />
                    Download App
                  </Button>
                </Link>
                <Link href="/how-it-works">
                  <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-2xl border-white text-black hover:bg-white hover:text-primary">
                    How It Works
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
              
              <div className="flex items-center space-x-8 text-sm">
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-secondary" />
                  <span>Secure & Verified Storage Points</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-secondary" />
                  <span>Live Location Tracking</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-secondary" />
                  <span>Not Just for Travelers-For Everyone</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-white">
                    <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-gray-900" />
                    </div>
                    <div>
                      <p className="font-semibold">Find Nearby Storage</p>
                      <p className="text-blue-100 text-sm">Drop your bags at nearby storage units instantly</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 text-white">
                    <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                      <Smartphone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-semibold">Book in Seconds</p>
                      <p className="text-blue-100 text-sm">Quick and easy booking via app-no long forms</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 text-white">
                    <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-semibold">Saathi Pickup/Delivery</p>
                      <p className="text-blue-100 text-sm">15-30 minute instant pickup from your location and deliver to your location, tracked your luggage live</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Intro Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What is Storezee?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Storezee is your personal luggage assistant that connects travelers with verified local storage points. 
              Store your bags securely while you explore cities hands-free.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg rounded-2xl">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Book Nearby Luggage Lockers Instantly</h3>
                <p className="text-gray-600">
                  Discover secure storage spots near you-hosted by verified locals, shops, and businesses you can trust.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg rounded-2xl">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-gray-900" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Live Luggage Tracking & Secure Access</h3>
                <p className="text-gray-600">
                  Your bags stay locked, tracked, and safe with our real-time location updates and secure access technology.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg rounded-2xl">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Doorstep Saathi Pickup & Delivery</h3>
                <p className="text-gray-600">
                  Saathi partners provide fast, reliable pickup and delivery of your luggage. Our Saathis are background-verified and trackable for your peace of mind.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <Card className="border-0 shadow-lg rounded-2xl">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-fuchsia-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Luggage className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Guaranteed Insured Luggage Protection</h3>
                <p className="text-gray-600">
                  In the unlikely event of any unexpected damage or loss, your luggage is fully insured. We've got your back-always.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg rounded-2xl">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-indigo-800 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Cctv className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">We Treat You Like Family</h3>
                <p className="text-gray-600">
                  Our Saathis and Rakshaks are trained, trusted, and treated like family and 
                  every saathis and rakshaks are background-verified,storage units are monitored with CCTV, and regularly cleaned. 
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg rounded-2xl">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-yellow-300 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">We Solve What Others Overlook.</h3>
                <p className="text-gray-600">
                  Most ignore luggage problems even we don't care until we strucked, that's why we built Storezee to solve them-because your freedom and peace of mind matters.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Travel Light?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Download the Storezee app and start exploring cities without the burden of luggage.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <Link href="/install-app">
              <Button size="lg" className="text-lg px-8 py-6 rounded-2xl">
                <Download className="w-5 h-5 mr-2" />
                Get Started
              </Button>
            </Link>
            <Link href="/how-it-works">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-2xl">
                Learn More
              </Button>
            </Link>
          </div>
          
          <div className="flex justify-center space-x-4">
            <img 
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
              alt="Download on App Store" 
              className="h-12 rounded-lg"
            />
            <img 
              src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" 
              alt="Get it on Google Play" 
              className="h-12 rounded-lg"
            />
          </div>
        </div>
      </section>
    </>
  );
}