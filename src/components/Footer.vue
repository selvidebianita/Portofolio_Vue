<script setup>

</script>

<template>
  <footer class="py-4 mt-auto footer-gradient">
    <div class="container px-5">
      <div class="row align-items-center justify-content-center">
        <div class="col-auto text-center">
          <div class="small m-0">
            &copy; {{new Date().getFullYear()}} 
            <a href="https://www.linkedin.com/in/selvi-debi-anita/" class="text-decoration-none footer-link ms-1" target="_blank">
              @selvidebianita
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-link {
  color: #ffffff !important;
  font-weight: 600;
  transition: all 0.3s ease;
}

.footer-link:hover {
  color: #e0f2fe !important;
}
</style>
