
import {  useEffect,  } from "react"
import { db } from "../../config/firebase-congig"
import { getDoc , collection } from "firebase/firestore";

function DemoUsers() {
    // const [users, setUsers] = useState(initialState);

    const userCollectionRef = collection(db, "movies")

    useEffect(() => {
        const getMovieList = async () => {
        try {
            const data = await getDoc(userCollectionRef)     
        console.log(data)    
        } catch (error) {
            console.error(error)
        }
        }
        getMovieList()
    }, [userCollectionRef]);
  return (
    <div>DemoUsers</div>
  )
}

export default DemoUsers