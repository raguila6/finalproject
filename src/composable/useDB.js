import { ref } from "vue"
import { collection, query, orderBy ,onSnapshot, addDoc, } from "firebase/firestore";


import {db} from "./useFirebase"

import useAuth from "./useAuth"



const {user} = useAuth()

const inventory = ref([])

const useDB = () => {
   const inventoryCollection = collection(db,'inventory')
   
   const dbQuery = query(inventoryCollection, orderBy('createdAt', 'desc'))

   const unsubscribe = onSnapshot(dbQuery, (querySnapshot) =>{
        inventory.value = []
        querySnapshot.forEach((doc) =>{
            inventory.value.push({id: doc.id, ...doc.data()})
        })
   })

   const sendItem = async serial => {
       await addDoc(inventoryCollection, {
           serial: serial,
           brand: brand,
           createdAt: new  Date(),
       })
   }

   return {inventory, unsubscribe, sendItem}
}

export default useDB