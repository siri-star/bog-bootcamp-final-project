## Comments - Create Comments

Context: Our users really want to leave comments like how much they love Georgia Tech Housing heating during the winter months. They also want others to be able to see their love. We need to implement comment functionality for the posts we are trying to implement in the previous tickets.

What you need to implement:

- Ability to create a comment that is associated with a post
- Create modal/form/whatever design you want so that a user can create the comment on a post!

  - Keep in mind that this comment need to be associated with exactly 1 post, so having this modal/form/whatever in the same screen as the post's individual display or as a part of the post React component
  - This ticket does not concern the actual display of comments under a post (once it's created), just the process by which you create it

- API endpoint for comment creation
  - Keep in mind that the user's comments needs to have the following information:
    - The comment's content (a String)
    - (OPTIONAL) The date/time (check out JS date objects) the comment was created
  - Additionally, take a moment to think about how you would link a comment to it's post or vice versa?
    - Hint: Take a look at the DB models!

Acceptance Criteria:

- Database should be properly updated when a comment is created
- The comment should be linked to the post it was created on! (You might have to potentially need to update the DB, not necessarily the newly created comment instance, to achieve this)
