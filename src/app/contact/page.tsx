"use client";

import { useRouter } from "next/navigation";
import NavBar from "@/components/NavBar";
import { Label } from "@radix-ui/react-label";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Page() {
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Show initial toast
    const toastId = toast({
      title: "Sending message...",
      description: "Please wait while we process your request.",
    });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, org }),
      });

      if (response.ok) {
        toast({
          title: "Message sent!",
          description:
            "Thank you for your message. We'll get back to you soon.",
          variant: "default",
        });
        setName("");
        setEmail("");
        setMessage("");
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Error",
        description:
          "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }

    setTimeout(() => {
      router.push("/");
    }, 3000);
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [org, setOrg] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  return (
    <div className="sm:p-3 p-4 flex justify-center">
      <div className="w-[1104px] space-y-4">
        <NavBar />
        <motion.div
          className="box"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.2,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <div className="flex flex-col justify-center items-center">
            <form
              onSubmit={handleSubmit}
              className="space-y-4 justify-center sm:max-w-[500px] w-full border rounded-md sm:p-8 p-4"
            >
              <div>
                <h1 className="font-bold text-2xl">Contact me</h1>
                <p className="smtext-md text-sm">
                  Fill up this quick form to get in touch with me
                </p>
                <p className="smtext-md text-sm">
                  Fields marked with{" "}
                  <span className="text-red-500 font-bold">*</span> are required
                </p>
              </div>
              <div>
                <Label className="font-semibold">
                  <span className="text-red-500">*</span>Name
                </Label>
                <Input
                  type="text"
                  placeholder="Enter Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <Label className="font-semibold">
                  <span className="text-red-500">*</span>Email
                </Label>
                <Input
                  type="email"
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <Label className="font-semibold">
                  <span className="text-red-500">*</span>Message
                </Label>
                <Textarea
                  placeholder="Enter Your Sweet Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>
              <div>
                <Label className="font-semibold">Company/Organization</Label>
                <Input
                  type="text"
                  placeholder="Enter Company name"
                  value={org}
                  onChange={(e) => setOrg(e.target.value)}
                />
              </div>
              <Button type="submit" disabled={isLoading} className="w-full">
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </Button>
              <Toaster />
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
