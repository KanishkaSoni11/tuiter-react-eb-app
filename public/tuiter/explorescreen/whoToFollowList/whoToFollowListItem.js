const whoToFollowListItem = (who) => {
    return (`
                <div class="list-group-item list-group-item-action wd-border">
                    <div class="row">
                        <div class="col-2">
                            <img class="rounded-circle img-fluid" width="100%" height="100%"
                                 src="${who.avatarIcon}"/>
                        </div>
                        <div class="col-6">
                            <span class="fw-bold text-nowrap"> ${who.userName} <i class="fas fa-check-circle"></i></span>
                            <br>
                            <span class="d-fg-color-gray">@${who.handle_id}</span>


                        </div>
                        <div class="col-4">
                            <button class="btn btn-primary mt-2 rounded-pill float-end">
                                Follow
                            </button>

                        </div>
                    </div>

                </div>
      
    `);

}
export default whoToFollowListItem;