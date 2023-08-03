<template>
  <div class="flex h-screen w-screen justify-center items-center gap-4">
    <button class="h-[44px] bg-green-500 border border-none rounded-sm text-white cursor-pointer px-4" @click.stop="router.push('/movie')">Movie List</button>
    <button class="h-[44px] bg-green-500 border border-none rounded-sm text-white cursor-pointer px-4"  @click.stop="router.push('/cryptojs')">Crypto JS</button>
  </div>
</template>

<script lang="ts" setup>


const router = useRouter()
</script>
