import { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../../Providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            const loggedInUser = result.user
            console.log(loggedInUser)
            navigate(from, {replace: true})
        })
    }
    return (
        <div>
            <div className="divider"></div>
            <div onClick={handleGoogleSignIn} className='btn btn-primary flex items-center justify-center mb-5'>
                <FaGoogle></FaGoogle>
            </div>
        </div>
    );
};

export default SocialLogin;