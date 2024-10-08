import React from "react";
import { Link } from "react-router-dom";

// export default function AccountNavigation() {
//     return (
//         <div id="wd-account-navigation">
//             <Link to={`/Kanbas/Account/Signin`}  > Signin  </Link> <br />
//             <Link to={`/Kanbas/Account/Signup`}  > Signup  </Link> <br />
//             <Link to={`/Kanbas/Account/Profile`} > Profile </Link> <br />
//         </div>
//     );
// }

export default function AccountNavigation() {
    return (
        <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
            <Link to="/Kanbas/Account/Signin" id="wd-course-home-link"
                className="list-group-item active border border-0"> Signin </Link>
            <Link to="/Kanbas/Account/Signup" id="wd-course-modules-link"
                className="list-group-item text-danger border border-0"> Signup </Link>
            <Link to="/Kanbas/Account/Profile" id="wd-course-piazza-link"
                className="list-group-item text-danger border border-0"> Profile </Link>
        </div>
    );
}
