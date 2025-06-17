import { FaFacebookSquare, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";


const SocialPlatforms = () => {
  return (
    <div className="flex gap-x-10 max-sm:justify-center max-sm:mt-8">
      <Link to="/">
        <FaFacebookSquare
        size={24}
          className="text-Grey-50 hover:text-Red-400 transition-colors duration-200 ease-in"
        />
      </Link>
      <Link to="/">
        <FaTwitter
        size={24}
          className="text-Grey-50 hover:text-Red-400 transition-colors duration-200 ease-in"
        />
      </Link>
    </div>
  );
}

export default SocialPlatforms;
