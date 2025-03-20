import React, { useState } from "react";
import {
  Send,
  AlertCircle,
  GraduationCap,
  Users,
  BookOpen,
  Building2,
  ChevronDown,
  CheckCircle,
  X,
} from "lucide-react";
import axios from "axios";

interface FormData {
  fullName: string;
  collegeName: string;
  course: string;
  email: string;
  phone: string;
  description: string;
  serviceType: string;
}

interface FormErrors {
  [key: string]: string;
}

const InstitutionsQueryForm = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    collegeName: "",
    course: "",
    email: "",
    phone: "",
    description: "",
    serviceType: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);

  const serviceOptions = [
    { value: "sdp", label: "Student Development Program", icon: GraduationCap },
    { value: "internship", label: "Internship/Hiring", icon: Users },
    { value: "fdp", label: "Faculty Development Program", icon: BookOpen },
  ];

  const validateForm = () => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.collegeName.trim()) {
      newErrors.collegeName = "College name is required";
    }

    if (!formData.course.trim()) {
      newErrors.course = "Course is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
    }

    if (!formData.description.trim()) {
      newErrors.description = "Description is required";
    }

    if (!formData.serviceType) {
      newErrors.serviceType = "Please select a service type";
    }

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);

      try {
        console.log(`${import.meta.env.VITE_API_URL}/enquiries/institutions`);
        const response = await axios.post(
          `${import.meta.env.VITE_API_URL}enquiries/institutions`,
          formData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          },
        );

        if (response.status === 201) {
          resetForm();
          setShowSuccessModal(true);
        }
      } catch (error) {
        console.error("Error submitting form:", error);
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setErrors(newErrors);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleServiceSelect = (value: string) => {
    setFormData((prev) => ({ ...prev, serviceType: value }));
    if (errors.serviceType) {
      setErrors((prev) => ({ ...prev, serviceType: "" }));
    }
    setIsServiceDropdownOpen(false);
  };

  const resetForm = () => {
    setFormData({
      fullName: "",
      collegeName: "",
      course: "",
      email: "",
      phone: "",
      description: "",
      serviceType: "",
    });
    setShowSuccessModal(false);
  };

  const selectedService = serviceOptions.find(
    (option) => option.value === formData.serviceType,
  );

  const inputClasses = `mt-1 block w-full px-4 py-3 rounded-lg border-[1px] shadow-sm
    focus:ring focus:ring-indigo-200 focus:ring-opacity-50 transition-colors duration-200
    placeholder-gray-400 bg-white`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div
        className="relative bg-indigo-900 text-white py-24 px-6"
        style={{
          backgroundImage: `linear-gradient(rgba(49, 46, 129, 0.9), rgba(49, 46, 129, 0.9)), url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <GraduationCap className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Partner with Excellence
          </h1>
          <p className="text-xl md:text-2xl text-indigo-100">
            Empower your institution with cutting-edge educational programs and
            opportunities
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl p-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <GraduationCap className="w-6 h-6 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Student Development Program
            </h3>
            <p className="text-gray-600">
              Comprehensive programs designed to enhance student skills and
              career readiness.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Internship/Hiring</h3>
            <p className="text-gray-600">
              Connect your students with industry-leading companies for
              internships and placements.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <BookOpen className="w-6 h-6 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Faculty Development Program
            </h3>
            <p className="text-gray-600">
              Enhance teaching methodologies and keep faculty updated with
              industry trends.
            </p>
          </div>
        </div>

        {/* Enquiry Form Section */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-xl p-8 md:p-10">
            <div className="flex items-center justify-center mb-8">
              <Building2 className="w-8 h-8 text-indigo-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-800">
                Institutional Enquiry
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={`${inputClasses} ${
                      errors.name
                        ? "border-red-300"
                        : "border-gray-300 hover:border-indigo-300 focus:border-indigo-500"
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="collegeName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    College Name
                  </label>
                  <input
                    type="text"
                    id="collegeName"
                    name="collegeName"
                    value={formData.collegeName}
                    onChange={handleChange}
                    className={`${inputClasses} ${
                      errors.collegeName
                        ? "border-red-300"
                        : "border-gray-300 hover:border-indigo-300 focus:border-indigo-500"
                    }`}
                  />
                  {errors.collegeName && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.collegeName}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="course"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Course
                  </label>
                  <input
                    type="text"
                    id="course"
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    className={`${inputClasses} ${
                      errors.course
                        ? "border-red-300"
                        : "border-gray-300 hover:border-indigo-300 focus:border-indigo-500"
                    }`}
                  />
                  {errors.course && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.course}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`${inputClasses} ${
                      errors.email
                        ? "border-red-300"
                        : "border-gray-300 hover:border-indigo-300 focus:border-indigo-500"
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`${inputClasses} ${
                      errors.phone
                        ? "border-red-300"
                        : "border-gray-300 hover:border-indigo-300 focus:border-indigo-500"
                    }`}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div className="md:col-span-2">
                  <label
                    htmlFor="serviceType"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Service Type
                  </label>
                  <div className="relative mt-1">
                    <button
                      type="button"
                      className={`relative w-full bg-white border-2 ${
                        errors.serviceType
                          ? "border-red-300"
                          : "border-gray-300 hover:border-indigo-300"
                      } rounded-lg shadow-sm px-4 py-3 text-left cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500`}
                      onClick={() =>
                        setIsServiceDropdownOpen(!isServiceDropdownOpen)
                      }
                    >
                      <span className="flex items-center">
                        {selectedService ? (
                          <>
                            <selectedService.icon className="h-5 w-5 text-indigo-600 mr-3" />
                            <span className="block truncate">
                              {selectedService.label}
                            </span>
                          </>
                        ) : (
                          <span className="text-gray-500">
                            Select a service
                          </span>
                        )}
                      </span>
                      <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                        <ChevronDown
                          className={`h-5 w-5 text-gray-400 transform transition-transform duration-200 ${isServiceDropdownOpen ? "rotate-180" : ""}`}
                        />
                      </span>
                    </button>

                    {isServiceDropdownOpen && (
                      <div className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-lg py-1 border-2 border-indigo-100 overflow-auto focus:outline-none">
                        {serviceOptions.map((option) => (
                          <div
                            key={option.value}
                            className={`
                              cursor-pointer select-none relative py-3 px-4 hover:bg-indigo-50
                              ${formData.serviceType === option.value ? "bg-indigo-50" : ""}
                            `}
                            onClick={() => handleServiceSelect(option.value)}
                          >
                            <div className="flex items-center">
                              <option.icon className="h-5 w-5 text-indigo-600 mr-3" />
                              <span
                                className={`block truncate ${formData.serviceType === option.value ? "font-semibold" : "font-normal"}`}
                              >
                                {option.label}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  {errors.serviceType && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.serviceType}
                    </p>
                  )}
                </div>

                <div className="md:col-span-2">
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows={4}
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Please describe your requirements or any specific questions you have..."
                    className={`${inputClasses} ${
                      errors.description
                        ? "border-red-300"
                        : "border-gray-300 hover:border-indigo-300 focus:border-indigo-500"
                    }`}
                  />
                  {errors.description && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.description}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex justify-center pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`
                    inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg shadow-sm
                    ${
                      isSubmitting
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-indigo-600 hover:bg-indigo-700 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    }
                  `}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send className="w-5 h-5 mr-2" />
                      Submit Enquiry
                    </span>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 max-w-md mx-4 relative animate-fade-in">
            <button
              onClick={resetForm}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Submission Successful!
              </h3>
              <p className="text-gray-500 mb-6">
                Thank you for your enquiry. Our team will get back to you within
                24-48 hours.
              </p>
              <button
                onClick={resetForm}
                className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-indigo-900 text-white py-12 mt-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <GraduationCap className="w-12 h-12 mx-auto mb-4" />
          <p className="text-xl font-semibold mb-2">
            Transform Your Institution's Future
          </p>
          <p className="text-indigo-200">
            Join hands with us to create exceptional educational experiences
          </p>
        </div>
      </footer>
    </div>
  );
};

export default InstitutionsQueryForm;
