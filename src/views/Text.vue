<template>
    <div v-if="!loading" class="w-full top-16 md:top-0 absolute md:relative md:h-screen flex flex-col items-center justify-center px-6 gap-6" >
        <input v-model="text" type="text" class="text-field" placeholder="Text Message" autofocus>
        <button @click="start" class="primary-btn" >
            <span class="font-semibold" >Start Write</span>
        </button>
    </div>
    <Loading v-else :touchedDelay="touchedDelay" />
</template>

<script setup>
import { ref } from 'vue'
import Loading from '../components/Loading.vue'
import write from '../utils/Write'
import charBlocker from '../utils/charBlocker'

const loading = ref(false)
const text = ref(null)
const touchedDelay = ref(false)


const start = async () => {
    if (!text.value) return alert("Specify a message")
    if (charBlocker(text.value)) return alert("Unsupported character")

    let record = [{ 
            recordType: "url",
            data: text.value
        }]
    write(record, touchedDelay, loading)
}

</script>