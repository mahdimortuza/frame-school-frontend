
const ClassItem = ({ item }) => {
    const { image, name, seats, price } = item
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                        <div className="badge badge-secondary">{seats} seats left</div>
                    </h2>
                    <p>Course Fee: ${price}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-sm">Add to Cart</button>
                        <button className="btn btn-sm bg-cyan-500">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClassItem;