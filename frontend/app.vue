<template>
<NuxtLayout>
    <div class="">
        <SanityBlocks :blocks="data.content" :serializers="serializers"/>
    </div>
</NuxtLayout>
</template>

<script setup>
import { SanityBlocks } from 'sanity-blocks-vue-component'
import Hero from "./components/hero.vue"
const query = groq`*[_type == "page"][0]`
const { data } = await useSanityQuery(query)

const serializers = {
    types: {
        hero: Hero
    }
}

console.log(data.value)
useHead({
    title: data.value.title
})
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
    h1 {
        @apply text-xl py-4;
    }
}

</style>