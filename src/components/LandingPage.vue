<template>
    <div class="flex items-center justify-center min-h-screen bg-[#001449]">
      <div class="text-center bg-[#012677] p-20 font-bold">
        <!-- Heading -->
        <h1 class="text-5xl font-extrabold mb-8 text-white tracking-wide">Welcome to Our Platform</h1>
        <!-- Subtitle -->
        <p class="text-lg text-white mb-8">Scan the QR code below to get started.</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        // Replace with the URL of your QR code image
        qrCodeImage: 'https://img.abyssale.com/574bfa75-c880-46be-97ae-599473818958',
      };
    },
  };
  </script>
  
  <style scoped>
  /* Apply a modern, sans-serif font */
  * {
    font-family: 'Inter', sans-serif;
  }
  </style>
  