import React from "react";
import UseNavigator from "../Navigator/page";
import UseRoute from "../Route/page";

import { BrowserRouter as Router, Route } from "react-router-dom";

function useRouter() {
   return (
      <>
         <Router>
            <UseNavigator />
            <Route path={`/:categoryName?`} component={UseRoute} />
         </Router>
      </>
   );
}

export default useRouter;
