import { useEffect, useState } from "react";
import SingleInstructor from "./SingleInstructor";

const Instructors = () => {
    const [instructors, setInstructors] = useState([])
    useEffect(() => {
        fetch('https://summe-camp-server-mahdiwebx-gmailcom.vercel.app/classes')
            .then(res => res.json())
            .then(data => setInstructors(data))
    }, [])
    return (
        <div>
            <h1 className="text-center mt-20 text-2xl md:text-5xl font-bold mb-10">--Our Instructors--</h1>

            <div className=" my-5 mx-auto grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
                instructors.map(item => <SingleInstructor
                key={item._id}
                item={item}
                ></SingleInstructor>)
            }
        </div>
        </div>
    );
};

export default Instructors;