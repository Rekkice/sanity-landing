<script setup>
import { SanityBlocks } from 'sanity-blocks-vue-component'
const props = defineProps(["content", "image"])
console.log("content:")
console.log(props.image)
</script>

<template>
<div class="w-full flex flex-row justify-between bg-orange-400 items-center px-48 my-8">
    <div>
        <SanityBlocks :blocks="content" />
    </div>
    <SanityImage :assetId="image.asset._ref" class="h-80 hover:translate-x-32 hover:scale-110 transition delay-150 duration-1000 ease-in-out"/>
</div>
</template>