// import React from 'react';
// import { Box, Button, HStack, IconButton, Image, Link, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
// import { CgMenuRightAlt } from 'react-icons/cg';
// import { useNavigate } from 'react-router';
// import Logo from '../../../assets/images/ORIGINAL.png';
// import { authRoutes } from '../../../commons/types/routes';

// const navbarLinks = [
//   {
//     url: '#',
//     label: 'Overview',
//   },
//   {
//     url: '#insights',
//     label: 'Insights',
//   },
//   // {
//   //   url: '#faq',
//   //   label: 'FAQ',
//   // },
// ];

// function NavBar(): JSX.Element {
//   const navigate = useNavigate();
//   const [active, setActive] = React.useState<boolean>(false);

//   React.useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 100) {
//         setActive(true);
//       } else {
//         setActive(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <Box
//       as="header"
//       pos="sticky"
//       top="0"
//       zIndex={20}
//       bg="white"
//       display="flex"
//       alignItems="center"
//       justifyContent="space-between"
//       paddingX={{ base: 'xl', lg: '6xl', '2xl': '16.5rem' }}
//       paddingY="base"
//       boxShadow={active ? 'lg' : 'none'}
//       borderBottom="1px solid"
//       borderColor="gray200"
//     >
//       <Box boxSize={{ base: '3rem', lg: '3.5rem' }}>
//         <Image src={Logo} alt="Logo" w="full" h="full" objectFit="cover" />
//       </Box>
//       <HStack spacing={{ base: 4, md: 6 }}>
//         <HStack display={{ base: 'none', md: 'flex' }} spacing={{ md: 4, lg: 6 }}>
//           {navbarLinks.map((navbar) => (
//             <Link
//               key={navbar.label}
//               href={navbar.url}
//               fontWeight="medium"
//               _hover={{ color: 'primaryLight' }}
//               _active={{ color: 'primaryLight' }}
//             >
//               {navbar.label}
//             </Link>
//           ))}
//         </HStack>
//         <Button
//           onClick={() => navigate(authRoutes.signIn)}
//           bg="primaryLight"
//           rounded="full"
//           color="white"
//           _hover={{ bg: 'primaryLight' }}
//           _active={{ bg: 'primaryLight' }}
//           paddingX="2xl"
//         >
//           Sign in
//         </Button>
//         <Box display={{ md: 'none' }}>
//           <Menu>
//             <MenuButton
//               as={IconButton}
//               aria-label="Options"
//               icon={<CgMenuRightAlt />}
//               variant="ghost"
//               fontSize={{ base: '2xl' }}
//               _hover={{
//                 bg: 'white',
//               }}
//               _active={{
//                 bg: 'white',
//               }}
//             />
//             <MenuList>
//               {navbarLinks.map((navbar) => (
//                 <MenuItem key={navbar.label} fontSize="md" fontWeight="medium">
//                   {navbar.label}
//                 </MenuItem>
//               ))}
//             </MenuList>
//           </Menu>
//         </Box>
//       </HStack>
//     </Box>
//   );
// }

// export default NavBar;

import React from 'react';
// import { authRoutes } from '../../../commons/types/routes';
import { useNavigate } from 'react-router';
// import logo from '../assets/landing/logo.png';
import logo from "@/assets/logo.png";

import Bars3Icon from '@heroicons/react/24/solid';

const navbarLinks = [
  {
    url: '#',
    label: 'Overview',
  },
  {
    url: '#insights',
    label: 'Insights',
  },
  // {
  //   url: '#faq',
  //   label: 'FAQ',
  // },
];

function NavBar(): JSX.Element {
  const navigate = useNavigate();
  const [active, setActive] = React.useState<boolean>(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setActive(true);
      } else {
        setActive(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-20 bg-white flex items-center justify-between px-4 py-3 transition-shadow duration-300 ${
        active ? 'shadow-lg border-b border-gray-200' : 'border-b border-transparent'
      }`}
    >
      <div className="w-12 lg:w-14">
        <img src={logo} alt="Logo" className="w-full h-full object-cover" />
      </div>
      <div className="flex items-center space-x-4 md:space-x-6">
        {/* Desktop Links */}
        <div className="hidden md:flex space-x-4 lg:space-x-6">
          {navbarLinks.map((navbar) => (
            <a
              key={navbar.label}
              href={navbar.url}
              className="font-medium hover:text-blue-500 active:text-blue-500 transition-colors"
            >
              {navbar.label}
            </a>
          ))}
        </div>
        {/* Sign In Button */}
        <button
        //   onClick={() => navigate(authRoutes.signIn)}
          className="bg-blue-500 text-white rounded-full px-6 py-2 hover:bg-blue-600 active:bg-blue-600 transition-colors"
        >
          Sign in
        </button>
        {/* Mobile Menu */}
        <div className="md:hidden">
          <button className="text-2xl">
            {/* <Bars3Icon /> */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path fillRule="evenodd" d="M3.75 3.375c0-1.036.84-1.875 1.875-1.875H9a3.75 3.75 0 0 1 3.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 0 1 3.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 0 1-1.875-1.875V3.375Zm10.5 1.875a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 16.5 7.5h-1.875a.375.375 0 0 1-.375-.375V5.25Zm-3.75 5.56c0-1.336-1.616-2.005-2.56-1.06l-.22.22a.75.75 0 0 0 1.06 1.06l.22-.22v1.94h-.75a.75.75 0 0 0 0 1.5H9v3c0 .671.307 1.453 1.068 1.815a4.5 4.5 0 0 0 5.993-2.123c.233-.487.14-1-.136-1.37A1.459 1.459 0 0 0 14.757 15h-.507a.75.75 0 0 0 0 1.5h.349a2.999 2.999 0 0 1-3.887 1.21c-.091-.043-.212-.186-.212-.46v-3h5.25a.75.75 0 1 0 0-1.5H10.5v-1.94Z" clipRule="evenodd" />
</svg>

          </button>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
