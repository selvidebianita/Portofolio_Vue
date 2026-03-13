<script setup>

</script>

<template>
  <div class="container px-5 my-5">
    <div class="text-center mb-5">
      <h1 class="display-5 fw-bolder mb-0"><span class="text-gradient d-inline">Contact</span></h1>
    </div>

    <h2 class="text-secondary fw-bolder mb-4">Let's Work Together! 🚀</h2>
    <div class="row">
      <div class="col-12">
        <p class="fs-4 text-body mb-3">
          Tertarik untuk berkolaborasi atau memiliki proyek menarik? Saya selalu terbuka untuk peluang baru!
        </p>
        <p class="fs-5 text-body-secondary mb-3">
          💼 <strong>Open for opportunities</strong> — Freelance, full-time, atau project-based collaboration
        </p>
        <p class="fs-5 text-body-secondary mb-3">
          🎯 <strong>What I can help with</strong> — Frontend Development, UI/UX Implementation, Web Applications
        </p>
        <p class="fs-5 text-body-secondary mb-4">
          📬 <strong>Response time</strong> — Saya akan merespon dalam 24 jam! Scan QR code di bawah untuk terhubung langsung.
        </p>
      </div>
    </div>

    <!-- QR Codes Section -->
    <div class="mt-5">
      <h3 class="text-secondary fw-bolder mb-4 text-center">Scan QR Code 📱</h3>
      <div class="row justify-content-center g-4">
        <!-- Email QR -->
        <div class="col-6 col-md-3 text-center">
          <div class="qr-card qr-email">
            <a href="mailto:selvidebianita@gmail.com">
              <img 
                src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=mailto:selvidebianita@gmail.com" 
                alt="Email QR Code"
                class="qr-code"
              />
            </a>
            <p class="qr-label"><i class='bx bx-envelope'></i> Send Email</p>
          </div>
        </div>

        <!-- WhatsApp QR -->
        <div class="col-6 col-md-3 text-center">
          <div class="qr-card qr-whatsapp">
            <a href="https://wa.me/6285176894296" target="_blank">
              <img 
                src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=https://wa.me/6285176894296" 
                alt="WhatsApp QR Code"
                class="qr-code"
              />
            </a>
            <p class="qr-label"><i class='bx bxl-whatsapp'></i> Chat Me</p>
          </div>
        </div>

        <!-- Instagram QR -->
        <div class="col-6 col-md-3 text-center">
          <div class="qr-card qr-instagram">
            <a href="https://www.instagram.com/selvidebyyi/" target="_blank">
              <img 
                src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=https://www.instagram.com/selvidebyyi/" 
                alt="Instagram QR Code"
                class="qr-code"
              />
            </a>
            <p class="qr-label"><i class='bx bxl-instagram'></i> Follow Me</p>
          </div>
        </div>

        <!-- LinkedIn QR -->
        <div class="col-6 col-md-3 text-center">
          <div class="qr-card qr-linkedin">
            <a href="https://www.linkedin.com/in/selvi-debi-anita/" target="_blank">
              <img 
                src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=https://www.linkedin.com/in/selvi-debi-anita/" 
                alt="LinkedIn QR Code"
                class="qr-code"
              />
            </a>
            <p class="qr-label"><i class='bx bxl-linkedin'></i> Let's Connect</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.qr-card {
  padding: 1.25rem;
  border-radius: 20px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  overflow: hidden;
}

.qr-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  transition: left 0.5s ease;
}

.qr-card:hover::before {
  left: 100%;
}

.qr-card:hover {
  transform: translateY(-10px) scale(1.02);
  border-color: rgba(255, 255, 255, 0.3);
}

.qr-code {
  border-radius: 16px;
  box-shadow: 
    0 4px 15px rgba(0, 0, 0, 0.2),
    0 0 0 3px rgba(255, 255, 255, 0.1);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  background: white;
  padding: 10px;
}

.qr-code:hover {
  transform: scale(1.08) rotate(2deg);
}

.qr-label {
  margin-top: 1rem;
  margin-bottom: 0;
  font-weight: 700;
  font-size: 0.95rem;
  color: #e0f2fe;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
}

.qr-card:hover .qr-label {
  transform: scale(1.05);
}

/* Platform-specific styles */
.qr-email {
  background: linear-gradient(135deg, rgba(234, 67, 53, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%);
}

.qr-email:hover {
  box-shadow: 0 15px 40px rgba(234, 67, 53, 0.3), inset 0 0 20px rgba(234, 67, 53, 0.1);
}

.qr-email:hover .qr-code {
  box-shadow: 
    0 8px 25px rgba(234, 67, 53, 0.5),
    0 0 0 4px rgba(234, 67, 53, 0.2);
}

.qr-email:hover .qr-label {
  color: #ff6b6b;
}

.qr-whatsapp {
  background: linear-gradient(135deg, rgba(37, 211, 102, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%);
}

.qr-whatsapp:hover {
  box-shadow: 0 15px 40px rgba(37, 211, 102, 0.3), inset 0 0 20px rgba(37, 211, 102, 0.1);
}

.qr-whatsapp:hover .qr-code {
  box-shadow: 
    0 8px 25px rgba(37, 211, 102, 0.5),
    0 0 0 4px rgba(37, 211, 102, 0.2);
}

.qr-whatsapp:hover .qr-label {
  color: #25d366;
}

.qr-instagram {
  background: linear-gradient(135deg, rgba(225, 48, 108, 0.15) 0%, rgba(131, 58, 180, 0.1) 50%, rgba(255, 255, 255, 0.05) 100%);
}

.qr-instagram:hover {
  box-shadow: 0 15px 40px rgba(225, 48, 108, 0.3), inset 0 0 20px rgba(225, 48, 108, 0.1);
}

.qr-instagram:hover .qr-code {
  box-shadow: 
    0 8px 25px rgba(225, 48, 108, 0.5),
    0 0 0 4px rgba(225, 48, 108, 0.2);
}

.qr-instagram:hover .qr-label {
  color: #e1306c;
}

.qr-linkedin {
  background: linear-gradient(135deg, rgba(10, 102, 194, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%);
}

.qr-linkedin:hover {
  box-shadow: 0 15px 40px rgba(10, 102, 194, 0.3), inset 0 0 20px rgba(10, 102, 194, 0.1);
}

.qr-linkedin:hover .qr-code {
  box-shadow: 
    0 8px 25px rgba(10, 102, 194, 0.5),
    0 0 0 4px rgba(10, 102, 194, 0.2);
}

.qr-linkedin:hover .qr-label {
  color: #0a66c2;
}

/* Subtle floating animation */
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}

.qr-card:hover .qr-code {
  animation: float 2s ease-in-out infinite;
}
</style>