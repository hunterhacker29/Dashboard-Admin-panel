import React from 'react'
import './sub.css'
export default function Sub() {
  return (
    <>
      <div>
        <main>
    <h1>Join our vibrant community!</h1>
    <p>Unlock exclusive content, insightful perspectives, and valuable resources by subscribing to BlogHub.</p>

    <section class="sub-plans">
        <div class="sub-plan">
            <h2>Basic</h2>
            <p>Essential access for casual readers.</p>
            <ul>
                <li>Monthly updates</li>
                <li>Limited exclusive content</li>
                <li>Community forum access</li>
            </ul>
            <div class="sub-price">₹99/month</div>
            <a href="#" class="button">Subscribe</a>
        </div>

        <div class="sub-plan featured">
            <h2>Pro</h2>
            <p>Premium experience for engaged readers.</p>
            <ul>
                <li>All Basic features</li>
                <li>Weekly in-depth analysis</li>
                <li>Early access to new content</li>
                <li>Member-only Q&A sessions</li>
            </ul>
            <div class="sub-price">₹299/month</div>
            <a href="#" class="button">Subscribe (Most Popular)</a>
        </div>

        <div class="sub-plan">
            <h2>Expert</h2>
            <p>Unmatched value for serious readers.</p>
            <ul>
                <li>All Pro features</li>
                <li>Personalized content recommendations</li>
                <li>Direct access to editors</li>
                <li>Discounts on partner resources</li>
            </ul>
            <div class="sub-price">₹599/month</div>
            <a href="#" class="button">Subscribe</a>
        </div>
    </section>

    <section class="sub-payment">
        <h2>Secure Payment Information</h2>
        <form action="/process-payment" method="POST">
            <label for="name">Name:</label>
            <input type="text" name="name" id="name" required />

            <label for="email">Email:</label>
            <input type="email" name="email" id="email" required />

            <label for="card-number">Card Number:</label>
            <input type="text" name="card-number" id="card-number" required pattern="^\d{16}$" maxLength="16" />

            <label for="expiry-date">Expiry Date:</label>
            <input type="text" name="expiry-date" id="expiry-date" required pattern="^\d{2}\/\d{2}$" maxLength="5" />

            <label for="cvv">CVV:</label>
            <input type="text" name="cvv" id="cvv" required pattern="^\d{3}$" maxLength="3" />

            <button type="submit">Subscribe Now</button>
        </form>
    </section>

    <section class="sub-guarantee">
        <h2>Satisfaction Guaranteed</h2>
        <p>We're confident you'll love your BlogHub subscription. If you're not completely satisfied within the first 30 days, simply cancel and receive a full refund.</p>
    </section>
</main>

<footer>
    <p>&copy; 2024 BlogHub. All rights reserved.</p>
</footer>
      </div>
    </>
  );
}

// export default Sub
