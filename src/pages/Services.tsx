
import { Link } from 'react-router-dom';
import { ArrowLeft, Check, Star } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "General Dentistry",
      description: "Comprehensive oral health care including cleanings, fillings, and preventive treatments.",
      features: ["Regular Cleanings", "Cavity Fillings", "Oral Exams", "Fluoride Treatments"],
      price: "Starting at $150",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=300&fit=crop"
    },
    {
      title: "Cosmetic Dentistry",
      description: "Enhance your smile with our advanced cosmetic dental procedures.",
      features: ["Teeth Whitening", "Veneers", "Bonding", "Smile Makeovers"],
      price: "Starting at $300",
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=400&h=300&fit=crop"
    },
    {
      title: "Orthodontics",
      description: "Straighten your teeth with traditional braces or modern clear aligners.",
      features: ["Traditional Braces", "Clear Aligners", "Retainers", "Progress Monitoring"],
      price: "Starting at $3,000",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop"
    },
    {
      title: "Oral Surgery",
      description: "Expert surgical procedures performed with precision and care.",
      features: ["Tooth Extractions", "Wisdom Teeth", "Implant Placement", "Bone Grafting"],
      price: "Starting at $500",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop"
    },
    {
      title: "Pediatric Dentistry",
      description: "Specialized dental care designed specifically for children and teens.",
      features: ["Child-Friendly Environment", "Preventive Care", "Sealants", "Education"],
      price: "Starting at $100",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop"
    },
    {
      title: "Emergency Care",
      description: "24/7 emergency dental services for urgent oral health issues.",
      features: ["Pain Relief", "Urgent Repairs", "24/7 Availability", "Same-Day Treatment"],
      price: "Call for pricing",
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=400&h=300&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-blue-600">SmileCare Dental</h1>
            </div>
            <div className="flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Home</Link>
              <Link to="/services" className="text-blue-600 hover:text-blue-800 font-medium">Services</Link>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center text-blue-200 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="mr-2" size={20} />
            Back to Home
          </Link>
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive dental care tailored to meet all your oral health needs. 
              From routine cleanings to advanced procedures, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {service.price}
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className="w-full bg-blue-600 text-white py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose SmileCare?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're committed to providing exceptional dental care that exceeds your expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Team</h3>
              <p className="text-gray-600">Highly trained professionals with years of experience</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Latest Technology</h3>
              <p className="text-gray-600">State-of-the-art equipment for precise treatments</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Comfortable Care</h3>
              <p className="text-gray-600">Gentle procedures in a relaxing environment</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Flexible Payment</h3>
              <p className="text-gray-600">Insurance accepted and payment plans available</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Smile?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Schedule your consultation today and take the first step towards optimal oral health.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-colors">
              Book Appointment
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Call (555) 123-4567
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-blue-400 mb-4">SmileCare Dental</h3>
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
            <p>&copy; 2024 SmileCare Dental. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Services;
