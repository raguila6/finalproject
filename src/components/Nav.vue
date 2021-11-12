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
     <div >
          <div >
            <h1 >
              Final Project

              <h2>Inventory Page</h2>
                   
            </h1>
            <nav>
                <ul >
                    <router-link to="/">
                    <li >Home
                    </li>
                    </router-link>

                    
                    <router-link to="./About"><li >About   
                    </li>
                    </router-link>

                    
                    <router-link v-if="!isAuthenticated" :to="{ path: '/login', name: 'Login' }">
                    <li >Login
                    </li>
                    </router-link>

                    <div  v-else class="flex">
                    <router-link   :to="{ path: '/inventory', name: 'Inventory' }">
                    <li >Inventory
                    </li>
                    </router-link>

                    <button  @click="loggingOut" class="px-40">
                    <li >
                    Logout
                    </li>
                    </button>
                    </div>

                </ul>
            </nav>
        </div>
     
     </div>
</template>