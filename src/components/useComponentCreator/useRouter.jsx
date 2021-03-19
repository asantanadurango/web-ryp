import React from "react";
import UseNavigator from "./useNavigator";
import UseRoute from "./useRoute";

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
