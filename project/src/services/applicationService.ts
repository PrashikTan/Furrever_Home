import { AdoptionApplication } from '../types/adoption';
import { mockApplications } from './mockData';

export const fetchPendingApplications = async (): Promise<AdoptionApplication[]> => {
  await new Promise(resolve => setTimeout(resolve, 500));
  return mockApplications;
};

export const createApplication = async (
  application: Partial<AdoptionApplication>
): Promise<AdoptionApplication> => {
  await new Promise(resolve => setTimeout(resolve, 500));
  
  const newApplication = {
    id: String(mockApplications.length + 1),
    ...application
  } as AdoptionApplication;
  
  mockApplications.push(newApplication);
  return newApplication;
};

export const updateApplication = async (
  applicationId: string,
  data: Partial<AdoptionApplication>
): Promise<AdoptionApplication> => {
  await new Promise(resolve => setTimeout(resolve, 500));
  
  const applicationIndex = mockApplications.findIndex(app => app.id === applicationId);
  if (applicationIndex === -1) {
    throw new Error('Application not found');
  }

  const updatedApplication = {
    ...mockApplications[applicationIndex],
    ...data
  };
  
  mockApplications[applicationIndex] = updatedApplication;
  return updatedApplication;
};

export const deleteApplication = async (applicationId: string): Promise<void> => {
  await new Promise(resolve => setTimeout(resolve, 500));
  
  const applicationIndex = mockApplications.findIndex(app => app.id === applicationId);
  if (applicationIndex === -1) {
    throw new Error('Application not found');
  }
  
  mockApplications.splice(applicationIndex, 1);
};