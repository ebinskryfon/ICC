import React, { useState } from 'react'
import { Flame, Trophy, ShieldCheck, CheckCircle, AlertCircle, ArrowUpRight, Calendar, MapPin, Zap } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { Modal } from '@/components/ui/Modal'
import { VibeBhavRegistrationForm } from '@/types'

export const VibeBhavPage: React.FC = () => {
  const [formData, setFormData] = useState<VibeBhavRegistrationForm>({
    fullName: '',
    dob: '',
    address: '',
    phone: '',
    guardianContact: '',
    experience: '',
    category: 'Under 17',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false)
  const [errors, setErrors] = useState<Partial<VibeBhavRegistrationForm>>({})

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof VibeBhavRegistrationForm]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const validate = () => {
    const newErrors: Partial<VibeBhavRegistrationForm> = {}
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required'
    if (!formData.dob.trim()) newErrors.dob = 'Date of birth is required'
    if (!formData.phone.trim()) {
      newErrors.phone = 'Contact number is required'
    } else if (!/^\+?[\d\s-]{10,}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number'
    }
    if (!formData.guardianContact.trim()) {
      newErrors.guardianContact = 'Parent/Guardian contact is required'
    }
    if (!formData.address.trim()) newErrors.address = 'Address is required'
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
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccessModalOpen(true)
      setFormData({
        fullName: '',
        dob: '',
        address: '',
        phone: '',
        guardianContact: '',
        experience: '',
        category: 'Under 17',
      })
    }, 800)
  }

  const rules = [
    {
      title: 'Scoring & Winner Determination',
      content:
        'The participant who hits the highest number of sixes in a single over will be declared the winner in each category. In the event of a tie, a Super Over will be conducted among the tied participants.',
    },
    {
      title: 'Over & Delivery Specifications',
      content:
        'Each batter faces exactly 6 legal deliveries. Wides and no-balls will be re-bowled. Deliveries are bowled by calibrated bowling machines or tournament-approved pacers at regulation speeds.',
    },
    {
      title: 'Safety Gear & Bats',
      content:
        'Full protective gear is mandatory: helmet with grill, batting pads, gloves, and abdominal guard. Players may use their personal regulation willow bats or tournament-approved equipment.',
    },
    {
      title: 'Category Divisions',
      content:
        'Four competitive tiers: Under 14, Under 17, Under 19, and Open Category. Age proof (Aadhaar or School ID) must be produced during physical check-in at the ground.',
    },
    {
      title: 'Registration Fee & Spot Check-In',
      content:
        '₹500 registration fee per batter, to be paid in person at the venue check-in desk on tournament morning. Spots are strictly capped at 150 batters per zone.',
    },
  ]

  return (
    <div className="pt-28 pb-20">
      {/* Hero Header */}
      <section className="relative py-16 lg:py-24 overflow-hidden border-b border-white/10">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-rose-500/10 blur-[150px] pointer-events-none" />
        <div className="absolute top-10 left-10 w-96 h-96 bg-[#4EDEA3]/10 blur-[150px] pointer-events-none" />

        <Container size="xl" className="relative z-10 text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2">
            <Badge variant="emerald">INDYWOOD CRICKET PRESENTS</Badge>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-rose-500/15 text-rose-400 border border-rose-500/30 uppercase flex items-center gap-1">
              <Flame className="w-3.5 h-3.5" /> High Octane Challenge
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight uppercase font-display">
            VIBE-BHAV SIXES CHALLENGE
          </h1>
          <p className="text-xl sm:text-2xl font-bold text-[#4EDEA3]">
            Six Balls, Maximum Sixes. One Chance to Shine.
          </p>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto">
            Vibe-Bhav is an electrifying six-hit cricket showdown where young players get six deliveries to showcase their power, timing, and batting ability. Every ball is an opportunity to go big and compete with confidence on the cricket field.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a href="#register">
              <Button size="lg" variant="primary" className="shadow-xl shadow-[#4EDEA3]/20">
                <span>REGISTER NOW</span>
                <ArrowUpRight className="w-5 h-5 ml-1" />
              </Button>
            </a>
            <a href="#rules">
              <Button size="lg" variant="outline">
                <span>VIEW RULES & DIRECTIVES</span>
              </Button>
            </a>
          </div>

          <div className="inline-flex items-center gap-3 bg-[#141A32] border border-white/10 px-5 py-2.5 rounded-full text-xs font-semibold text-slate-300 mt-4">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping" />
            <span>Phase 1 Completed at Trivandrum • Upcoming across 6 States of India</span>
          </div>
        </Container>
      </section>

      {/* Rules & Regulations Section (Frame 72 in Figma) */}
      <section id="rules" className="py-20 bg-[#060D24] scroll-mt-24">
        <Container size="xl">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <Badge variant="slate">OFFICIAL DIRECTIVES</Badge>
            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight font-display">
              RULES & REGULATIONS
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              One Over, Six Balls, Unlimited Glory. Please read the competition rules and participation requirements carefully before registering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 max-w-6xl mx-auto">
            {rules.map((rule, idx) => (
              <Card key={idx} glow className="bg-[#141A32] border-white/10 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black text-[#4EDEA3] font-display">
                    0{idx + 1}
                  </span>
                  <ShieldCheck className="w-5 h-5 text-slate-400" />
                </div>
                <h3 className="text-lg font-bold text-white">{rule.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{rule.content}</p>
              </Card>
            ))}

            {/* Registration note card */}
            <div className="rounded-2xl bg-gradient-to-br from-rose-950/40 via-[#181E36] to-[#141A32] border border-rose-500/30 p-6 flex flex-col justify-between shadow-xl">
              <div>
                <span className="text-xs font-bold text-rose-400 uppercase tracking-widest block mb-2">
                  LIMITED CAPACITY
                </span>
                <h3 className="text-lg font-bold text-white mb-2">
                  150 Batters Cap per Zone
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  Registrations close automatically once 150 confirmed slots are filled. Early online pre-registration reserves your over time-slot.
                </p>
              </div>
              <div className="p-3 bg-black/40 rounded-xl border border-white/5 text-xs text-[#FFCE31] font-semibold">
                Entry Fee: ₹500 (Payable at venue)
              </div>
            </div>
          </div>

          {/* Registration Form (Desktop - 3 in Figma) */}
          <div id="register" className="scroll-mt-32 max-w-4xl mx-auto">
            <div className="rounded-3xl bg-gradient-to-b from-[#141A32] to-[#0A1024] border border-white/10 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-rose-500/10 rounded-full blur-[100px] pointer-events-none" />

              <div className="relative z-10 space-y-8">
                <div className="text-center space-y-3 max-w-2xl mx-auto">
                  <Badge variant="emerald">PLAYER ONBOARDING</Badge>
                  <h2 className="text-3xl sm:text-4xl font-black text-white uppercase font-display">
                    REGISTER FOR VIBE-BHAV SIXES
                  </h2>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Complete your pre-registration below. ₹500 registration fee to be paid in person at the venue check-in desk.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Input
                      id="fullName"
                      name="fullName"
                      label="Full Name *"
                      placeholder="e.g. Rahul Nair"
                      value={formData.fullName}
                      onChange={handleChange}
                      error={errors.fullName}
                    />

                    <Input
                      id="dob"
                      name="dob"
                      label="Date of Birth *"
                      type="date"
                      value={formData.dob}
                      onChange={handleChange}
                      error={errors.dob}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Input
                      id="phone"
                      name="phone"
                      label="Player Phone Number *"
                      placeholder="e.g. +91 98460 12345"
                      value={formData.phone}
                      onChange={handleChange}
                      error={errors.phone}
                    />

                    <Input
                      id="guardianContact"
                      name="guardianContact"
                      label="Parent / Guardian Contact *"
                      placeholder="e.g. +91 98460 67890"
                      value={formData.guardianContact}
                      onChange={handleChange}
                      error={errors.guardianContact}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 tracking-wider uppercase mb-2">
                        Competition Category *
                      </label>
                      <select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full rounded-xl bg-[#181E36] border border-white/10 px-4 py-3 text-sm text-white focus:border-[#4EDEA3] focus:outline-none"
                      >
                        <option value="Under 14">Under 14 (School Level)</option>
                        <option value="Under 17">Under 17 (Zonal / High School)</option>
                        <option value="Under 19">Under 19 (Junior State)</option>
                        <option value="Open Category">Open Category (All Ages)</option>
                      </select>
                    </div>

                    <Input
                      id="experience"
                      name="experience"
                      label="Cricketing Experience (Optional)"
                      placeholder="e.g. School Captain, District U16, Academy Player"
                      value={formData.experience}
                      onChange={handleChange}
                    />
                  </div>

                  <Textarea
                    id="address"
                    name="address"
                    label="Player Address / District *"
                    placeholder="Enter full residential address or district / school details..."
                    rows={3}
                    value={formData.address}
                    onChange={handleChange}
                    error={errors.address}
                  />

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-xs text-slate-400">
                      * ₹500 fee collected at venue check-in after identity verification.
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      variant="primary"
                      isLoading={isSubmitting}
                      className="w-full sm:w-auto px-8"
                    >
                      <Zap className="w-4 h-4 mr-2 text-[#060D24]" />
                      <span>Confirm Player Registration</span>
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Confirmation Modal */}
      <Modal
        isOpen={isSuccessModalOpen}
        onClose={() => setIsSuccessModalOpen(false)}
        className="text-center"
      >
        <div className="py-4 space-y-6">
          <div className="w-20 h-20 mx-auto rounded-full bg-[#4EDEA3]/15 border-2 border-[#4EDEA3]/40 flex items-center justify-center text-[#4EDEA3] shadow-lg shadow-[#4EDEA3]/20">
            <CheckCircle className="w-10 h-10" />
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl font-black text-white font-display uppercase tracking-wide">
              Registration Slot Reserved
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed max-w-md mx-auto">
              Your details for the Vibe-Bhav Sixes Challenge have been recorded! Please arrive 45 minutes prior to the scheduled over time with your valid ID and the ₹500 venue entry fee.
            </p>
          </div>

          <div className="pt-4">
            <Button
              variant="primary"
              size="md"
              onClick={() => setIsSuccessModalOpen(false)}
              className="px-8"
            >
              Great, Got It!
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  )
}
