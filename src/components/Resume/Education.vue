<script>
export default {
  data(){return{
    educations: [
      {
        year: "Sep 2021 - Feb 2025",
        univ: "Universitas AMIKOM Yogyakarta",
        location: "Kabupaten Sleman, D.I Yogyakarta",
        degree: "Bachelor of Informatics",
        gpa: "GPA: 3.92/4.00",
        description: [
          "Specialized in Frontend Web Development and Data Analysis, focusing on building user-centric interfaces.",
          "Gained extensive hands-on experience in software engineering, data analysis, and network administration.",
          "Actively contributed as a Lab Assistant for software engineering and programming practical courses.",
        ]
      },
      {
        year: "2018 - 2021",
        univ: "MAN 1 Bima",
        location: "Bima, Nusa Tenggara Barat",
        degree: "Senior High School",
        gpa: "Natural Science (IPA)",
        description: [
          "Completed science-focused curriculum with emphasis on mathematics and physics",
          "Developed strong analytical and problem-solving foundations",
        ]
      },
    ]
  }}
}
</script>

<template>
  <section>
    <h2 class="text-secondary fw-bolder mb-4">Education</h2>

    <div v-for="(education, index) of educations" :key="index" class="card shadow border-0 rounded-4 mb-4">
      <div class="card-body px-4 py-4">
        <div class="row align-items-center gx-4">
          <div class="col-lg-4 text-center text-lg-start mb-3 mb-lg-0">
            <div class="education-info">
              <div class="education-year">{{education.year}}</div>
              <div class="education-univ">{{education.univ}}</div>
              <div class="education-location">{{education.location}}</div>
              <div class="education-degree">{{education.degree}}</div>
              <div class="education-gpa">{{education.gpa}}</div>
            </div>
          </div>
          <div class="col-lg-8">
            <ul class="education-list mb-0">
              <li v-for="(desc, descIndex) of education.description" :key="descIndex">
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
.education-info {
  padding: 0.5rem;
}

.education-year {
  color: #ffffff !important;
  font-weight: 700;
  font-size: 0.95rem;
  margin-bottom: 0.5rem;
}

.education-univ {
  color: #ffffff !important;
  font-weight: 700;
  font-size: 1.05rem;
  margin-bottom: 0.25rem;
}

.education-location {
  color: #a8b2d1 !important;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.education-degree {
  color: #ccd6f6 !important;
  font-size: 0.95rem;
  font-style: italic;
}

.education-gpa {
  color: #ffffff !important;
  font-size: 0.9rem;
  font-weight: 600;
}

.education-list {
  padding-left: 1.25rem;
}

.education-list li {
  color: #ccd6f6 !important;
  margin-bottom: 0.5rem;
  line-height: 1.6;
}

.education-list li::marker {
  color: #ffffff;
}
</style>
