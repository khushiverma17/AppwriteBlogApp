import React, { useState, useEffect } from "react";
import appwriteService from "../appwrite/config"
import { Container, PostCard } from "../components";
import Skeleton from "../components/Skeleton";

function AllPosts() {
    //this posts array will consists of all the posts
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => { }, [])
    //query is empty now
    appwriteService.getPosts([]).then((posts) => {
        if (posts) {
            setPosts(posts.documents)
        }
        setLoading(false)
    })
    if (loading) {
        return (
            <div><Skeleton /></div>
        )
    }
    return (
        <div className="w-full py-8">
            <Container>
                <div className="flex flex-wrap">
                    {posts ? (
                        posts.map((post) => (
                            <div key={post.$id} className="p-2 w-1/4">
                                <PostCard {...post} />
                            </div>
                        ))
                    ) : (
                        <span>hello</span>
                    )}

                </div>
            </Container>
        </div>
    )
}

export default AllPosts
