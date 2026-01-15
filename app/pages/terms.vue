<template>
  <div>
    <main class="policy">
      <div class="policy__header">
        <img
          src="/logo.png"
          alt="ClipShoot logo"
          class="policy__logo"
          width="84"
          height="84"
        />
        <div>
          <p class="eyebrow">ClipShoot – App Mockups & Design</p>
          <h1>Terms of Service</h1>
          <p class="policy__tagline">
            Welcome to ClipShoot. By using our tool, you agree to these terms.
          </p>
          <p class="policy__meta">
            Last updated: January 14, 2026
          </p>
        </div>
      </div>

      <section class="policy__section policy__section--highlight">
          <h2>Commitment Summary</h2>
        <ul class="policy__summary-list">
          <li>
            <span class="policy__check">✓</span>
            Your data is your exclusive property
          </li>
          <li>
            <span class="policy__check">✓</span>
            Strictly local and private use
          </li>
          <li>
            <span class="policy__check">✓</span>
            No hidden subscriptions or data selling
          </li>
          <li>
            <span class="policy__check">✓</span>
            Professional design tools, not medical advice
          </li>
        </ul>
      </section>

      <div class="policy__grid">
        <section class="policy__section">
          <h2>1. Acceptance</h2>
          <p>By using ClipShoot, you agree to these Terms. If you disagree, please do not use the tool.</p>
        </section>

        <section class="policy__section">
          <h2>2. Service</h2>
          <p>ClipShoot is a mockup generation tool. We provide frames, backgrounds, and editing capabilities.</p>
        </section>
      </div>

      <section class="policy__section">
        <h2>3. Content Ownership</h2>
        <p>You retain full ownership of the content you create and the assets you upload.</p>
        <p class="policy__note">
          IMPORTANT: ClipShoot provides tools, not legal or professional advice.
        </p>
      </section>

      <div class="policy__grid">
        <section class="policy__section">
          <h2>4. License</h2>
          <p>We grant you a license to use the generated mockups for personal and commercial purposes.</p>
        </section>

        <section class="policy__section">
          <h2>5. Liability</h2>
          <p>ClipShoot is provided 'as is'. We are not liable for any damages arising from its use.</p>
        </section>
      </div>

      <section class="policy__section">
        <h2>6. Updates</h2>
        <p>We may update the tool and terms at any time.</p>
      </section>

      <section class="policy__section">
        <h2>Contact</h2>
        <p>
          Questions? Email us at:
          <a class="policy__link" href="mailto:helpaimenow@gmail.com">helpaimenow@gmail.com</a>
        </p>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "ClipShoot – Terms of Service",
  meta: [
    { name: "description", content: "Terms of Service for ClipShoot. Your tool for premium app mockups." }
  ]
});
</script>

<style scoped>
/* Resubusing styles from privacy.vue for consistency */
.policy {
  max-width: 900px;
  margin: 0 auto;
  padding: 7rem 1.5rem 5rem;
}

.policy__header {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--surface-lineLight, rgba(255, 255, 255, 0.1));
}

.policy__logo {
  flex-shrink: 0;
  border-radius: 20px;
  box-shadow: 0 8px 24px -8px rgba(0, 0, 0, 0.4);
}

.policy__header h1 {
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--semantic-text, #FAFAFA);
  margin: 0.5rem 0 0.4rem;
  line-height: 1.2;
}

.policy__tagline {
  font-size: 1.1rem;
  color: var(--semantic-textSecondary, #A1A1AA);
  margin: 0;
}

.policy__meta {
  font-size: 0.85rem;
  color: var(--semantic-textTertiary, #52525B);
  margin-top: 0.5rem;
}

.policy__section {
  background: var(--semantic-glass, rgba(15, 15, 20, 0.8));
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid var(--semantic-line, rgba(255, 255, 255, 0.06));
  border-radius: 20px;
  padding: 1.5rem 1.8rem;
  margin-top: 1.5rem;
}

.policy__section h2 {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--semantic-text, #FAFAFA);
  margin: 0 0 0.8rem;
}

.policy__section p {
  color: var(--semantic-textSecondary, #A1A1AA);
  line-height: 1.7;
  margin: 0;
}

.policy__section ul {
  margin: 0.5rem 0 0;
  padding-left: 1.2rem;
  color: var(--semantic-textSecondary, #A1A1AA);
}

.policy__section li {
  margin-bottom: 0.4rem;
  line-height: 1.6;
}

.policy__section--highlight {
  background: linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(6, 182, 212, 0.1));
  border-color: rgba(236, 72, 153, 0.2);
}

.policy__summary-list {
  list-style: none;
  margin: 0.8rem 0 0;
  padding: 0;
}

.policy__summary-list li {
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  padding: 0.4rem 0;
  color: var(--semantic-textSecondary, #A1A1AA);
  line-height: 1.5;
}

.policy__check {
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.4rem;
  height: 1.4rem;
  border-radius: 50%;
  background: linear-gradient(135deg, #EC4899, #8B5CF6);
  color: white;
  font-size: 0.75rem;
  font-weight: 700;
}

.policy__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem;
  margin-top: 1.8rem;
}

.policy__grid .policy__section {
  margin-top: 0;
}

.policy__note {
  margin-top: 0.8rem;
  padding: 0.6rem 0.9rem;
  border-radius: 10px;
  background: rgba(236, 72, 153, 0.1);
  font-size: 0.9rem;
  font-weight: 600;
  color: #EC4899;
}

.policy__link {
  font-weight: 700;
  color: var(--semantic-text, #FAFAFA);
  text-decoration: none;
  border-bottom: 1px dashed currentColor;
  transition: border-bottom-style 150ms ease;
}

.policy__link:hover {
  border-bottom-style: solid;
}

@media (max-width: 640px) {
  .policy {
    padding: 2rem 1rem 4rem;
  }
  
  .policy__header {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  
  .policy__header h1 {
    font-size: 2rem;
  }
  
  .policy__grid {
    grid-template-columns: 1fr;
  }
}
</style>
