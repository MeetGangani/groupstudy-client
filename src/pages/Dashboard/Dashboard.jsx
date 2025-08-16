// import React from "react";
// import "./Dashboard.scss";
// import Navbar from "../../components/Navbar/Navbar";

// const actions = [
//   {
//     title: "Start Meeting",
//     image:
//       "https://lh3.googleusercontent.com/aida-public/AB6AXuB47ogd5567biXjuc-OYmmzLEFy1MWo_g0AXZfFyEwZqKi3co-vb4t-2j0WKww6j6zESvzxXNs_OBnZO6AIDKqDMeFU_4vqIVLw3Tcu5BcuzlnfXbeESyxgXqae-trYkFo4mscZftnD3bZA3V3_Z8Ab_KRDhPyZe7sZYXESKZEkQQKUz-_3U7h1VQIlcBOAeUy9HM2-lBYeYlTJUiZ9kAOyUk6Az8CEfwq88Y-DCsgUjiKSn89ii1ogLVtQz6sX3zdXeg1g19fRqxM",
//   },
//   {
//     title: "Join Meeting",
//     image:
//       "https://lh3.googleusercontent.com/aida-public/AB6AXuDggS2QOd5rXjNjCiuTyfRgb9526FwI50tzzURiiDT8l1YtoslAACMqDw_8BfeRkHS-TAmOF0k44whfm3sFh4fq8ZQx5WCyOQJDNFVyNf_QCuat7JzW9rG1-Yg7KsfYhPGGzAJseFN4o10Bst4yQ9hGpVMoK9fwT6JDNcUiTHSwsfxqMCtfjblggccsg2k_a3GdY_mS6jqbJqIJIYVaWzBg9mlGak9WqMs9fro6_sxXNlwScYvF7rRI0U-RWy48emwL_XPIc5J48Po",
//   },
//   {
//     title: "View Summaries",
//     image:
//       "https://lh3.googleusercontent.com/aida-public/AB6AXuDucG24hOX8B8sycw1ewPfm2PNDpCxZBJsTK4-z6fIOrMqkz1XtJdA-i0Mx_5erPpFfK0sgq8uYH_Urr7PC9hsO6UzVNkD7Wi656s_vt23ag7O0uNuqHlgd1Z91Yn5UOAmEhsqMiayh65-PIgEa5CmxarMgaVBH3Nf7GVmiGL_zWDq2hHgg7-Yyj3IDEHOoS-Upimd55wfPCZQ-3VgofgR0iqrAHDRo5sFzGmaxosQRTHuKGg3a5Jd6o9Ql-7O0sgxgQgairrvD8hY",
//   },
//   {
//     title: "My Groups",
//     image:
//       "https://lh3.googleusercontent.com/aida-public/AB6AXuDUYs4E3-kB8XWYV9StfETxttqPDWVmvTuzuETEhdLss3Ndm5neAMr026KPEXrlobA93iKanSQgVCLzBcbsowo_L_mfGwjlG2m0wA0vvnbk809GB4L2d4qhbdZ5-DV5yd2CatybOiKAo8jqDtg1oNbRTT1VRbRrU56_h0Flt5-82qR_wDg3FFTZi6pKUOdlyg3jQWaMWxEwyrpTpVbtWy56nMp9Oouw3xNvwYYBQ6GbcCXvGp0DBN_6RjvVotKv5I6lYcDowgMSpnM",
//   },
// ];

// const meetings = [
//   { time: "10:00 AM", group: "Group A" },
//   { time: "2:00 PM", group: "Group B" },
//   { time: "4:00 PM", group: "Group C" },
// ];

// const summaries = [
//   {
//     topic: "Calculus",
//     date: "2024-03-15",
//     abstract:
//       "Key concepts and problem-solving techniques discussed in the last calculus study session.",
//     image:
//       "https://lh3.googleusercontent.com/aida-public/AB6AXuDGIRU6FQKhByxu3YWumHWVPpZLHDureI6UDvr1rM9KZkvecjawel9KTEAW8I5Gxfzy8xAU_sfK8_8CoSsQUj8Wx_YPhSzsid5zgv6DKZ9kmcmC7ZvtssviVoCn88hf4zo3AZyi2A-xWL0OcZVpYbr4l65TSwbxiw3FZ0f_CAyBR6VXjsO5kaWtcc8RZzgJduJeQ3tbULtFbCyqp474eVFjM-PYKinPnShn--ldZt9LjAomrLWn7X5PUXk833JR4wCpIgqPGGa6JTE",
//   },
//   {
//     topic: "Physics",
//     date: "2024-03-12",
//     abstract:
//       "Summary of the physics study group session covering mechanics and thermodynamics.",
//     image:
//       "https://lh3.googleusercontent.com/aida-public/AB6AXuByrpcivwoAam4tNLnCivW_OFclbLw60AqReZR5ylq6tE0GFf45AAVg0wtKCj3qrVwgnW56O6EkQSteCiyMib0MfmmUc6dT3azyf1jn2KNL5vQBpvDUQ3ePrN1a0X9IVd5YH23EUWYb0HbJp73hezeHdtbfABXU7vbrG-vMHFOlSS3nFk7J1MBKy_wWlFTNmTDNtQoywJEFR2Sk5XreOIuXqqgf0oNH4KMsbT3VPWQ5A7-RT0mHpVN84Zk8ljy0jyHpehK_9C3ReV0",
//   },
//   {
//     topic: "Chemistry",
//     date: "2024-03-08",
//     abstract:
//       "Overview of the chemistry study group session focusing on chemical reactions and stoichiometry.",
//     image:
//       "https://lh3.googleusercontent.com/aida-public/AB6AXuB9NpWB2LlXFS2zGaaAZI5SjLxxsiWISulmY-mDOxms9gCd-NrjFVvF9HT_WfRGQ4ExU5zzDPeEIn3g0h-lZvx7Ol05UxwA_TEScG8Uk27aRKCZSbuVRTfpeWLUCJyJfeujCU8zywGgR_ygdm5LnHeQ3qPKv5Dq-uaWo_9IEvoWieFSJRocEo9ZxEx_aAHQLJjf3gkAPN3j0PcQ02AZAZLHqa2cEkIEBRTUHzQJMI1JSvNOwde-OyMBNORLAe3YBfvAAQs1SdKdrkI",
//   },
// ];

// const Dashboard = () => {
//   return (
//     <div className="sh-root">
//       <div className="sh-app">
//         <Navbar/> 

//         <main className="sh-main">
//           <div className="sh-container">
//             {/* Welcome Banner */}
//             <section className="sh-banner-wrap">
//               <div
//                 className="sh-banner"
//                 style={{
//                   backgroundImage:
//                     'linear-gradient(0deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 25%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuC4m_gd9IyPDPns7YrxKVxRoQBIo5UlO1ioKMXXNGrA-qUtBK6h-WyQiTmeLxbSb4ttg8bYO96159L4uYvZN2oqBA0gqQZVr1XAuNMvmodPbTdeznkOE1ikglnUOgQD2fq1KE96uT3p_4VU7raMjKfudE24mYmrcBsoj027GcUtltHuQClJoKKbTNSHDRE-GA_Ph cXsKYvIuHdO0-5FKzI1x-3iJTI6EHtXwwBixuu8NajWDSxSts9oGne_4ufIQnc2qeXsKDAdpnQ")',
//                 }}
//               >
//                 <p className="sh-banner__text">Welcome back, Sarah!</p>
//               </div>
//             </section>

//             {/* Quick Actions */}
//             <h2 className="sh-h2">Quick Actions</h2>
//             <div className="sh-quick-scroll">
//               <div className="sh-quick-row">
//                 {actions.map((a) => (
//                   <div key={a.title} className="sh-quick-item">
//                     <div
//                       className="sh-quick-img"
//                       style={{ backgroundImage: `url("${a.image}")` }}
//                     />
//                     <p className="sh-quick-title">{a.title}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Upcoming Meetings */}
//             <h2 className="sh-h2">Upcoming Meetings</h2>
//             <div className="sh-table-wrap">
//               <div className="sh-table-card">
//                 <table className="sh-table">
//                   <thead>
//                     <tr>
//                       <th className="col-120">Time</th>
//                       <th className="col-240">Participants</th>
//                       <th className="col-360 action">Action</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {meetings.map((m) => (
//                       <tr key={m.time}>
//                         <td className="col-120">{m.time}</td>
//                         <td className="col-240">{m.group}</td>
//                         <td className="col-360">
//                           <button className="sh-join">Join Now</button>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>

//             {/* Recent Summaries */}
//             <h2 className="sh-h2">Recent Summaries</h2>
//             {summaries.map((s) => (
//               <div key={s.topic} className="sh-summary-pad">
//                 <div className="sh-summary">
//                   <div className="sh-summary-text">
//                     <p className="sh-topic">Topic: {s.topic}</p>
//                     <p className="sh-date">Date: {s.date}</p>
//                     <p className="sh-abstract">Abstract: {s.abstract}</p>
//                     <button className="sh-view">View Summary</button>
//                   </div>
//                   <div
//                     className="sh-summary-img"
//                     style={{ backgroundImage: `url("${s.image}")` }}
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


import React from 'react';
import Header from '../../components/Header/Header'; // Import your existing header
import DashboardContent from '../DashboardContent/DashboardContent';
import './Dashboard.scss';
import Navbar from '../../components/Navbar/Navbar';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Header />
      {/* <Navbar/> */}
      <DashboardContent />
    </div>
  );
};

export default Dashboard;
