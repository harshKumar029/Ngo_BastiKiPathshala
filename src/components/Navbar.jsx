// // Navbar.js
// import { Link } from 'react-router-dom';
// import Basti_Logo from '../assets/Basti_Logo.png';
// import facebook from '../assets/icon/facebook.svg';
// import instagram from '../assets/icon/instagram.svg';
// import linkedin from '../assets/icon/linkedin.svg';

// export default function Navbar() {
//   return (
//     <nav className="bg-white shadow-md fixed w-full z-10 top-0 left-0">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           <img className="flex items-center justify-between h-16" src={Basti_Logo} alt='Logo'/>
//           <div className="space-x-4">
//             <Link to="/" className="text-gray-700 hover:text-green-600 font-medium">Home</Link>
//             <Link to="/AboutUs" className="text-gray-700 hover:text-green-600 font-medium">About</Link>
//             <Link to="/VolunteerForm" className="text-gray-700 hover:text-green-600 font-medium">Volunteer</Link>
//           </div>
//           <div className='flex items-center justify-between h-16'>
//           <img src={facebook} alt='facebook'/>
//            <img src={instagram} alt='facebook'/>
//             <img src={linkedin} alt='facebook'/>
//             </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

// Navbar.js
import { NavLink, useLocation } from 'react-router-dom';
import Basti_Logo from '../assets/Basti_Logo.png';
import facebook from '../assets/icon/facebook.svg';
import instagram from '../assets/icon/instagram.svg';
import linkedin from '../assets/icon/linkedin.svg';

export default function Navbar() {
  const location = useLocation();
  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/AboutUs' },
    { name: 'Volunteer', path: '/VolunteerForm' }
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full z-10 top-0 left-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <img className="h-10 w-auto" src={Basti_Logo} alt='Logo' />

          <div className="flex space-x-8 relative">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `relative font-medium text-gray-700 hover:text-green-600 transition-colors duration-300` +
                  (isActive ? ' text-green-600' : '')
                }
              >
                {({ isActive }) => (
                  <span className="flex flex-col items-center">
                    {link.name}
                    <span
                      className={`h-[2px] w-full bg-green-600 mt-1 transition-all duration-300 ${
                        isActive ? 'scale-x-100' : 'scale-x-0'
                      } transform origin-left`}
                    ></span>
                  </span>
                )}
              </NavLink>
            ))}
          </div>

          <div className="flex space-x-4 items-center">
            <img src={facebook} alt='facebook' className="h-5 w-5 hover:scale-110 transition-transform" />
            <img src={instagram} alt='instagram' className="h-5 w-5 hover:scale-110 transition-transform" />
            <img src={linkedin} alt='linkedin' className="h-5 w-5 hover:scale-110 transition-transform" />
          </div>
        </div>
      </div>
    </nav>
  );
}
