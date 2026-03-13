<script setup>

</script>

<template>
  <div class="row gx-5 justify-content-center">
    <div class="col-lg-11 col-xl-9 col-xxl-8">
      
      <!-- Project Card - Esoda Company Profile (Featured Project) -->
      <div class="card overflow-hidden shadow border-0 mb-5 featured-project">
        <div class="card-body p-0">
          <div class="row g-0">
            <!-- Left: Content -->
            <div class="col-lg-6 p-4 p-md-5 d-flex flex-column justify-content-center">
              <span class="badge-new">Latest Project</span>
              <h2 class="fw-bolder text-gradient mt-2 mb-3">Esoda Company Profile</h2>
              <p class="project-desc">
                Company profile website for PT Era Solusi Data (Esoda). As the <strong>sole Frontend Developer</strong>, 
                I implemented the complete UI design, integrated REST APIs, and built a full-featured admin dashboard 
                using React.js and Next.js without any design reference.
              </p>
              <div class="tech-stack mb-3">
                <span class="tech-badge">Next.js</span>
                <span class="tech-badge">React.js</span>
                <span class="tech-badge">Tailwind CSS</span>
                <span class="tech-badge">REST API</span>
              </div>
              <div class="project-highlights mb-4">
                <div class="highlight-item">✓ Complete UI implementation from design</div>
                <div class="highlight-item">✓ Full API integration & Admin dashboard</div>
                <div class="highlight-item">✓ User, role & content management</div>
              </div>
              <div>
                <a href="https://esoda.id" class="btn btn-primary" target="_blank">
                  <i class='bx bx-link-external me-2'></i>Visit Website
                </a>
              </div>
            </div>
            <!-- Right: Images (stacked) -->
            <div class="col-lg-6">
              <div class="project-images-stack">
                <div class="project-image-item">
                  <img src="/images/project/esoda.png" alt="Esoda Website" class="img-fluid" />
                  <span class="image-label">Website</span>
                </div>
                <div class="project-image-item">
                  <img src="/images/project/admin.png" alt="Esoda Admin Dashboard" class="img-fluid" />
                  <span class="image-label">Admin Dashboard</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Project Card 1 - WasteProction -->
      <div class="card overflow-hidden shadow border-0 mb-5">
        <div class="card-body p-0">
          <div class="row">
            <div class="col-md-6 p-5">
              <h2 class="fw-bolder text-gradient">WasteProction</h2>
              <p class="project-desc">
                Educational website about waste management and environmental protection. 
                Built as part of the MSIB Infinite Learning program using HTML and CSS.
              </p>
              <div class="tech-stack mb-3">
                <span class="tech-badge">HTML5</span>
                <span class="tech-badge">CSS3</span>
              </div>
              <a href="https://wasteproction.netlify.app/" class="project-link" target="_blank">
                <i class='bx bx-link-external me-1'></i>wasteproction.netlify.app
              </a>
            </div>
            <div class="col-md-6 project-image" style="background-image: url('/images/project/WASTE.png'); background-size: contain; background-repeat: no-repeat; background-position: center center;">
            </div>
          </div>
        </div>
      </div>

      <!-- Project Card 2 - DestinAsyik -->
      <div class="card overflow-hidden shadow border-0 mb-5">
        <div class="card-body p-0">
          <div class="row">
            <div class="col-md-6 p-5">
              <h2 class="fw-bolder text-gradient">DestinAsyik</h2>
              <p class="project-desc">
                Travel destination discovery website built as the final project for MSIB Infinite Learning program. 
                Developed using React.js and Tailwind CSS with modern UI/UX design.
              </p>
              <div class="tech-stack mb-3">
                <span class="tech-badge">React.js</span>
                <span class="tech-badge">Tailwind CSS</span>
              </div>
            </div>
            <div class="col-md-6 project-image" style="background-image: url('/images/project/dESTIN.png'); background-size: contain; background-repeat: no-repeat; background-position: center center;">
            </div>
          </div>
        </div>
      </div>

      <!-- Project Card 3 - School Website -->
      <div class="card overflow-hidden shadow border-0 mb-5">
        <div class="card-body p-0">
          <div class="row">
            <div class="col-md-6 p-5">
              <h2 class="fw-bolder text-gradient">School Website</h2>
              <p class="project-desc">
                Full-stack school website built as the final project for web programming course at Amikom Yogyakarta University. 
                Includes student information, news, and gallery features.
              </p>
              <div class="tech-stack mb-3">
                <span class="tech-badge">HTML</span>
                <span class="tech-badge">PHP</span>
                <span class="tech-badge">CSS</span>
                <span class="tech-badge">MySQL</span>
              </div>
            </div>
            <div class="col-md-6 project-image" style="background-image: url('/images/project/sk.jpg'); background-size: contain; background-repeat: no-repeat; background-position: center center;">
            </div>
          </div>
        </div>
      </div>

      <!-- Project Card 4 - Auto Rent UI -->
      <div class="card overflow-hidden shadow border-0 mb-5">
        <div class="card-body p-0">
          <div class="row">
            <div class="col-md-6 p-5">
              <h2 class="fw-bolder text-gradient">Auto Rent UI</h2>
              <p class="project-desc">
                Mobile application UI/UX design for car rental service. 
                Created as the final assignment for Human-Computer Interaction (IMK) course using Figma.
              </p>
              <div class="tech-stack mb-3">
                <span class="tech-badge">Figma</span>
                <span class="tech-badge">UI/UX Design</span>
              </div>
            </div>
            <div class="col-md-6 project-image" style="background-image: url('/images/project/au.jpg'); background-size: contain; background-repeat: no-repeat; background-position: center center;">
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
.featured-project {
  border: none !important;
  position: relative;
}

.badge-new {
  background: linear-gradient(135deg, #0ea5e9 0%, #38bdf8 100%);
  color: #ffffff;
  padding: 0.35rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.project-desc {
  color: #e0f2fe !important;
  line-height: 1.7;
  margin-bottom: 1rem;
}

.project-desc strong {
  color: #7dd3fc !important;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-badge {
  background: rgba(125, 211, 252, 0.15);
  border: 1px solid rgba(125, 211, 252, 0.3);
  color: #7dd3fc !important;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
}

.project-highlights {
  margin-top: 0.5rem;
}

.highlight-item {
  color: #bae6fd !important;
  font-size: 0.9rem;
  margin-bottom: 0.35rem;
}

.project-link {
  color: #7dd3fc !important;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
}

.project-link:hover {
  color: #bae6fd !important;
}

.project-link .bx {
  color: #7dd3fc !important;
}

.project-image {
  min-height: 300px;
}

/* Stacked images layout */
.project-images-stack {
  display: flex;
  flex-direction: column;
  gap: 0;
  height: 100%;
}

.project-image-item {
  position: relative;
  flex: 1;
  overflow: hidden;
}

.project-image-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.project-image-item:hover img {
  transform: scale(1.05);
}

.image-label {
  position: absolute;
  bottom: 10px;
  left: 10px;
  background: rgba(12, 74, 110, 0.85);
  color: #7dd3fc;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.project-image-side {
  height: 100%;
  overflow: hidden;
}

.project-image-side img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.project-image-side:hover img {
  transform: scale(1.05);
}

.project-image-full {
  border: none;
  overflow: hidden;
}

.project-image-full img {
  display: block;
  width: 100%;
  height: auto;
  transition: transform 0.3s ease;
}

.project-image-full:hover img {
  transform: scale(1.02);
}

.btn-primary {
  display: inline-flex;
  align-items: center;
}

.btn-primary .bx {
  color: #0c4a6e !important;
}

@media (max-width: 991px) {
  .project-image-side {
    min-height: 250px;
  }
  
  .project-images-stack {
    flex-direction: row;
  }
  
  .project-image-item {
    min-height: 200px;
  }
}

@media (max-width: 767px) {
  .project-image {
    min-height: 200px;
  }
  
  .project-images-stack {
    flex-direction: column;
  }
}
</style>