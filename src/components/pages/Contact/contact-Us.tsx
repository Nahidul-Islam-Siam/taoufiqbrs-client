"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { toast } from "sonner"

export function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here (e.g., send to API)
    console.log("Form submitted:", formData)
    toast.success("Your message has been sent successfully!")
    // Reset form
    setFormData({ fullName: "", email: "", subject: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="max-w-7xl mx-auto py-8 p-2 ">
      <div className="grid lg:grid-cols-2 gap-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Left side - Map and heading (vertically centered) */}
        <div className="flex flex-col justify-center space-y-6">
          <h1 className="text-3xl font-bold text-[#328736] mb-2">
            Have Questions? Reach Out to Us
          </h1>

          {/* Map placeholder */}
          <Card className="h-64 overflow-hidden rounded-lg">
            <CardContent className="p-0 h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1234567890123!2d-74.0059413!3d40.7127753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjAiTiA3NMKwMDAnMjEuNCJX!5e0!3m2!1sen!2sus!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              />
            </CardContent>
          </Card>
        </div>

        {/* Right side - Contact form */}
        <Card className="shadow-lg">
          <CardContent className="p-8">
            <h2 className="text-2xl font-semibold mb-6 text-center">Get in touch</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium mb-2">
                  Full Name*
                </label>
                <Input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="Enter your name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email*
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject*
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message*
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Write about your message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full min-h-[120px] resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 rounded-lg transition-colors duration-200"
              >
                Send Now
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}