<template>
  <div class="about-container">
    <div class="about-header">
      <h1 class="page-title">About <span class="highlight">Me</span></h1>
      <div class="underline"></div>
    </div>

    <div class="about-content">
      <!-- Main Bio Section -->
      <section class="bio-section">
        <h2 class="section-title">My Journey</h2>
        <p class="bio-text">
          I am a 3rd-year Bachelor of Science in Information Technology student
          at Central University in Iloilo City. I have a deep
          curiosity for how things work behind the scenes, which drives my
          passion for building robust, end-to-end software solutions. Whether it
          is conceptualizing database schemas, writing backend logic, or
          crafting user-friendly interfaces, I enjoy the entire process of
          bringing an idea to life through code.
        </p>
      </section>

      <!-- Info Cards Grid -->
      <div class="info-grid">
        <!-- Education Card -->
        <div class="info-card">
          <div class="card-icon">🎓</div>
          <h3>Education</h3>
          <p class="primary-detail">
            Bachelor of Science in Information Technology
          </p>
          <p class="secondary-detail">
            Central Philippine University, Iloilo City
          </p>
          <p class="tertiary-detail">Current - 3rd Year</p>
        </div>

        <!-- Technical Focus Card -->
        <div class="info-card">
          <div class="card-icon">💻</div>
          <h3>Technical Focus</h3>
          <p class="bio-text-small">
            My skill set bridges software development and IT infrastructure. I
            enjoy working with <strong>C#, Python, and Vue.js</strong> for
            development, and managing databases using
            <strong>SQL Server and T-SQL</strong>. I also have a strong
            foundation in networking, regularly working with
            <strong>Cisco Packet Tracer, VLANs</strong>, and digital logic
            circuits.
          </p>
        </div>

        <!-- Outside the Screen Card -->
        <div class="info-card">
          <div class="card-icon">🎧</div>
          <h3>Beyond the Code</h3>
          <p class="bio-text-small">
            When I'm not debugging or studying, you can usually find me staying
            at a cafe, drinking coffee, and listening to music. I'm a big fan of
            OPM, often listening to bands like Cup of Joe or Silent Sanctuary,
            and I enjoy unwinding with a good book.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.about-container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 2rem;
  animation: fadeIn 0.8s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Header Styles */
.about-header {
  text-align: center;
  margin-bottom: 4rem;
  padding-top: 2rem;
}

.page-title {
  font-size: 3rem;
  color: var(--jade-dark);
  margin-bottom: 0.5rem;
}

.highlight {
  color: var(--jade-primary);
}

.underline {
  width: 80px;
  height: 4px;
  background-color: var(--jade-primary);
  margin: 0 auto;
  border-radius: 2px;
}

/* Main Content & Bio */
.about-content {
  display: flex;
  flex-direction: column;
  gap: 4rem;
}

.bio-section {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.section-title {
  font-size: 2rem;
  color: var(--jade-dark);
  margin-bottom: 1.5rem;
}

.bio-text {
  font-size: 1.15rem;
  line-height: 1.8;
  color: var(--jade-secondary);
}

/* Grid Layout for Cards */
.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

/* Card Styles — Liquid Glass */
.info-card {
  position: relative;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.45),
    rgba(255, 255, 255, 0.16) 60%
  );
  backdrop-filter: blur(24px) saturate(180%);
  -webkit-backdrop-filter: blur(24px) saturate(180%);
  padding: 2.5rem 2rem;
  border-radius: 32px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow:
    0 4px 20px rgba(0, 0, 0, 0.05),
    0 1px 0 rgba(255, 255, 255, 0.65) inset;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease,
    border-top-color 0.3s ease;
  border-top: 4px solid transparent;
  overflow: hidden;
  isolation: isolate;
}

/* Light sweep across the top of the card */
.info-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 50%;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.3),
    rgba(255, 255, 255, 0)
  );
  pointer-events: none;
  z-index: -1;
}

.info-card:hover {
  transform: translateY(-5px);
  box-shadow:
    0 8px 30px rgba(64, 78, 59, 0.14),
    0 1px 0 rgba(255, 255, 255, 0.75) inset;
  border-top: 4px solid var(--jade-primary);
}

.card-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.info-card h3 {
  font-size: 1.5rem;
  color: var(--jade-dark);
  margin-bottom: 1.5rem;
}

/* Card Typography */
.primary-detail {
  font-size: 1.1rem;
  font-weight: bold;
  color: var(--jade-primary);
  margin-bottom: 0.5rem;
}

.secondary-detail {
  font-size: 1rem;
  color: var(--jade-secondary);
  margin-bottom: 0.5rem;
}

.tertiary-detail {
  font-size: 0.9rem;
  color: var(--jade-dark);
  font-weight: 500;
  opacity: 0.7;
}

.bio-text-small {
  font-size: 1rem;
  line-height: 1.6;
  color: var(--jade-secondary);
}

.bio-text-small strong {
  color: var(--jade-dark);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .page-title {
    font-size: 2.5rem;
  }

  .bio-text {
    font-size: 1.05rem;
  }

  .about-content {
    gap: 3rem;
  }
}
</style>
