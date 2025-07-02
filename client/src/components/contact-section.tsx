import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, CheckCircle } from "lucide-react";
import { SiLinkedin, SiGithub } from "react-icons/si";
import { personalInfo } from "@/lib/data";
import { apiRequest } from "@/lib/queryClient";
import type { InsertContact } from "@shared/schema";

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: ""
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: ""
      });
    },
    onError: (error: any) => {
      toast({
        title: "Error sending message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-blue-primary mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ready to transform your data into actionable insights? Let's discuss how I can help 
            your business make data-driven decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-primary rounded-lg flex items-center justify-center mr-4">
                  <MapPin className="text-white" size={20} />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Location</div>
                  <div className="text-gray-600">{personalInfo.location}</div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-light rounded-lg flex items-center justify-center mr-4">
                  <Phone className="text-white" size={20} />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Phone</div>
                  <div className="text-gray-600">{personalInfo.phone}</div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-navy-blue rounded-lg flex items-center justify-center mr-4">
                  <Mail className="text-white" size={20} />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Email</div>
                  <div className="text-gray-600">{personalInfo.email}</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Connect With Me</h4>
              <div className="flex space-x-4">
                <a 
                  href={personalInfo.linkedin}
                  className="w-12 h-12 bg-blue-primary rounded-lg flex items-center justify-center text-white hover:bg-royal-blue transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiLinkedin size={20} />
                </a>
                <a 
                  href={personalInfo.github}
                  className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-white hover:bg-gray-900 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiGithub size={20} />
                </a>
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="w-12 h-12 bg-blue-light rounded-lg flex items-center justify-center text-white hover:bg-blue-primary transition-colors"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>

            {/* Availability Status */}
            <div className="mt-8 p-4 bg-green-50 rounded-lg border-l-4 border-green-400">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-400 rounded-full mr-3"></div>
                <div>
                  <div className="font-semibold text-green-800">Available for Projects</div>
                  <div className="text-green-600 text-sm">Open to remote and in-office opportunities</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-gray-900">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <Input
                      type="text"
                      placeholder="John"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <Input
                      type="text"
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <Select value={formData.subject} onValueChange={(value) => handleInputChange("subject", value)} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="project-inquiry">Project Inquiry</SelectItem>
                      <SelectItem value="collaboration">Collaboration</SelectItem>
                      <SelectItem value="job-opportunity">Job Opportunity</SelectItem>
                      <SelectItem value="general-question">General Question</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <Textarea
                    rows={6}
                    placeholder="Tell me about your project or inquiry..."
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-blue-primary hover:bg-royal-blue"
                  disabled={contactMutation.isPending}
                >
                  {contactMutation.isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
