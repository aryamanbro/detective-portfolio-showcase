import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
      toast.success("Message transmitted successfully!");
    }, 500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="animate-fade-in">
          {/* Header */}
          <div className="flex items-center gap-4 mb-12">
            <Link to="/hub">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
            <div>
              <h1 className="detective-title text-4xl font-bold text-foreground">
                REPORT IN
              </h1>
              <p className="typewriter text-muted-foreground mt-2">
                Secure Communication Channel
              </p>
            </div>
          </div>

          {/* Telegram Form */}
          <div className="max-w-2xl mx-auto">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="paper-texture p-8 md:p-12 border-4 border-paper-dark shadow-2xl">
                <div className="border-4 border-primary p-1 mb-8">
                  <div className="border-2 border-primary p-4 bg-primary/10">
                    <h2 className="detective-title text-2xl text-center text-primary">
                      OFFICIAL TELEGRAM
                    </h2>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="detective-title text-sm text-card-foreground mb-2 block">
                      YOUR NAME:
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="typewriter bg-background border-2 border-border"
                      placeholder="Enter your name..."
                    />
                  </div>

                  <div>
                    <label className="detective-title text-sm text-card-foreground mb-2 block">
                      SECURE CHANNEL (EMAIL):
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="typewriter bg-background border-2 border-border"
                      placeholder="your.email@domain.com"
                    />
                  </div>

                  <div>
                    <label className="detective-title text-sm text-card-foreground mb-2 block">
                      THE CASE BRIEF:
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={8}
                      className="typewriter bg-background border-2 border-border resize-none"
                      placeholder="Describe your case in detail..."
                    />
                  </div>

                  <div className="flex justify-center pt-4">
                    <Button 
                      type="submit" 
                      size="lg"
                      className="detective-title px-12 gap-2"
                    >
                      <Send className="w-5 h-5" />
                      TRANSMIT
                    </Button>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t-2 border-muted">
                  <p className="typewriter text-xs text-center text-muted-foreground">
                    All communications are encrypted and confidential
                  </p>
                </div>
              </form>
            ) : (
              <div className="paper-texture p-8 md:p-12 border-4 border-primary shadow-2xl relative overflow-hidden">
                {/* Stamp Effect */}
                <div className="absolute top-8 right-8 transform rotate-12 animate-stamp">
                  <div className="px-8 py-4 border-8 border-secondary rounded-full">
                    <span className="detective-title text-3xl text-secondary">RECEIVED</span>
                  </div>
                </div>

                <div className="text-center pt-20">
                  <h2 className="detective-title text-3xl text-foreground mb-6">
                    MESSAGE RECEIVED
                  </h2>
                  <p className="typewriter text-lg text-card-foreground leading-relaxed mb-8">
                    Thank you for reaching out. Your case brief has been received and will be 
                    reviewed promptly. Expect a response within 24-48 hours via your secure channel.
                  </p>
                  <div className="flex justify-center gap-4">
                    <Link to="/hub">
                      <Button variant="default">
                        Return to Evidence Board
                      </Button>
                    </Link>
                    <Button 
                      variant="outline"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: "", email: "", message: "" });
                      }}
                    >
                      Send Another Message
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
