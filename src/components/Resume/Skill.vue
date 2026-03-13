<script setup>

</script>

<template>
  <section>
    <!-- Hard Skills Card -->
    <div class="card shadow border-0 rounded-4 mb-5 skill-card-hard">
      <div class="card-body px-4 px-md-5 py-5">
        <div class="mb-4">
          <div class="d-flex align-items-center mb-4">
            <div class="feature bg-gradient-primary-to-secondary text-white rounded-3 me-3">
              <i class='bx bx-code-alt'></i>
            </div>
            <h3 class="fw-bolder mb-0"><span class="text-gradient d-inline">Technical Skills</span></h3>
          </div>
          
          <!-- Programming & Data -->
          <div class="skill-category mb-4">
            <h5 class="skill-category-title">Programming & Data Analysis</h5>
            <div class="row row-cols-2 row-cols-md-4 g-3">
              <div class="col"><div class="skill-item">PHP</div></div>
              <div class="col"><div class="skill-item">Python</div></div>
              <div class="col"><div class="skill-item">JavaScript</div></div>
              <div class="col"><div class="skill-item">SQL/MySQL</div></div>
              <div class="col"><div class="skill-item">C++</div></div>
              <div class="col"><div class="skill-item">Pandas</div></div>
              <div class="col"><div class="skill-item">NumPy</div></div>
              <div class="col"><div class="skill-item">Matplotlib</div></div>
              <div class="col"><div class="skill-item">Seaborn</div></div>
              <div class="col"><div class="skill-item">Data Cleaning</div></div>
              <div class="col"><div class="skill-item">Data Visualization</div></div>
              <div class="col"><div class="skill-item">Machine Learning</div></div>
              <div class="col"><div class="skill-item">Scikit-learn</div></div>
            </div>
          </div>

          <!-- Web Development -->
          <div class="skill-category mb-4">
            <h5 class="skill-category-title">Web Development</h5>
            <div class="row row-cols-2 row-cols-md-4 g-3">
              <div class="col"><div class="skill-item featured">Next.js</div></div>
              <div class="col"><div class="skill-item featured">React.js</div></div>
              <div class="col"><div class="skill-item featured">Vue.js</div></div>
              <div class="col"><div class="skill-item featured">Tailwind CSS</div></div>
              <div class="col"><div class="skill-item">HTML5</div></div>
              <div class="col"><div class="skill-item">CSS3</div></div>
              <div class="col"><div class="skill-item">Node.js</div></div>
              <div class="col"><div class="skill-item">Bootstrap</div></div>
            </div>
          </div>

          <!-- Tools & Platforms -->
          <div class="skill-category">
            <h5 class="skill-category-title">Database & Tools</h5>
            <div class="row row-cols-2 row-cols-md-4 g-3">
              <div class="col"><div class="skill-item">Git</div></div>
              <div class="col"><div class="skill-item featured">GitLab</div></div>
              <div class="col"><div class="skill-item">GitHub</div></div>
              <div class="col"><div class="skill-item">phpMyAdmin</div></div>
              <div class="col"><div class="skill-item">Google Colab</div></div>
              <div class="col"><div class="skill-item">Jupyter Notebook</div></div>
              <div class="col"><div class="skill-item">VS Code</div></div>
              <div class="col"><div class="skill-item">Figma</div></div>
            </div>
          </div>

          <!-- Platforms -->
          <div class="skill-category mt-4">
            <h5 class="skill-category-title">Platforms</h5>
            <div class="row row-cols-2 row-cols-md-4 g-3">
              <div class="col"><div class="skill-item">Linux</div></div>
              <div class="col"><div class="skill-item">Windows</div></div>
              <div class="col"><div class="skill-item">Cloud Applications</div></div>
              <div class="col"><div class="skill-item">MS Office</div></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Soft Skills Card -->
    <div class="card shadow border-0 rounded-4 mb-5 skill-card-soft">
      <div class="card-body px-4 px-md-5 py-5">
        <div class="mb-0">
          <div class="d-flex align-items-center mb-4">
            <div class="feature bg-gradient-primary-to-secondary text-white rounded-3 me-3">
              <i class='bx bx-user-voice'></i>
            </div>
            <h3 class="fw-bolder mb-0"><span class="text-gradient d-inline">Soft Skills</span></h3>
          </div>
          <div class="row row-cols-2 row-cols-md-3 g-3">
            <div class="col"><div class="skill-item">Critical Thinking</div></div>
            <div class="col"><div class="skill-item">Analytical Skills</div></div>
            <div class="col"><div class="skill-item">Problem Solving</div></div>
            <div class="col"><div class="skill-item">Effective Communication</div></div>
            <div class="col"><div class="skill-item">Time Management</div></div>
            <div class="col"><div class="skill-item">Team Collaboration</div></div>
            <div class="col"><div class="skill-item">Creativity</div></div>
            <div class="col"><div class="skill-item">Adaptability</div></div>
            <div class="col"><div class="skill-item">Public Speaking</div></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skill-category-title {
  color: #ffffff !important;
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid rgba(125, 211, 252, 0.2);
}

.skill-item {
  background: rgba(7, 89, 133, 0.5);
  border: 1px solid rgba(125, 211, 252, 0.3);
  border-radius: 10px;
  padding: 0.75rem 1rem;
  text-align: center;
  color: #ffffff !important;
  font-weight: 500;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.skill-item.featured {
  background: rgba(7, 89, 133, 0.5);
  border: 1px solid rgba(125, 211, 252, 0.3);
  font-weight: 500;
}

.skill-item:hover {
  background: rgba(7, 89, 133, 0.7);
  transform: translateY(-2px);
}

.feature {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 3rem;
  width: 3rem;
  font-size: 1.5rem;
}

.feature .bx {
  color: #ffffff !important;
}
</style>
