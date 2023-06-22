

const SingleInstructor = ({ item }) => {
    const {instructor_img, mail, instructor } = item
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img className="w-[300px]" src={instructor_img} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{instructor}</h2>
                    <p>{mail}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Classes</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleInstructor;