"use client";

import { FormEvent, useState } from "react";
import { ambientInquiry } from "@/lib/ambient-images";
import { inquiryFormCopy } from "@/lib/constants";
import { AmbientPhotos } from "@/components/ui/AmbientPhotos";
import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "@/components/ui/SectionShell";

export function InquiryForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass =
    "w-full min-h-11 border border-rose/20 bg-charcoal-light/90 px-5 py-3.5 font-body text-base text-ivory backdrop-blur-sm transition-all duration-300 placeholder:text-ivory-muted/50 focus:border-rose/50 focus:outline-none focus:ring-1 focus:ring-rose/30 sm:text-sm";

  return (
    <SectionShell
      id="inquiry"
      tone="black"
      className="border-t border-rose/10"
      atmosphere={<AmbientPhotos images={ambientInquiry} layout="inquiry-split" tone="black" />}
    >
      <div className="section-split items-start">
        <Reveal direction="left" className="section-split-content">
          <p className="text-eyebrow">{inquiryFormCopy.eyebrow}</p>
          <h2 className="section-title mt-4">{inquiryFormCopy.heading}</h2>
          <p className="mt-6 max-w-md font-body text-sm leading-[1.8] text-ivory-muted md:text-base">
            {inquiryFormCopy.body}
          </p>
          <ul className="mt-8 space-y-3 border-l border-rose/20 pl-5">
            {["48-hour response", "Worldwide availability", "Tailored performance packages"].map(
              (item) => (
                <li
                  key={item}
                  className="font-body text-xs uppercase tracking-[0.12em] text-ivory/75"
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </Reveal>

        <Reveal direction="right" delay={120} className="section-split-media">
          {submitted ? (
            <div className="luxury-card border-rose/20 bg-black/50 p-10 text-center backdrop-blur-sm md:p-12">
              <p className="font-display text-3xl text-rose">Thank you.</p>
              <p className="mt-3 font-body text-sm text-ivory-muted">
                Your inquiry has been received. We will be in touch shortly.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="luxury-card space-y-6 border-rose/20 bg-black/50 p-6 backdrop-blur-sm md:p-8"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block font-body text-xs uppercase tracking-[0.15em] text-ivory-muted"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className={inputClass}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block font-body text-xs uppercase tracking-[0.15em] text-ivory-muted"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className={inputClass}
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="event-type"
                    className="mb-2 block font-body text-xs uppercase tracking-[0.15em] text-ivory-muted"
                  >
                    Event Type
                  </label>
                  <select id="event-type" name="eventType" required className={inputClass}>
                    <option value="">Select event type</option>
                    {inquiryFormCopy.eventTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="date"
                    className="mb-2 block font-body text-xs uppercase tracking-[0.15em] text-ivory-muted"
                  >
                    Event Date
                  </label>
                  <input id="date" name="date" type="date" className={inputClass} />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block font-body text-xs uppercase tracking-[0.15em] text-ivory-muted"
                >
                  Event Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className={`${inputClass} resize-none`}
                  placeholder="Tell us about your event, venue, and vision..."
                />
              </div>

              <button type="submit" className="btn-luxury-solid w-full sm:w-auto">
                Submit Inquiry
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </SectionShell>
  );
}
