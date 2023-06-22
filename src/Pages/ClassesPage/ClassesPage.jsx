import { useState } from "react";
import { useEffect } from "react";
import SingleCLass from "./SingleCLass";

const ClassesPage = () => {
    const [classes, setClasses] = useState([])
    useEffect(() => {
        fetch('https://summe-camp-server-mahdiwebx-gmailcom.vercel.app/classes')
            .then(res => res.json())
            .then(data => setClasses(data))
    }, [])
    return (
        <div>
            <h1 className="text-center mt-20 text-2xl md:text-5xl font-bold mb-10">--Subscribe Our Newsletter--</h1>
            <div className=" my-5 mx-auto grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    classes.map(item => <SingleCLass
                        key={item._id}
                        item={item}
                    ></SingleCLass>)
                }
            </div>
        </div>
    );
};

export default ClassesPage;
