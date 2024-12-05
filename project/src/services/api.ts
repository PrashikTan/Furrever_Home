import { Pet, AdoptionApplication } from '../types/adoption';

// Base URL is now relative, so it will use the current host
const API_BASE_URL = '/api';

export const fetchUserAdoptions = async (): Promise<Pet[]> => {
  const response = await fetch(`${API_BASE_URL}/adoptions`);
  if (!response.ok) throw new Error('Failed to fetch adoptions');
  return response.json();
};

export const fetchPendingApplications = async (): Promise<AdoptionApplication[]> => {
  const response = await fetch(`${API_BASE_URL}/applications/pending`);
  if (!response.ok) throw new Error('Failed to fetch applications');
  return response.json();
};

export const updateApplication = async (
  applicationId: string,
  data: Partial<AdoptionApplication>
): Promise<AdoptionApplication> => {
  const response = await fetch(`${API_BASE_URL}/applications/${applicationId}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error('Failed to update application');
  return response.json();
};