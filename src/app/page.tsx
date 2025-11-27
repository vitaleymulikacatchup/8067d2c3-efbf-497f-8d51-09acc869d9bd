"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Coffee, Star } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="background-highlight"
      borderRadius="sharp"
      contentWidth="medium"
      sizing="medium"
      background="circleGradient"
      cardStyle="glass-depth"
      primaryButtonStyle="flat"
      secondaryButtonStyle="radial-glow"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          brandName="Coffee Haven"
          navItems={[
            { name: "Home", id: "home" },
            { name: "About", id: "about" },
            { name: "Menu", id: "products" },
            { name: "Testimonials", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          button={{ text: "Visit Us", href: "contact" }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardScroll
          title="Craft Your Perfect Cup"
          description="Discover artisanal coffee crafted with passion and served with genuine care. Every sip tells a story."
          tag="Premium Coffee Experience"
          tagIcon={Coffee}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764243872026-a9bw91km.jpg"
          imageAlt="Modern coffee shop with warm lighting"
          buttons={[
            { text: "View Menu", href: "products" },
            { text: "Reserve Table", href: "contact" }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="Our Story"
          description={[
            "Coffee Haven began as a simple dream: to create a sanctuary where coffee lovers could gather and experience the finest specialty coffee. We source our beans directly from sustainable farms across the globe, ensuring every cup supports both quality and ethical practices.",
            "Our expert baristas are trained in advanced brewing techniques and coffee science. We believe in transparency, sustainability, and building a community around the art of coffee. When you visit us, you're not just getting a beverage—you're joining a movement.",
            "Founded in 2015, we've grown from a small corner café to a beloved neighborhood destination. Yet our core values remain unchanged: passion for quality, respect for craftsmanship, and genuine care for our customers."
          ]}
          showBorder={true}
          buttons={[
            { text: "Learn More", href: "#" }
          ]}
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardOne
          title="Featured Menu"
          description="Explore our signature drinks and specialty selections crafted by our skilled baristas"
          tag="Popular Drinks"
          tagIcon={Star}
          products={[
            {
              id: "1",
              name: "Single Origin Espresso",
              price: "$4.50",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764243875407-kbwx3tul.jpg",
              imageAlt: "Freshly pulled espresso shot"
            },
            {
              id: "2",
              name: "Signature Cappuccino",
              price: "$5.75",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764243876421-ntxnu788.jpg",
              imageAlt: "Cappuccino with latte art"
            },
            {
              id: "3",
              name: "Cold Brew Reserve",
              price: "$6.00",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764243877912-g3qla202.jpg",
              imageAlt: "Smooth cold brew over ice"
            }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          textboxLayout="default"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Customers Love"
          description="Real feedback from our coffee community"
          tag="Customer Reviews"
          testimonials={[
            {
              id: "1",
              name: "Sarah Mitchell",
              role: "Coffee Enthusiast",
              company: "Tech Professional",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764243879285-xnqcnwt2.jpg",
              imageAlt: "Portrait of Sarah Mitchell"
            },
            {
              id: "2",
              name: "James Chen",
              role: "Regular Customer",
              company: "Architect",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764243880899-lsc83hs6.jpg",
              imageAlt: "Portrait of James Chen"
            },
            {
              id: "3",
              name: "Maria Rodriguez",
              role: "Coffee Connoisseur",
              company: "Food Writer",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764243882836-iaqd2x9d.jpg",
              imageAlt: "Portrait of Maria Rodriguez"
            },
            {
              id: "4",
              name: "David Thompson",
              role: "Business Owner",
              company: "Local Entrepreneur",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764243884073-1b3lv0kz.jpg",
              imageAlt: "Portrait of David Thompson"
            }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          textboxLayout="default"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Find answers to common questions about our coffee and café"
          tag="Help & Support"
          faqs={[
            {
              id: "1",
              title: "What coffee beans do you use?",
              content: "We source single-origin and specialty blend coffee beans from sustainable farms across Ethiopia, Colombia, Costa Rica, and Indonesia. Each bean is carefully selected for its unique flavor profile and roasted in-house to ensure freshness."
            },
            {
              id: "2",
              title: "Do you offer decaffeinated options?",
              content: "Yes! We offer decaffeinated versions of most of our espresso-based drinks. Our decaf is water-processed for maximum flavor retention."
            },
            {
              id: "3",
              title: "Are there dairy-free milk options?",
              content: "Absolutely. We offer almond, oat, soy, and coconut milk options for all our drinks. Our oat milk is particularly popular as it froths beautifully."
            },
            {
              id: "4",
              title: "Can I reserve a table in advance?",
              content: "Yes, we accept reservations for groups of 6 or more. You can reserve through our contact form or call us directly during business hours."
            },
            {
              id: "5",
              title: "Do you have WiFi and outlets?",
              content: "We have high-speed WiFi throughout the café and plenty of power outlets at our tables. Perfect for working or studying."
            }
          ]}
          textboxLayout="default"
          animationType="smooth"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Get In Touch"
          description="Have questions or want to make a reservation? We'd love to hear from you. Reach out anytime, and our team will respond within 24 hours."
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Your Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Your Email",
              required: true
            },
            {
              name: "phone",
              type: "tel",
              placeholder: "Phone Number",
              required: false
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us how we can help...",
            rows: 5,
            required: true
          }}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764243885997-2e8wl9p6.jpg"
          imageAlt="Cozy coffee shop interior"
          mediaPosition="right"
          buttonText="Send Message"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Coffee Haven"
          columns={[
            {
              items: [
                { label: "Home", href: "home" },
                { label: "About Us", href: "about" },
                { label: "Menu", href: "products" }
              ]
            },
            {
              items: [
                { label: "Contact", href: "contact" },
                { label: "Reservations", href: "contact" },
                { label: "Careers", href: "#" }
              ]
            },
            {
              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms & Conditions", href: "#" },
                { label: "Sustainability", href: "#" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}