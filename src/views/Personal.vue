<template>
    <div v-if="!loading" class="w-full top-16 md:top-0 absolute md:relative md:h-screen flex flex-col items-center justify-center px-6 gap-6" >

        <span class="text-xs" >You don't have to fill everything.</span>
        <input v-model="name" type="text" class="text-field" placeholder="Name" autofocus>
        <input v-model="phone" type="tel" class="text-field" placeholder="Phone" >
        <input v-model="email" type="text" class="text-field" placeholder="Email" >
        <input v-model="title" type="text" class="text-field" placeholder="Title" >
        <input v-model="website" type="text" class="text-field" placeholder="Website" >

        <button @click="start" class="primary-btn" >
            <span class="font-semibold" >Start Write</span>
        </button>
    </div>
    <Loading v-else :touchedDelay="touchedDelay" />
</template>

<script setup>
import { ref } from 'vue'
import write from '../utils/Write'
import Loading from '../components/Loading.vue'

const loading = ref(false)
const name = ref(null)
const website = ref(null)
const email = ref(null)
const phone = ref(null)
const title = ref(null)
const touchedDelay = ref(false)
import charBlocker from '../utils/charBlocker'

const start = async () => {
    const encoder = new TextEncoder();
    const adjustedName = name.value?.split(" ").reverse().join(";") + ";;;"
    if (charBlocker(adjustedName)) return alert("Unsupported character")
        
    let data = `BEGIN:VCARD
VERSION:3.0
REV:2022-06-24T00:00:00Z
`
    if (name) data += `N:${adjustedName}`;
    if (website.value) data += `
URL:${website.value}`
    if (email.value) data += `
EMAIL:${email.value}`
    if (phone.value) data += `
TEL;TYPE=CELL:${phone.value}`
    if (title.value) data += `
TITLE:${title.value}`
        data += `
END:VCARD`

    let record = [
        { 
            recordType: "mime",
            mediaType: "text/vcard", 
            data: encoder.encode(data)
        }
    ]

    write(record, touchedDelay, loading)

}

</script>