<template>
    <div v-if="!loading" class="w-full top-16 md:top-0 absolute md:relative md:h-screen flex flex-col items-center justify-center px-6 gap-6" >
        <input v-model="url" type="text" class="text-field" :placeholder="$t('inputURL')" autofocus>
        <button @click="start" class="primary-btn" >
            <span class="font-semibold" >{{ $t('startWriteButton') }} </span>
        </button>
    </div>
    <Loading v-else :touchedDelay="touchedDelay" />
</template>

<script setup>
import { ref } from 'vue'
import Loading from '../components/Loading.vue'
import write from '../utils/Write'

const loading = ref(false)
const url = ref(null)
const touchedDelay = ref(false)


const start = async () => {
    if (!url.value) return alert("Specify a url")
    let record = [{ 
            recordType: "url",
            data: url.value
        }]
    write(record, touchedDelay, loading)
}

</script>