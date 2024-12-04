// // // src/components/Navbar.js
// // import React from "react";
// // import "bootstrap/dist/css/bootstrap.min.css";
// // import "../styles/Navbar.css"; // Import the CSS file

// // const Navbar = () => {
// //   return (
// //     <nav className="navbar navbar-expand-lg custom-navbar">
// //       <div className="container-fluid">
// //         <a className="navbar-brand" href="/">
// //           Pet Adoption
// //         </a>
// //         <button
// //           className="navbar-toggler"
// //           type="button"
// //           data-bs-toggle="collapse"
// //           data-bs-target="#navbarNav"
// //         >
// //           <span className="navbar-toggler-icon"></span>
// //         </button>
// //         <div className="collapse navbar-collapse" id="navbarNav">
// //           <ul className="navbar-nav ms-auto">
// //             <li className="nav-item">
// //               <a className="nav-link" href="/adoption/my-adoptions">
// //                 My Adoptions
// //               </a>
// //             </li>
// //             <li className="nav-item">
// //               <a className="nav-link" href="/logout">
// //                 Logout
// //               </a>
// //             </li>
// //           </ul>
// //         </div>
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;



// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Link } from "react-router-dom";
// import "../styles/Navbar.css"; // Import the custom CSS for styling

// const Navbar = () => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-lg">
//       <div className="container-fluid">
//         <Link className="navbar-brand" to="/">
//           <span className="text-primary">Pet</span> Adoption
//         </Link>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav ms-auto">
//             <li className="nav-item">
//               <Link className="nav-link" to="/adoption">
//                 Home
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/adoption/pets">
//                 Browse Pets
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/adoption/my-adoptions">
//                 My Adoptions
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/adoption/faqs">
//                 FAQs
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/adoption/success-stories">
//                 Success Stories
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/adoption/contact">
//                 Contact Support
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/logout">
//                 Logout
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css"; // Ensure this CSS file is correctly created for styling
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMouseEnter = () => {
    setMenuOpen(true);
  };

  const handleMouseLeave = () => {
    setMenuOpen(false);
  };

  return (
    // <div className="navbar">
    //   <div className="navbar-left">
    //     <h1 className="logo">Furrever_Home</h1>
    //   </div>
    //   <div className="navbar-right">
    //     <button className="menu-item">
    //       <Link to="/adoption-home">Home</Link>
    //     </button>
    //     <button className="menu-item">
    //       <Link to="/adoption/pets">Browse Pets</Link>
    //     </button>
    //     <button className="menu-item">
    //       <Link to="/adoption/faqs">FAQ</Link>
    //     </button>
    //     <button className="menu-item">
    //       <Link to="/adoption/contact">Contact Support</Link>
    //     </button>
    //     <button className="menu-item">
    //       <ShoppingCartIcon />
    //       Shop
    //     </button>
    //     <button className="login-button">
    //       <Link to="/login">Login</Link>
    //     </button>
    //     <div
    //       className="burger-menu"
    //       onMouseEnter={handleMouseEnter}
    //       onMouseLeave={handleMouseLeave}
    //     >
    //       <MenuIcon />
    //       {menuOpen && (
    //         <div className="dropdown-menu">
    //           <div className="menu-column">
    //             <h3>Adoption Process</h3>
    //             <ul>
    //               <li>
    //                 <Link to="/adoption/process">Adoption Process</Link>
    //               </li>
    //               <li>
    //                 <Link to="/adoption/form">Adoption Form</Link>
    //               </li>
    //               <li>
    //                 <Link to="/adoption/finalize">Finalize Adoption</Link>
    //               </li>
    //               <li>
    //                 <Link to="/adoption/finalize">Home Verification</Link>
    //               </li>
    //               <li>
    //                 <Link to="/adoption/finalize">My Adoptions</Link>
    //               </li>
    //             </ul>
    //           </div>
    //           <div className="menu-column">
    //             <h3>Furrever_Home</h3>
    //             <ul>
    //               <li>
    //                 <Link to="/adoption/centers">Pet Centers</Link>
    //               </li>
    //               <li>
    //                 <Link to="/adoption/pet-list">Pet List</Link>
    //               </li>
    //               <li>
    //                 <Link to="/adoption/PetCard">Pet Card</Link>
    //               </li>
    //               <li>
    //                 <Link to="/adoption/pets/:petId">Pet Detail</Link>
    //               </li>
    //               <li>
    //                 <Link to="/adoption/success-stories">Success Stories</Link>
    //               </li>
    //             </ul>
    //           </div>
    //           <div className="menu-column">
    //             <h3>Social</h3>
    //             <ul>
    //               <li>Report Animal Abuse</li>
    //               <li>Pet Mating</li>
    //               <li>Register Pet for Mating</li>
    //             </ul>
    //           </div>
    //         </div>
    //       )}
    //     </div>
    //   </div>
    // </div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top "data-bs-theme="dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/AdoptionHome">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="/Signup">Signup</a></li>
            <li><a class="dropdown-item" href="/Signin">Signin</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
  );
};

export default Navbar;
