import { useSpring, animated } from 'react-spring';

const Footer = () => {
    const fade = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: { duration: 1000 },
    });

    return (
        <animated.footer style={fade} className="bg-gray-900 text-white py-8">
            <div className="container mx-auto px-5 flex justify-between items-center">
                <div>
                    <ul className="flex space-x-6">
                        <li><a href="https://www.youtube.com/channel/UCUj8Nqr-M7gVtXYBTB7_usA" target="_blank" rel="noopener noreferrer">Youtube</a></li>
                        <li><a href="https://twitter.com/funngro" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                        <li><a href="https://www.instagram.com/funngro" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                    </ul>
                </div>
                <div>
                    <p>&copy; 2024 Funngroo. All rights reserved.</p>
                </div>
            </div>
        </animated.footer>
    );
}

export default Footer;
