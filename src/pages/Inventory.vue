<script setup>
    import { onUnmounted, ref } from "vue"
    import useDB from "../composable/useDB"
    import useAuth from "../composable/useAuth"
    const  {inventory, unsubscribe, sendSerial, sendBrand} = useDB()
    const {user} = useAuth()
    const newSer = ref('')
    const newBrand = ref('')

    const newSerial = ()  => {
       sendSerial(newSer.value)
       newSer.value =""
    }
    const inputBrand = ()  => {
        sendBrand(newBrand.value)
        newBrand.value= ""
    }

      const sendInfo = ()  => {
        newSerial()
        inputBrand()
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
        v-model="newSer"  >
         <input class="p-5 rounded-xl focus:outline-none focus:bg-red-300" type="text" placeholder="Type a brand!!!!" 
        v-model="newBrand">
        <button @click="sendInfo">Add Unit</button>
        
    </div>

</div>

</template>