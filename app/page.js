import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-white">
      {/* Header */}
      <div className="w-full h-16 bg-[#74A744]">
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-28 h-12 bg-[#E4EDCB] rounded-lg overflow-hidden shadow-md">
              <Image 
                src="/headlogo.png" 
                alt="YYC Landscape Craftsmen"
                width={144}
                height={69}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex space-x-0">
            <Link href="/" className="px-6 py-4 text-sm text-black bg-white/10 border-b-2 border-black">
              Home
            </Link>
            <Link href="/services" className="px-6 py-4 text-sm text-white hover:bg-white/10">
              Services
            </Link>
            <Link href="/gallery" className="px-6 py-4 text-sm text-white hover:bg-white/10">
              Gallery
            </Link>
            <Link href="/quote" className="px-6 py-4 text-sm text-white hover:bg-white/10">
              Quote
            </Link>
            <Link href="/contact" className="px-6 py-4 text-sm text-white hover:bg-white/10">
              Contact
            </Link>
            <Link href="/admin/login" className="px-6 py-4 text-sm text-white hover:bg-white/10">
              Admin
            </Link>
          </nav>
        </div>
      </div>

      <div className="w-full h-[600px] relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1611072337226-1140ab367200?q=80&w=1088&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
            filter: 'brightness(1.1) contrast(0.95)'
          }}
        >

          <div className="absolute inset-0 bg-black/10"></div>
        </div>
        
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="flex items-center justify-center w-full h-full" style={{ marginTop: '-40px' }}>
            <Image 
              src="/landscape-craftsmen-logo.png"
              alt="Landscape Craftsmen Logo"
              width={6200}
              height={6200}
              className="drop-shadow-xl"
              style={{
                mixBlendMode: 'multiply',
                filter: 'contrast(1.1) brightness(0.95)',
                width: '650px',
                height: '650px',
                objectFit: 'contain'
              }}
              priority
              unoptimized
            />
          </div>
        </div>
      </div>

      <div className="w-full h-[600px] bg-[#F1F4E8] relative overflow-hidden">
        <div className="absolute inset-0 bg-[rgba(238,245,212,0.2)]"></div>
        
        <div className="max-w-7xl mx-auto px-20 h-full flex items-center">
          <div className="flex-1 max-w-2xl">
            <h1 className="text-5xl font-normal text-[#171717] leading-tight mb-6">
              Transform Your Outdoor Space
            </h1>
            <p className="text-xl text-[#525252] leading-relaxed mb-8">
              Professional deck, pergola, and fence installation services. Creating beautiful outdoor living spaces for over 15 years.
            </p>
            <div className="flex space-x-4">
              <Link 
                href="/quote" 
                className="px-8 py-3 bg-[#74A744] text-white font-semibold rounded-md hover:bg-[#5F9136] transition duration-300"
              >
                Get Free Quote
              </Link>
              <Link 
                href="/gallery" 
                className="px-8 py-3 border border-[#74A744] text-[#74A744] font-semibold rounded-md hover:bg-[#74A744] hover:text-white transition duration-300"
              >
                View Projects
              </Link>
            </div>
          </div>
          
          <div className="flex-1">
            <Image 
              src="/Maindeck.jpg" 
              alt="Outdoor deck"
              width={584}
              height={400}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="w-full bg-white py-20">
        <div className="max-w-7xl mx-auto px-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-normal text-[#171717] mb-4">Our Services</h2>
            <p className="text-xl text-[#525252]">Specializing in premium outdoor construction</p>
          </div>

          <div className="grid grid-cols-3 gap-8">
            {/* Decks */}
            <div className="bg-[#EAF3E0] rounded-lg p-8">
              <Image 
                src="/deck1.jpg" 
                alt="Custom deck"
                width={320}
                height={192}
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="text-xl text-[#171717] text-center mb-4">Decks</h3>
              <p className="text-[#525252] text-center mb-6">
                Custom deck design and installation using premium materials.
              </p>
              <div className="text-center">
                <Link href="/services/decks" className="text-[#171717] font-medium hover:underline">
                  Learn More →
                </Link>
              </div>
            </div>

            {/* Pergolas */}
            <div className="bg-[#EAF3E0] rounded-lg p-8">
              <Image 
                src="/perg2.jpg" 
                alt="Elegant pergola"
                width={320}
                height={192}
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="text-xl text-[#171717] text-center mb-4">Pergolas</h3>
              <p className="text-[#525252] text-center mb-6">
                Elegant pergola structures that provide shade and enhance your outdoor living.
              </p>
              <div className="text-center">
                <Link href="/services/pergolas" className="text-[#171717] font-medium hover:underline">
                  Learn More →
                </Link>
              </div>
            </div>

            {/* Fences */}
            <div className="bg-[#EAF3E0] rounded-lg p-8">
              <Image 
                src="/fence1.jpg" 
                alt="Quality fence"
                width={320}
                height={192}
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="text-xl text-[#171717] text-center mb-4">Fences</h3>
              <p className="text-[#525252] text-center mb-6">
                Quality fencing solutions for privacy, security, and aesthetic appeal.
              </p>
              <div className="text-center">
                <Link href="/services/fences" className="text-[#171717] font-medium hover:underline">
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Projects Section */}
      <div className="w-full bg-[#F1F4E8] py-20">
        <div className="max-w-7xl mx-auto px-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-normal text-[#171717] mb-4">Recent Projects</h2>
            <p className="text-xl text-[#525252]">See our latest work and craftsmanship</p>
          </div>

          <div className="grid grid-cols-3 gap-8 mb-12">
            <div className="h-80 rounded-lg overflow-hidden">
              <Image 
                src="/deck4.jpg" 
                alt="Recent project 1"
                width={384}
                height={360}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-80 rounded-lg overflow-hidden shadow-md">
              <Image 
                src="/fence5.jpeg" 
                alt="Recent project 2"
                width={384}
                height={360}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-80 rounded-lg overflow-hidden">
              <Image 
                src="/perg3.jpg" 
                alt="Recent project 3"
                width={384}
                height={360}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="text-center">
            <Link 
              href="/gallery" 
              className="px-8 py-3 bg-[#74A744] text-white font-semibold rounded-md hover:bg-[#5F9136] transition duration-300"
            >
              View Project Gallery
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full bg-white py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-normal text-[#171717] mb-4">
            Ready to Transform Your Outdoor Space?
          </h2>
          <p className="text-xl text-[#525252] mb-8">
            Get a free consultation and quote for your project
          </p>
          <Link 
            href="/appointment" 
            className="px-8 py-3 bg-[#74A744] text-white font-semibold rounded-md hover:bg-[#5F9136] transition duration-300"
          >
            Book Appointment
          </Link>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full bg-[#74A744] py-16">
        <div className="max-w-7xl mx-auto px-20">
          <div className="grid grid-cols-4 gap-12 mb-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-28 h-12 bg-[#E4EDCB] rounded-lg overflow-hidden shadow-md mb-4">
                <Image 
                  src="/headlogo.png" 
                  alt="YYC Landscape Craftsmen"
                  width={144}
                  height={69}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-white text-lg font-semibold mb-2">YYC Landscape</h3>
              <p className="text-white/90 text-sm leading-relaxed">
                Professional outdoor construction services for your home and business.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <h3 className="text-white text-lg font-semibold mb-4">Our Services</h3>
              <ul className="space-y-3">
                <li><span className="text-white/90 text-sm hover:text-white transition-colors cursor-pointer">Deck Construction</span></li>
                <li><span className="text-white/90 text-sm hover:text-white transition-colors cursor-pointer">Pergola Installation</span></li>
                <li><span className="text-white/90 text-sm hover:text-white transition-colors cursor-pointer">Fence Installation</span></li>
                <li><span className="text-white/90 text-sm hover:text-white transition-colors cursor-pointer">Custom Designs</span></li>
              </ul>
            </div>

            <div className="flex flex-col items-center text-center">
              <h3 className="text-white text-lg font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-3">
                <li className="flex flex-col items-center">
                  <span className="text-white/70 text-xs uppercase tracking-wide mb-1">Phone</span>
                  <span className="text-white/90 text-sm">(587) 438-6672</span>
                </li>
                <li className="flex flex-col items-center">
                  <span className="text-white/70 text-xs uppercase tracking-wide mb-1">Email</span>
                  <span className="text-white/90 text-sm">info@yyclandscape.com</span>
                </li>
                <li className="flex flex-col items-center">
                  <span className="text-white/70 text-xs uppercase tracking-wide mb-1">Location</span>
                  <span className="text-white/90 text-sm">Calgary, Alberta</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col items-center text-center">
              <h3 className="text-white text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4 mb-4">
                <div className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center cursor-pointer transition-colors">
                  <span className="text-white text-sm">f</span>
                </div>
                <div className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center cursor-pointer transition-colors">
                  <span className="text-white text-sm">ig</span>
                </div>
                <div className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center cursor-pointer transition-colors">
                  <span className="text-white text-sm">li</span>
                </div>
              </div>
              <p className="text-white/90 text-sm">
                Stay updated with our latest projects
              </p>
            </div>
          </div>

          <div className="border-t border-white/30 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-white/90 text-sm">
                © 2025 YYC Landscape Craftsmen. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <span className="text-white/70 text-sm hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
                <span className="text-white/70 text-sm hover:text-white cursor-pointer transition-colors">Terms of Service</span>
                <span className="text-white/70 text-sm hover:text-white cursor-pointer transition-colors">Site Map</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
}