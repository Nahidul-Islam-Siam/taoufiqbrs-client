import { ContactForm } from '@/components/pages/Contact/contact-Us'
import Contact from '@/components/shared/Contact/Contact'
import CommonHero from '@/components/ui/CommonHero/CommonHero'
import React from 'react'

export default function ContactusPage() {
  return (
    <div>
<CommonHero
        btnTitle="Saveurs Provencales"
        title="Contact Us"
        description="Saveurs Provençales brings you the authentic taste of Provence — delivering fresh, seasonal fruits and vegetables to meet the needs of your business."
      />

      <ContactForm/>
      <Contact />
    </div>
  )
}
