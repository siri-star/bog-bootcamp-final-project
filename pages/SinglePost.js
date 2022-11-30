
function SinglePost() {
    const { data: session, status } = useSession();
    const router = useRouter();
    const refreshData = () => {
        router.replace(router.asPath);
      };
    const deletePost = async () => {
        try {
          await fetch(`/api/posts/${postId}`, {
            method: "DELETE",
          });
          if (redirect) {
            router.push(redirect)
          } else {
            refreshData();
          }
        } catch (error) {
          console.error(error);
        }
      };
    return (
        <div>
            <h>Title</h>
            <p>Body</p>
            <button onClick={}>Edit Post</button>
            <button onClick={deletePost}>Delete Post</button>
            <p>Comments</p>
        </div>
    )
}