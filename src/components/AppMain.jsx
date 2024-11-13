import PostCard from "./PostCard/PostCard.jsx"
import posts from "../data/posts.js"
export default function AppMain() {

    return (

        <main>
            <div className="container">
                {posts.map(post => <PostCard key={post.id} data={post} />)}
            </div>
        </main>

    )

}