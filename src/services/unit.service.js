import { db } from "../firebase-config";
import { collection, getDocs, getDoc, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";

const unitCollection = collection(db, 'unit');
class UnitDataService{
   

    addUnit = (addNewUnit) => {
        return addDoc(unitCollection, addNewUnit);
    }
    getAllUnit = () => {
        return getDocs(unitCollection);
    }

}

export default new UnitDataService();
