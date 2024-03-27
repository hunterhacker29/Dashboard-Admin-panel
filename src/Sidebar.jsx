
// import React from 'react';
// import { BsGrid1X2Fill, BsFillArchiveFill, BsPeopleFill, BsMenuButtonWideFill, BsFillGearFill } from 'react-icons/bs';
// import { FaBloggerB } from 'react-icons/fa';
// import { MdFileUpload } from 'react-icons/md';
// import { FcAbout } from 'react-icons/fc';
// import { LuCrown } from 'react-icons/lu';
// import { LiaBlogSolid } from 'react-icons/lia';
// import { Link } from 'react-router-dom';

// function Sidebar({ openSidebarToggle, OpenSidebar }) {
//   return (
//     <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
//       <div className='sidebar-title'>
//         <div className='sidebar-brand'>
//           <FaBloggerB className='icon_header' /> BLOG HUB
//         </div>
//         <span className='icon close_icon' onClick={OpenSidebar}>X</span>
//       </div>

//       <ul className='sidebar-list'>
//         <li className='sidebar-list-item'>
//           <Link to="/dash">
//             <BsGrid1X2Fill className='icon' /> Dashboard
//           </Link>
//         </li>
//         <li className='sidebar-list-item'>
//           <Link to="/home">
//             <LiaBlogSolid className='icon' /> View Blogs
//           </Link>
//         </li>
//         <li className='sidebar-list-item'>
//           <Link to="/upload">
//             <MdFileUpload className='icon' /> Upload
//           </Link>
//         </li>
//         <li className='sidebar-list-item'>
//           <Link to="/profile">
//             <BsPeopleFill className='icon' /> Profile
//           </Link>
//         </li>
//         <li className='sidebar-list-item'>
//           <Link to="/sub">
//             <LuCrown className='icon' /> Subscribe
//           </Link>
//         </li>
//         <li className='sidebar-list-item'>
//           <Link to="/dash">
//             <BsMenuButtonWideFill className='icon' /> Reports
//           </Link>
//         </li>
//         <li className='sidebar-list-item'>
//           <Link to="/about">
//             <FcAbout className='icon' /> About us
//           </Link>
//         </li>
//         <li className='sidebar-list-item'>
//           <Link to="/setting">
//             <BsFillGearFill className='icon' /> Setting
//           </Link>
//         </li>
//       </ul>
//     </aside>
//   )
// }

// export default Sidebar;

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BsGrid1X2Fill, BsFillArchiveFill, BsPeopleFill, BsMenuButtonWideFill, BsFillGearFill } from 'react-icons/bs';
import { FaBloggerB } from 'react-icons/fa';
import { MdFileUpload } from 'react-icons/md';
import { FcAbout } from 'react-icons/fc';
import { LuCrown } from 'react-icons/lu';
import { LiaBlogSolid } from 'react-icons/lia';

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  const location = useLocation(); // Get current route for active styling

  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
          <FaBloggerB className='icon_header' /> BLOG HUB
        </div>
        <span className='icon close_icon' onClick={OpenSidebar}>X</span>
      </div>

      <ul className='sidebar-list'>
        <li className={`sidebar-list-item ${location.pathname === '/dash' ? 'active' : ''}`}>
          <Link to="/">
            <BsGrid1X2Fill className='icon' /> Dashboard
          </Link>
        </li>
        <li className={`sidebar-list-item ${location.pathname === '/home' ? 'active' : ''}`}>
          <Link to="/home">
            <LiaBlogSolid className='icon' /> View Blogs
          </Link>
        </li>
        <li className={`sidebar-list-item ${location.pathname === '/upload' ? 'active' : ''}`}>
          <Link to="/upload">
            <MdFileUpload className='icon' /> Upload
          </Link>
        </li>
        <li className={`sidebar-list-item ${location.pathname === '/profile' ? 'active' : ''}`}>
          <Link to="/profile">
            <BsPeopleFill className='icon' /> Profile
          </Link>
        </li>
        <li className={`sidebar-list-item ${location.pathname === '/sub' ? 'active' : ''}`}>
          <Link to="/sub">
            <LuCrown className='icon' /> Subscribe
          </Link>
        </li>
        <li className={`sidebar-list-item ${location.pathname === '/dash' ? 'active' : ''}`}>
          <Link to="/dash">
            <BsMenuButtonWideFill className='icon' /> Reports
          </Link>
        </li>
        <li className={`sidebar-list-item ${location.pathname === '/about' ? 'active' : ''}`}>
          <Link to="/about">
            <FcAbout className='icon' /> About us
          </Link>
        </li>
        <li className={`sidebar-list-item ${location.pathname === '/setting' ? 'active' : ''}`}>
          <Link to="/setting">
            <BsFillGearFill className='icon' /> Setting
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;

