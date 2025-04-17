"use client";

import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { useToast } from "../hooks/use-toast";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// Contact form schema
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(3, { message: "Subject must be at least 3 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactForm = z.infer<typeof contactFormSchema>;

export default function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<ContactForm>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  });
  
  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to send message");
      }
      
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
        variant: "default"
      });
      
      form.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      
      toast({
        title: "Something went wrong",
        description: error instanceof Error ? error.message : "Failed to send your message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      content: "aryansinghaditya18@gmail.com",
      link: "mailto:aryansinghaditya18@gmail.com"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      content: "+91 9113194954",
      link: "tel:+919113194954"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      content: "Patna, Bihar 800002, India",
      link: undefined
    }
  ];

  return (
    <section id="contact" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-poppins font-semibold text-center mb-12">Get In Touch</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {contactInfo.map((item, index) => (
            <div key={index} className="bg-neutral-100 p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-poppins font-semibold mb-2">{item.title}</h3>
              {item.link ? (
                <a href={item.link} className="text-primary hover:underline">
                  {item.content}
                </a>
              ) : (
                <p>{item.content}</p>
              )}
            </div>
          ))}
        </div>
        
        <div className="max-w-3xl mx-auto mt-12">
          <Card className="bg-white border border-neutral-200 rounded-lg shadow-md">
            <CardContent className="p-6 md:p-8">
              <h3 className="text-xl font-poppins font-semibold mb-6">Send Me a Message</h3>
              
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-neutral-700 mb-2">Name</label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      {...form.register("name")}
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:border-primary transition-colors ${
                        form.formState.errors.name ? "border-red-500" : "border-neutral-300"
                      }`}
                    />
                    {form.formState.errors.name && (
                      <p className="mt-1 text-sm text-red-500">
                        {form.formState.errors.name.message}
                      </p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-neutral-700 mb-2">Email</label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Your email"
                      {...form.register("email")}
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:border-primary transition-colors ${
                        form.formState.errors.email ? "border-red-500" : "border-neutral-300"
                      }`}
                    />
                    {form.formState.errors.email && (
                      <p className="mt-1 text-sm text-red-500">
                        {form.formState.errors.email.message}
                      </p>
                    )}
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-neutral-700 mb-2">Subject</label>
                  <Input
                    id="subject"
                    placeholder="Subject"
                    {...form.register("subject")}
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:border-primary transition-colors ${
                      form.formState.errors.subject ? "border-red-500" : "border-neutral-300"
                    }`}
                  />
                  {form.formState.errors.subject && (
                    <p className="mt-1 text-sm text-red-500">
                      {form.formState.errors.subject.message}
                    </p>
                  )}
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-neutral-700 mb-2">Message</label>
                  <Textarea
                    id="message"
                    rows={5}
                    placeholder="Your message"
                    {...form.register("message")}
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:border-primary transition-colors ${
                      form.formState.errors.message ? "border-red-500" : "border-neutral-300"
                    }`}
                  />
                  {form.formState.errors.message && (
                    <p className="mt-1 text-sm text-red-500">
                      {form.formState.errors.message.message}
                    </p>
                  )}
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-primary text-white px-6 py-3 rounded-md font-poppins font-semibold transition-all hover:bg-primary/90"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
