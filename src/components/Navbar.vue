<template>
    <nav class="w-full absolute h-12 flex px-8 items-center justify-between bg-transparent z-10" >
        <button @click="back" class="bg-white text-black h-8 w-8 rounded-full flex items-center justify-center" >
            <img src="../assets/back.svg" width="30">
        </button>
        <h1 class="font-bold text-lg" >NFC qq</h1>
        <button @click="setLang" class="w-8 h-8 bg-white rounded-full text-black font-semibold" > {{ store.state.selectedLang }} </button>
    </nav>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

const store = useStore()
const router = useRouter()

const setLang = () => store.commit('setLang', store.state.selectedLang == 'TR' ? 'EN' : 'TR');
const back = () => router.back(-1);
</script>