<script setup>
import { ref } from 'vue';

const projects = ref([
  {
    title: 'Esoda Company Profile',
    isFeatured: true,
    badge: 'Latest Project',
    description: 'Company profile website for PT Era Solusi Data (Esoda). As the <strong>sole Frontend Developer</strong>, I implemented the complete UI design, integrated REST APIs, and built a full-featured admin dashboard using React.js and Next.js without any design reference.',
    techStack: ['Next.js', 'React.js', 'Tailwind CSS', 'REST API'],
    highlights: [
      'Complete UI implementation from design',
      'Full API integration & Admin dashboard',
      'User, role & content management'
    ],
    link: 'https://esoda.id',
    images: [
      { src: '/images/project/esoda.png', label: 'Website' },
      { src: '/images/project/admin.png', label: 'Admin Dashboard' },
      { src: '/images/project/esoda-home.png', label: 'Home Page' },
      { src: '/images/project/esoda-dashboard.png', label: 'Dashboard Stats' }
    ]
  },
  {
    title: 'WasteProction',
    isFeatured: false,
    description: 'Educational website about waste management and environmental protection. Built as part of the MSIB Infinite Learning program using HTML and CSS.',
    techStack: ['HTML5', 'CSS3'],
    link: 'https://wasteproction.netlify.app/',
    images: [
      { src: '/images/project/WASTE.png', label: 'Landing Page' },
      { src: '/images/project/wps.jpg', label: 'Content Interface' }
    ]
  },
  {
    title: 'DestinAsyik',
    isFeatured: false,
    description: 'Travel destination discovery website built as the final project for MSIB Infinite Learning program. Developed using React.js and Tailwind CSS with modern UI/UX design.',
    techStack: ['React.js', 'Tailwind CSS'],
    images: [
      { src: '/images/project/dESTIN.png', label: 'Main Display' },
      { src: '/images/project/ds.jpg', label: 'Destinations View' }
    ]
  },
  {
    title: 'School Website',
    isFeatured: false,
    description: 'Full-stack school website built as the final project for web programming course at Amikom Yogyakarta University. Includes student information, news, and gallery features.',
    techStack: ['HTML', 'PHP', 'CSS', 'MySQL'],
    images: [
      { src: '/images/project/sk.jpg', label: 'School Portal' },
      { src: '/images/project/dc.png', label: 'Database Design' }
    ]
  },
  {
    title: 'Auto Rent UI',
    isFeatured: false,
    description: 'Mobile application UI/UX design for car rental service. Created as the final assignment for Human-Computer Interaction (IMK) course using Figma.',
    techStack: ['Figma', 'UI/UX Design'],
    images: [
      { src: '/images/project/au.jpg', label: 'Mobile Interface' }
    ]
  }
]);
</script>

<template>
  <div class="row gx-5 justify-content-center">
    <div class="col-lg-11 col-xl-9 col-xxl-8">
      
      <div v-for="(project, index) in projects" :key="index" :class="['card overflow-hidden shadow border-0 mb-5', project.isFeatured ? 'featured-project' : '']">
        <div class="card-body p-0">
          <div class="row g-0">
            <!-- Left: Content -->
            <div :class="[project.isFeatured ? 'col-lg-6 p-4 p-md-5 d-flex flex-column justify-content-center' : 'col-md-6 p-5 d-flex flex-column justify-content-center']">
              <span v-if="project.badge" class="badge-new w-auto align-self-start">{{ project.badge }}</span>
              <h2 :class="['fw-bolder text-gradient', project.badge ? 'mt-2 mb-3' : 'mb-3']">{{ project.title }}</h2>
              <p class="project-desc" v-html="project.description"></p>
              
              <div class="tech-stack mb-3">
                <span v-for="tech in project.techStack" :key="tech" class="tech-badge">{{ tech }}</span>
              </div>
              
              <div v-if="project.highlights" class="project-highlights mb-4">
                <div v-for="highlight in project.highlights" :key="highlight" class="highlight-item">✓ {{ highlight }}</div>
              </div>
              
              <div v-if="project.link">
                <a :href="project.link" :class="[project.isFeatured ? 'btn btn-primary' : 'project-link']" target="_blank">
                  <i class='bx bx-link-external me-2'></i>{{ project.isFeatured ? 'Visit Website' : project.link.replace('https://', '').replace('/', '') }}
                </a>
              </div>
            </div>

            <!-- Right: Image Slider -->
            <div :class="[project.isFeatured ? 'col-lg-6' : 'col-md-6']">
              <div :id="'carouselProject' + index" class="carousel slide h-100" data-bs-ride="carousel">
                <div class="carousel-indicators" v-if="project.images.length > 1">
                  <button v-for="(img, imgIndex) in project.images" :key="'ind-'+imgIndex" type="button" :data-bs-target="'#carouselProject' + index" :data-bs-slide-to="imgIndex" :class="{ active: imgIndex === 0 }" aria-current="true" :aria-label="'Slide ' + (imgIndex + 1)"></button>
                </div>
                
                <div class="carousel-inner h-100">
                  <div v-for="(image, imgIndex) in project.images" :key="'img-'+imgIndex" :class="['carousel-item h-100', { active: imgIndex === 0 }]">
                    <div class="project-image-view h-100 w-100 position-relative">
                      <img :src="image.src" :alt="image.label" class="img-fluid w-100 h-100 object-fit-cover" />
                      <span v-if="project.isFeatured" class="image-label">{{ image.label }}</span>
                      
                      <!-- Overlay for non-featured projects to maintain styling -->
                      <div v-if="!project.isFeatured" class="image-overlay"></div>
                    </div>
                  </div>
                </div>
                
                <button v-if="project.images.length > 1" class="carousel-control-prev" type="button" :data-bs-target="'#carouselProject' + index" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon shadow-sm rounded-circle p-3 bg-dark bg-opacity-50" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button v-if="project.images.length > 1" class="carousel-control-next" type="button" :data-bs-target="'#carouselProject' + index" data-bs-slide="next">
                  <span class="carousel-control-next-icon shadow-sm rounded-circle p-3 bg-dark bg-opacity-50" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
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
  display: inline-block;
}

.project-desc {
  color: #e0f2fe !important;
  line-height: 1.7;
  margin-bottom: 1rem;
}

.project-desc :deep(strong) {
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
  display: inline-flex;
  align-items: center;
}

.project-link:hover {
  color: #bae6fd !important;
}

.project-link .bx {
  color: #7dd3fc !important;
}

.project-image-view {
  min-height: 300px;
  background-color: #0c1524; /* Fallback background */
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, rgba(15, 23, 42, 0.8) 0%, rgba(15, 23, 42, 0.2) 100%);
  pointer-events: none;
}

.image-label {
  position: absolute;
  bottom: 15px;
  left: 15px;
  background: rgba(12, 74, 110, 0.85);
  color: #7dd3fc;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  z-index: 2;
  backdrop-filter: blur(4px);
  border: 1px solid rgba(125, 211, 252, 0.2);
}

.btn-primary {
  display: inline-flex;
  align-items: center;
}

.btn-primary .bx {
  color: #0c4a6e !important;
}

/* Customizing Bootstrap Carousel */
.carousel-indicators {
  margin-bottom: 10px;
}

.carousel-indicators [data-bs-target] {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #fff;
  opacity: 0.5;
  transition: opacity 0.3s ease;
}

.carousel-indicators .active {
  opacity: 1;
  background-color: #38bdf8;
  box-shadow: 0 0 5px rgba(56, 189, 248, 0.8);
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  background-size: 50%;
}

.carousel-control-prev,
.carousel-control-next {
  width: 10%;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.carousel:hover .carousel-control-prev,
.carousel:hover .carousel-control-next {
  opacity: 0.8;
}

.carousel-control-prev:hover,
.carousel-control-next:hover {
  opacity: 1;
}

@media (max-width: 991px) {
  .project-image-view {
    min-height: 250px;
  }
}

@media (max-width: 767px) {
  .project-image-view {
    min-height: 220px;
  }
}
</style>