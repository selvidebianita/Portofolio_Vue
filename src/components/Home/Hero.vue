<script setup>
import ProfilePic from "@/components/Home/ProfilePic.vue";
</script>

<template>
  <header class="hero-section">
    <div class="container px-5">
      <!-- Hero Row: Text Left, Photo Right -->
      <div class="row gx-5 align-items-center">
        <!-- Left: Text Content -->
        <div class="col-lg-6 order-2 order-lg-1">
          <div class="hero-content">
            <p class="greeting-text">Hello There! 👋😊</p>
            <h1 class="display-4 fw-bolder mb-3">
              I'm <span class="text-gradient d-inline">Selvi Debi Anita</span>
            </h1>
            <p class="tagline">
              Frontend Developer | Programmer | Exploring AI & Modern Web Development | Data Enthusiast
            </p>
            <p class="hero-description">
              Frontend-focused programmer passionate about building responsive and user-friendly web applications using modern web technologies.<span class="highlight"></span> 
            </p>
            <div class="d-flex gap-3 flex-wrap mt-4">
              <RouterLink to="/resume" class="btn btn-primary btn-lg px-4 py-3 fs-6 fw-bolder">View Resume</RouterLink>
              <RouterLink to="/contact" class="btn btn-outline-light btn-lg px-4 py-3 fs-6 fw-bolder">Get In Touch</RouterLink>
            </div>
          </div>
        </div>
        <!-- Right: Profile Picture -->
        <div class="col-lg-6 order-1 order-lg-2">
          <div class="profile-wrapper">
            <ProfilePic/>
          </div>
        </div>
      </div>

      <!-- Bio Section Below -->
      <div class="bio-section">
        <div class="row justify-content-center">
          <div class="col-lg-10">
            <div class="bio-card">
              <h2 class="bio-title">
                <span class="text-gradient">About Me</span>
              </h2>
              <p class="bio-subtitle">
              Frontend Developer <a href="https://home.amikom.ac.id/" class="text-gradient" target="_blank"> | Informatics Graduate </a> | Programmer | Modern Web Development Enthusiast
              </p>
              <div class="bio-content">
                <p>
                  Frontend-focused programmer with a strong interest in modern web development and building responsive, 
                  user-friendly web applications. Experienced in translating UI/UX designs into interactive and well-structured web interfaces.
                </p>
                <p>
                 Skilled in JavaScript, Python, and frontend development, with additional experience in data analysis. 
                 Able to combine technical development skills with analytical thinking to create efficient and scalable digital solutions.
                </p>
                <P>
                  Continuously learning and exploring new technologies in frontend engineering and web development. 
                  Enjoy working in collaborative environments and contributing to the development of impactful digital products that enhance user experiences.
                </P>
              </div>
              <div class="social-links">
                <a class="social-link" href="https://github.com/SelviDebiA" target="_blank" title="GitHub">
                  <i class='bx bxl-github'></i>
                </a>
                <a class="social-link" href="https://www.linkedin.com/in/selvi-debi-anita/" target="_blank" title="LinkedIn">
                  <i class='bx bxl-linkedin'></i>
                </a>
                <a class="social-link" href="https://www.instagram.com/_selvideb/" target="_blank" title="Instagram">
                  <i class='bx bxl-instagram'></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 6rem 0 4rem;
}

.hero-content {
  text-align: left;
}

.greeting-text {
  color: #bae6fd !important;
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.tagline {
  color: #7dd3fc !important;
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  margin-bottom: 1.5rem;
}

.hero-description {
  color: #e0f2fe !important;
  font-size: 1.1rem;
  line-height: 1.8;
  max-width: 480px;
}

.highlight {
  color: #7dd3fc;
  font-weight: 700;
}

.profile-wrapper {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
}

/* Bio Section */
.bio-section {
  margin-top: 5rem;
  padding-top: 3rem;
  border-top: 1px solid rgba(125, 211, 252, 0.15);
}

.bio-card {
  background: rgba(12, 74, 110, 0.5);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(125, 211, 252, 0.2);
  border-radius: 24px;
  padding: 3rem;
  text-align: center;
}

.bio-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.bio-subtitle {
  color: #bae6fd !important;
  font-size: 1.1rem;
  margin-bottom: 2rem;
}

.bio-content {
  max-width: 700px;
  margin: 0 auto 2rem;
}

.bio-content p {
  color: #e0f2fe !important;
  font-size: 1.05rem;
  line-height: 1.8;
  margin-bottom: 1rem;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.social-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: rgba(125, 211, 252, 0.1);
  border: 2px solid rgba(125, 211, 252, 0.3);
  transition: all 0.3s ease;
}

.social-link:hover {
  background: rgba(125, 211, 252, 0.25);
  border-color: #7dd3fc;
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(125, 211, 252, 0.3);
}

.social-link .bx {
  color: #7dd3fc !important;
  font-size: 1.6rem;
}

.social-link:hover .bx {
  color: #bae6fd !important;
}

/* Responsive */
@media (max-width: 991px) {
  .hero-section {
    padding: 5rem 0 3rem;
  }
  
  .hero-content {
    text-align: center;
    margin-top: 2rem;
  }
  
  .hero-description {
    margin: 0 auto;
  }
  
  .d-flex.gap-3 {
    justify-content: center;
  }
  
  .bio-card {
    padding: 2rem;
  }
}

@media (max-width: 575px) {
  .display-4 {
    font-size: 2rem;
  }
  
  .bio-title {
    font-size: 2rem;
  }
}
</style>
