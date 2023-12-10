import { Link } from 'react-router-dom';
import './HeroSection.css';

const HeroSection: React.FC = () => {
    return (
        <div
            style={{
                marginTop: 55,
                paddingTop: 55,
            }}
            className='container-fluid text-sm-center p-5 bg-info text-white'
        >
            <h1>Welcome to Our E-commerce Store!</h1>
            <p>Discover amazing products and deals.</p>
            <p>
                <Link to='/shop' className='btn btn-primary btn-lg'>
                    Shop Now
                </Link>
            </p>
        </div>
    );
};

export default HeroSection;
