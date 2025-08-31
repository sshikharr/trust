import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import membershipPDF from "./assets/membership.pdf";

function Nav() {
  return (
    <nav className="w-full bg-white shadow-sm border-b">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-24 bg-[#D65A31] rounded-full flex items-center justify-center">
              <img src="./src/assets/logo.jpeg" alt="logo" className="rounded-full object-contain" />
            </div>
            <div>
              <div className="font-bold text-xl text-[#D65A31]">सेवा साहसी ट्रस्ट</div>
              <div className="text-sm text-gray-600">Seva Sahasi Trust</div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-gray-700 hover:text-[#D65A31] font-medium">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-[#D65A31] font-medium">About</Link>
            <Link to="/membership" className="text-gray-700 hover:text-[#D65A31] font-medium">Membership</Link>
            <Link to="/gallery" className="text-gray-700 hover:text-[#D65A31] font-medium">Gallery</Link>
            <Link to="/contact" className="text-gray-700 hover:text-[#D65A31] font-medium">Contact</Link>
            <Link to="/membership" className="bg-[#D65A31] text-white px-4 py-2 rounded-lg hover:bg-[#B54A26]">Join Us</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="bg-gradient-to-r from-[#FBF6EE] to-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-[#D65A31] mb-6">
            जहाँ ज़रूरत वहाँ सेवा, जहाँ भय वहाँ साहस
          </h1>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Dedicated to serving the community with courage and compassion. Join us in making a meaningful difference in people's lives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/membership" 
              className="bg-[#D65A31] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#B54A26] transition-colors"
            >
              Become a Member
            </Link>
            <a 
              href="#donate" 
              className="border-2 border-[#D65A31] text-[#D65A31] px-8 py-3 rounded-lg font-semibold hover:bg-[#D65A31] hover:text-white transition-colors"
            >
              Support Our Cause
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[#D65A31] mb-4">About Seva Sahasi Trust</h2>
        <div className="w-24 h-1 bg-[#D65A31] mx-auto mb-6"></div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-8 rounded-xl shadow-sm border">
          <h3 className="text-xl font-semibold text-[#D65A31] mb-4">Our Mission</h3>
          <p className="text-gray-700 leading-relaxed">
            To serve the community with dedication and face challenges with courage. We believe in creating positive change through collective action and unwavering commitment to social welfare.
          </p>
        </div>
        
        <div className="bg-white p-8 rounded-xl shadow-sm border">
          <h3 className="text-xl font-semibold text-[#D65A31] mb-4">Our Vision</h3>
          <p className="text-gray-700 leading-relaxed">
            A society where every individual has access to basic needs and opportunities for growth, supported by a community that stands together in times of need.
          </p>
        </div>
      </div>

      <div className="bg-[#FBF6EE] p-8 rounded-xl">
        <h3 className="text-xl font-semibold text-[#D65A31] mb-4">Our Activities</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-[#D65A31] rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-white font-bold text-xl">🤝</span>
            </div>
            <h4 className="font-semibold mb-2">Community Service</h4>
            <p className="text-sm text-gray-600">Supporting local communities through various service initiatives</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-[#D65A31] rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-white font-bold text-xl">📚</span>
            </div>
            <h4 className="font-semibold mb-2">Education Support</h4>
            <p className="text-sm text-gray-600">Providing educational resources and opportunities</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-[#D65A31] rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-white font-bold text-xl">💪</span>
            </div>
            <h4 className="font-semibold mb-2">Emergency Relief</h4>
            <p className="text-sm text-gray-600">Quick response to natural disasters and emergencies</p>
          </div>
        </div>
      </div>
    </main>
  );
}

function Membership() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[#D65A31] mb-4">Become a Member</h2>
        <div className="w-24 h-1 bg-[#D65A31] mx-auto mb-6"></div>
        <p className="text-gray-700 text-lg">Join our community of dedicated individuals committed to service</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-8 rounded-xl shadow-sm border">
          <h3 className="text-xl font-semibold text-[#D65A31] mb-4">Membership Form</h3>
          <p className="text-gray-700 mb-6">
            Fill out our online membership form to get started. The process is simple and takes just a few minutes.
          </p>
          <a 
            href="https://forms.gle/PLACEHOLDER" 
            target="_blank" 
            rel="noreferrer"
            className="inline-block bg-[#D65A31] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#B54A26] transition-colors"
          >
            Open Application Form
          </a>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-sm border">
          <h3 className="text-xl font-semibold text-[#D65A31] mb-4">Membership Guide</h3>
          <p className="text-gray-700 mb-6">
            Download our comprehensive membership guide with all details about benefits and responsibilities.
          </p>
          <a 
            href={membershipPDF} 
            target="_blank" 
            rel="noreferrer"
            className="inline-block border-2 border-[#D65A31] text-[#D65A31] px-6 py-3 rounded-lg font-semibold hover:bg-[#D65A31] hover:text-white transition-colors"
          >
            Download PDF Guide
          </a>
        </div>
      </div>

      <div className="bg-[#FBF6EE] p-8 rounded-xl">
        <h3 className="text-xl font-semibold text-[#D65A31] mb-6">Membership Benefits</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-[#D65A31] rounded-full"></span>
              <span>Regular updates on trust activities</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-[#D65A31] rounded-full"></span>
              <span>Participation in community events</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-[#D65A31] rounded-full"></span>
              <span>Opportunity to volunteer in programs</span>
            </li>
          </ul>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-[#D65A31] rounded-full"></span>
              <span>Access to training workshops</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-[#D65A31] rounded-full"></span>
              <span>Network with like-minded individuals</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-[#D65A31] rounded-full"></span>
              <span>Annual membership certificate</span>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}

function Donate() {
  return (
    <section id="donate" className="bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#D65A31] mb-4">Support Our Mission</h2>
          <div className="w-24 h-1 bg-[#D65A31] mx-auto mb-6"></div>
          <p className="text-gray-700 text-lg">Your contribution helps us continue our community service initiatives</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm border text-center">
            <div className="w-48 h-48 bg-gray-100 rounded-lg mx-auto mb-6 flex items-center justify-center">
              <span className="text-gray-400 font-semibold">QR Code</span>
            </div>
            <p className="text-gray-600">Scan the QR code above for quick digital payment</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border">
            <h3 className="text-xl font-semibold text-[#D65A31] mb-6">Bank Details</h3>
            <div className="space-y-4">
              <div>
                <span className="font-semibold text-gray-700">Account Name:</span>
                <p className="text-gray-600">Seva Sahasi Trust</p>
              </div>
              <div>
                <span className="font-semibold text-gray-700">Account Number:</span>
                <p className="text-gray-600">0000000000</p>
              </div>
              <div>
                <span className="font-semibold text-gray-700">IFSC Code:</span>
                <p className="text-gray-600">PLACEHOLDER</p>
              </div>
              <div>
                <span className="font-semibold text-gray-700">UPI ID:</span>
                <p className="text-gray-600">your-upi-id@bank</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[#D65A31] mb-4">Get in Touch</h2>
        <div className="w-24 h-1 bg-[#D65A31] mx-auto mb-6"></div>
        <p className="text-gray-700 text-lg">We'd love to hear from you. Send us a message or visit us.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-xl shadow-sm border">
          <h3 className="text-xl font-semibold text-[#D65A31] mb-6">Send Message</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
              <input className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D65A31]" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <input className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D65A31]" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea className="w-full p-3 border border-gray-300 rounded-lg h-32 focus:outline-none focus:border-[#D65A31]"></textarea>
            </div>
            <button className="w-full bg-[#D65A31] text-white py-3 rounded-lg font-semibold hover:bg-[#B54A26] transition-colors">
              Send Message
            </button>
          </form>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-sm border">
          <h3 className="text-xl font-semibold text-[#D65A31] mb-6">Contact Information</h3>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#D65A31] rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">📍</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Address</h4>
                <p className="text-gray-600">123 Example Road, City<br />State, PIN Code</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#D65A31] rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">📞</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Phone</h4>
                <p className="text-gray-600">+91 00000 00000</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#D65A31] rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">✉️</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Email</h4>
                <p className="text-gray-600">info@sevasahasi.org</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function Footer() {
  return (
    <footer className="bg-[#2B2B2B] text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#D65A31] rounded-full flex items-center justify-center">
              <img src="./src/assets/logo.jpeg" alt="logo" className="h-12 w-12 rounded-full object-contain" />
              </div>
              <span className="font-bold text-lg">सेवा साहसी ट्रस्ट</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Dedicated to serving the community with courage and compassion.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-400 hover:text-white">Home</Link>
              <Link to="/about" className="block text-gray-400 hover:text-white">About</Link>
              <Link to="/membership" className="block text-gray-400 hover:text-white">Membership</Link>
              <Link to="/contact" className="block text-gray-400 hover:text-white">Contact</Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-400">
              <p>123 Example Road, City</p>
              <p>+91 00000 00000</p>
              <p>info@sevasahasi.org</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400">© {new Date().getFullYear()} Seva Sahasi Trust. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Gallery() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[#D65A31] mb-4">Gallery</h2>
        <div className="w-24 h-1 bg-[#D65A31] mx-auto mb-6"></div>
        <p className="text-gray-700 text-lg">A glimpse of our activities and events (placeholders for now)</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="bg-gray-200 h-48 rounded-xl flex items-center justify-center text-gray-500">
            Image {i}
          </div>
        ))}
      </div>
    </main>
  );
}

export default function App() {
  return (
      <div className="min-h-screen bg-white">
        <Nav />
        
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Donate />
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        
        <Footer />
      </div>
  );
}

          
