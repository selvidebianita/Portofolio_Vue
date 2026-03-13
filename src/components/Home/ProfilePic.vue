<script setup>

</script>

<template>
  <div class="profile">
    <img class="profile-img" src="/images/biru.png" alt="Selvi Debi Anita" />
  </div>
</template>

<style scoped>
.profile {
  position: relative;
  width: 100%;
  max-width: 380px;
  margin: 0 auto;
}

.profile-img {
  width: 100%;
  height: auto;
  border-radius: 24px;
  border: none;
  box-shadow: none;
  transition: all 0.4s ease;
  object-fit: cover;
  aspect-ratio: 1 / 1;
}

.profile-img:hover {
  transform: translateY(-5px);
}

@media (max-width: 991px) {
  .profile {
    max-width: 320px;
  }
}

@media (max-width: 575px) {
  .profile {
    max-width: 280px;
  }
  
  .profile-img {
    border-radius: 20px;
  }
}
</style>