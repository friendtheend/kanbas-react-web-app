import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { useParams } from "react-router-dom";
import * as db from "../../Database";

// export default function PeopleTable() {

//     const { cid } = useParams();
//     const { users, enrollments } = db;
//     return (
//         <div id="wd-people-table">
//             <table className="table table-striped">
//                 <thead>
//                     <tr>
//                         <th>Name</th><th>Login ID</th><th>Section</th><th>Role</th><th>Last Activity</th><th>Total Activity</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     <tr>
//                         <td className="wd-full-name text-nowrap">
//                             <FaUserCircle className="me-2 fs-1 text-secondary" />
//                             <span className="wd-first-name">Tony</span>{" "}
//                             <span className="wd-last-name">Stark</span>
//                         </td>
//                         <td className="wd-login-id">001234561S</td>
//                         <td className="wd-section">S101</td>
//                         <td className="wd-role">STUDENT</td>
//                         <td className="wd-last-activity">2020-10-01</td>
//                         <td className="wd-total-activity">10:21:32</td>
//                     </tr>
//                     <tr>
//                         <td className="wd-full-name text-nowrap">
//                             <FaUserCircle className="me-2 fs-1 text-secondary" />
//                             <span className="wd-first-name">BKDAS</span>{" "}
//                             <span className="wd-last-name">ASD</span>
//                         </td>
//                         <td className="wd-login-id">SDAFS33</td>
//                         <td className="wd-section">S102</td>
//                         <td className="wd-role">STUDENT</td>
//                         <td className="wd-last-activity">2022-05-22</td>
//                         <td className="wd-total-activity">10:23:32</td>
//                     </tr>
//                     <tr>
//                         <td className="wd-full-name text-nowrap">
//                             <FaUserCircle className="me-2 fs-1 text-secondary" />
//                             <span className="wd-first-name">CVDS</span>{" "}
//                             <span className="wd-last-name">SCDFF</span>
//                         </td>
//                         <td className="wd-login-id">S5DF858F</td>
//                         <td className="wd-section">S103</td>
//                         <td className="wd-role">STUDENT</td>
//                         <td className="wd-last-activity">2021-11-11</td>
//                         <td className="wd-total-activity">10:23:31</td>
//                     </tr>
//                     <tr>
//                         <td className="wd-full-name text-nowrap">
//                             <FaUserCircle className="me-2 fs-1 text-secondary" />
//                             <span className="wd-first-name">Tony</span>{" "}
//                             <span className="wd-last-name">Stark</span>
//                         </td>
//                         <td className="wd-login-id">SD5FSFDS</td>
//                         <td className="wd-section">S104</td>
//                         <td className="wd-role">STUDENT</td>
//                         <td className="wd-last-activity">2023-11-12</td>
//                         <td className="wd-total-activity">10:21:59</td>
//                     </tr>

//                 </tbody>
//             </table>
//         </div>
//     );
// }


export default function PeopleTable() {
    const { cid } = useParams();

    const { users, enrollments } = db;



    return (
        <div id="wd-people-table">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Login ID</th>
                        <th>Section</th>
                        <th>Role</th>
                        <th>Last Activity</th>
                        <th>Total Activity</th>
                    </tr>
                </thead>
                <tbody>
                    {users
                        .filter((usr) =>
                            enrollments.some(
                                (enrollment) =>
                                    enrollment.user === usr._id && enrollment.course === cid
                            )
                        )
                        .map((user: any) => (
                            <tr key={user._id}>
                                <td className="wd-full-name text-nowrap" key={user._id}>
                                    <FaUserCircle className="me-2 fs-1 text-secondary" />
                                    <span className="wd-first-name">
                                        {user.firstName}
                                    </span>{" "}
                                    <span className="wd-last-name">{user.lastName}</span>
                                </td>
                                <td className="wd-login-id">{user.loginId}</td>
                                <td className="wd-section">{user.section}</td>
                                <td className="wd-role">{user.role}</td>
                                <td className="wd-last-activity">{user.lastActivity}</td>
                                <td className="wd-total-activity">{user.totalActivity}</td>{" "}
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
}