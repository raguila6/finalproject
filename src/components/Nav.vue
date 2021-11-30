<script setup>
    import useAuth from '../composable/useAuth';
    import {useRouter} from "vue-router";
    const {isAuthenticated , logout} = useAuth(); 

    const router = useRouter();

    const loggingOut = () => {
    logout();
    router.push("/");
    };

</script>

<template>
     <div class="bg-green-300 " >
          <div class="container flex items-center justify-between mx-auto" >
            <div><h1 class="flex align-text-top" >
              Final Project 
                   
            </h1>
            </div>
            <nav>
                <ul class="flex space-x-4 bg-blue-200 " >
                    <router-link to="/">
                    <li  class="px-3 py-6 bg-blue-400 rounded-md">Home
                    </li>
                    </router-link>

                    
                    <router-link to="./About"><li class="px-3 py-6 bg-blue-400 rounded-md" >About   
                    </li>
                    </router-link>

                    
                    <router-link v-if="!isAuthenticated" :to="{ path: '/login', name: 'Login' }">
                    <li class="px-3 py-6 bg-blue-400 rounded-md">Login
                    </li>
                    </router-link>

                    <div  v-else class="flex">
                    <router-link   :to="{ path: '/inventory', name: 'Inventory' }">
                    <li class="px-3 py-6 bg-blue-400 rounded-md">Inventory
                    </li>
                    </router-link>

                    <button  @click="loggingOut" class="px-40">
                    <li class="px-3 py-6 bg-blue-400 rounded-md">
                    Logout
                    </li>
                    </button>
                    </div>

                </ul>
            </nav>
        </div>
     
     </div>
</template>