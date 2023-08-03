<template>
  <div class="flex flex-col w-screen min-h-screen items-center p-4 py-8">
    <div class="container">
      <div class="flex flex-col gap-2 p-4 border border-gray-200 rounded-sm">
        <h1 class="text-gray-700 font-semibold text-2xl">RSA</h1>
        <rsa />
      </div>
      <div class="flex flex-col gap-2 p-4 border border-gray-200 rounded-sm mt-4">
        <h1 class="text-gray-700 font-semibold text-2xl">AES</h1>
        <aes />
      </div>
      <div class="flex flex-col gap-2 p-4 border border-gray-200 rounded-sm mt-4">
        <h1 class="text-gray-700 font-semibold text-2xl">HMAC</h1>
        <hmac />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup></script>
