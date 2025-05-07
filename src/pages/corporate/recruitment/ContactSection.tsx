import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  Calendar,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    role: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description:
          "Thank you for reaching out. Our team will contact you shortly.",
      });

      setSubmitted(true);
      setIsSubmitting(false);

      setTimeout(() => {
        setFormData({
          name: "",
          company: "",
          email: "",
          role: "",
          message: "",
        });
        setSubmitted(false);
        if (formRef.current) formRef.current.reset();
      }, 3000);
    }, 1500);
  };

  const services = [
    "Executive Search",
    "Bulk Hiring",
    "Technical Talent",
    "Leadership Roles",
    "Remote Teams",
    "Contract Staffing",
  ];

  return (
    <section
      id="contact"
      className="section py-24 relative overflow-hidden bg-gradient-to-br from-blue-50 to-red-50 text-gray-800"
    >
      {/* <div className="absolute inset-0 bg-[url('dat a:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00TTE2IDI0YzAtMi4yIDEuOC00IDQtNHM0IDEuOCA0IDQtMS44IDQtNCA0LTQtMS44LTQtNCIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div> */}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="container mx-auto px-5 relative z-10"
      >
        <div className="text-center mb-16">
          <div className="bg-corporate-secondary text-white w-16 h-16 rounded-[25px] mx-auto mb-4 flex items-center justify-center transform rotate-6">
            <Send size={32} />
          </div>
          <h2 className="text-3xl md:text-5xl text-center font-bold mb-4 text-corporate-black">
            Let's Build Your Success Team
          </h2>
          <p className="text-corporate-grey max-w-3xl mx-auto text-lg text-center">
            Whether you're hiring 5 or 500, we'll help you get it right
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="bg-white/80 backdrop-blur-sm border border-white/30 rounded-3xl overflow-hidden shadow-xl">
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-gray-800">
                  <span className="bg-corporate-primary w-10 h-10 rounded-full flex items-center justify-center text-white">
                    <Mail size={20} />
                  </span>
                  Request Talent Now
                </h3>

                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block mb-2 font-medium text-gray-700"
                      >
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Full Name"
                        className="w-full bg-white/50 border-gray-200 text-gray-800 placeholder:text-gray-400"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="company"
                        className="block mb-2 font-medium text-gray-700"
                      >
                        Company
                      </label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Company Name"
                        className="w-full bg-white/50 border-gray-200 text-gray-800 placeholder:text-gray-400"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-2 font-medium text-gray-700"
                      >
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@company.com"
                        className="w-full bg-white/50 border-gray-200 text-gray-800 placeholder:text-gray-400"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="role"
                        className="block mb-2 font-medium text-gray-700"
                      >
                        Role to Hire
                      </label>
                      <Input
                        id="role"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        placeholder="Job Title/Position"
                        className="w-full bg-white/50 border-gray-200 text-gray-800 placeholder:text-gray-400"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block mb-2 font-medium text-gray-700"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your hiring needs or challenges"
                      className="w-full min-h-[120px] bg-white/50 border-gray-200 text-gray-800 placeholder:text-gray-400"
                      required
                    />
                  </div>

                  <div className="pt-4">
                    <AnimatePresence mode="wait">
                      {!submitted ? (
                        <motion.div
                          key="button"
                          initial={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="flex flex-col sm:flex-row gap-4 flex-wrap"
                        >
                          <Link to="/contact-us">
                            <Button
                              type="submit"
                              className="bg-corporate-secondary hover:bg-corporate-secondary/90 text-white font-medium px-8 py-6 text-lg rounded-full"
                              disabled={isSubmitting}
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
                                  Sending...
                                </span>
                              ) : (
                                <span className="flex items-center">
                                  Request Talent{" "}
                                  <ArrowRight size={18} className="ml-2" />
                                </span>
                              )}
                            </Button>
                          </Link>
                          {/* <Button
                            type="button"
                            variant="outline"
                            className="border-[#FF7F50]/60 text-[#FF7F50] hover:bg-[#FF7F50]/10 rounded-xl"
                          >
                            <Calendar size={18} className="mr-2" /> Schedule a
                            Consultation
                          </Button> */}
                        </motion.div>
                      ) : (
                        <motion.div
                          key="success"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="bg-green-100 border border-green-300 rounded-xl p-4 text-center"
                        >
                          <CheckCircle2
                            size={32}
                            className="mx-auto mb-2 text-green-600"
                          />
                          <p className="font-medium text-green-800">
                            Message sent successfully!
                          </p>
                          <p className="text-sm text-green-700 mt-1">
                            Our team will contact you shortly.
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="h-full flex flex-col justify-between gap-6">
              <div className="bg-white/80 backdrop-blur-sm border border-white/30 rounded-3xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">
                  Get in Touch
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-corporate-primary/10 text-corporate-primary p-3 rounded-xl">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-gray-800">
                        Phone
                      </h4>
                      <p className="text-gray-600">+91 95624 81100</p>
                      <p className="text-gray-600">+91 82960 61534</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-corporate-primary/10 text-corporate-primary p-3 rounded-xl">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-gray-800">
                        Email
                      </h4>
                      <p className="text-gray-600">info@rareminds.com</p>
                      <p className="text-gray-600">careers@rareminds.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-corporate-primary/10 text-corporate-primary p-3 rounded-xl">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-gray-800">
                        Address
                      </h4>
                      <p className="text-gray-600 max-w-[300px]">
                        231, 2nd stage, 13th Cross Road, Hoysala Nagar,
                        Indiranagar
                      </p>
                      <p className="text-gray-600">
                        Bengaluru, Karnataka 560001
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm border border-white/30 rounded-3xl p-8 shadow-xl">
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  Our Services
                </h3>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {services.map((service, index) => (
                    <div
                      key={index}
                      className="bg-white/50 hover:bg-red-50 transition-colors rounded-lg p-3 flex items-center gap-2"
                    >
                      <div className="w-2 h-2 rounded-full bg-corporate-primary"></div>
                      <span className="text-sm text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>
                <a
                  href="#services"
                  className="flex items-center text-corporate-secondary hover:text-corporate-secondary/60 transition-colors text-sm mt-2"
                >
                  View all services <ExternalLink size={14} className="ml-1" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
