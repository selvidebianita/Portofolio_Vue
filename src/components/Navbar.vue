<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()

const isActive = (path) => {
  if (path === '/') {
    return route.path === '/'
  }
  return route.path.startsWith(path)
}
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light py-1 fixed-top">
    <div class="container px-5">
      <RouterLink to="/" class="navbar-brand">
        <span class="fw-bolder text-gradient fs-4">@SelviDebiA</span>
      </RouterLink>
      <a class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i class='bx bx-menu-alt-right'></i>
      </a>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder">
          <li class="nav-item">
            <RouterLink to="/" class="nav-link" :class="{ active: isActive('/') }">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/resume" class="nav-link" :class="{ active: isActive('/resume') }">Resume</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/project" class="nav-link" :class="{ active: isActive('/project') }">Projects</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/contact" class="nav-link" :class="{ active: isActive('/contact') }">Contact</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar-toggler {
  border: none !important;
  font-size: 24px !important;
}

.fixed-top {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1030;
}

.nav-link {
  position: relative;
  padding-bottom: 0.5rem;
}

.nav-link.active {
  color: #ffffff !important;
  font-weight: 700;
}

.nav-link.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 70%;
  height: 3px;
  background: #ffffff;
  border-radius: 3px;
}
</style>