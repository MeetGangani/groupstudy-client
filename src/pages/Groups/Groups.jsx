// import React from "react";
// import "./Groups.scss";
// import Navbar from "../../components/Navbar/Navbar";

// const groups = [
//   {
//     course: "Math 101",
//     name: "Calculus Crew",
//     next: "Next Meeting: Tomorrow, 4:00 PM",
//     image:
//       "https://lh3.googleusercontent.com/aida-public/AB6AXuCGx4AGINcg2uQFhv5kQZC4a11kk93MHbNyyllQOetTADI1h6dQ4Pe1mPgHYqDzPPRuLCHGIugd7vXKrHSyQNbt-usPGqXKru4v5b0JtIJ6luqLelP2aiZvGMrcv5iJlammssH4LSnlQl9fIBPeOdTU7uOKu7M1_WEPAWnYxdagrYqbglEjQ6mdvohPOh_kMa12LxCaI5oNSvlVUMxPhYECkYM5tt7VOGIphPzhegI0WRqWndqHr_U9_VuZiRjymGvhrfpQEOHe6fs",
//     cta: "Open Group",
//   },
//   {
//     course: "Physics 202",
//     name: "Quantum Quorum",
//     next: "Next Meeting: Wednesday, 6:00 PM",
//     image:
//       "https://lh3.googleusercontent.com/aida-public/AB6AXuD58X4ySb8tMyq4dMVbhCdOwZP4T-7LnsWzDi_UcWUe3ewol3xshjqTJ8dIVA_JQB9aW-LSINmBAe9cWp3XG-39rqKzDmwGCzxzpXAWwsANLRCoktKMhZwy3Ndrh9LtotPEWEbe1L8avBMzrAQfEKv1CAn19CMO36eOYqcvjzjRiuVFrQ90PhwmaECmcRXd8ESn_UOuWdtK_Si1SP0R5FOVHZMfhcfbu28jCqTd9Nqr5GJAO_eVn3FafbLRFPuZVINsap2K5UEcXaY",
//     cta: "Open Group",
//   },
//   {
//     course: "Chemistry 301",
//     name: "Atomic Achievers",
//     next: "Next Meeting: Thursday, 5:30 PM",
//     image:
//       "https://lh3.googleusercontent.com/aida-public/AB6AXuDGZuUGFg13iBhDjXAujR4MdYtJhR3uMHC8YIisBinNe72pTF4q3j5kZt_wcGVoU25YLsL8RwxTXY4YBkt06i593N82Yq0J0KbOkMM42va76nDXG60geelHdom5yNUsJotnw2MTF7RL3gc2bi5HxGOjiCtR29z3NnULJiFK-GFEO6xf5Q4imhyv-o4UP0H3YS2UwYzMa_wN6S94t08zdch9CcsDgmkiccHvc1Yo1upeZv7YGBZAe-L7PZt9EN9wPsTKxlLIfQz6Db4",
//     cta: "Open Group",
//   },
// ];

// const tableRows = [
//   { date: "July 15, 2024", time: "4:00 PM", topic: "Review Chapter 3", action: "Join Meeting" },
//   { date: "July 16, 2024", time: "6:00 PM", topic: "Practice Problems", action: "Join Meeting" },
//   { date: "July 17, 2024", time: "5:30 PM", topic: "Lab Report Discussion", action: "Join Meeting" },
// ];

// const Groups = () => {
//   return (
//     <div className="sg-root">
//       <Navbar />

//       <main className="sg-main">
//         <div className="sg-container">
//           {/* Toolbar */}
//           <div className="sg-toolbar">
//             <p className="sg-title">Study Groups</p>
//             <button className="sg-btn sg-btn--note">
//               <span>Create Group</span>
//             </button>
//           </div>

//           {/* My Groups */}
//           <h2 className="sg-h2">My Groups</h2>
//           {groups.map((g) => (
//             <div key={g.name} className="sg-card-pad">
//               <div className="sg-card">
//                 <div className="sg-card__text">
//                   <div className="sg-card__stack">
//                     <p className="sg-course">{g.course}</p>
//                     <p className="sg-name">{g.name}</p>
//                     <p className="sg-next">{g.next}</p>
//                   </div>
//                   <button className="sg-btn sg-btn--chip">
//                     <span>{g.cta}</span>
//                   </button>
//                 </div>
//                 <div
//                   className="sg-card__img"
//                   style={{ backgroundImage: `url("${g.image}")` }}
//                 />
//               </div>
//             </div>
//           ))}

//           {/* Open Group View tabs */}
//           <h2 className="sg-h2">Open Group View</h2>
//           <div className="sg-tabs-wrap">
//             <div className="sg-tabs">
//               <a className="sg-tab sg-tab--active" href="#"><p>Meetings</p></a>
//               <a className="sg-tab" href="#"><p>Summaries</p></a>
//               <a className="sg-tab" href="#"><p>Resources</p></a>
//               <a className="sg-tab" href="#"><p>Members</p></a>
//             </div>
//           </div>

//           {/* Table */}
//           <div className="sg-table-wrap">
//             <div className="sg-table-card">
//               <table className="sg-table">
//                 <thead>
//                   <tr>
//                     <th className="col-120">Date</th>
//                     <th className="col-240">Time</th>
//                     <th className="col-360">Topic</th>
//                     <th className="col-480 action">Action</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {tableRows.map((r, idx) => (
//                     <tr key={idx}>
//                       <td className="col-120">{r.date}</td>
//                       <td className="col-240">{r.time}</td>
//                       <td className="col-360">{r.topic}</td>
//                       <td className="col-480"><button className="sg-link">{r.action}</button></td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>

//         </div>
//       </main>
//     </div>
//   );
// };

// export default Groups;


import React from 'react';
import Header from '../../components/Header/Header'; // Import your existing header
import GroupsContent from '../../components/GroupsContent/GroupsContent';
import './Groups.scss';

const Groups = () => {
  return (
    <div className="groups">
      <Header />
      <GroupsContent />
    </div>
  );
};

export default Groups;
