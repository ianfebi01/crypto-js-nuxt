<template>
  <div class="flex flex-col gap-6">
    <!-- encrypt -->
    <div class="flex flex-col gap-2">
      <form @submit.prevent="(e) => encrypt(e)" class="flex flex-col gap-2">
        <label for="Encript" class="text-sm font-semibold text-gray-700"
          >Encrypt</label
        >
        <textarea
          id="Encript"
          name="encrypt"
          class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-sm border border-gray-300 resize-none"
        />
        <button
          type="submit"
          class="h-[44px] px-4 text-white bg-blue-400 w-fit border border-none rounded-sm"
        >
          Encrypt
        </button>
      </form>
      <div
        v-if="loading.encrypt"
        class="border border-none rounded-sm h-[100px] w-full bg-gray-200 animate-pulse"
      ></div>
      <div
        v-else-if="result.encrypt && !loading.encrypt"
        class="p-2.5 bg-blue-50 border border-none rounded-sm"
      >
        <p class="break-words text-sm text-gray-700">
          {{ result.encrypt }}
        </p>
      </div>
    </div>
    <!-- decrypt -->
    <div class="flex flex-col gap-2">
      <form @submit.prevent="(e) => decrypt(e)" class="flex flex-col gap-2">
        <label for="decrypt" class="text-sm font-semibold text-gray-700"
          >Decrypt</label
        >
        <textarea
          id="decrypt"
          name="decrypt"
          class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-sm border border-gray-300 resize-none"
        />
        <button
          type="submit"
          class="h-[44px] px-4 text-white bg-blue-400 w-fit border border-none rounded-sm"
        >
          Decrypt
        </button>
      </form>
      <div
        v-if="loading.decrypt"
        class="border border-none rounded-sm h-[100px] w-full bg-gray-200 animate-pulse"
      ></div>
      <div
        v-else-if="result.decrypt && !loading.decrypt"
        class="p-2.5 bg-blue-50 border border-none rounded-sm"
      >
        <p class="break-words text-sm text-gray-700">
          {{ result.decrypt }}
        </p>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
// Generate key
const { data, pending } = useFetch('/api/rsa/generate', {
  method: 'GET',
})

const loading = reactive({
  encrypt: false,
  decrypt: false,
})
const result = reactive({
  encrypt: '',
  decrypt: '',
})
const encrypt = async (e: Event): Promise<void> => {
  if (e.target) {
    const form = new FormData(e.target as HTMLFormElement)
    loading.encrypt = true
    await $fetch('/api/aes/encrypt', {
      method: 'POST',
      body: {
        message: form.get('encrypt'),
      },
      onResponse({ response }) {
        loading.encrypt = false
        if (response.status === 200) {
          result.encrypt = response._data
        } else {
          alert(response._data.message)
        }
      },
    })
  }
}
const decrypt = async (e: Event): Promise<void> => {
  if (e.target) {
    const form = new FormData(e.target as HTMLFormElement)
    loading.decrypt = true
    await $fetch('/api/aes/decrypt', {
      method: 'POST',
      body: {
        message: form.get('decrypt'),
      },
      onResponse({ response }) {
        loading.decrypt = false
        if (response.status === 200) {
          result.decrypt = response._data
        } else {
          alert(response._data.message)
        }
      },
    })
  }
}
</script>
