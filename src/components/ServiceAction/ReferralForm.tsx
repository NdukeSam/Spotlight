import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Zod schema for form validation
const candidateFormSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  phoneNumber: z.string().min(1, "Phone number is required"),
  emailAddress: z.string().email("Invalid email address"),
  dateOfBirth: z.string().min(1, "Date of birth is required"),
  gender: z.string().min(1, "Gender is required"),
  racialDemographic: z.string().min(1, "Racial demographic is required"),
  address: z.string().min(1, "Address is required"),
  serviceNeeded: z.string().min(1, "Service needed is required"),
  serviceCategory: z.string().min(1, "Service category is required"),
  refereeName: z.string().min(1, "Referee name is required"),
  refereePhone: z.string().min(1, "Referee phone number is required"),
  refereeEmail: z.string().email("Invalid referee email address"),
  organization: z.string().min(1, "Organization name is required"),
});

const referralLinkFormSchema = z.object({
  fullName: z.string().min(1, "Candidate's full name is required"),
  phoneNumber: z.string().min(1, "Phone number is required"),
  emailAddress: z.string().email("Invalid email address"),
  refereeName: z.string().min(1, "Referee name is required"),
  refereePhone: z.string().min(1, "Referee phone number is required"),
  refereeEmail: z.string().email("Invalid referee email address"),
  organization: z.string().min(1, "Organization name is required"),
});

const ReferralForm = () => {
  const [formType, setFormType] = useState("candidateForm"); // "candidateForm" or "referralLink"
  const isCandidateForm = formType === "candidateForm";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(isCandidateForm ? candidateFormSchema : referralLinkFormSchema),
  });

  const onSubmit = (data: any) => {
    console.log("Form data submitted:", data);
    // Add your submission logic here
  };

  return (
    <div id="referral-form" className="max-w-xl mx-auto p-4 md:p-8 my-5 md:my-[7rem] bg-gray-100 rounded-lg shadow-md">
      {/* Form Type Selection */}
      <h2 className="text-xl font-bold text-center mb-4">Refer a candidate to Spotlight</h2>
      <div className="flex justify-center mb-6">
        <label className="mr-4">
          <input
            type="radio"
            name="formType"
            value="candidateForm"
            checked={isCandidateForm}
            onChange={() => setFormType("candidateForm")}
            className="mr-2"
          />
          Complete candidate form
        </label>
        <label>
          <input
            type="radio"
            name="formType"
            value="referralLink"
            checked={!isCandidateForm}
            onChange={() => setFormType("referralLink")}
            className="mr-2"
          />
          Send referral link to candidate
        </label>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Personal Details */}
        <div>
          <label className="block font-semibold mb-2">Personal Details of Candidate</label>
          <input
            type="text"
            placeholder="Enter Candidate's Full Name"
            {...register("fullName")}
            className="w-full p-2 border rounded"
          />
          {errors.fullName && <span className="text-red-500">{errors.fullName?.message as string}</span>}
        </div>

        {isCandidateForm && (
          <>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Date of Birth"
                {...register("dateOfBirth")}
                className="w-full p-2 border rounded"
              />
              <input
                type="text"
                placeholder="Gender"
                {...register("gender")}
                className="w-full p-2 border rounded"
              />
            </div>
            {errors.dateOfBirth && <span className="text-red-500">{errors.dateOfBirth?.message as string}</span>}
            {errors.gender && <span className="text-red-500">{errors.gender?.message as string}</span>}

            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Racial Demographic"
                {...register("racialDemographic")}
                className="w-full p-2 border rounded"
              />
              <input
                type="text"
                placeholder="Address"
                {...register("address")}
                className="w-full p-2 border rounded"
              />
            </div>
            {errors.racialDemographic && <span className="text-red-500">{errors.racialDemographic?.message as string}</span>}
            {errors.address && <span className="text-red-500">{errors.address?.message as string}</span>}
          </>
        )}

        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Phone Number"
            {...register("phoneNumber")}
            className="w-full p-2 border rounded"
          />
          <input
            type="email"
            placeholder="Email Address"
            {...register("emailAddress")}
            className="w-full p-2 border rounded"
          />
        </div>
        {errors.phoneNumber && <span className="text-red-500">{errors.phoneNumber?.message as string}</span>}
        {errors.emailAddress && <span className="text-red-500">{errors.emailAddress?.message as string}</span>}

        {isCandidateForm && (
          <>
            <div>
              <input
                type="text"
                placeholder="Enter Core Service needed"
                {...register("serviceNeeded")}
                className="w-full p-2 border rounded"
              />
              {errors.serviceNeeded && <span className="text-red-500">{errors.serviceNeeded?.message as string}</span>}
            </div>
            <div>
              <input
                type="text"
                placeholder="Select Service Category"
                {...register("serviceCategory")}
                className="w-full p-2 border rounded"
              />
              {errors.serviceCategory && <span className="text-red-500">{errors.serviceCategory?.message as string}</span>}
            </div>
          </>
        )}

        {/* Referee Contact */}
        <div>
          <label className="block font-semibold mb-2">Referee Contact</label>
          <input
            type="text"
            placeholder="Enter your name"
            {...register("refereeName")}
            className="w-full p-2 border rounded"
          />
          {errors.refereeName && <span className="text-red-500">{errors.refereeName?.message as string}</span>}
        </div>

        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Phone Number"
            {...register("refereePhone")}
            className="w-full p-2 border rounded"
          />
          <input
            type="email"
            placeholder="Email Address"
            {...register("refereeEmail")}
            className="w-full p-2 border rounded"
          />
        </div>
        {errors.refereePhone && <span className="text-red-500">{errors.refereePhone?.message as string}</span>}
        {errors.refereeEmail && <span className="text-red-500">{errors.refereeEmail?.message as string}</span>}

        <div>
          <input
            type="text"
            placeholder="Name of your Organization"
            {...register("organization")}
            className="w-full p-2 border rounded"
          />
          {errors.organization && <span className="text-red-500">{errors.organization?.message as string}</span>}
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
              type="submit"
              className="py-2 px-6 bg-yellow-500 text-white font-semibold rounded-full shadow hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
              >
                Submit
           </button>
        </div>
      </form>
    </div>
  );
};

export default ReferralForm;
