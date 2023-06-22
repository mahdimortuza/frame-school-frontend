import { useEffect, useState } from "react";
import ClassItem from "./ClassItem";


const PopularClasses = () => {
    const [classes, setClasses] = useState([])
    useEffect(() => {
        fetch('https://summe-camp-server-mahdiwebx-gmailcom.vercel.app/classes')
            .then(res => res.json())
            .then(data => setClasses(data))
    }, [])
    return (
        <div>
            <h1 className="text-center mt-20 text-2xl md:text-5xl font-bold mb-10">--Popular Classes--</h1>

            <div className="mx-auto grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    classes.map(item => <ClassItem
                        key={item._id}
                        item={item}
                    ></ClassItem>)
                }
            </div>
        </div>
    );
};

export default PopularClasses;