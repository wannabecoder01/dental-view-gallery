
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Phone, Mail, MapPin, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const clinicImages = [
    "https://lh3.googleusercontent.com/p/AF1QipOyZjKNShv_ui6-c1WL85k5AHNJs5Qm7hHnH3un=s1360-w1360-h1020-rw",
    "https://lh3.googleusercontent.com/gps-cs-s/AC9h4npqY-9UgswvzPde-KwosHF6F50a6fPX7zFudilVEw4Ns8caY2mp483-5miLWeWhz9kHbRMsfrLgFyHppgnek6eu1CP7hfKCONq0dmb3Mo4uS9k6OCrN10LacgcbHARjOVXwaB4P=s1360-w1360-h1020-rw",
    "https://lh3.googleusercontent.com/p/AF1QipM-2kGcwqovqe3719A1AhA4Lz3dnJeR5Y1ZG-Lt=s1360-w1360-h1020-rw",
    "https://lh3.googleusercontent.com/p/AF1QipOCpiefEyXspX8zw-0kMWoO4fpYO2oL6IHJlzSg=s1360-w1360-h1020-rw",
    "https://lh3.googleusercontent.com/p/AF1QipMt13NSZA_r4H8g6cLUmBN-VwLTGIDB0VSnsf_v=s1360-w1360-h1020-rw"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % clinicImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [clinicImages.length]);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % clinicImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + clinicImages.length) % clinicImages.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <img src="/logo2.png" alt="Rai Dental Clinic Logo" className="h-12 w-auto mr-2" />
              <h1 className="text-2xl font-bold text-blue-600 flex items-center">Rai Dental clinic <span className="ml-2 text-base font-normal text-gray-500">Since 1933</span></h1>
            </div>
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-blue-600 hover:text-blue-800 font-medium">Home</Link>
              <Link to="/services" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Services</Link>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
                Book Appointment
              </button>
            </div>
            {/* Hamburger Icon */}
            <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <Menu size={28} />
            </button>
          </div>
          {/* Mobile Nav */}
          {mobileMenuOpen && (
            <div className="md:hidden flex flex-col items-start space-y-4 mt-2 bg-white shadow rounded-lg p-4">
              <Link to="/" className="text-blue-600 hover:text-blue-800 font-medium w-full" onClick={() => setMobileMenuOpen(false)}>Home</Link>
              <Link to="/services" className="text-gray-700 hover:text-blue-600 font-medium w-full" onClick={() => setMobileMenuOpen(false)}>Services</Link>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors w-full" onClick={() => setMobileMenuOpen(false)}>
                Book Appointment
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section with Rotating Gallery */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl font-bold leading-tight">
                Your Perfect Smile Starts Here
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                Experience exceptional dental care in our state-of-the-art facility. 
                We're committed to providing gentle, comprehensive treatment for the whole family.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
                  Schedule Consultation
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  Learn More
                </button>
              </div>
            </div>

            {/* Rotating Gallery */}
            <div className="relative">
              <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl">
                {clinicImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                      index === currentImage ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Clinic view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
                
                {/* Gallery Controls */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
                >
                  <ChevronRight size={24} />
                </button>

                {/* Gallery Indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {clinicImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImage(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentImage ? 'bg-white' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Rai Dental clinic </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              For over 92 years, we've been dedicated to providing exceptional dental care 
              in a comfortable, modern environment.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                <div className="w-10 h-10 bg-blue-600 rounded-full"></div>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Expert Care</h3>
              <p className="text-gray-600 leading-relaxed">
                Our experienced team of dental professionals uses the latest techniques 
                and technology to ensure the best possible outcomes for every patient.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                <div className="w-10 h-10 bg-blue-600 rounded-full"></div>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Modern Facility</h3>
              <p className="text-gray-600 leading-relaxed">
                Our state-of-the-art clinic features the most advanced dental equipment 
                and technology, ensuring comfortable and efficient treatments.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                <div className="w-10 h-10 bg-blue-600 rounded-full"></div>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Patient First</h3>
              <p className="text-gray-600 leading-relaxed">
                We prioritize your comfort and satisfaction, taking the time to understand 
                your needs and explain every step of your treatment plan.
              </p>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-20 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-12 text-white">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">92+</div>
                <div className="text-blue-100">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">5000+</div>
                <div className="text-blue-100">Happy Patients</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">98%</div>
                <div className="text-blue-100">Satisfaction Rate</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-blue-100">Emergency Care</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600">
              Ready to start your journey to a healthier smile? Contact us today!
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <Phone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600 mb-4">Speak with our friendly staff</p>
              <p className="text-blue-600 font-semibold"> 074836 09476</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <Mail className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600 mb-4">Send us your questions</p>
              <p className="text-blue-600 font-semibold">raidentalclinic@gmail.com</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-600 mb-4">Come see our modern facility</p>
              <p className="text-blue-600 font-semibold"> Ground flr, Nalapad Apsara Chambers, KSR Road, opp. Poonja arcade, Hampankatta,<br /> Mangaluru, Karnataka 575001</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-blue-400 mb-4">Rai Dental clinic </h3>
              <p className="text-gray-300 leading-relaxed">
                Your trusted partner for comprehensive dental care and a lifetime of healthy smiles.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <Link to="/" className="block text-gray-300 hover:text-blue-400 transition-colors">Home</Link>
                <Link to="/services" className="block text-gray-300 hover:text-blue-400 transition-colors">Services</Link>
                <a href="#" className="block text-gray-300 hover:text-blue-400 transition-colors">About</a>
                <a href="#" className="block text-gray-300 hover:text-blue-400 transition-colors">Contact</a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Office Hours</h4>
              <div className="space-y-2 text-gray-300">
                <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                <p>Saturday: 9:00 AM - 3:00 PM</p>
                <p>Sunday: Closed</p>
                <p className="text-blue-400 font-semibold mt-4">Emergency: 24/7</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Rai Dental clinic. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
