import PostCard from "./PostCard/PostCard.jsx"
import posts from "../data/posts.js"
export default function AppMain() {

    return (

        <main>
            <div className="container">
                <div className="row">
                    {posts.map(post => <PostCard key={post.id} data={post} />)}

                </div>
            </div>
        </main>

    )

}