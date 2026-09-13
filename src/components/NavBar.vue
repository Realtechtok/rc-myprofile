<template>
  <nav class="glass-pill-nav">
    <!-- Home -->
    <router-link to="/" class="nav-icon" title="Home">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
      >
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
      </svg>
    </router-link>

    <!-- About -->
    <router-link to="/about" class="nav-icon" title="About">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="16" x2="12" y2="12"></line>
        <line x1="12" y1="8" x2="12.01" y2="8"></line>
      </svg>
    </router-link>

    <!-- Projects -->
    <router-link to="/projects" class="nav-icon" title="Projects">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
      >
        <rect x="3" y="3" width="7" height="7"></rect>
        <rect x="14" y="3" width="7" height="7"></rect>
        <rect x="14" y="14" width="7" height="7"></rect>
        <rect x="3" y="14" width="7" height="7"></rect>
      </svg>
    </router-link>

    <!-- Contact -->
    <router-link to="/contact" class="nav-icon" title="Contact">
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
    </router-link>
  </nav>
</template>

<style scoped>
/* Fixed Bottom Pill Navigation — Liquid Glass */
.glass-pill-nav {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 25px;
  padding: 14px 28px;

  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.4),
    rgba(255, 255, 255, 0.12) 60%
  );
  backdrop-filter: blur(24px) saturate(180%);
  -webkit-backdrop-filter: blur(24px) saturate(180%);

  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.45);
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.14),
    0 1px 0 rgba(255, 255, 255, 0.65) inset,
    0 -10px 20px rgba(255, 255, 255, 0.25) inset;
  z-index: 9999;
  overflow: hidden;
  isolation: isolate;
}

/* Diagonal specular sheen across the glass surface */
.glass-pill-nav::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: linear-gradient(
    120deg,
    rgba(255, 255, 255, 0.55) 0%,
    rgba(255, 255, 255, 0) 28%,
    rgba(255, 255, 255, 0) 72%,
    rgba(255, 255, 255, 0.3) 100%
  );
  pointer-events: none;
  z-index: -1;
}

.nav-icon {
  position: relative;
  width: 28px;
  height: 28px;
  padding: 10px;
  border-radius: 50%;
  color: var(--jade-secondary);
  transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Frosted "bubble" that pops in behind the active/hovered icon */
.nav-icon::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.55);
  box-shadow:
    0 4px 14px rgba(0, 0, 0, 0.1),
    0 1px 0 rgba(255, 255, 255, 0.8) inset;
  opacity: 0;
  transform: scale(0.55);
  transition: all 0.35s cubic-bezier(0.25, 1, 0.5, 1);
  z-index: -1;
}

.nav-icon:hover,
.nav-icon.router-link-active {
  color: var(--jade-primary);
  transform: scale(1.15) translateY(-2px);
}

.nav-icon:hover::after,
.nav-icon.router-link-active::after {
  opacity: 1;
  transform: scale(1);
}
</style>
