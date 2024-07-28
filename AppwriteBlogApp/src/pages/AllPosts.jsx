import React, { useState, useEffect } from "react";
import appwriteService from "../appwrite/config"
import { Container, PostCard } from "../components";
import Skeleton from "../components/Skeleton";

function AllPosts() {
    //this posts array will consists of all the posts
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => { }, [])
    //query is empty now
    appwriteService.getPosts([]).then((posts) => {
        if (posts) {
            setPosts(posts.documents)
        }
        console.log("yes")
        setLoading(false)
    })
    if (loading) {
        return (
            <div className='h-[70vh] flex justify-center items-center'><Skeleton /></div>
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
