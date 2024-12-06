import React from 'react';

const FeaturedPets = () => {
  const pets = [
    {
      id: 1,
      name: 'Luna',
      image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=400',
      breed: 'German Shepherd',
      age: '2 years',
    },
    {
      id: 2,
      name: 'Oliver',
      image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=400',
      breed: 'Domestic Shorthair',
      age: '1 year',
    },
    {
      id: 3,
      name: 'Bella',
      image: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&w=400',
      breed: 'Golden Retriever',
      age: '4 years',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Pets</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pets.map((pet) => (
            <div key={pet.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={pet.image}
                alt={pet.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{pet.name}</h3>
                <p className="text-gray-600">{pet.breed}</p>
                <p className="text-gray-600">{pet.age}</p>
                <a
                  href={`/adoption/pets/${pet.id}`}
                  className="mt-4 inline-block bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPets;