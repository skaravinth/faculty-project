// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import styles from './Login.module.css';
// import axios from 'axios';
// import authImage from './images/auth.png';
// import logoImage from './images/logo.png';
// import { useGoogleLogin } from '@react-oauth/google';

// const Login = () => {
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const login = useGoogleLogin({
//     onSuccess: async (response) => {
//       try {
//         const res = await axios.get(
//           'https://www.googleapis.com/oauth2/v3/userinfo',
//           {
//             headers: {
//               Authorization: `Bearer ${response.access_token}`,
//             },
//           }
//         );

//         const userdata = res.data;

//         const loginResponse = await axios.post('http://localhost:3000/google-login', {
//           email: userdata.email,
//         });

//         const { id, role, verticalHeadId, verticals } = loginResponse.data;

//         localStorage.setItem('id', id);
//         localStorage.setItem('role', role);
//         localStorage.setItem('verticalHeadId', verticalHeadId);
//         localStorage.setItem('verticals', JSON.stringify(verticals));
        
//         navigate('/User');
//       } catch (err) {
//         console.error('Error during login:', err);
//         setError('Google login failed. Please try again.');
//       }
//     },
//     onError: (error) => {
//       console.error('Login Failed:', error);
//       setError('Google login failed. Please try again.');
//     },
//   });

//   return (
//     <div className={styles.negi}>
//       <div className={styles.ngh}>
//         <div className={styles.homepage}>
//           <div className={styles.left}>
//             <p className={styles.para}>
//               <span className={styles.project}>
//                 Project manager
//               </span>
//               <br />
//               <br />
              
//               It is not just about the numbers, but the story they tell and the decisions they empower!
//               </p>
    
//             <img className={styles.bird} src={authImage} alt="Auth" />
//           </div>
//           <div className={styles.right}>
//             <img className={styles.bit} src={logoImage} alt="Logo" />
//             <p className={styles.bold}>
//               Sign In<br />
//               Get Access to your account
//             </p>
//             <button className={styles.googleButton} onClick={() => login()}>
//               Sign In with Google 🚀
//             </button>
//             {error && <p className={styles.error}>{error}</p>}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;





// // // Login.jsx
// // import React, { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import styles from './Login.module.css';
// // import axios from 'axios';
// // import authImage from './images/auth.png';
// // import logoImage from './images/logo.png';
// // import { useGoogleLogin } from '@react-oauth/google';

// // const Login = () => {
// //   const [error, setError] = useState('');
// //   const navigate = useNavigate();

// //   const login = useGoogleLogin({
// //     onSuccess: async (response) => {
// //       try {
// //         const res = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
// //           headers: {
// //             Authorization: `Bearer ${response.access_token}`,
// //           },
// //         });

// //         const userdata = res.data;

// //         const loginResponse = await axios.post('http://localhost:3000/google-login', {
// //           email: userdata.email,
// //         });

// //         const { id, role, verticalHeadId, verticals } = loginResponse.data;

// //         localStorage.setItem('id', id);
// //         localStorage.setItem('role', role);
// //         localStorage.setItem('verticalHeadId', verticalHeadId);
// //         localStorage.setItem('verticals', JSON.stringify(verticals));

// //         navigate('/User');
// //       } catch (err) {
// //         console.error('Error during login:', err);
// //         setError('Google login failed. Please try again.');
// //       }
// //     },
// //     onError: (error) => {
// //       console.error('Login Failed:', error);
// //       setError('Google login failed. Please try again.');
// //     },
// //   });

// //   return (
// //     <div className={styles.negi}>
// //       <div className={styles.ngh}>
// //         <div className={styles.homepage}>
// //           <div className={styles.left}>
// //             <p className={styles.para}>
// //               <span className={styles.project}>Project manager</span>
// //               <br />
// //               <br />
// //               It is not just about the numbers, but the story they tell and the decisions they empower!
// //             </p>
// //             <img className={styles.bird} src={authImage} alt="Auth" />
// //           </div>
// //           <div className={styles.right}>
// //             <img className={styles.bit} src={logoImage} alt="Logo" />
// //             <p className={styles.bold}>
// //               Sign In<br />
// //               Get Access to your account
// //             </p>
// //             <button className={styles.googleButton} onClick={() => login()}>
// //               Sign In with Google 🚀
// //             </button>
// //             {error && <p className={styles.error}>{error}</p>}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Login;

 

// import  { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import styles from './Login.module.css';
// import axios from 'axios';
// // import authImage from './images/auth.png';
// // import logoImage from './images/logo.png';
// import { useGoogleLogin } from '@react-oauth/google';

// const Login = () => {
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const login = useGoogleLogin({
//     onSuccess: async (response) => {
//       try {
//         const res = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
//           headers: {
//             Authorization: `Bearer ${response.access_token}`,
//           },
//         });

//         const userdata = res.data;

//         const loginResponse = await axios.post('http://localhost:3000/google-login', {
//           email: userdata.email,
//         });

//         const { id, role, verticalHeadId, verticals } = loginResponse.data;

//         localStorage.setItem('id', id);
//         localStorage.setItem('role', role);
//         localStorage.setItem('verticalHeadId', verticalHeadId);
//         localStorage.setItem('verticals', JSON.stringify(verticals));

//         navigate('/User'); // Navigate to the appropriate route after successful login
//       } catch (err) {
//         console.error('Error during login:', err);
//         setError('Google login failed. Please try again.');
//       }
//     },
//     onError: (error) => {
//       console.error('Login Failed:', error);
//       setError('Google login failed. Please try again.');
//     },
//   });

//   return (
//     <div className={styles.container}>
//       <div className={styles.content}>
//         <div className={styles.left}>
//           <p className={styles.text}>
//             <span className={styles.project}>Project manager</span>
//             <br />
//             <br />
//             It is not just about the numbers, but the story they tell and the decisions they empower!
//           </p>
//           {/* <img className={styles.image} src={authImage} alt="Auth" /> */}
//         </div>
//         <div className={styles.right}>
//           {/* <img className={styles.logo} src={logoImage} alt="Logo" /> */}
//           <p className={styles.bold}>
//             Sign In<br />
//             Get Access to your account
//           </p>
//           <button className={styles.googleButton} onClick={() => login()}>
//             Sign In with Google 🚀
//           </button>
//           {error && <p className={styles.error}>{error}</p>}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';
import axios from 'axios';
import { useGoogleLogin } from '@react-oauth/google';

const Login = () => {
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const login = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        const res = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
          headers: {
            Authorization: `Bearer ${response.access_token}`,
          },
        });

        // Handle response and store necessary data in localStorage if needed

        // Example of navigating to '/dashboard' after successful login
        navigate('/dashboard');
      } catch (err) {
        console.error('Error during login:', err);
        setError('Google login failed. Please try again.');
      }
    },
    onError: (error) => {
      console.error('Login Failed:', error);
      setError('Google login failed. Please try again.');
    },
  });

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.left}>
          {/* Your left side content */}
        </div>
        <div className={styles.right}>
          {/* Your login form and button */}
          <button className={styles.googleButton} onClick={() => login()}>
            Sign In with Google 🚀
          </button>
          {error && <p className={styles.error}>{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default Login;
