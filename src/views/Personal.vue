<template>
    <div v-if="!loading" class="w-full top-16 md:top-0 absolute md:relative md:h-screen flex flex-col items-center justify-center px-6 gap-6" >

        <span class="text-xs" >You don't have to fill everything.</span>
        <input @input="setData" v-model="name" type="text" class="text-field" placeholder="Name" autofocus>
        <input @input="setData" v-model="phone" type="tel" class="text-field" placeholder="Phone" >
        <input @input="setData" v-model="email" type="text" class="text-field" placeholder="Email" >
        <input @input="setData" v-model="title" type="text" class="text-field" placeholder="Title" >
        <input @input="setData" v-model="website" type="text" class="text-field" placeholder="Website" >

        <button @click="start" class="primary-btn" >
            <span class="font-semibold" >Start Write {{ data?.byteLength ? `: ${data.byteLength} BYTE ` : null }} </span>
        </button>
    </div>
    <Loading v-else :touchedDelay="touchedDelay" />
</template>

<script setup>
import { ref } from 'vue'
import write from '../utils/Write'
import Loading from '../components/Loading.vue'
import charBlocker from '../utils/charBlocker'

const loading = ref(false)
const name = ref(null)
const website = ref(null)
const email = ref(null)
const phone = ref(null)
const title = ref(null)
const data = ref(null)
const touchedDelay = ref(false)

const setData = () => {

    const encoder = new TextEncoder();

    let information = `BEGIN:VCARD
VERSION:3.0
${name.value ? `FN;CHARSET=UTF-8:${name.value}`: ''}
${website.value ? `URL:${website.value}`: ''}
${email.value ? `EMAIL:${email.value}`: ''}
${phone.value ? `TEL;TYPE=CELL:${phone.value}`: ''}
${title.value ? `TITLE;CHARSET=UTF-8:${title.value}` : ''}
END:VCARD
`
    // Clear empty lines.
    information = information.replace(/^\s*$(?:\r\n?|\n)/gm, "")
    data.value = encoder.encode(information)

}
const start = async () => {
    if (!data.value) return;

    let record = [
        { 
            recordType: "mime",
            mediaType: "text/vcard", 
            data: data.value
        }
    ]

    write(record, touchedDelay, loading)
}

</script>