import './Banner.css';
import logo from '../../assets/logo.png';

export const Banner = () => {
    return (
        <div className='lmj-banner' style={{ backgroundColor: 'pink' }}>
            <img src={logo} alt='La maison jungle' className='lmj-logo' />
            <h1>La maison jungle</h1>
        </div>
    );
}