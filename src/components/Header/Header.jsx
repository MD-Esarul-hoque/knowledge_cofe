
import  Profiler  from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div className='flex justify-between items-center p-4 border-b-2'>
            <p className='text-4xl'>Knowledge Cofe</p>
            <img src={Profiler} alt="" />
        </div>
    );
};

export default Header;