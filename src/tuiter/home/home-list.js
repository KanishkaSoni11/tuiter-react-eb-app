import HomeItem from "./home-item";
import homePosts from "./home.json";


const HomeList = () => {
    return (
        <>
            <ul>
                {
                    homePosts.map(homePost => {
                        return (<HomeItem post={homePost}/>)
                    })
                }
            </ul>
        </>
    );
}