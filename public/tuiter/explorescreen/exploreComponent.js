import postSummaryListIndex from "./postSummaryList/index.js";

const ExploreComponent = () => {
    return (`
             <div class="row">
                <div class="col-11">
                    <div class="position-relative">
                        <input class="ps-5 form-control rounded-pill" placeholder="Search Tuiter"/>
                        <span class="position-absolute wd-search-tuiter m-0"><i class="fas fa-search"
                                                                                style="color: black"></i></span>
                    </div>
                </div>
                <div class="col-1">
                    <i class="fas fa-cog fa-2x" style="color:#0275d8"></i>
                </div>
            </div>
            
           <ul class="nav nav-tabs mt-2">
                <li class="nav-item">
                    <a class="nav-link active" href="#">
                        For You
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        Trending
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        News
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" >
                        Sports
                    </a>
                </li>
                <li class="nav-item d-none d-xxl-block d-xl-block d-lg-block d-md-block d-sm-none">
                    <a class="nav-link" href="#" >
                        Entertainment
                    </a>
                </li>

            </ul>
            
          <div class="position-relative mt-2">
                <img src="../../images/starship.jpg" width="100%"/>
                <h1 class="position-absolute bottom-0 left-0 text-white ms-2"> SpaceX's Starship</h1>
            </div>
            
           ${postSummaryListIndex()}
    `);
}
export default ExploreComponent;
