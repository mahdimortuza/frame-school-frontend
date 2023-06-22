import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";


const SingleCLass = ({ item }) => {
    const { image, name, instructor, seats, price, _id} = item
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    const handleSelect = item => {
        console.log(item)
        if (user && user.email) {
            const classItem = {classId: _id, name, image, price, email: user.email}
            fetch('https://summe-camp-server-mahdiwebx-gmailcom.vercel.app/carts', {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(classItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Class added',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please login to select this one?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                        <div className="badge badge-secondary">${price}</div>
                    </h2>
                    <p><strong>Instructor:</strong> {instructor}</p>
                    <div className="">Available seats: <strong className="text-red-500">{seats}</strong> </div>
                    <div className="card-actions justify-end">
                        <div onClick={() => handleSelect(item)} className="btn bg-primary pb-4 py-5 pt-4 hover:bg-[#1d85b2] text-white">Select</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCLass;