
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail, PhoneCall } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-white ">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Questions about our products or need a custom spice? Contact us and we'll be happy to help!
          </p>
        </div>

<div className="">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto align-middle">
          <div className="bg-slate-50 p-8 rounded-lg w-full ">
            <h3 className="text-xl font-bold mb-6">Contact Information</h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-spicy-red shrink-0 mr-3 mt-0.5" />
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-muted-foreground">Multimedia University, Jalan Ayer Keroh Lama, 75450 Bukit Beruang, Melaka, Malaysia</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="h-5 w-5 text-spicy-red shrink-0 mr-3 mt-0.5" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground">kirano.osas@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <PhoneCall className="h-5 w-5 text-spicy-red shrink-0 mr-3 mt-0.5" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-muted-foreground">(123) 456-7890</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-spicy-yellow/30 rounded-lg">
              <p className="text-sm font-medium">Business Hours</p>
              <p className="text-sm text-muted-foreground">Monday - Friday: 9AM - 6PM</p>
              <p className="text-sm text-muted-foreground">Saturday & Sunday: Closed</p>
            </div>
          </div>
          
          <div>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium">
                    Name
                  </label>
                  <Input id="name" placeholder="Your name" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="block text-sm font-medium">
                  Subject
                </label>
                <Input id="subject" placeholder="How can we help you?" />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message here..."
                  rows={5}
                />
              </div>
              
              <Button type="submit" className="spicy-gradient text-white w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default ContactSection;
