import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import membershipPDF from "./assets/membership.pdf"; // Make sure this path is correct
import logo from "./assets/logo.jpeg"; // Make sure this path is correct

// Navigation Component
function Nav() {
  return (
    <nav className="w-full bg-white shadow-sm border-b">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-24 bg-[#D65A31] rounded-full flex items-center justify-center">
              <img src={logo} alt="logo" className="rounded-full object-contain" />
            </div>
            <div>
              <div className="font-bold text-xl text-[#D65A31]">सेवा साहसी ट्रस्ट</div>
              <div className="text-sm text-gray-600">Seva Sahasi Trust</div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-gray-700 hover:text-[#D65A31] font-medium">होम</Link>
            <Link to="/about" className="text-gray-700 hover:text-[#D65A31] font-medium">हमारे बारे में</Link>
            <Link to="/membership" className="text-gray-700 hover:text-[#D65A31] font-medium">सदस्यता</Link>
            <Link to="/gallery" className="text-gray-700 hover:text-[#D65A31] font-medium">गैलरी</Link>
            <Link to="/contact" className="text-gray-700 hover:text-[#D65A31] font-medium">संपर्क</Link>
            <Link to="/membership" className="bg-[#D65A31] text-white px-4 py-2 rounded-lg hover:bg-[#B54A26]">हमसे जुड़ें</Link>
          </div>
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
          <h1 className="text-5xl font-bold text-[#D65A31] mb-6">
            जहाँ ज़रूरत वहाँ सेवा, जहाँ भय वहाँ साहस
          </h1>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            साहस और करुणा के साथ समुदाय की सेवा के लिए समर्पित। लोगों के जीवन में एक सार्थक बदलाव लाने में हमारा साथ दें।
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/membership" 
              className="bg-[#D65A31] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#B54A26] transition-colors"
            >
              सदस्य बनें
            </Link>
            <a 
              href="#donate" 
              className="border-2 border-[#D65A31] text-[#D65A31] px-8 py-3 rounded-lg font-semibold hover:bg-[#D65A31] hover:text-white transition-colors"
            >
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
    icon: "📚",
    title: "शिक्षा एवं कौशल विकास",
    description: "विद्यालयों से लेकर विश्वविद्यालयों तक की स्थापना, तकनीकी प्रशिक्षण प्रदान करना, और युवाओं को आत्मनिर्भर बनाने हेतु ज्ञान का प्रसार करना।"
  },
  {
    icon: "🤝",
    title: "सामाजिक समरसता",
    description: "जाति-पाति, लिंग-भेद, और छुआ-छूत जैसी सामाजिक बुराइयों को समाप्त करना तथा आपसी भाईचारा, राष्ट्रीय एकता, और सद्भाव को बढ़ावा देना।"
  },
  {
    icon: "🌱",
    title: "आजीविका और सशक्तिकरण",
    description: "स्वरोजगार योजनाओं, व्यावसायिक प्रशिक्षण (सिलाई, कंप्यूटर आदि), और महिला सशक्तिकरण के माध्यम से आर्थिक आत्मनिर्भरता को प्रोत्साहित करना।"
  },
  {
    icon: "🏘️",
    title: "सामुदायिक कल्याण",
    description: "गरीब, अनाथ, दिव्यांग, एवं वृद्धों हेतु आवास, भोजन, वृद्धाश्रम, और पुनर्वास केंद्रों की स्थापना कर चौतरफा सहायता प्रदान करना।"
  },
  {
    icon: "⚕️",
    title: "स्वास्थ्य एवं आरोग्य",
    description: "नशा-मुक्ति, परिवार कल्याण, टीकाकरण, और गंभीर बीमारियों (एड्स, कैंसर) के प्रति जागरूकता फैलाना तथा चिकित्सा सुविधाओं की स्थापना करना।"
  },
  {
    icon: "🌳",
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
              <div className="w-20 h-20 bg-[#D65A31] rounded-full flex items-center justify-center mx-auto mb-5 shadow-lg">
                <span className="text-4xl">{objective.icon}</span>
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

// Membership Page Component
function Membership() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[#D65A31] mb-4">सदस्य बनें</h2>
        <div className="w-24 h-1 bg-[#D65A31] mx-auto mb-6"></div>
        <p className="text-gray-700 text-lg">सेवा के लिए प्रतिबद्ध समर्पित व्यक्तियों के हमारे समुदाय में शामिल हों।</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-8 rounded-xl shadow-sm border">
          <h3 className="text-xl font-semibold text-[#D65A31] mb-4">सदस्यता प्रपत्र</h3>
          <p className="text-gray-700 mb-6">
            शुरू करने के लिए हमारा ऑनलाइन सदस्यता फ़ॉर्म भरें। यह प्रक्रिया सरल है और इसमें बस कुछ ही मिनट लगते हैं।
          </p>
          <a 
            href="https://forms.gle/PLACEHOLDER" // Replace with your Google Form link
            target="_blank" 
            rel="noreferrer"
            className="inline-block bg-[#D65A31] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#B54A26] transition-colors"
          >
            आवेदन पत्र खोलें
          </a>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-sm border">
          <h3 className="text-xl font-semibold text-[#D65A31] mb-4">सदस्यता गाइड</h3>
          <p className="text-gray-700 mb-6">
            लाभों और जिम्मेदारियों के बारे में सभी विवरणों के साथ हमारी व्यापक सदस्यता गाइड डाउनलोड करें।
          </p>
          <a 
            href={membershipPDF} 
            target="_blank" 
            rel="noreferrer"
            className="inline-block border-2 border-[#D65A31] text-[#D65A31] px-6 py-3 rounded-lg font-semibold hover:bg-[#D65A31] hover:text-white transition-colors"
          >
            पीडीएफ गाइड डाउनलोड करें
          </a>
        </div>
      </div>

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
          <h2 className="text-3xl font-bold text-[#D65A31] mb-4">हमारे मिशन का समर्थन करें</h2>
          <div className="w-24 h-1 bg-[#D65A31] mx-auto mb-6"></div>
          <p className="text-gray-700 text-lg">आपका योगदान हमें अपनी सामुदायिक सेवा पहल जारी रखने में मदद करता है।</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm border text-center">
            {/* Replace with your actual QR code image */}
            <div className="w-48 h-48 bg-gray-100 rounded-lg mx-auto mb-6 flex items-center justify-center">
               <span className="text-gray-400 font-semibold">क्यूआर कोड यहाँ</span>
            </div>
            <p className="text-gray-600">त्वरित डिजिटल भुगतान के लिए ऊपर दिए गए क्यूआर कोड को स्कैन करें।</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border">
            <h3 className="text-xl font-semibold text-[#D65A31] mb-6">बैंक विवरण</h3>
            <div className="space-y-4">
              <div>
                <span className="font-semibold text-gray-700">खाता नाम:</span>
                <p className="text-gray-600">Seva Sahasi Trust</p>
              </div>
              <div>
                <span className="font-semibold text-gray-700">खाता संख्या:</span>
                <p className="text-gray-600">0000000000</p>
              </div>
              <div>
                <span className="font-semibold text-gray-700">IFSC कोड:</span>
                <p className="text-gray-600">PLACEHOLDER</p>
              </div>
              <div>
                <span className="font-semibold text-gray-700">UPI आईडी:</span>
                <p className="text-gray-600">your-upi-id@bank</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Contact Page Component
function Contact() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[#D65A31] mb-4">संपर्क करें</h2>
        <div className="w-24 h-1 bg-[#D65A31] mx-auto mb-6"></div>
        <p className="text-gray-700 text-lg">हमें आपसे सुनकर खुशी होगी। हमें एक संदेश भेजें या हमसे मिलें।</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-xl shadow-sm border">
          <h3 className="text-xl font-semibold text-[#D65A31] mb-6">संदेश भेजें</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">पूरा नाम</label>
              <input className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D65A31]" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">ईमेल पता</label>
              <input className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D65A31]" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">संदेश</label>
              <textarea className="w-full p-3 border border-gray-300 rounded-lg h-32 focus:outline-none focus:border-[#D65A31]"></textarea>
            </div>
            <button className="w-full bg-[#D65A31] text-white py-3 rounded-lg font-semibold hover:bg-[#B54A26] transition-colors">
              संदेश भेजें
            </button>
          </form>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-sm border">
          <h3 className="text-xl font-semibold text-[#D65A31] mb-6">संपर्क जानकारी</h3>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#D65A31] rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-xl">📍</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">पता</h4>
                <p className="text-gray-600">123 Example Road, City<br />State, PIN Code</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#D65A31] rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-xl">📞</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">फ़ोन</h4>
                <p className="text-gray-600">+91 00000 00000</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#D65A31] rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-xl">✉️</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">ईमेल</h4>
                <p className="text-gray-600">info@sevasahasi.org</p>
              </div>
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
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">क्विक लिंक्स</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-400 hover:text-white">होम</Link>
              <Link to="/about" className="block text-gray-400 hover:text-white">हमारे बारे में</Link>
              <Link to="/membership" className="block text-gray-400 hover:text-white">सदस्यता</Link>
              <Link to="/contact" className="block text-gray-400 hover:text-white">संपर्क</Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">संपर्क</h4>
            <div className="space-y-2 text-gray-400">
              <p>123 Example Road, City</p>
              <p>+91 00000 00000</p>
              <p>info@sevasahasi.org</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400">© {new Date().getFullYear()} सेवा साहसी ट्रस्ट। सर्वाधिकार सुरक्षित।</p>
            <div className="flex gap-6">
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
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[#D65A31] mb-4">गैलरी</h2>
        <div className="w-24 h-1 bg-[#D65A31] mx-auto mb-6"></div>
        <p className="text-gray-700 text-lg">हमारी गतिविधियों और कार्यक्रमों की एक झलक (अभी के लिए प्लेसहोल्डर)</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="bg-gray-200 h-48 rounded-xl flex items-center justify-center text-gray-500">
            छवि {i}
          </div>
        ))}
      </div>
    </main>
  );
}

// Main App Component
export default function App() {
  return (
      // Wrap your app with BrowserRouter to enable routing
      <BrowserRouter>
        <div className="min-h-screen bg-white">
          <Nav />
          
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                {/* The About component here is just a section on the homepage */}
                {/* A more detailed version is on the /about page */}
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
      </BrowserRouter>
  );
}