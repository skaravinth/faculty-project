import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Box, CssBaseline } from '@mui/material';
import Navbar from '../components/Navbar/Navbar';
import Dashboard from '../pages/User/Dashboard/Dashboard';
import Login from '../components/Login/Login';

const AppLayout = () => {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <CssBaseline />
      <Navbar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          marginTop: 8, // Adjust the marginTop to match the height of the AppBar
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? '#121212' : '#f4f6f8',
          transition: 'margin 0.3s',
        }}
      >
        <Routes>
          {/* Redirect '/' to '/login' */}
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          {/* Protect routes below with authentication check */}
          <Route path="/dashboard" element={<Dashboard />} />
          {/* Add other routes as needed */}
        </Routes>
      </Box>
    </Box>
  );
};

export default AppLayout;















// import React from 'react';
// import {  Routes, Route } from 'react-router-dom';
// import { Box, CssBaseline } from '@mui/material';
// import Navbar from '../components/Navbar/Navbar';
// import Dashboard from '../pages/User/Dashboard/Dashboard';
// import VerticalFRS from '../pages/User/VerticalFRS/VerticalFRS';
// import FRSHistory from '../pages/User/FRSHistory/FRSHistory';
// import HeadDashboard from '../pages/Head/HeadDashboard/Head';
// import FacultyList from '../pages/Head/FacultyList/FacultyList';
// import FRSEntry from '../pages/Head/FRSEntry/FRSEntry';
// import Admin from '../pages/Admin/AdminDashboard/Admin';
// import VerticalwiseFRS from '../pages/Admin/FRSVertical/FRSVertical';
// import DepartmentwiseFRS from '../pages/Admin/FRSDepartment/FRSDepartment';
// import Leaderboard from '../pages/Admin/Leaderboard/Leaderboard';
// import FacultyEntry from '../pages/Admin/FacultyEntry/FacultyEntry';
// import Login from '../components/Login/Login';

// const AppLayout = () => {
//   return (
//       <Box sx={{ display: 'flex', minHeight: '100vh' }}>
//         <CssBaseline />
//         <Navbar />
//         <Box
//           component="main"
//           sx={{
//             flexGrow: 1,
//             p: 3,
//             marginTop: 8, // Adjust the marginTop to match the height of the AppBar
//             backgroundColor: (theme) =>
//               theme.palette.mode === 'dark' ? '#121212' : '#f4f6f8',
//             transition: 'margin 0.3s',
//           }}
//         >
//           <Routes>
//           <Route path="/" element={<Login />} />

//           <Route path="/login" element={<Login />} />
//             {/* <Route path="/" element={<Dashboard />} /> */}
//             <Route path="/dashboard" element={<Dashboard />} />
            
//             <Route path="/vertical-frs" element={<VerticalFRS />} />
//             <Route path="/frs-history" element={<FRSHistory />} />
//             <Route path="/head-dashboard" element={<HeadDashboard />} />
//             <Route path="/faculty-list" element={<FacultyList />} />
//             <Route path="/frs-entry" element={<FRSEntry />} />
//             <Route path="/admin" element={<Admin />} />
//             <Route path="/verticalwise-frs" element={<VerticalwiseFRS />} />
//             <Route path="/departmentwise-frs" element={<DepartmentwiseFRS />} />
//             <Route path="/leaderboard" element={<Leaderboard />} />
//             <Route path="/faculty-entry" element={<FacultyEntry />} />
//           </Routes>
//         </Box>
//       </Box>
//   );
// };

// export default AppLayout;



// AppLayout.js



















// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import { Box, CssBaseline } from '@mui/material';
// import Navbar from '../components/Navbar/Navbar';
// import Dashboard from '../pages/User/Dashboard/Dashboard';
// import VerticalFRS from '../pages/User/VerticalFRS/VerticalFRS';
// import FRSHistory from '../pages/User/FRSHistory/FRSHistory';
// import HeadDashboard from '../pages/Head/HeadDashboard/Head';
// import FacultyList from '../pages/Head/FacultyList/FacultyList';
// import FRSEntry from '../pages/Head/FRSEntry/FRSEntry';
// import Admin from '../pages/Admin/AdminDashboard/Admin';
// import VerticalwiseFRS from '../pages/Admin/FRSVertical/FRSVertical';
// import DepartmentwiseFRS from '../pages/Admin/FRSDepartment/FRSDepartment';
// import Leaderboard from '../pages/Admin/Leaderboard/Leaderboard';
// import FacultyEntry from '../pages/Admin/FacultyEntry/FacultyEntry';
// import Login from '../pages/Login/Login'; // Import the Login component

// const AppLayout = () => {
//   const isAuthenticated = !!localStorage.getItem('id'); // Example check for authentication

//   return (
//     <Router>
//       <Box sx={{ display: 'flex', minHeight: '100vh' }}>
//         <CssBaseline />
//         {isAuthenticated && <Navbar />}
//         <Box
//           component="main"
//           sx={{
//             flexGrow: 1,
//             p: 3,
//             marginTop: 8, // Adjust the marginTop to match the height of the AppBar
//             backgroundColor: (theme) =>
//               theme.palette.mode === 'dark' ? '#121212' : '#f4f6f8',
//             transition: 'margin 0.3s',
//           }}
//         >
//           <Routes>
//             <Route path="/" element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} />
//             <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} />
//             <Route path="/vertical-frs" element={isAuthenticated ? <VerticalFRS /> : <Navigate to="/login" />} />
//             <Route path="/frs-history" element={isAuthenticated ? <FRSHistory /> : <Navigate to="/login" />} />
//             <Route path="/head-dashboard" element={isAuthenticated ? <HeadDashboard /> : <Navigate to="/login" />} />
//             <Route path="/faculty-list" element={isAuthenticated ? <FacultyList /> : <Navigate to="/login" />} />
//             <Route path="/frs-entry" element={isAuthenticated ? <FRSEntry /> : <Navigate to="/login" />} />
//             <Route path="/admin" element={isAuthenticated ? <Admin /> : <Navigate to="/login" />} />
//             <Route path="/verticalwise-frs" element={isAuthenticated ? <VerticalwiseFRS /> : <Navigate to="/login" />} />
//             <Route path="/departmentwise-frs" element={isAuthenticated ? <DepartmentwiseFRS /> : <Navigate to="/login" />} />
//             <Route path="/leaderboard" element={isAuthenticated ? <Leaderboard /> : <Navigate to="/login" />} />
//             <Route path="/faculty-entry" element={isAuthenticated ? <FacultyEntry /> : <Navigate to="/login" />} />
//             <Route path="/login" element={<Login />} />
//           </Routes>
//         </Box>
//       </Box>
//    Continuing from the previous steps, ensure all routes are properly defined and authentication is correctly handled.

// ### AppLayout Component Update
// Ensure that your app redirects unauthenticated users to the login page and authenticated users to the appropriate dashboards based on their roles. Here is the refined `AppLayout` component:

// ```jsx
// // AppLayout.js
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import { Box, CssBaseline } from '@mui/material';
// import Navbar from '../components/Navbar/Navbar';
// import Dashboard from '../pages/User/Dashboard/Dashboard';
// import VerticalFRS from '../pages/User/VerticalFRS/VerticalFRS';
// import FRSHistory from '../pages/User/FRSHistory/FRSHistory';
// import HeadDashboard from '../pages/Head/HeadDashboard/Head';
// import FacultyList from '../pages/Head/FacultyList/FacultyList';
// import FRSEntry from '../pages/Head/FRSEntry/FRSEntry';
// import Admin from '../pages/Admin/AdminDashboard/Admin';
// import VerticalwiseFRS from '../pages/Admin/FRSVertical/FRSVertical';
// import DepartmentwiseFRS from '../pages/Admin/FRSDepartment/FRSDepartment';
// import Leaderboard from '../pages/Admin/Leaderboard/Leaderboard';
// import FacultyEntry from '../pages/Admin/FacultyEntry/FacultyEntry';
// import Login from '../pages/Login/Login';

// const AppLayout = () => {
//   const isAuthenticated = !!localStorage.getItem('id');

//   const getDefaultRoute = () => {
//     const role = localStorage.getItem('role');
//     if (role === 'admin') {
//       return '/admin';
//     } else if (role === 'vertical_head') {
//       return '/head-dashboard';
//     } else {
//       return '/dashboard';
//     }
//   };

//   return (
//     <Router>
//       <Box sx={{ display: 'flex', minHeight: '100vh' }}>
//         <CssBaseline />
//         {isAuthenticated && <Navbar />}
//         <Box
//           component="main"
//           sx={{
//             flexGrow: 1,
//             p: 3,
//             marginTop: 8,
//             backgroundColor: (theme) =>
//               theme.palette.mode === 'dark' ? '#121212' : '#f4f6f8',
//             transition: 'margin 0.3s',
//           }}
//         >
//           <Routes>
//           <Route path="/login" element={<Login />} />
//             <Route path="/" element={isAuthenticated ? <Navigate to={getDefaultRoute()} /> : <Navigate to="/login" />} />
//             <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} />
//             <Route path="/vertical-frs" element={isAuthenticated ? <VerticalFRS /> : <Navigate to="/login" />} />
//             <Route path="/frs-history" element={isAuthenticated ? <FRSHistory /> : <Navigate to="/login" />} />
//             <Route path="/head-dashboard" element={isAuthenticated ? <HeadDashboard /> : <Navigate to="/login" />} />
//             <Route path="/faculty-list" element={isAuthenticated ? <FacultyList /> : <Navigate to="/login" />} />
//             <Route path="/frs-entry" element={isAuthenticated ? <FRSEntry /> : <Navigate to="/login" />} />
//             <Route path="/admin" element={isAuthenticated ? <Admin /> : <Navigate to="/login" />} />
//             <Route path="/verticalwise-frs" element={isAuthenticated ? <VerticalwiseFRS /> : <Navigate to="/login" />} />
//             <Route path="/departmentwise-frs" element={isAuthenticated ? <DepartmentwiseFRS /> : <Navigate to="/login" />} />
//             <Route path="/leaderboard" element={isAuthenticated ? <Leaderboard /> : <Navigate to="/login" />} />
//             <Route path="/faculty-entry" element={isAuthenticated ? <FacultyEntry /> : <Navigate to="/login" />} />
//           </Routes>
//         </Box>
//       </Box>
//     </Router>
//   );
// };

// export default AppLayout;
