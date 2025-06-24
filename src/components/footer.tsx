import Link from "next/link"
import { FileText, Github, Twitter, Linkedin, Mail, Phone, MapPin, Heart } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-3 rounded-xl">
                <FileText className="h-8 w-8 text-white" />
              </div>
              <span className="text-2xl font-bold">ResumeGen</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              The most trusted online resume builder. Create professional, ATS-friendly resumes in minutes. Join over
              50,000 professionals who have successfully landed their dream jobs with ResumeGen.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                className="bg-gray-800 hover:bg-gray-700 p-3 rounded-lg transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                className="bg-gray-800 hover:bg-gray-700 p-3 rounded-lg transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                className="bg-gray-800 hover:bg-gray-700 p-3 rounded-lg transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Resume Builder
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Contact Support
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Resume Templates
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Career Tips
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Get in Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-400">
                <Mail className="h-5 w-5 mr-3 text-blue-500" />
                <a href="mailto:hello@resumegen.com" className="hover:text-white transition-colors">
                  hello@resumegen.com
                </a>
              </li>
              <li className="flex items-center text-gray-400">
                <Phone className="h-5 w-5 mr-3 text-blue-500" />
                <a href="tel:+1-555-123-4567" className="hover:text-white transition-colors">
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="flex items-start text-gray-400">
                <MapPin className="h-5 w-5 mr-3 text-blue-500 mt-0.5" />
                <span>
                  San Francisco, CA
                  <br />
                  United States
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">&copy; {currentYear} ResumeGen. All rights reserved.</p>
              <div className="flex items-center text-gray-400 text-sm">
                <span>Made with</span>
                <Heart className="h-4 w-4 mx-1 text-red-500 fill-current" />
                <span>for job seekers worldwide</span>
              </div>
            </div>

            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </a>
              <a href="/sitemap" className="text-gray-400 hover:text-white transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
