import React, { useState } from 'react'
import { CheckCircle, ShieldCheck, Building2, Send, Sparkles, Phone, Mail, MapPin } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { Modal } from '@/components/ui/Modal'
import { SchoolAffiliationForm } from '@/types'

export const JoinICCPage: React.FC = () => {
  const [formData, setFormData] = useState<SchoolAffiliationForm>({
    schoolName: '',
    contactPerson: '',
    phoneNumber: '',
    campusAddress: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false)
  const [errors, setErrors] = useState<Partial<SchoolAffiliationForm>>({})

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof SchoolAffiliationForm]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const validate = () => {
    const newErrors: Partial<SchoolAffiliationForm> = {}
    if (!formData.schoolName.trim()) newErrors.schoolName = 'School name is required'
    if (!formData.contactPerson.trim()) newErrors.contactPerson = 'Contact person name is required'
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required'
    } else if (!/^\+?[\d\s-]{10,}$/.test(formData.phoneNumber.trim())) {
      newErrors.phoneNumber = 'Please enter a valid phone number'
    }
    if (!formData.campusAddress.trim()) newErrors.campusAddress = 'Campus address is required'
    return newErrors
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setIsSubmitting(true)
    // Simulate API submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccessModalOpen(true)
      setFormData({
        schoolName: '',
        contactPerson: '',
        phoneNumber: '',
        campusAddress: '',
        message: '',
      })
    }, 800)
  }

  const benefits = [
    {
      id: '01',
      title: 'BUILD A CRICKET COMMUNITY',
      desc: 'Create and support a lively, structured cricket environment within your school campus from grade school upward.',
    },
    {
      id: '02',
      title: 'IDENTIFY YOUNG TALENT',
      desc: 'Spot student passion, natural hand-eye coordination, and bowling action early to provide timely guidance.',
    },
    {
      id: '03',
      title: 'EQUIPMENT & MATCH KITS',
      desc: 'Receive standardized cricket kits, protective equipment, and match apparel endorsed by ICC.',
    },
    {
      id: '04',
      title: 'INTER-SCHOOL FIXTURES',
      desc: 'Participate in official tournaments, weekend bilateral leagues, and the annual Aries Sailors Cup.',
    },
  ]

  return (
    <div className="pt-28 pb-20">
      {/* Hero Header */}
      <section className="relative py-16 lg:py-24 overflow-hidden border-b border-white/10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-[#4EDEA3]/10 blur-[150px] pointer-events-none" />

        <Container size="xl" className="relative z-10 text-center max-w-4xl mx-auto space-y-6">
          <Badge variant="emerald">INDYWOOD CRICKET CLUB - INSTITUTIONAL PARTNERSHIP</Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase font-display">
            Bring Cricket Into Your School
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto">
            Create an ICC Cricket Club in your school and give students meaningful opportunities to participate, develop their athletic skills, compete and gain greater exposure through cricket.
          </p>
          <div className="pt-2">
            <a href="#affiliate-form">
              <Button size="lg" variant="primary">
                <span>START AN ICC CRICKET CLUB</span>
              </Button>
            </a>
          </div>
        </Container>
      </section>

      {/* Institutional Impact Section */}
      <section className="py-20 bg-[#060D24]">
        <Container size="xl">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <Badge variant="slate">INSTITUTIONAL IMPACT</Badge>
            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight font-display">
              WHY SHOULD YOUR SCHOOL JOIN ICC
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              ICC works hand-in-hand with schools to create cricket communities, identify young talent, and provide students with meaningful opportunities to develop through the sport.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {benefits.map((b) => (
              <Card key={b.id} glow className="bg-[#141A32] border-white/10 flex flex-col justify-between">
                <div>
                  <span className="text-3xl font-black text-[#4EDEA3] font-display block mb-4">
                    {b.id}
                  </span>
                  <h3 className="text-base font-bold text-white mb-2">{b.title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">{b.desc}</p>
                </div>
                <div className="mt-6 pt-3 border-t border-white/5 text-[11px] font-semibold text-slate-400">
                  Included in Partnership
                </div>
              </Card>
            ))}
          </div>

          {/* Form Section */}
          <div id="affiliate-form" className="scroll-mt-32 max-w-4xl mx-auto">
            <div className="rounded-3xl bg-gradient-to-b from-[#141A32] to-[#0D1326] border border-white/10 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
              {/* Corner Aura */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#4EDEA3]/10 rounded-full blur-[100px] pointer-events-none" />

              <div className="relative z-10 space-y-8">
                <div className="text-center space-y-3 max-w-2xl mx-auto">
                  <Badge variant="emerald">OFFICIAL SCHOOL AFFILIATION</Badge>
                  <h2 className="text-3xl sm:text-4xl font-black text-white uppercase font-display">
                    START AN ICC CRICKET CLUB
                  </h2>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Interested in bringing Indywood Cricket Club to your school? Share your school details with us and our sports operations team will get in touch with you within 24 hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Input
                      id="schoolName"
                      name="schoolName"
                      label="School Name *"
                      placeholder="e.g. St. Thomas Higher Secondary School"
                      value={formData.schoolName}
                      onChange={handleChange}
                      error={errors.schoolName}
                    />

                    <Input
                      id="contactPerson"
                      name="contactPerson"
                      label="Contact Person Name *"
                      placeholder="e.g. Principal / Sports Director Name"
                      value={formData.contactPerson}
                      onChange={handleChange}
                      error={errors.contactPerson}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Input
                      id="phoneNumber"
                      name="phoneNumber"
                      label="Phone Number *"
                      placeholder="e.g. +91 98460 12345"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      error={errors.phoneNumber}
                    />

                    <Input
                      id="campusAddress"
                      name="campusAddress"
                      label="Full Campus Address *"
                      placeholder="e.g. Kollam / Thiruvananthapuram, Kerala"
                      value={formData.campusAddress}
                      onChange={handleChange}
                      error={errors.campusAddress}
                    />
                  </div>

                  <Textarea
                    id="message"
                    name="message"
                    label="Message or Additional Details (Optional)"
                    placeholder="Tell us about your existing sports grounds, student count, or preferred timeline..."
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                  />

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-xs text-slate-400">
                      <ShieldCheck className="w-4 h-4 text-[#4EDEA3]" />
                      <span>Zero affiliation fee required for initial evaluation</span>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      variant="primary"
                      isLoading={isSubmitting}
                      className="w-full sm:w-auto px-8"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      <span>Submit Application</span>
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Success Modal (Matching Frame 25 / Frame 72 from Figma) */}
      <Modal
        isOpen={isSuccessModalOpen}
        onClose={() => setIsSuccessModalOpen(false)}
        className="text-center"
      >
        <div className="py-4 space-y-6">
          {/* Circular emerald badge matching Frame 66 */}
          <div className="w-20 h-20 mx-auto rounded-full bg-[#4EDEA3]/15 border-2 border-[#4EDEA3]/40 flex items-center justify-center text-[#4EDEA3] shadow-lg shadow-[#4EDEA3]/20">
            <CheckCircle className="w-10 h-10" />
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl font-black text-white font-display uppercase tracking-wide">
              Response Recorded Successfully
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed max-w-md mx-auto">
              Your response has been recorded successfully. Our team will contact you within 24 hours to discuss the next steps for bringing ICC to your school.
            </p>
          </div>

          <div className="pt-4">
            <Button
              variant="primary"
              size="md"
              onClick={() => setIsSuccessModalOpen(false)}
              className="px-8"
            >
              Close Confirmation
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  )
}
