import React from 'react';
import { Scroll, UserCheck, FileText, Home, Shield } from 'lucide-react';

interface ProtocolItemProps {
  title: string;
  children: React.ReactNode;
  icon: React.ReactNode;
}

const ProtocolItem = ({ title, children, icon }: ProtocolItemProps) => (
  <div className="bg-white rounded-lg shadow-md p-6 mb-6">
    <div className="flex items-center mb-4">
      <div className="text-purple-600 mr-3">
        {icon}
      </div>
      <h2 className="text-xl font-semibold text-purple-900">{title}</h2>
    </div>
    <div className="prose prose-purple max-w-none">
      {children}
    </div>
  </div>
);

const ProtocolSection = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-purple-900 mb-8 text-center">
        Standard Protocol for Adoption of Community Animals
      </h1>

      <div className="space-y-8">
        <ProtocolItem title="Where can one adopt a dog/pup from?" icon={<Home className="h-6 w-6" />}>
          <p className="text-gray-700">
            Dogs/pups can be adopted from shelters of SPCA or Animal Welfare Organizations (AWO) recognized with the AWBI or State Animal Welfare Board by issuing adoption certificate. If one has adopted a dog/pup from the street, adoption papers can be processed through any Municipal Council / Municipal Corporation / Municipality / Panchayats or any acting legal authority / District SPCA along with medical check-up and vaccination.
          </p>
        </ProtocolItem>

        <ProtocolItem title="Who can adopt a dog/pup" icon={<UserCheck className="h-6 w-6" />}>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>The person desirous of adopting a pet must be older than 18 years old.</li>
            <li>The person must be of sound mind.</li>
            <li>The person must be capable of providing adequate care & maintenance, including but not limited to adequate nutrition, veterinary care and housing.</li>
          </ul>
        </ProtocolItem>

        <ProtocolItem title="Documents to be submitted" icon={<FileText className="h-6 w-6" />}>
          <p className="text-gray-700 mb-4">
            The following documents shall be submitted to the animal welfare organisation/SPCA by the person desirous of adopting a pet:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>House-check form (appended at Annexure I)</li>
            <li>Valid Government photo ID & address proof</li>
            <li>Completed adoption form (appended at Annexure II)</li>
          </ul>
          <p className="text-gray-700 mt-4">
            <em>Paperwork Formalities include filling an Adoption Form and submission of copies of above mentioned ID Proof with Passport Size Photograph. The person adopting shall sign at every page, and self-attest the photo-ID & address proof copies.</em>
          </p>
        </ProtocolItem>

        <ProtocolItem title="Procedure" icon={<Scroll className="h-6 w-6" />}>
          <ol className="list-decimal pl-6 text-gray-700 space-y-2">
            <li>The House Check Form may be used for preliminary screening. The AWO from which the dog has been adopted or being adopted /Society for Prevention of Cruelty to Animals (SPCA) may assess and evaluate eligibility through a pre-and/or post-adoption house check and verify the information provided. The house check may be even conducted through a video call.</li>
            <li>The person adopting the dog/pup shall take it for a veterinary check-up, and ensure vaccinations, parasite control, deworming or any other necessary medical treatment.</li>
            <li>If the animal has attained maturity, it must be spayed/neutered prior to adoption.</li>
            <li>The AWO from which the dog has been adopted or being adopted /SPCA upon being satisfied with the pre and/or post adoption check, veterinary check-up, inoculation etc, may issue an adoption certificate mentioning species and age of the dog/pup and may provide documents for appropriate guidance for care and maintenance of the community animal.</li>
            <li>The AWO/SPCA must maintain a record of all animals adopted through it for last 2 years.</li>
          </ol>
        </ProtocolItem>

        <ProtocolItem title="Pet friendly house" icon={<Shield className="h-6 w-6" />}>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>In apartments or houses with multiple floors, the balconies and windows must be netted to avoid the risk of the pet escaping or falling.</li>
            <li>Preferably, the Sharp or dangerous objects shall be covered or kept away from the reach of the pet.</li>
            <li>The AWO / SPCA should inform the adopting family in advance regarding certain harmful plants, chemicals, incense sticks and food items which are toxic to pets, with guidance of a veterinarian.</li>
            <li>Preferable, electrical fittings accessible to pet shall be covered with tape.</li>
            <li>Comfortable bedding shall be provided for the pet in a suitable spot in the house.</li>
            <li>Pet must have free access to clean drinking water at all times.</li>
            <li>Regular and species appropriate meals shall be provided to the pet.</li>
            <li>Dogs/puppies shall be walked at least twice a day</li>
          </ul>
        </ProtocolItem>
      </div>
    </div>
  );
};

export default ProtocolSection;