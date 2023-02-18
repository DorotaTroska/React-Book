// import React from 'react';
// import Navbar from "./components/Navbar/Navbar";
// import HomePage from "./components/HomePage/HomePage";
// import LoginPage from "./components/LoginPage/LoginPage";
// import RegisterPage from "./components/RegisterPage/RegisterPage";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { onAuthStateChanged, signOut } from "firebase/auth";
// import { auth } from "./helpers/firebaseConfig";
// import { authContext} from "./helpers/authContext";
// import UserPage from "./components/UserPage/UserPage";
// import SearchPage from "./components/SearchPage/SearchPage";

// function App() {
// const [loggedIn, setLoggedIn] = useState(false);

// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     setLoggedIn(true);
//   } else {
//     setLoggedIn(false);
//   }
// });

//  return (
//   <div className="App">
//     <BrowserRouter>
//     <authContext.Provider value={loggedIn}>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/login/register" element={<RegisterPage />} />
//         <Route path="/user" element={<UserPage />} />
//         <Route path="/search" element={<SearchPage />} />
//       </Routes>
//     </authContext.Provider>
//     </BrowserRouter>
//   </div>

//   );
// }

// export default App;
