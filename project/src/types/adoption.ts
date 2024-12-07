export interface Pet {
  id: string;
  name: string;
  species: string;
  breed: string;
  age: number;
  status: 'adopted' | 'pending' | 'available';
  imageUrl: string;
}

export interface AdoptionApplication {
  id: string;
  petId: string;
  status: 'pending' | 'approved' | 'rejected';
  applicationDate: string;
  applicantDetails: {
    name: string;
    email: string;
    phone: string;
    address: string;
  };
  additionalNotes?: string;
}