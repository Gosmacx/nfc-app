<template>
  <div class="h-screen relative w-full flex items-center justify-center px-6">
    <div class="h-full w-full flex flex-col items-center justify-center gap-6">
      <h1 class="text-lg font-semibold" >{{ $t('appTitle') }}</h1>
      <router-link to="/scan" class="primary-btn">
        <span class="font-semibold"> {{ $t('scanCard') }} </span>
      </router-link>
      <router-link to="/personal" class="primary-btn">
        <span class="font-semibold">{{ $t('addPerson') }}</span>
      </router-link>
      <router-link to="/url" class="primary-btn">
        <span class="font-semibold">{{ $t('addUrl') }}</span>
      </router-link>
      <router-link to="/text" class="primary-btn">
        <span class="font-semibold">{{ $t('addText') }}</span>
      </router-link>
      <router-link to="/tutorial" class="primary-btn !bg-blue-700 text-white">
        <span class="font-semibold">{{ $t('tutorialButton') }}</span>
      </router-link>
    </div>
  </div>
</template>