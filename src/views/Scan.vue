<template>

  <div v-if="!loading" class="w-full h-screen flex relative items-center justify-center px-8" >
    
    <button v-if="!result" @click="start" class="primary-btn !w-24 !rounded-full">
      <span class="font-semibold">{{ $t('startScanButton') }}</span>
    </button>
    
    <div v-else class="w-full h-full flex flex-col items-center justify-center gap-8 " >
      <div class="w-full bg-gray-900 p-3 rounded-sm" >
        <h1 class="w-full text-center font-bold text-lg" >{{ $t('scanResult.title') }}</h1>
        <h2 class="font-semibold my-2" > {{ $t('scanResult.serialNumber') }} {{ serialNumberCard }} </h2>
        <span class="font-semibold" >{{ $t('scanResult.data') }}</span>
        <h2 v-for="item in data" :key="item" > {{ item }} </h2>
        <img id="myImg" src="">
      </div>
      
      <button @click="start" class="primary-btn !w-24 !rounded-full">
        <span class="font-semibold">{{ $t('scanAgainButton') }}</span>
      </button>
    </div>

  </div>
  <Loading v-else :touchedDelay="touchedDelay" />
  
</template>

<script setup>
import { ref } from "vue";
import Loading from '../components/Loading.vue'

const data = ref([]);
const serialNumberCard = ref("");
const loading = ref(false);
const result = ref(false);
const touchedDelay = ref(false)

const start = async () => {
  loading.value = true;
  try {
    const ndef = new NDEFReader();
    await ndef.scan();
    ndef.addEventListener("reading", ({ message, serialNumber }) => {
      touchedDelay.value = true
      data.value = []
      
      const decoder = new TextDecoder();

      for (const record of message.records) {
        switch (record.recordType) {
          case "text":
            const textDecoder = new TextDecoder(record.encoding);
            data.value.push(`Text: ${textDecoder.decode(record.data)} (${record.lang})`)
            break;
          case "url":
            data.value.push(`URL: ${decoder.decode(record.data)}`)
            break;
          case "mime":
            if (record.mediaType === "application/json") {
              data.value.push(`JSON: ${JSON.parse(decoder.decode(record.data))}`)
            } else if (record.mediaType === "text/vcard") {
              data.value.push(`Data: ${decoder.decode(record.data)}`)
            } else if (record.mediaType.startsWith("image/")) {
              const blob = new Blob([record.data], { type: record.mediaType });

              const img = document.getElementById("myImg");
              img.src = URL.createObjectURL(blob);
              img.onload = () => window.URL.revokeObjectURL(this.src);

            } else {
              alert(`Media not handled`);
            }
            break;
          default:
            alert(`Record not handled`);
        }
      }

      setTimeout(() => {
        touchedDelay.value = false
        serialNumberCard.value = serialNumber
        loading.value = false
        result.value = true
      }, 700);

    });
  } catch (error) {
    alert(error);
    loading.value = false;
  }

};

</script>

<style scoped>
.touched {
  background-color: rgb(4, 193, 4) !important;
  color: black !important;
}
</style>