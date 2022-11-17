# Create All Posts View

The root page `/` of your application should display all the posts that exist in the database. You should display each post's title, the amount of comments on that post, and the date and time that the post was created. Ensure that the date is human-readable. Sort the posts by most recent to least recent (try to do the sorting in the database query). Implement pagination so that 10 posts are showing at one time.

This feature will require you to create an API endpoint to get all existing posts from the database. This API endpoint should be located at `/api/post`. The corresponding action, `findAllPosts`, is already given to you in `db/actions/Post.js`.
