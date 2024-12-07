import { Pet, AdoptionApplication } from '../types/adoption';

export const mockPets: Pet[] = [
  {
    id: "1",
    name: "Luna",
    species: "Dog",
    breed: "Golden Retriever",
    age: 2,
    status: "adopted",
    imageUrl: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: "2",
    name: "Oliver",
    species: "Cat",
    breed: "Persian",
    age: 1,
    status: "adopted",
    imageUrl: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=500"
  }
];

export const mockApplications: AdoptionApplication[] = [
  {
    id: "1",
    petId: "3",
    status: "pending",
    applicationDate: "2024-03-15",
    applicantDetails: {
      name: "John Doe",
      email: "john@example.com",
      phone: "123-456-7890",
      address: "123 Main St, City, State 12345"
    },
    additionalNotes: "Looking forward to providing a loving home"
  },
  {
    id: "2",
    petId: "4",
    status: "pending",
    applicationDate: "2024-03-16",
    applicantDetails: {
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "098-765-4321",
      address: "456 Oak Ave, City, State 12345"
    }
  }
];