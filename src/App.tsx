// import Labs from "./Labs";
// import Kanbas from "./Kanbas";
// import React from "react";
// import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
// import TOC from "./Labs/TOC";
// import CoursesNavigation from "./Kanbas/Courses/Navigation";

// export default function App() {
//   return (
//     <HashRouter>
//       <div>
//         <Routes>
//           <Route path="/" element={<TOC />} />
//           <Route path="/Labs/*" element={<Labs />} />
//           <Route path="/Kanbas/*" element={<Kanbas />} />


//         </Routes>
//       </div>
//     </HashRouter>
//   );
// }
import Labs from "./Labs";
import Kanbas from "./Kanbas";
import React from "react";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import TOC from "./Labs/TOC";
import CoursesNavigation from "./Kanbas/Courses/Navigation";
import { Provider } from "react-redux"; // Import Provider
import store from "./Kanbas/store"; // Import the Redux store

export default function App() {
  return (
    <Provider store={store}> {/* Wrap the app in Provider */}
      <HashRouter>
        <div>
          <Routes>
            <Route path="/" element={<TOC />} />
            <Route path="/Labs/*" element={<Labs />} />
            <Route path="/Kanbas/*" element={<Kanbas />} />
          </Routes>
        </div>
      </HashRouter>
    </Provider>
  );
}
