<script>
export default {
  data(){
    return {
      experiences:[
        {
          year: "Oct 2024 - Present",
          jobs: "Frontend Developer Intern",
          company: "PT Netindo Solution Group",
          location: "Era Solusi Data, Yogyakarta",
          description: [
            "Building and maintaining responsive web interfaces using Next.js, React, and Tailwind CSS",
            "Collaborating with the development team to implement UI/UX designs into functional web applications",
            "Contributing to the digitalization initiatives at Ministry of Manpower (Kemnaker RI)",
          ]
        },
        {
          year: "Dec 2024 - May 2025",
          jobs: "Student Staff DPK",
          company: "Universitas Amikom Yogyakarta",
          location: "Yogyakarta",
          description: [
            "Providing administrative services to over 5000 students efficiently and professionally",
            "Managing and verifying daily financial transactions with high accuracy",
            "Processing transaction records and supporting smooth operational activities",
          ]
        },
        {
          year: "Feb 2024 - Jul 2024",
          jobs: "Database Programming Lab Assistant",
          company: "Universitas Amikom Yogyakarta",
          location: "Yogyakarta",
          description: [
            "Guided students in mastering database management using MySQL and command-line tools",
            "Facilitated practical lab sessions and provided hands-on support for database assignments",
            "Evaluated student work and provided constructive feedback on database design and queries",
          ]
        },
        {
          year: "Feb 2024 - Jul 2024",
          jobs: "Big Data & Data Mining Lab Assistant",
          company: "Universitas Amikom Yogyakarta",
          location: "Yogyakarta",
          description: [
            "Assisted lecturers in delivering Python-based data analysis materials using Google Colab",
            "Supported students in understanding data mining concepts and implementation",
            "Managed lab sessions to ensure smooth practical learning experiences",
          ]
        },
        {
          year: "Aug 2023 - Dec 2023",
          jobs: "Web Development Bootcamp",
          company: "Infinite Learning (MSIB Batch 5)",
          location: "Batam (Remote)",
          description: [
            "Completed intensive web development training through Kampus Merdeka Bersertifikat program",
            "Built educational website WasteProction using HTML/CSS as frontend developer",
            "Contributed to travel website DestinAsyik using React.js and Tailwind CSS",
          ]
        },
        {
          year: "Mar 2023 - Jul 2023",
          jobs: "Operating Systems Lab Assistant",
          company: "Universitas Amikom Yogyakarta",
          location: "Yogyakarta",
          description: [
            "Taught Ubuntu Linux fundamentals and command-line operations to students",
            "Provided practical demonstrations of system administration tasks",
            "Assessed student progress and offered guidance on troubleshooting techniques",
          ]
        },
        {
          year: "Mar 2023 - Jul 2023",
          jobs: "Computer Networks Lab Assistant",
          company: "Universitas Amikom Yogyakarta",
          location: "Yogyakarta",
          description: [
            "Demonstrated hardware and software configurations for networking equipment",
            "Guided students through switch and router configuration exercises",
            "Supervised hands-on lab activities and evaluated practical assignments",
          ]
        },
      ],
      organisations: [
        {
          year: "Jun 2022 - Dec 2022",
          jobs: "Staff Kominfo (Communication & Information)",
          company: "BEM Amikom Yogyakarta",
          location: "Yogyakarta",
          description: [
            "Managed social media content including design, copywriting, and engagement strategies",
            "Organized and supported various campus organizational events and activities",
            "Enhanced campus organization visibility through effective digital communication",
          ]
        }
      ]
    }
  }
}
</script>

<template>
  <section>
    <!-- Work Experience -->
    <div class="d-flex align-items-center justify-content-between mb-4">
      <h2 class="section-title">Work Experience</h2>
    </div>

    <div v-for="(experience, index) of experiences" :key="'experience-' + index" class="card shadow border-0 rounded-4 mb-3">
      <div class="card-body px-4 py-4">
        <div class="row align-items-start gx-4">
          <div class="col-lg-4 text-center text-lg-start mb-3 mb-lg-0">
            <div class="experience-info">
              <div class="experience-year">{{experience.year}}</div>
              <div class="experience-job">{{experience.jobs}}</div>
              <div class="experience-company">{{experience.company}}</div>
              <div class="experience-location">📍 {{experience.location}}</div>
            </div>
          </div>
          <div class="col-lg-8">
            <ul class="experience-list mb-0">
              <li v-for="(desc, descIndex) of experience.description" :key="descIndex">
                {{desc}}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Organisational Experience -->
    <div class="d-flex align-items-center justify-content-between mb-4 mt-5">
      <h2 class="section-title">Organisational Experience</h2>
    </div>

    <div v-for="(org, index) of organisations" :key="'org-' + index" class="card shadow border-0 rounded-4 mb-4 org-card">
      <div class="card-body px-4 py-4">
        <div class="row align-items-start gx-4">
          <div class="col-lg-4 text-center text-lg-start mb-3 mb-lg-0">
            <div class="experience-info">
              <div class="experience-year">{{org.year}}</div>
              <div class="experience-job">{{org.jobs}}</div>
              <div class="experience-company">{{org.company}}</div>
              <div class="experience-location">📍 {{org.location}}</div>
            </div>
          </div>
          <div class="col-lg-8">
            <ul class="experience-list mb-0">
              <li v-for="(desc, descIndex) of org.description" :key="descIndex">
                {{desc}}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section-title {
  color: #ffffff !important;
  font-weight: 700;
  font-size: 1.5rem;
  position: relative;
  display: inline-block;
  padding-bottom: 0.5rem;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, #ffffff, #e0f2fe);
  border-radius: 3px;
}

.experience-info {
  padding: 0.5rem;
}

.experience-year {
  color: #ffffff !important;
  font-weight: 700;
  font-size: 0.95rem;
  margin-bottom: 0.5rem;
}

.experience-job {
  color: #ffffff !important;
  font-weight: 700;
  font-size: 1.05rem;
  margin-bottom: 0.25rem;
}

.experience-company {
  color: #ccd6f6 !important;
  font-size: 0.95rem;
}

.experience-location {
  color: #a8b2d1 !important;
  font-size: 0.85rem;
  margin-top: 0.25rem;
}

.experience-list {
  padding-left: 1.25rem;
}

.experience-list li {
  color: #ccd6f6 !important;
  margin-bottom: 0.5rem;
  line-height: 1.6;
}

.experience-list li::marker {
  color: #ffffff;
}

.org-card {
  border-left: 4px solid #e0f2fe !important;
}
</style>
