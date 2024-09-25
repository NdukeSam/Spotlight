import  { useState } from 'react';
// import ReferralForm from "../components/ServiceAction/ReferralForm";

// Modal for Creating Candidate Profile
const CreateCandidateProfile = ({ onConfirm, onCancel }: { onConfirm: () => void; onCancel: () => void }) => {
  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg text-center">
      <h2 className="text-xl font-bold mb-4">Create Candidate Profile</h2>
      <p className="mb-6">
        By submitting this form, you agree that we automatically create a profile for the user on Spotlight.
      </p>
      <div className="flex justify-center gap-4">
        <button onClick={onCancel} className="py-2 px-4 border border-gray-400 rounded text-gray-700 hover:bg-gray-100">
          Cancel
        </button>
        <button
          onClick={onConfirm}
          className="py-2 px-4 bg-yellow-500 text-white rounded hover:bg-yellow-600"
        >
          Create Profile
        </button>
      </div>
    </div>
  );
};

// Modal for Candidate Profile Created
const CandidateProfileCreated = ({ onDone }: { onDone: () => void }) => {
  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg text-center">
      <h2 className="text-xl font-bold mb-4">Candidate Profile Created</h2>
      <p className="mb-6">
        A profile has been created for "Candidate's Name" on Spotlight, and they should receive a help notification from a Non-profit within 24 hours.
      </p>
      <button onClick={onDone} className="py-2 px-4 bg-yellow-500 text-white rounded hover:bg-yellow-600">
        Done
      </button>
    </div>
  );
};

// Main Form Component that will handle form submission and modal transitions
const ReferralForm = () => {
  const [formSubmitted, setFormSubmitted] = useState(false); // Toggle to show profile creation modal
  const [profileCreated, setProfileCreated] = useState(false); // Toggle to show profile created modal

  const handleFormSubmit = (data: any) => {
    console.log('Form submitted:', data);
    setFormSubmitted(true); // Show CreateCandidateProfile modal
  };

  const handleConfirmCreateProfile = () => {
    setFormSubmitted(false); // Hide CreateCandidateProfile modal
    setProfileCreated(true); // Show CandidateProfileCreated modal
  };

  const handleDone = () => {
    setProfileCreated(false); // Close everything
    // Reset form or navigate to another page if needed
  };

  return (
    <div>
      {!formSubmitted && !profileCreated && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleFormSubmit({}); // Replace with actual form data
          }}
        >
          {/* Your form fields go here */}
          <button type="submit" className="w-full py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">
            Submit
          </button>
        </form>
      )}

      {/* Show Create Candidate Profile Modal */}
      {formSubmitted && !profileCreated && (
        <CreateCandidateProfile
          onConfirm={handleConfirmCreateProfile}
          onCancel={() => setFormSubmitted(false)}
        />
      )}

      {/* Show Candidate Profile Created Modal */}
      {profileCreated && <CandidateProfileCreated onDone={handleDone} />}
    </div>
  );
};

export default ReferralForm;
