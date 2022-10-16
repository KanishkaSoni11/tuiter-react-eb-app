/* eslint-env jquery */
import NavigationSidebar from "../navigationSidebar/index.js";
import postSummaryListIndex from "./postSummaryList/index.js";
import postSummaryListIndexSide from "./postSummaryListSide/index.js";


function main() {
    $('#wd-explore').append(`
<!--       <h2>Explore</h2>-->
   <div class="row mt-2">
   <div class="col-2 col-md-2 col-lg-1 col-xl-2 ">
 
 ${NavigationSidebar('home')}
   </div>
   <div class="col-10 col-lg-7 col-xl-6 ">
  ${postSummaryListIndex()}
   </div>
   <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 ">
    ${postSummaryListIndexSide()}
   </div>
  </div>

   `);
}

$(main);