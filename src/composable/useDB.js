import { ref } from "vue"
import { collection, query, orderBy ,onSnapshot, addDoc, updateDoc } from "firebase/firestore";


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

   const sendSerial = async serialNum => {
       await addDoc(inventoryCollection, {
           serial: serialNum,
           createdAt: new  Date(),
       })
   }
       const sendBrand = async brandName => {
        await updateDoc(inventoryCollection, {
            brand: brandName,
        })    

   }

   return {inventory, unsubscribe, sendSerial, sendBrand}
}

export default useDB