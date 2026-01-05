import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Bell, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
const apiUrl = import.meta.env.VITE_CONT_CONN;
interface NotifyModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
}

export function NotifyModal({ isOpen, onClose, productName }: NotifyModalProps) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  // 1. Start loading state
  setIsSubmitting(true);
  
  
  const url = apiUrl;

  fetch(url, {
    method: "POST",
    mode: "no-cors", // Required for Google Scripts to bypass CORS
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `Product=${encodeURIComponent(productName)}&Email=${encodeURIComponent(email)}`
  })
    .then(() => {
      // 2. Success Logic: ONLY happens after the request finishes
      toast({
        title: "Message Sent! 🎉",
        description: "You will be notified when "+""+productName+" is live.",
      });
      
      setIsSubmitting(true);
      setEmail("");
    })
    .catch((error) => {
      // 3. Error Logic
      toast({
        title: "Message Failed!",
        description: "Something went wrong. Please try again.",
        variant: "destructive"
      });
      console.error(error);
    })
    .finally(() => {
      // 4. Always turn off the spinner regardless of success or failure
      setIsSubmitting(false);
      onClose();
    });
};

  return (
    <AnimatePresence>
  {isOpen && (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* 1. Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-background/80 backdrop-blur-sm"
      />
      
      {/* 2. Modal Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        // Remove the -translate-x-1/2 classes from here
        className="relative z-50 w-full max-w-md pointer-events-none"
      >
        {/* 3. The Actual Card */}
        <div className="bg-card border border-border rounded-2xl shadow-card p-6 pointer-events-auto">
          {/* ... Close Button and Form Content Stay the Same ... */}
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-lg hover:bg-secondary transition-colors"
          >
            <X className="h-4 w-4" />
          </button>

              {/* Content */}
              <div className="text-center mb-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-primary flex items-center justify-center">
                  <Bell className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2">Get Notified</h3>
                <p className="text-muted-foreground text-sm">
                  Be the first to know when <span className="font-medium text-foreground">{productName}</span> launches.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-12"
                />
                <Button 
                  type="submit" 
                  className="w-full h-12 bg-gradient-primary text-primary-foreground hover:opacity-90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Subscribing..."
                  ) : (
                    <>
                      <Sparkles className="h-4 w-4 mr-2" />
                      Notify Me
                    </>
                  )}
                </Button>
              </form>

              <p className="text-xs text-muted-foreground text-center mt-4">
                No spam, ever. Unsubscribe anytime.
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
