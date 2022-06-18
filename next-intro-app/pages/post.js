//useRouter hook for dynamic routing
import { useRouter } from "next/router"

const Post = () => {
    const router = useRouter()
    console.log(router, "router")
    const { pid } = router.query
    return(
        <div>Post pid: {pid}</div>
    )
}

export default Post