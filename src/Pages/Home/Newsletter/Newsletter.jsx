
const Newsletter = () => {
    return (
        <div className="mt-16 py-10 bg-gradient-to-r from-pink-500 to-blue-100 hover:from-pink-500 hover:to-yellow-500 ...">
            <h1 className="text-center mt-20 text-2xl md:text-5xl font-bold mb-10">--Subscribe Our Newsletter--</h1>
            <form className="w-full max-w-sm mx-auto">
                <div className="flex items-center border-b border-b-2 border-[#FFF4EA] py-2">
                    <input className="appearance-none bg-transparent border-none w-full text-black mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Your email address" />
                    <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
                        Submit
                    </button>
                </div>
                <p className="text-gray-600 text-xs italic">Subscribe to our newsletter for updates</p>
            </form>


        </div>
    );
};

export default Newsletter;