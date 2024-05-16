import { useNavigate } from "react-router-dom";
import { useSpring, animated } from "react-spring";

const Header = () => {

  const fade = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  const navigate = useNavigate();

  const handleHome = () => {
    navigate('/')
  }

  const handleTeen = () => {
    navigate('/teen')
  }

  return (
    <animated.header style={fade} className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <img src="https://assets-global.website-files.com/638b48215fd2fd34538fa6bc/638c80735fd2fd0810a24fba_funngro-logo.svg" alt="Funngroo Logo" className="px-5 h-8" />
        </div>
        <nav>
          <ul className="flex space-x-6 pr-5">
            <li className="hover:text-gray-300 cursor-pointer" onClick={handleHome}>Home</li>
            <li className="hover:text-gray-300 cursor-pointer" onClick={handleTeen}>Teen</li>
          </ul>
        </nav>
      </div>
    </animated.header>
  );
}

export default Header;
