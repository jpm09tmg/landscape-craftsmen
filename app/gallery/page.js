'use client'

import { useState } from 'react'
import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      category: 'pergolas',
      image: '/perg1.jpg',
      alt: 'Rustic outdoor patio with brick flooring and wooden pergola structure'
    },
    {
      id: 2,
      category: 'decks',
      image: '/deck2.jpg',
      alt: 'Modern wooden deck with light-colored outdoor furniture and potted plants'
    },
    {
      id: 3,
      category: 'pergolas',
      image: '/perg3.jpg',
      alt: 'Wooden deck with slatted wooden pergola covering and red outdoor dining set'
    },
    {
      id: 4,
      category: 'decks',
      image: '/deck3.jpg',
      alt: 'Spacious outdoor living area with light-colored modular sofas and ottomans'
    },
    {
      id: 5,
      category: 'pergolas',
      image: '/perg4.jpg',
      alt: 'Wooden gazebo structure next to swimming pool with dark outdoor dining set'
    },
    {
      id: 6,
      category: 'fences',
      image: '/fence1.jpg',
      alt: 'Dark wooden fence with vertical planks and horizontal support beams'
    },
    {
      id: 7,
      category: 'decks',
      image: '/deck4.jpg',
      alt: 'Wooden deck with railing leading to grassy area with wicker chairs'
    },
    {
      id: 8,
      category: 'decks',
      image: '/deck1.jpg',
      alt: 'Modern outdoor patio connected to house with L-shaped sofa and grill'
    },
    {
      id: 9,
      category: 'fences',
      image: '/fence2.jpg',
      alt: 'Weathered dark brown wooden privacy fence'
    },
    {
      id: 10,
      category: 'fences',
      image: '/fence3.jpg',
      alt: 'Light natural wood privacy fence with uniform vertical planks'
    },
    {
      id: 11,
      category: 'fences',
      image: '/fence4.jpg',
      alt: 'Light-colored wooden privacy fence extending towards structure'
    },
    {
      id: 12,
      category: 'fences',
      image: '/fence5.jpeg',
      alt: 'Professional fence installation with quality craftsmanship'
    }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <div className="w-full min-h-screen bg-white">
      <Header currentPage="gallery" />
      
      <div className="bg-[#F1F4E8] py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Project Gallery</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Take a look at some of our past projects to see how we bring outdoor spaces to life. From decks to pergolas and fences, you'll find plenty of inspiration and see the quality we're proud of.
          </p>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeFilter === 'all'
                  ? 'bg-[#5F9136] text-white'
                  : 'bg-white text-gray-700 border border-[#5F9136] hover:bg-[#5F9136] hover:text-white'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setActiveFilter('decks')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeFilter === 'decks'
                  ? 'bg-[#5F9136] text-white'
                  : 'bg-white text-gray-700 border border-[#5F9136] hover:bg-[#5F9136] hover:text-white'
              }`}
            >
              Decks
            </button>
            <button
              onClick={() => setActiveFilter('pergolas')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeFilter === 'pergolas'
                  ? 'bg-[#5F9136] text-white'
                  : 'bg-white text-gray-700 border border-[#5F9136] hover:bg-[#5F9136] hover:text-white'
              }`}
            >
              Pergolas
            </button>
            <button
              onClick={() => setActiveFilter('fences')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeFilter === 'fences'
                  ? 'bg-[#5F9136] text-white'
                  : 'bg-white text-gray-700 border border-[#5F9136] hover:bg-[#5F9136] hover:text-white'
              }`}
            >
              Fences
            </button>
          </div>
        </div>
      </div>

      {/* Project Grid */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="py-8 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center items-center space-x-4">
            <button className="text-gray-600 hover:text-[#5F9136] transition-colors">
              Prev
            </button>
            <div className="flex space-x-2">
              <button className="w-10 h-10 bg-[#5F9136] text-white rounded-full flex items-center justify-center font-medium">
                1
              </button>
              <button className="w-10 h-10 bg-white text-gray-700 border border-gray-300 rounded-full flex items-center justify-center font-medium hover:border-[#5F9136] hover:text-[#5F9136] transition-colors">
                2
              </button>
              <button className="w-10 h-10 bg-white text-gray-700 border border-gray-300 rounded-full flex items-center justify-center font-medium hover:border-[#5F9136] hover:text-[#5F9136] transition-colors">
                3
              </button>
              <span className="w-10 h-10 flex items-center justify-center text-gray-500">...</span>
            </div>
            <button className="text-gray-600 hover:text-[#5F9136] transition-colors">
              Next
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
