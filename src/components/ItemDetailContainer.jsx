// src/components/ItemDetailContainer.jsx
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";


const ItemDetailContainer = () => {

    const [item, setItem] = useState(null);
    const id = useParams().id;

    useEffect(() => {

      const docRef = doc(db, "items", id);
      getDoc(docRef)
        .then((response) => {
          setItem(
            { ...response.data(), id: response.id }
          );
        })

    }, [id])
    

  return (
    <div>
        {item && <ItemDetail item={item} />}
    </div>
  )
}

export default ItemDetailContainer