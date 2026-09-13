<template>
  <footer class="footer">
    <div class="footer-content">
      <p>&copy; {{ currentYear }} Ralph Christian Gatuteo.</p>
      <p>3rd Year BSIT Student | Iloilo City, Philippines</p>
    </div>
  </footer>
</template>

<script setup>
import { computed } from "vue";

const currentYear = computed(() => new Date().getFullYear());
</script>

<style scoped>
.footer {
  position: relative;
  background-color: var(--jade-dark);
  color: var(--jade-bg);
  padding: 1.5rem 1rem;
  text-align: center;
  margin-top: auto;
  border-top-left-radius: 28px;
  border-top-right-radius: 28px;
  overflow: hidden;
  box-shadow: 0 -8px 32px rgba(0, 0, 0, 0.15);
}

/* Frosted sheen laid over the solid footer so it reads as glass, not flat color */
.footer::before {
  content: "";
  position: absolute;
  inset: 0;
  backdrop-filter: blur(20px) saturate(160%);
  -webkit-backdrop-filter: blur(20px) saturate(160%);
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0) 60%
  );
  pointer-events: none;
}

.footer-content {
  position: relative;
  z-index: 1;
}

.social-links a {
  color: var(--jade-light);
  text-decoration: none;
  margin: 0 0.5rem;
  font-weight: 600;
}

.social-links a:hover {
  color: var(--jade-primary);
}
</style>
