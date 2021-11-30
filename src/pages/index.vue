<script setup>
import useAuth from '../composable/useAuth';
const { isAuthenticated,user} = useAuth();
</script>

<template>
    
    <div class="flex flex-col items-center object-left-bottom h-screen-nonav">
     <h2
      v-if="!isAuthenticated"
      class="text-4xl tracking-tighter font-extralight"
    >
      Welcome
    </h2>
    <h2 v-else class="text-6xl font-extrabold tracking-tighter">
      Welcome {{ user }}
    </h2>
    <img src="../assets/scan.gif"  alt="AboutBG">
    </div>
</template>