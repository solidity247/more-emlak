"use client"

import { HeroSection } from "@/components/landing/hero-section"
import { HotOffersSection } from "@/components/landing/hot-offers-section"
import { CitySection } from "@/components/landing/city-section"
import { FounderSection } from "@/components/landing/founder-section"
import { TourSection } from "@/components/landing/tour-section"
import { CatalogCtaSection } from "@/components/landing/catalog-cta-section"
import { VideosSection } from "@/components/landing/videos-section"
import { WhyMersinSection } from "@/components/landing/why-mersin-section"
import { WhyUsSection } from "@/components/landing/why-us-section"
import { AboutSection } from "@/components/landing/about-section"
import { ContactCtaSection } from "@/components/landing/contact-cta-section"
import { GuideSection } from "@/components/landing/guide-section"
import { TeamSection } from "@/components/landing/team-section"
import { MersinTextSection } from "@/components/landing/mersin-text-section"
import { FaqSection } from "@/components/landing/faq-section"
import { ByeSection } from "@/components/landing/bye-section"

export default function Home() {
  return (
    <>
      <HeroSection />
      <HotOffersSection />
      <CitySection />
      <FounderSection />
      <TourSection />
      <CatalogCtaSection />
      <VideosSection />
      <WhyMersinSection />
      <WhyUsSection />
      <AboutSection />
      <ContactCtaSection />
      <GuideSection />
      <TeamSection />
      <MersinTextSection />
      <FaqSection />
      <ByeSection />
    </>
  )
}
