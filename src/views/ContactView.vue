<template>
  <div class="contact-container">
    <header class="contact-header">
      <h1 class="sf-title">Contact <span class="highlight">Me</span></h1>
      <p class="sf-subtitle">Let's build something great together.</p>
    </header>

    <div class="contact-content">
      <!-- Left Column: Icon Cards -->
      <div class="contact-info">
        <a href="mailto:gatuteoralph@gmail.com" class="glass-widget info-card">
          <div class="icon-wrapper">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
              ></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </div>
          <div class="info-text">
            <h3>Email</h3>
            <p>gatuteoralph@gmail.com</p>
          </div>
        </a>

        <div class="glass-widget info-card">
          <div class="icon-wrapper">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
          </div>
          <div class="info-text">
            <h3>Location</h3>
            <p>Iloilo City, Philippines</p>
          </div>
        </div>

        <div class="social-row">
          <!-- GitHub -->
          <a
            href="https://github.com"
            target="_blank"
            class="glass-widget social-card"
            title="GitHub"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
              ></path>
            </svg>
          </a>
          <!-- LinkedIn -->
          <a
            href="https://linkedin.com"
            target="_blank"
            class="glass-widget social-card"
            title="LinkedIn"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
              ></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
          <!-- Instagram -->
          <a
            href="https://instagram.com"
            target="_blank"
            class="glass-widget social-card"
            title="Instagram"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
          <!-- Facebook -->
          <a
            href="https://facebook.com"
            target="_blank"
            class="glass-widget social-card"
            title="Facebook"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
              ></path>
            </svg>
          </a>
        </div>
      </div>

      <!-- Right Column: Minimalist Form -->
      <form class="glass-widget contact-form" @submit.prevent="handleSubmit">
        <div class="input-group">
          <label for="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="John Doe"
            class="glass-input"
            required
          />
        </div>

        <div class="input-group">
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="john@example.com"
            class="glass-input"
            required
          />
        </div>

        <div class="input-group">
          <label for="message">Message</label>
          <textarea
            id="message"
            rows="4"
            placeholder="How can I help you?"
            class="glass-input"
            required
          ></textarea>
        </div>

        <button type="submit" class="btn-glass submit-btn">
          Send Message
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            class="send-icon"
          >
            <line x1="22" y1="2" x2="11" y2="13"></line>
            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
          </svg>
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
const handleSubmit = () => {
  // Add your form submission logic here
  console.log("Form submitted");
};
</script>

<style scoped>
.contact-container {
  display: flex;
  flex-direction: column;
  gap: 40px;
  animation: fadeIn 0.6s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Header */
.contact-header {
  text-align: center;
  padding-top: 20px;
}

.sf-title {
  font-size: 3rem;
  font-weight: 700;
  letter-spacing: -0.015em;
  margin: 0 0 8px 0;
}

.highlight {
  color: var(--jade-primary);
}

.sf-subtitle {
  font-size: 1.2rem;
  color: var(--jade-secondary);
  margin: 0;
}

/* Layout */
.contact-content {
  display: flex;
  gap: 32px;
  align-items: flex-start;
}

.contact-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.contact-form {
  flex: 1.5;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

/* Reusable Glass Engine */
.glass-widget {
  background: var(--glass-bg);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid var(--glass-border);
  box-shadow: var(--glass-shadow);
  border-radius: 24px;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

/* Info Cards */
.info-card {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 24px;
  text-decoration: none;
  color: var(--jade-dark);
}

a.info-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 30px rgba(64, 78, 59, 0.15);
}

.icon-wrapper {
  background: rgba(255, 255, 255, 0.5);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--jade-primary);
  border: 1px solid var(--glass-border);
}

.icon-wrapper svg {
  width: 24px;
  height: 24px;
}

.info-text h3 {
  margin: 0 0 4px 0;
  font-size: 1.1rem;
  font-weight: 600;
}

.info-text p {
  margin: 0;
  color: var(--jade-secondary);
  font-size: 0.95rem;
}

/* Social Row */
.social-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}

.social-card {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0; /* Adjusted vertical padding for square-like proportions */
  color: var(--jade-secondary);
  text-decoration: none;
}

.social-card svg {
  width: 24px;
  height: 24px;
}

.social-card:hover {
  color: var(--jade-primary);
  transform: translateY(-3px);
  box-shadow: 0 12px 30px rgba(64, 78, 59, 0.15);
}

/* Responsive adjustment for small screens */
@media (max-width: 480px) {
  .social-row {
    grid-template-columns: repeat(
      2,
      1fr
    ); /* Stacks into a 2x2 grid on mobile */
  }
}

/* Form Styles */
.contact-form {
  padding: 32px;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.input-group label {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--jade-dark);
  margin-left: 4px;
}

.glass-input {
  background: rgba(255, 255, 255, 0.4);
  border: 1px solid var(--glass-border);
  border-radius: 12px;
  padding: 14px 16px;
  font-size: 1rem;
  font-family: inherit;
  color: var(--jade-dark);
  outline: none;
  transition: all 0.3s ease;
}

.glass-input:focus {
  background: rgba(255, 255, 255, 0.7);
  border-color: var(--jade-primary);
  box-shadow: 0 0 0 4px rgba(123, 150, 105, 0.1);
}

.glass-input::placeholder {
  color: #999;
}

textarea.glass-input {
  resize: vertical;
  min-height: 120px;
}

/* Submit Button */
.submit-btn {
  margin-top: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: 100%;
  cursor: pointer;
}

.submit-btn {
  background: rgba(255, 255, 255, 0.6);
  color: var(--jade-dark);
  padding: 14px 24px;
  border-radius: 16px;
  border: 1px solid var(--glass-border);
  font-weight: 600;
  font-size: 1.05rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.submit-btn:hover {
  background: var(--jade-primary);
  color: var(--text-light);
  border-color: var(--jade-primary);
  transform: translateY(-2px);
}

.send-icon {
  width: 18px;
  height: 18px;
}

/* Responsive */
@media (max-width: 768px) {
  .contact-content {
    flex-direction: column;
  }
  .contact-info,
  .contact-form {
    width: 100%;
  }
}
</style>
