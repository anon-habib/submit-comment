document.getElementById('submit-button').addEventListener('click', function () {
    const commentBox = document.getElementById('textarea')
    const newComment = commentBox.value;
    const commentContainer = document.getElementById('comment-area');
    const commentType = document.createElement('p');
    commentType.innerText = newComment;
    commentContainer.appendChild(commentType);
    commentBox.value = '';
})