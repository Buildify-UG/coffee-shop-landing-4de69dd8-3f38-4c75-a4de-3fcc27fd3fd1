import { Coffee, Clock, MapPin, Phone, Mail, Heart } from 'lucide-react';

export default function CoffeeShop() {
  const menuItems = [
    { name: 'Espresso', price: '$3.50', description: 'Rich, bold single shot' },
    { name: 'Cappuccino', price: '$5.00', description: 'Espresso with steamed milk & foam' },
    { name: 'Latte', price: '$5.50', description: 'Smooth espresso & velvety milk' },
    { name: 'Americano', price: '$4.00', description: 'Espresso diluted with hot water' },
    { name: 'Macchiato', price: '$4.50', description: 'Espresso marked with milk foam' },
    { name: 'Mocha', price: '$5.75', description: 'Espresso, steamed milk & chocolate' },
  ];

  const hours = [
    { day: 'Monday - Friday', time: '6:00 AM - 8:00 PM' },
    { day: 'Saturday', time: '7:00 AM - 9:00 PM' },
    { day: 'Sunday', time: '8:00 AM - 7:00 PM' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Header */}
      <header className="border-b border-amber-200 sticky top-0 bg-white/95 backdrop-blur-sm z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Coffee className="w-8 h-8 text-amber-700" />
            <h1 className="text-2xl font-bold text-amber-900">Brew Haven</h1>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#menu" className="text-foreground hover:text-amber-700 transition">Menu</a>
            <a href="#hours" className="text-foreground hover:text-amber-700 transition">Hours</a>
            <a href="#contact" className="text-foreground hover:text-amber-700 transition">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1495474472645-4c71bcdd2014?w=1920&h=800&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative h-full flex items-center justify-center text-center text-white">
          <div>
            <h2 className="text-5xl font-bold mb-4">Welcome to Brew Haven</h2>
            <p className="text-xl text-amber-100">Crafted coffee, warm atmosphere, perfect moments</p>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-amber-900">Our Menu</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-amber-200 rounded-lg p-6 hover:shadow-lg hover:border-amber-400 transition-all"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-amber-900">{item.name}</h3>
                  <span className="text-amber-700 font-semibold">{item.price}</span>
                </div>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hours Section */}
      <section id="hours" className="py-16 px-4 bg-amber-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-amber-900">Hours of Operation</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {hours.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg p-8 text-center border border-amber-200"
              >
                <Clock className="w-8 h-8 text-amber-700 mx-auto mb-4" />
                <p className="font-semibold text-amber-900 mb-2">{item.day}</p>
                <p className="text-foreground">{item.time}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-amber-900">Get In Touch</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-amber-200 rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <MapPin className="w-8 h-8 text-amber-700 mx-auto mb-4" />
              <h3 className="font-semibold text-amber-900 mb-2">Location</h3>
              <p className="text-foreground">123 Coffee Lane<br />Brew City, BC 12345</p>
            </div>
            <div className="bg-white border border-amber-200 rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <Phone className="w-8 h-8 text-amber-700 mx-auto mb-4" />
              <h3 className="font-semibold text-amber-900 mb-2">Phone</h3>
              <p className="text-foreground">(555) 123-4567</p>
            </div>
            <div className="bg-white border border-amber-200 rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <Mail className="w-8 h-8 text-amber-700 mx-auto mb-4" />
              <h3 className="font-semibold text-amber-900 mb-2">Email</h3>
              <p className="text-foreground">hello@brewhaven.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-amber-50 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center flex items-center justify-center gap-2">
          <p>Made with</p>
          <Heart className="w-4 h-4 fill-current" />
          <p>at Brew Haven © 2024</p>
        </div>
      </footer>
    </div>
  );
}
