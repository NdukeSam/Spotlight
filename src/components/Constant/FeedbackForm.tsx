import React, { useState } from "react";
import emailIcon from "@/assets/email.png";
import phoneIcon from "@/assets/phone.png";
import { z } from "zod";

// Define a Zod schema for form validation
const formSchema = z.object({
  fullName: z.string().min(1, { message: "Full Name is required" }),
  category: z
    .enum(["individual", "nonprofit", "organization"]),
     
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().min(10, { message: "Phone number must be at least 10 digits" }),
  organization: z.string().optional(), // Organization is optional
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

// User Category options as an array
const categoryOptions = [
  { label: "Individual", value: "individual" },
  { label: "Nonprofit", value: "nonprofit" },
  { label: "Organization", value: "organization" },
];

const FeedbackForm = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    category: "individual", // Set category as undefined initially
    email: "",
    phone: "",
    organization: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent form submission refresh

    // Parse form data using Zod schema
    const result = formSchema.safeParse(formData);

    if (!result.success) {
      // Map validation errors to form fields
      const errorMessages = result.error.format();
      setErrors({
        fullName: errorMessages.fullName?._errors[0],
        // category: errorMessages.category?._errors[0],
        email: errorMessages.email?._errors[0],
        phone: errorMessages.phone?._errors[0],
        organization: errorMessages.organization?._errors[0],
        message: errorMessages.message?._errors[0],
      });
    } else {
      setErrors({}); // Clear any errors
      console.log("Form is valid, submit form data:", result.data);
      // You can now send the validated data to an API or handle it as needed
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
  
  // Type guard to check if value is one of the allowed category values
  const isValidCategory = (val: any): val is "individual" | "nonprofit" | "organization" => {
    return ["individual", "nonprofit", "organization"].includes(val);
  };

  setFormData((prevData) => ({
    ...prevData,
    [id]: id === "category" && isValidCategory(value) ? value : value,
  }));
  };
  

  return (
    <div className="bg-gray-50 min-h-screen py-[7rem] p-6 flex flex-col items-center">
      <div className="max-w-7xl w-full bg-white rounded-lg shadow-lg p-6 lg:flex lg:space-x-8">
        {/* Left Side: Information Section */}
        <div className="flex-1 mb-8 lg:mb-0">
          <h2 className="text-2xl font-bold mb-4">Got a Question or Feedback?</h2>
          <p className="mb-4 text-gray-700">
            Spotlight connects individuals to nonprofits, making opportunities accessible. Form partnerships, 
            network, access exclusive content, and achieve great things together.
          </p>
          <p className="mb-8 text-gray-700">
            Got a question or concern? Want to give us some feedback? Don't hold back, we want to hear it all!
            Reach out to us and let's chat.
          </p>

          {/* Contact Info */}
          <div className="flex items-center space-x-4 mb-4">
            <div className="p-2 rounded-full">
              <img src={emailIcon} alt="email" />
            </div>
            <span className="text-gray-700">support@spotlightapp.org</span>
          </div>

          <div className="flex items-center space-x-4">
            <div className="p-2 rounded-full">
              <img src={phoneIcon} alt="phone" />
            </div>
            <span className="text-gray-700">+1348059843257</span>
          </div>
        </div>

        {/* Right Side: Form Section */}
        <div className="flex-1 bg-gray-50 p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">How can we help?</h3>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                className={`mt-1 p-2 block w-full border ${errors?.fullName ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500`}
                value={formData.fullName}
                onChange={handleInputChange}
              />
              {errors?.fullName && <p className="text-red-500 text-sm">{errors?.fullName}</p>}
            </div>

            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                User Category <span className="text-red-500">*</span>
              </label>
              <select
                id="category"
                className={`mt-1 p-2 block w-full border ${errors?.category ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500`}
                value={formData.category ?? ""} // Use ?? to handle undefined
                onChange={handleInputChange}
              >
                <option value="">Select Category</option>
                {categoryOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              {errors?.category && <p className="text-red-500 text-sm">{errors?.category}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                className={`mt-1 p-2 block w-full border ${errors?.email ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500`}
                value={formData.email}
                onChange={handleInputChange}
              />
              {errors?.email && <p className="text-red-500 text-sm">{errors?.email}</p>}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                className={`mt-1 p-2 block w-full border ${errors?.phone ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500`}
                value={formData.phone}
                onChange={handleInputChange}
              />
              {errors?.phone && <p className="text-red-500 text-sm">{errors?.phone}</p>}
            </div>

            <div>
              <label htmlFor="organization" className="block text-sm font-medium text-gray-700">
                Organization Name
              </label>
              <input
                type="text"
                id="organization"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                value={formData.organization}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                placeholder="Type your message here"
                value={formData.message}
                onChange={handleInputChange}
              ></textarea>
            </div>

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
      </div>
    </div>
  );
};

export default FeedbackForm;
