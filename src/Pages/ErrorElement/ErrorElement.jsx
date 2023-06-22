import img404 from '../../../public/404 page/taking-a-photo-eileen.gif'


const ErrorElement = () => {
    return (
        <div className='pt-32'>
            <img className='w-[280px] m-0 mx-auto' src={img404}></img>
            <h1 className='text-center text-3xl font-bold mt-10 text-red-500'> dang, 404 content not found...:) </h1>
        </div>
    );
};

export default ErrorElement;