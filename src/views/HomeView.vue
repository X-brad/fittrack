<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <div class="home">

    <!-- Navbar -->
    <nav class="navbar">
      <div class="logo">FitTrack 💪</div>
      <ul class="nav-links">
        <li><a href="#">Accueil</a></li>
        <li><a href="#">Séances</a></li>
        <li><a href="#">Progression</a></li>
        <li><a href="#">Profil</a></li>
      </ul>
      <button class="btn-login" @click="router.push('/login')">Connexion</button>
      <div class="hamburger" @click="toggleMenu">☰</div>
    </nav>

    <!-- Hero -->
    <section class="hero">
      <div class="hero-content">
        <h1>Transforme ton corps, <span>track tes progrès</span></h1>
        <p>Suis tes séances, visualise ta progression et atteins tes objectifs.</p>
        <div class="hero-buttons">
          <button class="btn-primary" @click="router.push('/signup')">Commencer gratuitement</button>
          <button class="btn-secondary">Voir la démo</button>
        </div>
      </div>
    </section>

    <!-- Features -->
    <section class="features">
      <h2>Pourquoi FitTrack ?</h2>
      <div class="features-grid">
        <div class="feature-card" v-for="feature in features" :key="feature.title">
          <span class="feature-icon">{{ feature.icon }}</span>
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.description }}</p>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-logo">FitTrack 💪</div>
        <p>© 2026 FitTrack — Développé par <span class="signature">Brad Mathys</span></p>
        <div class="footer-links">
          <a href="#">Confidentialité</a>
          <a href="#">Contact</a>
          <a href="#">À propos</a>
        </div>
      </div>
    </footer>

  </div>
</template>

<script>
export default {
  data() {
    return {
      features: [
        {
          icon: '🏋️',
          title: 'Suivi des séances',
          description: 'Enregistre chaque exercice, série et répétition en temps réel.'
        },
        {
          icon: '📈',
          title: 'Visualise ta progression',
          description: 'Des graphiques clairs pour voir tes progrès semaine après semaine.'
        },
        {
          icon: '🎯',
          title: 'Atteins tes objectifs',
          description: 'Définis tes goals et FitTrack te guide pour les atteindre.'
        }
      ]
    }
  },
  methods: {
    toggleMenu() {
      const navLinks = document.querySelector('.nav-links')
      navLinks.classList.toggle('active')
    }
  }
}
</script>