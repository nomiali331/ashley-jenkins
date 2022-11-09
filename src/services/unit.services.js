import { db } from "../firebase-config";
import { collection, getDocs, getDoc, addDoc, updateDoc, deleteDoc, doc, where, query } from "firebase/firestore";

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

    getSelectedUnit = (unitNo) => {
        const selectedUnits = query(collection(db, "units"), where("unitNo", "==", unitNo)); //this needs to be worked on
        return getDocs(selectedUnits);
    }

    getUnit = (id) => {
        const unitDoc = doc(db, "units", id);
        return getDoc(unitDoc);
    }


}

export default new UnitDataService();