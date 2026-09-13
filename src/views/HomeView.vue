<template>
  <div class="ios-dashboard">
    <section class="hero-split">
      <div class="glass-widget hero-text">
        <h2 class="greeting">Hi there,</h2>
        <h1 class="name">
          I'm Ralph Christian <span class="highlight"></span>
        </h1>

        <div class="role-container">
          <span class="static-text">I am into</span>
          <span class="typing-text">Software Development</span><span class="cursor">|</span>
        </div>

        <p class="bio">
          3rd-year BSIT student at Philippine University in Iloilo City.
        </p>

        <router-link to="/about" class="btn-glass">
          About Me
          <span class="icon-circle">↓</span>
        </router-link>
      </div>

      <div class="hero-visual">
        <div class="avatar-backdrop glass-widget">
          <img
            src="@/assets/myphoto.png"
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
          <li><strong>G_Lending:</strong> Employee tracking database</li>
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

    <section class="glass-widget live-chat-section">
      <div class="chat-header">
        <div class="widget-icon">💬</div>
        <div>
          <h2>Live Visitor Wall</h2>
          <p class="chat-subtitle">Messages automatically vanish after 2 minutes.</p>
        </div>
      </div>

      <form class="chat-form" @submit.prevent="addComment">
        <input 
          type="text" 
          v-model="userName" 
          placeholder="Your name" 
          maxlength="25" 
          class="glass-input name-input"
          required 
        />
        <div class="chat-input-row">
          <input 
            type="text" 
            v-model="userMessage" 
            placeholder="Drop a quick note or hello..." 
            maxlength="120" 
            class="glass-input msg-input"
            required 
          />
          <button type="submit" class="btn-glass send-btn">Send</button>
        </div>
      </form>

      <div class="comments-container">
        <p v-if="comments.length === 0" class="no-comments">No active thoughts right now. Be the first!</p>
        <transition-group name="fade" tag="div" class="comments-list">
          <div v-for="comment in comments" :key="comment.id" class="comment-bubble">
            <div class="comment-meta">
              <span class="comment-author">{{ comment.name }}</span>
              <span class="comment-timer">{{ comment.timeLeft }}s</span>
            </div>
            <p class="comment-text">{{ comment.text }}</p>
          </div>
        </transition-group>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { supabase } from '../supabase'

const userName = ref('')
const userMessage = ref('')
const comments = ref([])
let timerInterval = null
let channel = null

const fetchComments = async () => {
  const now = new Date()
  const oneTwentySecondsAgo = new Date(now.getTime() - 120000)

  const { data, error } = await supabase
    .from('comments')
    .select('*')
    .gte('created_at', oneTwentySecondsAgo.toISOString())
    .order('created_at', { ascending: false })

  if (!error && data) {
    comments.value = data.map(c => {
      const elapsed = Math.floor((now - new Date(c.created_at)) / 1000)
      return {
        id: c.id,
        name: c.name,
        text: c.text,
        timeLeft: Math.max(0, 120 - elapsed)
      }
    }).filter(c => c.timeLeft > 0)
  }
}

const addComment = async () => {
  if (!userName.value.trim() || !userMessage.value.trim()) return

  const tempComment = {
    id: Date.now() + Math.random(),
    name: userName.value.trim(),
    text: userMessage.value.trim(),
    timeLeft: 120
  }

  comments.value.unshift(tempComment)
  userMessage.value = ''

  const { error } = await supabase.from('comments').insert([
    { name: tempComment.name, text: tempComment.text }
  ])

  if (error) {
    console.error('Error saving comment:', error)
  }
}

onMounted(async () => {
  await fetchComments()

  channel = supabase
    .channel('public:comments')
    .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'comments' }, payload => {
      const newC = payload.new
      if (!comments.value.some(c => c.text === newC.text && c.name === newC.name && Math.abs(c.id - newC.id) < 1000000)) {
        comments.value.unshift({
          id: newC.id,
          name: newC.name,
          text: newC.text,
          timeLeft: 120
        })
      }
    })
    .subscribe()

  timerInterval = setInterval(() => {
    comments.value = comments.value
      .map(c => ({ ...c, timeLeft: c.timeLeft - 1 }))
      .filter(c => c.timeLeft > 0)
  }, 1000)
})

onUnmounted(() => {
  if (channel) supabase.removeChannel(channel)
  clearInterval(timerInterval)
})
</script>

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
  width: 70%;
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
  margin: 0 0 4px 0;
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
  margin-top: 16px;
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

.live-chat-section {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.chat-header {
  display: flex;
  align-items: center;
  gap: 16px;
}

.chat-header .widget-icon {
  margin-bottom: 0;
}

.chat-subtitle {
  margin: 0;
  font-size: 0.9rem;
  color: var(--jade-secondary);
}

.chat-form {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.glass-input {
  background: rgba(255, 255, 255, 0.3);
  border: 1px solid var(--glass-border);
  border-radius: 14px;
  padding: 10px 16px;
  font-size: 0.95rem;
  color: var(--jade-dark);
  outline: none;
  font-family: inherit;
  transition: all 0.3s ease;
}

.glass-input:focus {
  background: rgba(255, 255, 255, 0.6);
  border-color: var(--jade-primary);
  box-shadow: 0 0 0 3px rgba(123, 150, 105, 0.15);
}

.name-input {
  max-width: 250px;
}

.chat-input-row {
  display: flex;
  gap: 12px;
}

.msg-input {
  flex: 1;
}

.send-btn {
  padding: 8px 20px;
  font-size: 0.95rem;
  border-radius: 14px;
  cursor: pointer;
}

.comments-container {
  margin-top: 8px;
  max-height: 250px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-right: 4px;
}

.no-comments {
  font-size: 0.95rem;
  color: var(--jade-secondary);
  font-style: italic;
  margin: 0;
  text-align: center;
  padding: 12px;
}

.comments-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.comment-bubble {
  background: rgba(255, 255, 255, 0.45);
  border: 1px solid var(--glass-border);
  border-radius: 16px;
  padding: 12px 16px;
  backdrop-filter: blur(10px);
}

.comment-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
}

.comment-author {
  font-weight: 600;
  font-size: 0.9rem;
  color: var(--jade-dark);
}

.comment-timer {
  font-size: 0.75rem;
  color: var(--jade-secondary);
  background: rgba(0, 0, 0, 0.04);
  padding: 2px 6px;
  border-radius: 10px;
}

.comment-text {
  margin: 0;
  font-size: 0.95rem;
  color: var(--jade-secondary);
  word-break: break-word;
}

.fade-enter-active, .fade-leave-active {
  transition: all 0.4s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

@media (max-width: 768px) {
  .hero-split {
    flex-direction: column-reverse;
  }

  .avatar-backdrop {
    height: 300px;
  }

  .chat-input-row {
    flex-direction: column;
  }

  .send-btn {
    width: 100%;
  }

  .name-input {
    max-width: 100%;
  }
}
</style>