<script setup>
    import { onUnmounted, ref } from "vue"
    import useDB from "../composable/useDB"
    import useAuth from "../composable/useAuth"
    const  {inventory, unsubscribe, sendItem} = useDB()
    const {user} = useAuth()
    const newItem = ref('')
    const sendSerial = ()  => {
        newItem(newItem.value)
        newItem.value = ""
    }
    onUnmounted(() => {
        unsubscribe()
    })
</script>


<template>

<h1 class="mt-5 text-3xl font-medium tracking-wide text-center">Inventory </h1>

<div class="min-h-[600px] w-full mt-6 rounded-lg shadow-md flex flex-col justify-between bg-green-300">

    <ul class="p-5 space-y-3 ">
        <li v-for="invent in inventory" :key="invent.id"> 
            <div class="flex justify-between px-3 rounded-xl" :class="user===invent.serial ">
                <span>{{invent.serial}}</span><span>by {{invent.brand}}</span>
            </div>
        </li>
    </ul>

    <div>
        <input class="p-5 rounded-xl focus:outline-none focus:bg-red-300" type="text" placeholder="Type a serial!!!!" 
        v-model="sendSerial" @change="send" >
         <input class="p-5 rounded-xl focus:outline-none focus:bg-red-300" type="text" placeholder="Type a brand!!!!" 
        v-model="send" @change="send" >
    </div>

</div>

</template>