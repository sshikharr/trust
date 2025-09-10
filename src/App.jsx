import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import logo from "./assets/logo.jpeg"; 
import img1 from "./assets/img1.jpeg";
import img2 from "./assets/img2.jpeg";
import img3 from "./assets/img3.jpeg";
import img4 from "./assets/img4.jpeg";
import img5 from "./assets/img5.jpeg";
import img6 from "./assets/img6.jpeg";
import img7 from "./assets/img7.jpeg";
import img8 from "./assets/img8.jpeg";
import img9 from "./assets/img9.jpeg";
import img10 from "./assets/img10.jpeg";
import img11 from "./assets/img11.jpeg";
import img12 from "./assets/img12.jpeg";
import img13 from "./assets/img13.jpeg";
import img14 from "./assets/img14.jpeg";
import img15 from "./assets/img15.jpeg";
import img16 from "./assets/img16.jpeg";
import img17 from "./assets/img17.jpeg";
import amit from "./assets/amit.jpg";
import jitendra from "./assets/jitendra.jpeg";
import pawan from "./assets/pawan.jpeg";
import naman from "./assets/naman.jpg";
import shivam from "./assets/shivam.jpeg";

// Import Lucide React icons
import {
  Book,
  Handshake,
  Sprout,
  Home,
  HeartPulse,
  TreeDeciduous,
  Award,
  UserRound,
  Menu,
  X,
} from "lucide-react";

// Navigation Component
function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="w-full bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Trust Name */}
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-[#D65A31] rounded-full flex items-center justify-center">
              <img src={logo} alt="logo" className="rounded-full object-contain" />
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-xl text-[#D65A31]">सेवा साहसी ट्रस्ट</div>
              <div className="text-sm text-gray-600">Seva Sahasi Trust</div>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-gray-700 hover:text-[#D65A31] font-medium">
              होम
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-[#D65A31] font-medium">
              हमारे बारे में
            </Link>
            <Link to="/membership" className="text-gray-700 hover:text-[#D65A31] font-medium">
              सदस्यता
            </Link>
            <Link to="/gallery" className="text-gray-700 hover:text-[#D65A31] font-medium">
              गैलरी
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-[#D65A31] font-medium">
              संपर्क
            </Link>
            <Link to="/membership" className="bg-[#D65A31] text-white px-4 py-2 rounded-lg hover:bg-[#B54A26]">
              हमसे जुड़ें
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
              {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={closeMenu}></div>
      )}

      {/* Mobile Menu - Collapsible */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-64 bg-white shadow-lg transition-transform duration-300 ease-in-out z-50 transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={closeMenu} className="text-gray-700">
            <X size={32} />
          </button>
        </div>
        <div className="flex flex-col items-start p-4 gap-6 text-lg">
          <Link to="/" className="text-gray-700 hover:text-[#D65A31] font-medium" onClick={closeMenu}>
            होम
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-[#D65A31] font-medium" onClick={closeMenu}>
            हमारे बारे में
          </Link>
          <Link to="/membership" className="text-gray-700 hover:text-[#D65A31] font-medium" onClick={closeMenu}>
            सदस्यता
          </Link>
          <Link to="/gallery" className="text-gray-700 hover:text-[#D65A31] font-medium" onClick={closeMenu}>
            गैलरी
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-[#D65A31] font-medium" onClick={closeMenu}>
            संपर्क
          </Link>
          <Link to="/membership" className="bg-[#D65A31] text-white px-4 py-2 rounded-lg hover:bg-[#B54A26] font-semibold" onClick={closeMenu}>
            हमसे जुड़ें
          </Link>
        </div>
      </div>
    </nav>
  );
}

// Hero Section Component
function Hero() {
  return (
    <section className="bg-gradient-to-r from-[#FBF6EE] to-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-[#D65A31] mb-6">
            जहाँ ज़रूरत वहाँ सेवा, जहाँ भय वहाँ साहस
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
            साहस और करुणा के साथ समुदाय की सेवा के लिए समर्पित। लोगों के जीवन में एक सार्थक बदलाव लाने में हमारा साथ दें।
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/membership" className="bg-[#D65A31] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#B54A26] transition-colors">
              सदस्य बनें
            </Link>
            <a href="#donate" className="border-2 border-[#D65A31] text-[#D65A31] px-8 py-3 rounded-lg font-semibold hover:bg-[#D65A31] hover:text-white transition-colors">
              हमारे उद्देश्य का समर्थन करें
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// An array to hold the structured objective data for easier mapping.
const coreObjectives = [
  {
    icon: <Book size={48} />, // Lucide Icon
    title: "शिक्षा एवं कौशल विकास",
    description: "विद्यालयों से लेकर विश्वविद्यालयों तक की स्थापना, तकनीकी प्रशिक्षण प्रदान करना, और युवाओं को आत्मनिर्भर बनाने हेतु ज्ञान का प्रसार करना।"
  },
  {
    icon: <Handshake size={48} />, // Lucide Icon
    title: "सामाजिक समरसता",
    description: "जाति-पाति, लिंग-भेद, और छुआ-छूत जैसी सामाजिक बुराइयों को समाप्त करना तथा आपसी भाईचारा, राष्ट्रीय एकता, और सद्भाव को बढ़ावा देना।"
  },
  {
    icon: <Sprout size={48} />, // Lucide Icon
    title: "आजीविका और सशक्तिकरण",
    description: "स्वरोजगार योजनाओं, व्यावसायिक प्रशिक्षण (सिलाई, कंप्यूटर आदि), और महिला सशक्तिकरण के माध्यम से आर्थिक आत्मनिर्भरता को प्रोत्साहित करना।"
  },
  {
    icon: <Home size={48} />, // Lucide Icon
    title: "सामुदायिक कल्याण",
    description: "गरीब, अनाथ, दिव्यांग, एवं वृद्धों हेतु आवास, भोजन, वृद्धाश्रम, और पुनर्वास केंद्रों की स्थापना कर चौतरफा सहायता प्रदान करना।"
  },
  {
    icon: <HeartPulse size={48} />, // Lucide Icon
    title: "स्वास्थ्य एवं आरोग्य",
    description: "नशा-मुक्ति, परिवार कल्याण, टीकाकरण, और गंभीर बीमारियों (एड्स, कैंसर) के प्रति जागरूकता फैलाना तथा चिकित्सा सुविधाओं की स्थापना करना।"
  },
  {
    icon: <TreeDeciduous size={48} />, // Lucide Icon
    title: "पर्यावरण एवं ग्रामीण विकास",
    description: "वृक्षारोपण, जैविक खेती को बढ़ावा, जल संरक्षण, और प्राकृतिक आपदाओं में राहत प्रदान कर एक स्थायी और सुरक्षित वातावरण का निर्माण करना।"
  }
];

function About() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[#D65A31] mb-4">सेवा साहसी ट्रस्ट के बारे में</h2>
        <div className="w-24 h-1 bg-[#D65A31] mx-auto mb-6"></div>
      </div>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="bg-white p-8 rounded-xl shadow-sm border">
          <h3 className="text-xl font-semibold text-[#D65A31] mb-4">हमारा मिशन</h3>
          <p className="text-gray-700 leading-relaxed">
            समाज के आर्थिक, सामाजिक एवं शैक्षिक विकास हेतु निरंतर कार्य करना और समाज में सुख-शांति, आपसी सद्भाव, विश्वास, सदाचार, शिक्षा, एवं स्वास्थ्य की स्थापना करना।
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-sm border">
          <h3 className="text-xl font-semibold text-[#D65A31] mb-4">हमारी दृष्टि</h3>
          <p className="text-gray-700 leading-relaxed">
            एक ऐसा समाज बनाना जहाँ प्रत्येक व्यक्ति को भोजन, शिक्षा और आवास जैसी मूलभूत आवश्यकताएं पूरी हों और शिक्षित बेरोजगारों को उनकी योग्यता के अनुसार रोजगार के अवसर मिलें।
          </p>
        </div>
      </div>

      {/* NEW: Objectives Section with Improved UI */}
      <div className="bg-[#FBF6EE] p-8 md:p-12 rounded-xl">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-[#D65A31] mb-4">हमारे मुख्य उद्देश्य</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">हमारा कार्यक्षेत्र समाज के हर पहलू को छूता है, जिसका सार इन प्रमुख उद्देश्यों में निहित है:</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreObjectives.map((objective, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border text-center transition-transform transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-[#D65A31] rounded-full flex items-center justify-center mx-auto mb-5 shadow-lg text-white">
                {objective.icon}
              </div>
              <h4 className="font-bold text-lg text-gray-800 mb-2">{objective.title}</h4>
              <p className="text-sm text-gray-600 leading-relaxed">{objective.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

// Data for post holders, now with images instead of icons
const postHolders = [
  { post: "अध्यक्ष", name: "अमित सिंह", img: amit },
  { post: "उपाध्यक्ष", name: "जितेंद्र कुमार सिंह", img: jitendra },
  { post: "सचिव", name: "पवन मिश्र", img: pawan },
  { post: "विधि प्रकोष्ठ प्रभारी", name: "नमन कुमार सिंह", img: naman },
  { post: "मीडिया प्रभारी", name: "शिवम मौर्य", img: shivam },
];

// New component for post holders (now shows images)
function PostHoldersSection() {
  return (
    <section className="py-16 bg-[#FBF6EE]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#D65A31] mb-4">हमारे पदाधिकारी</h2>
          <div className="w-24 h-1 bg-[#D65A31] mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {postHolders.map((holder, index) => (
            <div key={index} className="flex flex-col items-center text-center py-4 bg-white rounded-lg shadow-sm border border-gray-200 w-full">
              <div className="w-32 h-32 rounded-full overflow-hidden bg-[#D65A31] flex items-center justify-center mb-4">
                <img src={holder.img} alt={holder.name} />
              </div>
              <h3 className="font-bold text-lg text-gray-800">{holder.name}</h3>
              <p className="text-sm text-[#D65A31] font-semibold">{holder.post}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Membership Page Component
function Membership() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[#D65A31] mb-4">सदस्य बनें</h2>
        <div className="w-24 h-1 bg-[#D65A31] mx-auto mb-6"></div>
        <p className="text-gray-700 text-lg">
          सेवा के लिए प्रतिबद्ध समर्पित व्यक्तियों के हमारे समुदाय में शामिल हों।
        </p>
      </div>

      {/* Membership Form Section */}
      <div className="mb-12">
        <div className="bg-white p-8 rounded-xl shadow-sm border">
          <h3 className="text-xl font-semibold text-[#D65A31] mb-4">सदस्यता प्रपत्र</h3>
          <p className="text-gray-700 mb-6">
            शुरू करने के लिए हमारा ऑनलाइन सदस्यता फ़ॉर्म भरें। यह प्रक्रिया सरल है और इसमें बस कुछ ही मिनट लगते हैं।
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScB8RPphOUQ41hS629Fbxo3QlNt9LMyottYc5HA1KfRL8TOCA/viewform" // Replace with your Google Form link
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-[#D65A31] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#B54A26] transition-colors"
          >
            आवेदन पत्र खोलें
          </a>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-[#FBF6EE] p-8 rounded-xl">
        <h3 className="text-xl font-semibold text-[#D65A31] mb-6">सदस्यता के लाभ</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-[#D65A31] rounded-full"></span>
              <span>ट्रस्ट की गतिविधियों पर नियमित अपडेट</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-[#D65A31] rounded-full"></span>
              <span>सामुदायिक कार्यक्रमों में भागीदारी</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-[#D65A31] rounded-full"></span>
              <span>कार्यक्रमों में स्वयंसेवा का अवसर</span>
            </li>
          </ul>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-[#D65A31] rounded-full"></span>
              <span>प्रशिक्षण कार्यशालाओं तक पहुंच</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-[#D65A31] rounded-full"></span>
              <span>समान विचारधारा वाले व्यक्तियों के साथ नेटवर्क</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-[#D65A31] rounded-full"></span>
              <span>वार्षिक सदस्यता प्रमाण पत्र</span>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}

// Donate Section Component
function Donate() {
  return (
    <section id="donate" className="bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#D65A31] mb-4">हमारे उद्देश्य का सहयोग करें</h2>
          <div className="w-24 h-1 bg-[#D65A31] mx-auto mb-6"></div>
          <p className="text-gray-700 text-lg">
            आपका योगदान हमें अपनी सामुदायिक सेवा पहल जारी रखने में मदद करता है।
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-sm border text-center max-w-md mx-auto">
          {/* Replace with your actual QR code image */}
          <div className="w-48 h-48 bg-gray-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
            <span className="text-gray-400 font-semibold">क्यूआर कोड यहाँ</span>
          </div>
          <p className="text-gray-600 mb-2">
            त्वरित डिजिटल भुगतान के लिए ऊपर दिए गए क्यूआर कोड को स्कैन करें।
          </p>
          <p className="text-sm text-gray-700 font-medium">
            UPI आईडी: <span className="text-[#D65A31]">your-upi-id@bank</span>
          </p>
        </div>
      </div>
    </section>
  );
}

// You can manage phone numbers in an array for cleaner code
const phoneNumbers = [
  { display: "91188 73100", number: "+919118873100" },
  { display: "94500 32984", number: "+919450032984" },
  { display: "99182 75151", number: "+919918275151" },
  { display: "96287 58287", number: "+919628758287" },
  { display: "80052 92321", number: "+918005292321" },
];

function Contact() {
  return (
    <main className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#D65A31] mb-4">संपर्क करें</h2>
          <div className="w-24 h-1 bg-[#D65A31] mx-auto mb-6"></div>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            हमें आपसे सुनकर खुशी होगी। कृपया नीचे दी गई जानकारी के माध्यम से सीधे हमसे संपर्क करें।
          </p>
        </div>

        {/* Main container for side-by-side layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

          {/* Column 1: Contact Information Card (takes 2/5 of the width on large screens) */}
          <div className="lg:col-span-2 bg-white p-8 rounded-xl shadow-lg border h-full">
            <h3 className="text-2xl font-semibold text-[#D65A31] mb-8">संपर्क जानकारी</h3>
            <div className="space-y-8">

              {/* Address */}
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-[#D65A31] rounded-full flex items-center justify-center flex-shrink-0 text-white text-xl">📍</div>
                <div>
                  <h4 className="font-semibold text-gray-800 text-lg">पता</h4>
                  <p className="text-gray-600">
                    ग्राम व पोस्ट - अतरौरा झाँम, <br />
                    जनपद - बस्ती, उत्तर प्रदेश, भारत<br />
                    पिन कोड - 272127
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-[#D65A31] rounded-full flex items-center justify-center flex-shrink-0 text-white text-xl">📞</div>
                <div>
                  <h4 className="font-semibold text-gray-800 text-lg">फ़ोन</h4>
                  <ul className="space-y-1 mt-1">
                    {phoneNumbers.map((phone, index) => (
                      <li key={index}>
                        <a href={`tel:${phone.number}`} className="text-gray-600 hover:text-[#D65A31] transition-colors">
                          {phone.display}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-[#D65A31] rounded-full flex items-center justify-center flex-shrink-0 text-white text-xl">✉️</div>
                <div>
                  <h4 className="font-semibold text-gray-800 text-lg">ईमेल</h4>
                  <a href="mailto:sevasahasitrust@gmail.com" className="text-gray-600 hover:text-[#D65A31] transition-colors break-all">
                    sevasahasitrust@gmail.com
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Column 2: Google Map (takes 3/5 of the width on large screens) */}
          <div className="lg:col-span-3 min-h-[400px] lg:min-h-full">
            <div className="w-full h-full bg-gray-200 rounded-xl overflow-hidden shadow-lg border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14217.788487311756!2d82.68414864453303!3d26.98394982604084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39912066d791590b%3A0xe52917781b0f5551!2sAtraora%2C%20Uttar%20Pradesh%20272127!5e0!3m2!1sen!2sin!4v1725113459427!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Seva Sahasi Trust Location"
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="bg-[#2B2B2B] text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Column 1: Trust Info and Social Links */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#D65A31] rounded-full flex items-center justify-center">
                <img src={logo} alt="logo" className="rounded-full object-contain" />
              </div>
              <span className="font-bold text-lg">सेवा साहसी ट्रस्ट</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              साहस और करुणा के साथ समुदाय की सेवा के लिए समर्पित।
            </p>
            <div className="mt-6">
              <h4 className="font-semibold mb-4">हमसे जुड़ें</h4>
              <div className="flex gap-4">
                <a href="https://www.youtube.com/@SevaSahasiTrust" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white" title="Youtube">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.78 22 12 22 12s0 3.22-.418 4.814a2.506 2.506 0 0 1-1.768 1.768c-1.594.418-7.814.418-7.814.418s-6.22 0-7.814-.418a2.506 2.506 0 0 1-1.768-1.768C2.002 15.22 2 12 2 12s0-3.22.418-4.814a2.506 2.506 0 0 1 1.768-1.768C5.78 5.002 12 5 12 5s6.22 0 7.814.418ZM9.545 15.568V8.432L15.818 12l-6.273 3.568Z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://www.facebook.com/sevasahasitrust" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white" title="Facebook">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12Z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">क्विक लिंक्स</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-400 hover:text-white">होम</Link>
              <Link to="/about" className="block text-gray-400 hover:text-white">हमारे बारे में</Link>
              <Link to="/membership" className="block text-gray-400 hover:text-white">सदस्यता</Link>
              <Link to="/contact" className="block text-gray-400 hover:text-white">संपर्क</Link>
            </div>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">संपर्क</h4>
            <div className="space-y-2 text-gray-400">
              <p>ग्राम व पोस्ट - अतरौरा झाँम, जनपद - बस्ती</p>
              <p>+91 91188 73100</p>
              <p>sevasahasitrust@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center md:text-left">
          <p className="text-sm text-gray-500 mb-4">
            बही संख्या 4 (विविध लेखपत्र) खण्ड/जिल्द संख्या 50 पृष्ठ संख्या -179 से 210 क्रमांक 47 दिनाँक 18-07-2025 को निबंधित/पंजीकृत किया गया है ।
          </p>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400">© {new Date().getFullYear()} सेवा साहसी ट्रस्ट। सर्वाधिकार सुरक्षित।</p>
            <div className="flex gap-6 justify-center">
              <a href="#" className="text-gray-400 hover:text-white">गोपनीयता नीति</a>
              <a href="#" className="text-gray-400 hover:text-white">सेवा की शर्तें</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Gallery Page Component
function Gallery() {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17];

  return (
    <main className="max-w-8xl mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[#D65A31] mb-4">गैलरी</h2>
        <div className="w-24 h-1 bg-[#D65A31] mx-auto mb-6"></div>
        <p className="text-gray-700 text-lg">हमारी गतिविधियों और कार्यक्रमों की एक झलक</p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((imageSrc, index) => (
          <div key={index} className="overflow-hidden rounded-xl shadow-md">
            <img
              src={imageSrc}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-60 object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </main>
  );
}

// Main App Component
export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white relative">
        <Nav />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <PostHoldersSection /> {/* The new section added here */}
                <Donate />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />

        {/* Floating Social Buttons */}
<div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
          {/* YouTube */}
          <a
            href="https://www.youtube.com/@SevaSahasiTrust"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 text-white p-4 rounded-full shadow-lg hover:bg-red-700 transition"
            title="YouTube"
          >
            <svg
              className="w-12 h-12"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.78 22 12 22 12s0 3.22-.418 4.814a2.506 2.506 0 0 1-1.768 1.768c-1.594.418-7.814.418-7.814.418s-6.22 0-7.814-.418a2.506 2.506 0 0 1-1.768-1.768C2.002 15.22 2 12 2 12s0-3.22.418-4.814a2.506 2.506 0 0 1 1.768-1.768C5.78 5.002 12 5 12 5s6.22 0 7.814.418ZM9.545 15.568V8.432L15.818 12l-6.273 3.568Z"
                clipRule="evenodd"
              />
            </svg>
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/sevasahasitrust"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition"
            title="Facebook"
          >
            <svg
              className="w-12 h-12"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12Z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </BrowserRouter>
  );
}