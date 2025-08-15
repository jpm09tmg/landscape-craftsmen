import Link from 'next/link'
import Image from 'next/image'
import { Check } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function ServicesPage() {
  return (
    <div className="w-full min-h-screen bg-white">
      <Header currentPage="services" />
      
      {/* Hero Section */}
      <div className="bg-[#F1F4E8] py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Transform your outdoor space with our premium landscaping services. From custom decks to elegant pergolas and durable fencing solutions.
          </p>
        </div>
      </div>

      {/* Custom Deck Construction Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Custom Deck Construction</h2>
              <p className="text-lg text-gray-700">
                Create the perfect outdoor entertainment space with our custom deck solutions. We specialize in building durable, beautiful decks that enhance your home's value and your outdoor living experience.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-[#5F9136] flex-shrink-0" />
                  <span className="text-gray-700">Premium materials including cedar, composite, and pressure-treated lumber</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-[#5F9136] flex-shrink-0" />
                  <span className="text-gray-700">Custom designs tailored to your space and lifestyle</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-[#5F9136] flex-shrink-0" />
                  <span className="text-gray-700">Professional installation with 5-year warranty</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-[#5F9136] flex-shrink-0" />
                  <span className="text-gray-700">Built-in seating, planters, and lighting options</span>
                </li>
              </ul>
              <Link href="/quote" className="inline-block bg-[#5F9136] text-white px-8 py-3 rounded-lg hover:bg-[#3F652B] transition-colors font-medium">
                Get Deck Quote
              </Link>
            </div>

                         {/* Image Grid */}
             <div className="grid grid-cols-2 gap-4">
               <div className="space-y-4">
                 <div className="h-64 bg-gray-200 rounded-lg overflow-hidden shadow-md">
                   <Image 
                     src="/deck1.jpg" 
                     alt="Wooden deck in forest setting"
                     width={300}
                     height={300}
                     className="w-full h-full object-cover"
                   />
                 </div>
                 <div className="h-64 bg-gray-200 rounded-lg overflow-hidden shadow-md">
                   <Image 
                     src="/deck2.jpg" 
                     alt="Modern outdoor patio with decking"
                     width={300}
                     height={300}
                     className="w-full h-full object-cover"
                   />
                 </div>
               </div>
               <div className="space-y-4">
                 <div className="h-64 bg-gray-200 rounded-lg overflow-hidden shadow-md">
                   <Image 
                     src="/deck3.jpg" 
                     alt="Covered patio with comfortable seating"
                     width={300}
                     height={300}
                     className="w-full h-full object-cover"
                   />
                 </div>
                 <div className="h-64 bg-gray-200 rounded-lg overflow-hidden shadow-md">
                   <Image 
                     src="/deck4.jpg" 
                     alt="Multi-level wooden deck with various seating areas"
                     width={300}
                     height={300}
                     className="w-full h-full object-cover"
                   />
                 </div>
               </div>
             </div>
          </div>
        </div>
      </div>

      {/* Elegant Pergola Structures Section */}
      <div className="py-16 bg-[#F1F4E8]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-64 bg-gray-200 rounded-lg overflow-hidden shadow-md">
                  <Image 
                    src="/perg1.jpg" 
                    alt="Modern dark grey metal pergola covering patio"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-64 bg-gray-200 rounded-lg overflow-hidden shadow-md">
                  <Image 
                    src="/perg2.jpg" 
                    alt="Rustic wooden pergola with white drapes and string lights"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="h-64 bg-gray-200 rounded-lg overflow-hidden shadow-md">
                  <Image 
                    src="/perg3.jpg" 
                    alt="Light-colored wooden pergola over deck"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-64 bg-gray-200 rounded-lg overflow-hidden shadow-md">
                  <Image 
                    src="/perg4.jpg" 
                    alt="Large wooden pergola with built-in grill and fire pit"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Elegant Pergola Structures</h2>
              <p className="text-lg text-gray-700">
                Add sophistication and charm to your outdoor space with our custom pergola designs. Perfect for creating intimate dining areas, garden focal points, or extending your living space outdoors.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-[#5F9136] flex-shrink-0" />
                  <span className="text-gray-700">Traditional and contemporary design options</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-[#5F9136] flex-shrink-0" />
                  <span className="text-gray-700">Weather-resistant materials and finishes</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-[#5F9136] flex-shrink-0" />
                  <span className="text-gray-700">Optional retractable canopy systems</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-[#5F9136] flex-shrink-0" />
                  <span className="text-gray-700">Integrated lighting and climbing plant support</span>
                </li>
              </ul>
              <Link href="/quote" className="inline-block bg-[#5F9136] text-white px-8 py-3 rounded-lg hover:bg-[#3F652B] transition-colors font-medium">
                Get Pergola Quote
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Professional Fencing Solutions Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Professional Fencing Solutions</h2>
              <p className="text-lg text-gray-700">
                Secure your property and enhance its appearance with our comprehensive fencing services. From classic wood to modern composite and metal options, we provide solutions for every need and style preference.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-[#5F9136] flex-shrink-0" />
                  <span className="text-gray-700">Wood, vinyl, composite, and metal fencing options</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-[#5F9136] flex-shrink-0" />
                  <span className="text-gray-700">Privacy, decorative, and security fence styles</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-[#5F9136] flex-shrink-0" />
                  <span className="text-gray-700">Custom gates and hardware installation</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-[#5F9136] flex-shrink-0" />
                  <span className="text-gray-700">Property line consultation and permits handled</span>
                </li>
              </ul>
              <Link href="/quote" className="inline-block bg-[#5F9136] text-white px-8 py-3 rounded-lg hover:bg-[#3F652B] transition-colors font-medium">
                Get Fence Quote
              </Link>
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-64 bg-gray-200 rounded-lg overflow-hidden shadow-md">
                  <Image 
                    src="/fence1.jpg" 
                    alt="Reddish-brown wooden picket fence in snowy landscape"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-64 bg-gray-200 rounded-lg overflow-hidden shadow-md">
                  <Image 
                    src="/fence2.jpg" 
                    alt="Weathered dark brown wooden privacy fence"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="h-64 bg-gray-200 rounded-lg overflow-hidden shadow-md">
                  <Image 
                    src="/fence3.jpg" 
                    alt="Light natural wood privacy fence with uniform vertical planks"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-64 bg-gray-200 rounded-lg overflow-hidden shadow-md">
                  <Image 
                    src="/fence4.jpg" 
                    alt="Light-colored wooden privacy fence extending towards structure"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Consultation Section */}
      <div className="py-16 bg-[#F1F4E8]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-64 bg-gray-200 rounded-lg overflow-hidden shadow-md">
                  <Image 
                    src="/fence5.jpeg" 
                    alt="Fences"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-64 bg-gray-200 rounded-lg overflow-hidden shadow-md">
                  <Image 
                    src="/deck2.jpg" 
                    alt="Wooden deck"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="h-64 bg-gray-200 rounded-lg overflow-hidden shadow-md">
                  <Image 
                    src="/perg3.jpg" 
                    alt="Light-colored wooden pergola over deck"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-64 bg-gray-200 rounded-lg overflow-hidden shadow-md">
                  <Image 
                    src="/deck3.jpg" 
                    alt="Light natural wood privacy fence with uniform vertical planks"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Need Help Deciding? Let's Plan Together</h2>
              <p className="text-lg text-gray-700">
                Not sure where to start? Our team offers personalized consultations to help you plan the perfect outdoor project. Whether you're considering a deck, pergola, or fencing, we'll provide expert recommendations and guidance.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-[#5F9136] flex-shrink-0" />
                  <span className="text-gray-700">On-site visit to assess your outdoor space</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-[#5F9136] flex-shrink-0" />
                  <span className="text-gray-700">Budget-friendly planning and guidance</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-[#5F9136] flex-shrink-0" />
                  <span className="text-gray-700">One-on-one discussion of your goals and vision</span>
                </li>
              </ul>
              <Link href="/appointment" className="inline-block bg-[#5F9136] text-white px-8 py-3 rounded-lg hover:bg-[#3F652B] transition-colors font-medium">
                Book A Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
