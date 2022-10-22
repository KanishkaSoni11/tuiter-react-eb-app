import whos from "./who.json";
import WhoToFollowListItem from "./who-to-follow-list-item";

const WhoToFollowList = () => {
    return (
        <>
            <ul>
                {
                    whos.map(whoItem => {
                        return(<WhoToFollowListItem who={whoItem}/>);
                    })
                }
            </ul>
        </>

    );
}

export default WhoToFollowList;