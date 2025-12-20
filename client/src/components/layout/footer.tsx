import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Phone, MapPin, Download } from "lucide-react";
import { SiX, SiFacebook, SiInstagram, SiLinkedin } from "react-icons/si";
import { Link } from "wouter";

// Import the logo image relative to this file
import storezeeLogo from "../../assests/storezee_logo.png"; // adjust the relative path if needed

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="space-y-6">
             <Link href="/">
            <div className="flex items-center space-x-2 cursor-pointer">
              <img
                src={storezeeLogo}
                alt="Storezee Logo"
                width={64}
                height={64}
                className="rounded-lg"
              />
              <span className="text-xl font-bold text-white">Storezee</span>
            </div>
          </Link>
            <p className="text-gray-300 leading-relaxed">
              Your personal luggage assistant - offering secure, on-demand storage at verified local spots with smart tracking and trusted Saathi delivery partners.</p>
            <div className="flex space-x-4">
              <a href="https://x.com/thestorezee?t=nOSMRaa5GGt87iz2UHeTKQ&s=09" className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                <SiX className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61584367220898&sfnsn=wa" className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                <SiFacebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/the_storezee?igsh=MTZ5ZG41aXo5bmtqbA==" className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                <SiInstagram className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/company/storezee/" className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                <SiLinkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/how-it-works">
                  <span className="text-gray-300 hover:text-white transition-colors">How We Work</span>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <span className="text-gray-300 hover:text-white transition-colors">About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/team">
                  <span className="text-gray-300 hover:text-white transition-colors">Our Team</span>
                </Link>
              </li>
              <li>
                <Link href="/faq">
                  <span className="text-gray-300 hover:text-white transition-colors">FAQ</span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="text-gray-300 hover:text-white transition-colors">Contact</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/terms">
                  <span className="text-gray-300 hover:text-white transition-colors">Terms of Service</span>
                </Link>
              </li>
              <li>
                <Link href="/privacy">
                  <span className="text-gray-300 hover:text-white transition-colors">Privacy Policy</span>
                </Link>
              </li>
              <li>
                <Link href="/refund">
                  <span className="text-gray-300 hover:text-white transition-colors">Refund Policy</span>
                </Link>
              </li>
              <li>
                <a href="mailto:info@thestorezee.com" className="text-gray-300 hover:text-white transition-colors">
                  Legal Inquiries
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Download */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-gray-300">info@thestorezee.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-gray-300">+91 70915 17586</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-gray-300">Dhanbad, India</span>
              </div>
            </div>
            
            <div className="mt-6">
              <Link href="/install-app">
                <Button className="w-full rounded-2xl bg-primary hover:bg-primary/90">
                  <Download className="w-4 h-4 mr-2" />
                  Download App
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div>
              <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
              <p className="text-gray-300">Get the latest updates on new features and locations.</p>
            </div>
            <div className="flex space-x-2 w-full md:w-auto">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 rounded-xl"
              />
              <Button variant="secondary" className="rounded-xl">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 Storezee. All rights reserved.
            </p>
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-xs sm:text-sm text-gray-400">
              <span>Made with ❤️ in India and for Moon</span>
              <div className="flex space-x-4 sm:space-x-4">
                <img 
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
                  alt="Download on App Store" 
                  className="h-8"
                />
                <img 
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" 
                  alt="Get it on Google Play" 
                  className="h-8"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}