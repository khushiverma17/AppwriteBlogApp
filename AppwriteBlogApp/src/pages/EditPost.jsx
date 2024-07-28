import React, { useEffect, useState } from "react";
import { Container, PostForm } from "../components"
import appwriteService from "../appwrite/config"
import { useNavigate, useParams } from "react-router-dom";
import Skeleton from "../components/Skeleton";
// import Skeleton from "../components/Skeleton";


function EditPost() {
    const [loading, setLoading] = useState(true)
    const [post, setPosts] = useState(null);
    const { slug } = useParams()
    const navigate = useNavigate()


    useEffect(() => {
        setLoading(true)
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) {
                    setPosts(post)
                }
                setLoading(false)
            })
        } else {
            navigate("/")
        }

    }, [slug, navigate])
    
    
    if (loading) {
        return (
            <div className='h-[70vh] flex justify-center items-center'><Skeleton /></div>
        )
    }

    return (
        post ? (<div className="py-8">
            <Container>
                <PostForm post={post} />
            </Container>
        </div>) : null
    )
}

export default EditPost