import { Button } from "@/components/ui/button";
import { Menu, X, Download } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "wouter";

// Import the logo image relative to this file
import storezeeLogo from "../../assests/storezee_logo.png"; // adjust the relative path if needed

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "How We Work", href: "/how-it-works" },
    { name: "About", href: "/about" },
    { name: "Team", href: "/team" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link href="/">
            <div className="flex items-center space-x-2 cursor-pointer">
              <img
                src={storezeeLogo}
                alt="Storezee Logo"
                width={64}
                height={64}
                className="rounded-lg"
              />
              <span className="text-xl font-bold text-gray-900">Storezee</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href}>
                <span
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    location === item.href ? "text-primary" : "text-gray-600"
                  }`}
                >
                  {item.name}
                </span>
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/install-app">
              <Button className="rounded-2xl">
                <Download className="w-4 h-4 mr-2" />
                Download App
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-600" />
            ) : (
              <Menu className="w-6 h-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="space-y-4">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href}>
                  <div
                    className={`block px-4 py-2 text-sm font-medium rounded-lg transition-colors cursor-pointer ${
                      location === item.href
                        ? "bg-primary text-white"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </div>
                </Link>
              ))}

              <div className="pt-4 border-t border-gray-200">
                <Link href="/install-app">
                  <Button className="w-full rounded-2xl" onClick={() => setIsMenuOpen(false)}>
                    <Download className="w-4 h-4 mr-2" />
                    Download App
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
