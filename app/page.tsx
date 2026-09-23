"use client";

import Image from "next/image";
import { useState } from "react";
import type { FormEvent } from "react";

const cakePhotos = [
  { src: "/images/cake-floral.jpg", alt: "White tiered cake decorated with pastel flowers" },
  { src: "/images/cake-photo.jpg", alt: "White celebration cake decorated with a black ribbon and a photo" },
  { src: "/images/cake-yellow.jpg", alt: "Yellow celebration cake decorated with flowers and butterflies" },
  { src: "/images/cake-lemon-blue.jpg", alt: "Blue and white tiled custom cake decorated with lemon and flowers" },
];

const cakeFlavors = [
  "Vanilla",
  "Chocolate",
  "Almond",
  "Wedding blend",
  "Coconut",
  "Carrot",
  "Red velvet",
  "Funfetti",
  "Lemon",
  "Cookies & cream",
  "Mojito",
];

const buttercreamFlavors = [
  "Vanilla",
  "Almond",
  "Pineapple",
  "Chocolate",
  "Nutella",
  "Coconut",
  "Raspberry",
  "Lemon",
  "Wedding",
];

const fillings = [
  "Dulce de leche",
  "Strawberry jam",
  "Raspberry jam",
  "Lemon curd",
  "Guava",
  "Passion fruit curd",
  "Cookies & cream",
  "Oreo",
];

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Loopsy Cakes home">
          <span className="brand-name">Loopsy</span>
          <span className="brand-sub">CUSTOM CAKES & DESSERTS</span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#cakes">Cakes</a>
          <a href="#flavors">Flavors</a>
          <a href="#ordering">How to order</a>
        </nav>
        <a className="button button-small header-cta" href="#inquiry">
          Start an order
        </a>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero-copy">
          <h1 id="hero-title">A little cake magic for your big day.</h1>
          <p className="hero-intro">
            From the first idea to the last slice, every Loopsy cake is made with care and quality ingredients.
          </p>
          <a className="button" href="#inquiry">Tell us what you’re celebrating</a>
          <p className="hero-note">Made with love, for every occasion <span aria-hidden="true">♡</span></p>
        </div>
        <div className="hero-photo-field" aria-label="Custom cake photographs">
          <div className="hero-collage">
            <figure className="hero-photo hero-photo-wedding">
              <Image src="/images/hero-wedding.jpg" alt="White tiered wedding cake decorated with delicate flowers" fill priority unoptimized sizes="(max-width: 760px) 58vw, 354px" />
            </figure>
            <figure className="hero-photo hero-photo-moon">
              <Image src="/images/hero-moon.jpg" alt="White cake with a crescent moon topper and cloud decorations" fill unoptimized sizes="(max-width: 760px) 40vw, 212px" />
            </figure>
            <figure className="hero-photo hero-photo-graduation">
              <Image src="/images/hero-graduation.jpg" alt="White graduation cake with black ribbon and cap" fill unoptimized sizes="(max-width: 760px) 40vw, 212px" />
            </figure>
          </div>
        </div>
      </section>

      <section className="intro-band" aria-label="Loopsy Cakes introduction">
        <span>Custom cakes & desserts</span>
        <span className="intro-heart" aria-hidden="true">♡</span>
        <span>Se habla español</span>
        <span className="intro-heart" aria-hidden="true">♡</span>
        <span>Made fresh, never from a box</span>
      </section>

      <section className="section gallery-section" id="cakes" aria-labelledby="cakes-title">
        <div className="section-heading gallery-heading">
          <div>
            <h2 id="cakes-title">Cakes made to feel like <em>yours.</em></h2>
          </div>
          <p className="section-aside">Your idea, your colors, your moment. Every design starts with the celebration you have in mind.</p>
        </div>
        <div className="cake-gallery">
          {cakePhotos.map((photo) => (
            <figure className="gallery-item" key={photo.src}>
              <Image src={photo.src} alt={photo.alt} fill unoptimized sizes="(max-width: 700px) 50vw, 25vw" />
            </figure>
          ))}
        </div>
        <a className="text-link" href="#inquiry">Have a cake in mind? Start your request</a>
      </section>

      <section className="flavor-section" id="flavors" aria-labelledby="flavors-title">
        <div className="flavor-intro">
          <h2 id="flavors-title">Pick your <em>favorite</em> flavors.</h2>
          <p>Choose a cake, buttercream and filling for a combination that feels just right. Ask about a flavor you don’t see here.</p>
          <span className="flavor-doodle" aria-hidden="true">♡</span>
        </div>
        <div className="flavor-lists">
          <div className="flavor-list">
            <div className="flavor-list-title"><span>01</span><h3>Cake</h3></div>
            <ul>{cakeFlavors.map((flavor) => <li key={flavor}>{flavor}</li>)}</ul>
          </div>
          <div className="flavor-list">
            <div className="flavor-list-title"><span>02</span><h3>Buttercream</h3></div>
            <ul>{buttercreamFlavors.map((flavor) => <li key={flavor}>{flavor}</li>)}</ul>
          </div>
          <div className="flavor-list flavor-list-fillings">
            <div className="flavor-list-title"><span>03</span><h3>Fillings</h3></div>
            <ul>{fillings.map((flavor) => <li key={flavor}>{flavor}</li>)}</ul>
          </div>
        </div>
      </section>

      <section className="order-section section" id="ordering" aria-labelledby="ordering-title">
        <div className="section-heading order-heading">
          <div>
            <h2 id="ordering-title">How to order your <em>custom cake.</em></h2>
          </div>
          <p className="section-aside">Give us at least 7 days’ notice. Need it sooner? Get in touch and we’ll see what we can do.</p>
        </div>
        <div className="steps">
          <article className="step">
            <span className="step-number">01</span>
            <h3>Share your idea</h3>
            <p>Tell us the date, size, flavors and details you have in mind. Reference photos are welcome.</p>
          </article>
          <article className="step">
            <span className="step-number">02</span>
            <h3>Confirm the details</h3>
            <p>We’ll review your request and follow up to confirm availability and your cake details.</p>
          </article>
          <article className="step">
            <span className="step-number">03</span>
            <h3>Place your deposit</h3>
            <p>A 50% non refundable deposit confirms your order. We’ll share a payment link or another option.</p>
          </article>
          <article className="step">
            <span className="step-number">04</span>
            <h3>Celebrate!</h3>
            <p>Pick up your cake or share a delivery address in your request, if delivery is needed.</p>
          </article>
        </div>
        <a className="button" href="#inquiry">Start your cake request</a>
      </section>

      <section className="trust-section" aria-labelledby="trust-title">
        <div className="trust-copy">
          <h2 id="trust-title">Beautiful cakes. <em>Carefully made.</em></h2>
          <p>Food safety and your peace of mind matter. Loopsy Cakes is licensed, fully insured, ServSafe certified and allergen certified.</p>
          <a className="text-link" href="https://www.instagram.com/loopsy_cakes/" target="_blank" rel="noreferrer">See more on Instagram</a>
        </div>
        <div className="trust-seals" aria-label="Loopsy Cakes credentials">
          <div className="trust-seal"><span aria-hidden="true">✓</span><strong>ServSafe</strong><small>certified</small></div>
          <div className="trust-seal"><span aria-hidden="true">✓</span><strong>Allergen</strong><small>certified</small></div>
          <div className="trust-seal"><span aria-hidden="true">✓</span><strong>Licensed</strong><small>business</small></div>
          <div className="trust-seal"><span aria-hidden="true">✓</span><strong>Fully</strong><small>insured</small></div>
        </div>
      </section>

      <section className="inquiry-section" id="inquiry" aria-labelledby="inquiry-title">
        <div className="inquiry-copy">
          <h2 id="inquiry-title">Tell us about your <em>cake.</em></h2>
          <p>Share the details below to get started. Your request is not confirmed until availability and the deposit are arranged.</p>
          <div className="notice-card">
            <span className="notice-heart" aria-hidden="true">♡</span>
            <p><strong>Please order at least 7 days in advance.</strong><br />A 50% non refundable deposit is required to confirm your order.</p>
          </div>
          <p className="spanish-note">¿Prefieres español? <a href="https://www.instagram.com/loopsy_cakes/" target="_blank" rel="noreferrer">Escríbenos por Instagram</a></p>
        </div>

        <form className="inquiry-form" onSubmit={handleSubmit}>
          <div className="form-topline"><span>Custom cake request</span><span>♡</span></div>
          <div className="form-grid">
            <label>First name<input name="firstName" autoComplete="given-name" required /></label>
            <label>Last name<input name="lastName" autoComplete="family-name" required /></label>
            <label className="form-wide">Phone number<input type="tel" name="phone" autoComplete="tel" required /></label>
            <label>Event date<input type="date" name="date" required /></label>
            <label>Pickup or delivery time<input type="time" name="time" required /></label>
            <label>Serving size<input name="servings" placeholder="For example, 20 servings" required /></label>
            <label>Pickup or delivery<select name="fulfillment" defaultValue="pickup"><option value="pickup">Pickup</option><option value="delivery">Delivery</option></select></label>
            <label className="form-wide">Delivery address, if applicable<input name="address" autoComplete="street-address" /></label>
            <label>Cake flavor<select name="cakeFlavor" defaultValue=""><option value="" disabled>Choose a flavor</option>{cakeFlavors.map((flavor) => <option key={flavor}>{flavor}</option>)}</select></label>
            <label>Filling<select name="filling" defaultValue=""><option value="" disabled>Choose a filling</option>{fillings.map((flavor) => <option key={flavor}>{flavor}</option>)}</select></label>
            <label className="form-wide">Frosting or other notes<textarea name="notes" rows={3} placeholder="Colors, decorations, changes or other details" /></label>
            <label className="form-wide upload-label">Reference photos <span className="optional-label">Optional</span><input type="file" name="references" accept="image/*" multiple onChange={(event) => setFileName(Array.from(event.target.files ?? []).map((file) => file.name).join(", "))} /><span className="upload-help">{fileName || "Add photos that help show the look you have in mind."}</span></label>
          </div>
          <p className="form-preview-note">This preview form is not connected to the bakery yet. It shows the details the final inquiry form can collect.</p>
          <button className="button form-submit" type="submit">Send cake inquiry</button>
          {submitted && <p className="form-success" role="status">Thanks! Your request looks ready. Since this is a demo, it hasn’t been sent to the bakery.</p>}
        </form>
      </section>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#top" aria-label="Loopsy Cakes home">
          <span className="brand-name">Loopsy</span>
          <span className="brand-sub">CUSTOM CAKES & DESSERTS</span>
        </a>
        <p>Made with love, for every occasion <span aria-hidden="true">♡</span></p>
        <div className="footer-links">
          <a href="https://www.instagram.com/loopsy_cakes/" target="_blank" rel="noreferrer">Instagram @loopsy_cakes</a>
          <a href="#inquiry">Order inquiry</a>
        </div>
        <small>© {new Date().getFullYear()} Loopsy Cakes</small>
      </footer>
    </main>
  );
}
