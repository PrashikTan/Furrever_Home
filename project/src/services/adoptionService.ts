import { Pet } from '../types/adoption';
import { mockPets } from './mockData';

export const fetchUserAdoptions = async (): Promise<Pet[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return mockPets;
};