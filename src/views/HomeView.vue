<template>
  <div class="ios-dashboard">
    <section class="hero-split">
      <div class="glass-widget hero-text">
        <h2 class="greeting">Hi There,</h2>
        <h1 class="name">I'm Ralph <span class="highlight">Gatuteo</span></h1>

        <div class="role-container">
          <span class="static-text">I Am Into</span>
          <span class="typing-text">Software Development</span
          ><span class="cursor">|</span>
        </div>

        <p class="bio">
          3rd-year BSIT student at Central Philippine University in Iloilo City.
        </p>

        <router-link to="/about" class="btn-glass">
          About Me
          <span class="icon-circle">↓</span>
        </router-link>
      </div>

      <div class="hero-visual">
        <div class="avatar-backdrop glass-widget">
          <img
            src="@/assets/mylogo.png"
            alt="Ralph Gatuteo"
            class="avatar-img"
          />
        </div>
      </div>
    </section>

    <div class="widget-grid">
      <section class="glass-widget skill-widget">
        <div class="widget-icon">⌘</div>
        <h2>Technical Stack</h2>
        <ul class="clean-list">
          <li>C# & Vue.js Development</li>
          <li>SQL Server, T-SQL & Stored Procedures</li>
          <li>Cisco Packet Tracer & Inter-VLAN Routing</li>
          <li>Digital Logic & Circuit Design</li>
        </ul>
      </section>

      <section class="glass-widget project-widget">
        <div class="widget-icon">🛠</div>
        <h2>Recent Systems</h2>
        <ul class="clean-list">
          <li><strong>Gatuteo_Lending:</strong> Employee tracking database</li>
          <li><strong>GHI Tailoring:</strong> Software digitization project</li>
          <li>
            <strong>iBenta & Bantay Barangay:</strong> IT Capstone proposals
          </li>
        </ul>
      </section>
    </div>

    <section class="glass-widget certificates-section">
      <img
        src="@/assets/certificate.png"
        alt="Certificate Icon"
        class="widget-icon-img"
      />
      <h2>Certifications & Training</h2>
      <div class="certs-grid">
        <div class="cert-item">
          <h3>Networking Essentials</h3>
          <p>Cisco Networking Academy • 2025</p>
        </div>
        <div class="cert-item">
          <h3>Database Management Fundamentals</h3>
          <p>SQL Server & T-SQL • 2026</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.ios-dashboard {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.glass-widget {
  background: var(--glass-bg);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 32px;
  border: 1px solid var(--glass-border);
  box-shadow: var(--glass-shadow);
  padding: 32px;
  transition:
    transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1),
    box-shadow 0.4s ease;
}

.glass-widget:hover {
  transform: scale(1.01) translateY(-4px);
  box-shadow: 0 15px 50px rgba(64, 78, 59, 0.15);
}

.hero-split {
  display: flex;
  align-items: stretch;
  gap: 32px;
}

.hero-text {
  flex: 3;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

.hero-visual {
  flex: 2;
  display: flex;
}

.avatar-backdrop {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  overflow: hidden;
}

.avatar-img {
  width: 60%;
  height: auto;
  opacity: 0.9;
}

.greeting {
  font-size: 2rem;
  font-weight: 600;
  margin: 0 0 0.25rem 0;
}

.name {
  font-size: 3.5rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  margin: 0 0 1rem 0;
}

.highlight {
  color: var(--jade-primary);
}

.bio {
  font-size: 1.1rem;
  color: var(--jade-secondary);
  margin-bottom: 2rem;
}

.role-container {
  font-size: 1.3rem;
  font-weight: 500;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.typing-text {
  color: var(--jade-primary);
}

.cursor {
  animation: blink 1s infinite;
}

@keyframes blink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}

.btn-glass {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background: rgba(255, 255, 255, 0.4);
  color: var(--jade-dark);
  padding: 12px 24px;
  border-radius: 30px;
  border: 1px solid var(--glass-border);
  text-decoration: none;
  font-weight: 600;
  font-size: 1.05rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.btn-glass:hover {
  background: var(--jade-primary);
  color: var(--text-light);
  border-color: var(--jade-primary);
}

.icon-circle {
  background-color: var(--jade-dark);
  color: var(--text-light);
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-glass:hover .icon-circle {
  background-color: var(--text-light);
  color: var(--jade-primary);
}

.widget-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 32px;
}

.widget-icon {
  font-size: 28px;
  margin-bottom: 16px;
  color: var(--jade-primary);
}

/* Certificate icon sized and spaced to match .widget-icon exactly */
.widget-icon-img {
  width: 28px;
  height: 28px;
  object-fit: contain;
  display: block;
  margin-bottom: 16px;
}

h2 {
  font-size: 1.3rem;
  font-weight: 600;
  margin: 0 0 16px 0;
  letter-spacing: -0.01em;
}

.clean-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
  color: var(--jade-secondary);
  font-size: 1.05rem;
  line-height: 1.4;
}

.clean-list strong {
  color: var(--jade-dark);
}

.certificates-section {
  width: 100%;
  box-sizing: border-box;
}

.certs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
}

.cert-item {
  background: rgba(255, 255, 255, 0.4);
  padding: 20px;
  border-radius: 20px;
  border: 1px solid var(--glass-border);
  transition: transform 0.3s ease;
}

.cert-item:hover {
  transform: translateY(-2px);
  background: rgba(255, 255, 255, 0.6);
}

.cert-item h3 {
  font-size: 1.1rem;
  margin: 0 0 6px 0;
  color: var(--jade-dark);
}

.cert-item p {
  margin: 0;
  font-size: 0.95rem;
  color: var(--jade-secondary);
}

@media (max-width: 768px) {
  .hero-split {
    flex-direction: column-reverse;
  }

  .avatar-backdrop {
    height: 300px;
  }
}
</style>
