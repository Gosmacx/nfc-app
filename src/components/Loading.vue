<template>
    <div class="w-full h-screen flex items-center justify-center" :class="{ touched: props.touchedDelay }" >
        <span class="text-3xl font-bold animate-pulse">{{ $t('touchScreen') }} </span>
    </div>
</template>

<script setup>

let props = defineProps({
    touchedDelay: Boolean
})
</script>

<style scoped>
.touched {
  background-color: rgb(4, 193, 4) !important;
  color: black !important;
}
</style>