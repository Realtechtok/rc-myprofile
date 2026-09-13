<template>
  <div id="app-container">
    <main class="content-viewport">
      <router-view />
    </main>

    <!-- Injected External NavBar -->
    <NavBar />
  </div>
</template>

<script setup>
import NavBar from "./components/NavBar.vue";
</script>

<style>
:root {
  /* Jade Pebble Morning Palette */
  --jade-primary: #7b9669;
  --jade-secondary: #6c8480;
  --jade-dark: #404e3b;
  --jade-light: #bac8b1;
  --jade-bg: #e6e6e6;

  /* Glassmorphism Engine */
  --glass-bg: rgba(255, 255, 255, 0.55);
  --glass-border: rgba(255, 255, 255, 0.7);
  --glass-shadow: 0 10px 40px rgba(64, 78, 59, 0.12);
  --text-light: #ffffff;
}

body {
  margin: 0;
  padding: 0;
  /* Apple System Font Stack */
  font-family:
    -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial,
    sans-serif;
  -webkit-font-smoothing: antialiased;

  /* Ambient Mesh Background */
  background: radial-gradient(
    circle at 15% 0%,
    #ffffff,
    var(--jade-bg) 50%,
    var(--jade-light) 100%
  );
  background-attachment: fixed;
  color: var(--jade-dark);
}

.content-viewport {
  padding: 40px 20px 120px 20px;
  max-width: 1100px;
  margin: 0 auto;
}
</style>
