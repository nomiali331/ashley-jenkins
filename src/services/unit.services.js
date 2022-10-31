import { db } from "../firebase-config";
import { collection, getDocs, getDoc, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";

const unitCollectionRef = collection(db, 'units');
class UnitDataService{
    addUnits = (newUnit) => {
        return addDoc(unitCollectionRef, newUnit);
    };

    updateUnit = (id, updatedUnit) => {
        const unitDoc = doc(db, "units", id);
        return updateDoc(unitDoc, updatedUnit);
    };

    deleteUnit = (id) =>{
        const unitDoc = doc(db, "units", id);
        return deleteDoc(unitDoc);
    };

    getAllUnit = () => {
        return getDocs(unitCollectionRef);
    }

    getUnit = (id) => {
        const unitDoc = doc(db, "units", id);
        return getDoc(unitDoc);
    }
}

export default new UnitDataService();