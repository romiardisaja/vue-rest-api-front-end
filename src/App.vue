<script setup>
</script>

<template>
  <header>
    <div class="max-w-7xl mx-auto">
      <nav class="p-2">
        <router-link to="/" class="px-4 py-2 mr-4 bg-indigo-600 hover:bg-indigo-800 rounded text-white">Home</router-link>
        <router-link to="/skills" class="px-4 py-2 mr-4 bg-indigo-600 hover:bg-indigo-800 rounded text-white">Skill</router-link>
      </nav>
    </div>
  </header>

  <main class="max-w-7xl mx-auto min-h-screen">
    <router-view/>
  </main>
</template>