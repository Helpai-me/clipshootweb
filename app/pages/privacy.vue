<template>
  <div>
    <main class="policy">
      <div class="policy__header">
        <img
          src="/logo.png"
          alt="Petlytics logo"
          class="policy__logo"
          width="84"
          height="84"
        />
        <div>
          <p class="eyebrow">Petlytics – {{ locale === 'es' ? 'Salud y Bienestar Animal' : 'Pet Health & Wellness' }}</p>
          <h1>{{ t("privacy.title") }}</h1>
          <p class="policy__tagline">
            {{ t("apps.petlytics.desc") }}
          </p>
          <p class="policy__meta">
            {{ t("privacy.lastUpdated") }}: 2026-01-05
          </p>
        </div>
      </div>

      <section class="policy__section policy__section--highlight">
        <h2>{{ t("privacy.summaryTitle") }}</h2>
        <ul class="policy__summary-list">
          <li>
            <span class="policy__check">✓</span>
            {{ locale === 'es' ? 'Sin recopilación de datos personales' : 'No personal data collection' }}
          </li>
          <li>
            <span class="policy__check">✓</span>
            {{ locale === 'es' ? 'Todo se procesa localmente en tu dispositivo' : 'All processing happens on your device' }}
          </li>
          <li>
            <span class="policy__check">✓</span>
            {{ t("privacy.sections.usage.noAds") }}
          </li>
          <li>
            <span class="policy__check">✓</span>
            {{ locale === 'es' ? 'Permisos solo para funciones esenciales' : 'Permissions only for essential features' }}
          </li>
        </ul>
      </section>

      <div class="policy__grid">
        <section class="policy__section">
          <h2>{{ t("privacy.sections.data.title") }}</h2>
          <p>{{ t("privacy.sections.data.body") }}</p>
        </section>

        <section class="policy__section">
          <h2>{{ t("privacy.sections.local.title") }}</h2>
          <p>{{ t("privacy.sections.local.body") }}</p>
        </section>
      </div>

      <section class="policy__section">
        <h2>{{ t("privacy.sections.usage.title") }}</h2>
        <ul>
          <li v-for="item in usageBullets" :key="item">
            {{ item }}
          </li>
        </ul>
        <p class="policy__note">{{ t("privacy.sections.usage.noAds") }}</p>
      </section>

      <section class="policy__section">
        <h2>{{ t("privacy.sections.sharing.title") }}</h2>
        <p>{{ t("privacy.sections.sharing.body") }}</p>
      </section>

      <section class="policy__section">
        <h2>{{ t("privacy.sections.permissions.title") }}</h2>
        <ul>
          <li v-for="item in permissionBullets" :key="item">
            {{ item }}
          </li>
        </ul>
        <p class="policy__note">{{ t("privacy.sections.permissions.note") }}</p>
      </section>

      <div class="policy__grid">
        <section class="policy__section">
          <h2>{{ t("privacy.sections.minors.title") }}</h2>
          <p>{{ t("privacy.sections.minors.body") }}</p>
        </section>

        <section class="policy__section">
          <h2>{{ t("privacy.sections.security.title") }}</h2>
          <p>{{ t("privacy.sections.security.body") }}</p>
        </section>
      </div>

      <div class="policy__grid">
        <section class="policy__section">
          <h2>{{ t("privacy.sections.retention.title") }}</h2>
          <p>{{ t("privacy.sections.retention.body") }}</p>
        </section>

        <section class="policy__section">
          <h2>{{ t("privacy.sections.changes.title") }}</h2>
          <p>{{ t("privacy.sections.changes.body") }}</p>
        </section>
      </div>

      <section class="policy__section">
        <h2>{{ t("privacy.sections.contact.title") }}</h2>
        <p>
          {{ locale === 'es' ? 'Para dudas sobre privacidad, escríbenos a' : 'For privacy questions, email us at' }}
          <a class="policy__link" href="mailto:helpaimenow@gmail.com">helpaimenow@gmail.com</a>
        </p>
      </section>

      <section class="policy__section policy__section--play">
        <h2>
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polygon points="5 3 19 12 5 21 5 3"/>
          </svg>
          {{ t("privacy.sections.play.title") }}
        </h2>
        <ul>
          <li v-for="item in playBullets" :key="item">
            {{ item }}
          </li>
        </ul>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Petlytics – Privacy Policy",
  meta: [
    { name: "description", content: "Política de privacidad de Petlytics. Tu asistente personal para la salud de tus mascotas." }
  ]
});

const { t, locale } = useI18n();

const usageBullets = computed(() => {
  const bullets = t('privacy.sections.usage.bullets');
  return Array.isArray(bullets) ? bullets : [];
});

const permissionBullets = computed(() => {
  const bullets = t('privacy.sections.permissions.bullets');
  return Array.isArray(bullets) ? bullets : [];
});

const playBullets = computed(() => {
  const bullets = t('privacy.sections.play.bullets');
  return Array.isArray(bullets) ? bullets : [];
});
</script>

<style scoped>
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
  border-bottom: 1px solid rgba(15, 23, 42, 0.1);
}

.policy__logo {
  flex-shrink: 0;
  border-radius: 20px;
  box-shadow: 0 8px 24px -8px rgba(15, 23, 42, 0.15);
}

.policy__header h1 {
  font-size: 2.5rem;
  font-weight: 800;
  color: #0f172a;
  margin: 0.5rem 0 0.4rem;
  line-height: 1.2;
}

.policy__tagline {
  font-size: 1.1rem;
  color: #475569;
  margin: 0;
}

.policy__meta {
  font-size: 0.85rem;
  color: #94a3b8;
  margin-top: 0.5rem;
}

.policy__section {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  padding: 1.5rem 1.8rem;
  margin-top: 1.5rem;
}

.policy__section h2 {
  font-size: 1.25rem;
  font-weight: 700;
  color: #0f172a;
  margin: 0 0 0.8rem;
}

.policy__section p {
  color: #475569;
  line-height: 1.7;
  margin: 0;
}

.policy__section ul {
  margin: 0.5rem 0 0;
  padding-left: 1.2rem;
  color: #475569;
}

.policy__section li {
  margin-bottom: 0.4rem;
  line-height: 1.6;
}

.policy__section--highlight {
  background: linear-gradient(135deg, rgba(94, 240, 196, 0.15), rgba(80, 200, 255, 0.1));
  border-color: rgba(94, 240, 196, 0.3);
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
  color: #475569;
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
  background: linear-gradient(135deg, #5ef0c4, #2ab7a9);
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
  background: rgba(94, 240, 196, 0.12);
  font-size: 0.9rem;
  font-weight: 600;
  color: #0f766e;
}

.policy__link {
  font-weight: 700;
  color: #0f172a;
  text-decoration: none;
  border-bottom: 1px dashed currentColor;
  transition: border-bottom-style 150ms ease;
}

.policy__link:hover {
  border-bottom-style: solid;
}

.policy__section--play {
  background: linear-gradient(135deg, rgba(246, 79, 110, 0.08), rgba(255, 138, 136, 0.06));
  border-color: rgba(246, 79, 110, 0.2);
}

.policy__section--play h2 {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.policy__section--play h2 svg {
  color: #dc2626;
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
