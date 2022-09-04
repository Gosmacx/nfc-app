<template>
    <div v-if="!$store.state.langIsSelected" class="absolute top-0 right-0 lef h-screen w-full z-10 flex bg-black bg-opacity-60 items-center justify-center" >
        <div class="w-3/4 h-48 bg-gray-800 rounded shadow shadow-black flex items-center" >
            <button @click="$store.commit('setLang', 'TR')" class="w-full h-full flex items-center justify-center hover:bg-gray-700" >
                <h1 class="font-bold text-4xl" >TR</h1>
            </button>
            <button @click="$store.commit('setLang', 'EN')" class="w-full h-full flex items-center justify-center hover:bg-gray-700 " >
                <h1 class="font-bold text-4xl" >EN</h1>
            </button>
        </div>
    </div>
</template>