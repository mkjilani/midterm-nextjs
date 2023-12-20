// CallToAction.js

import { Link } from "react-scroll";


const CallToAction = () => {

  return (
    <div className="container mx-auto mt-8">
      {/* Link Call to Action */}
      <Link
            to="Contact"
            className="bg-blue-900 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded inline-block"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Contact
          </Link>

      {/* Email Call to Action */}
      <a href="mailto:example@example.com" className="bg-green-900 hover:bg-green-700 text-white font-bold py-2 px-4 rounded inline-block"      >
        Send Email
      </a>
    </div>
  );
};

export default CallToAction;
