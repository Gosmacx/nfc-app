<template>
  <div class="h-screen relative w-full flex items-center justify-center px-6">
    <div class="h-full w-full flex flex-col items-center justify-center gap-6">
      <h1 class="text-lg font-semibold" >Create Digital Business Card for free</h1>
      <router-link to="/scan" class="primary-btn">
        <span class="font-semibold">SCAN CARD</span>
      </router-link>
      <router-link to="/personal" class="primary-btn">
        <span class="font-semibold">ADD PERSON</span>
      </router-link>
      <router-link to="/url" class="primary-btn">
        <span class="font-semibold">ADD URL</span>
      </router-link>
      <router-link to="/text" class="primary-btn">
        <span class="font-semibold">ADD TEXT</span>
      </router-link>
    </div>
  </div>
</template>