<script setup>
import Education from "@/components/Resume/Education.vue";
import Experience from "@/components/Resume/Experience.vue";
import Skill from "@/components/Resume/Skill.vue";
</script>

<template>
  <main class="container px-5">
    <!-- Resume Title -->
    <div class="text-center mb-0">
      <h1 class="display-5 fw-bolder mb-0"><span class="text-gradient d-inline">Resume</span></h1>
    </div>
    
    <!-- Components -->
    <Education/>
    <Experience/>
    <Skill/>
  </main>
</template>

<style scoped>
main {
  padding-top: 5rem;
}
</style>
