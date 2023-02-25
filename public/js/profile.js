const newFormHandler = async (event) => {
  console.log('submit new post')
  event.preventDefault();

  const name = document.querySelector('#post-name').value.trim();
  // const needed_funding = document.querySelector('#project-funding').value.trim();
  const description = document.querySelector('#project-desc').value.trim();

  if (name && description) {
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({ name, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/posts');
    } else {
      alert('Failed to create post');
    }
  }
};

const delButtonHandler = async (event) => {
  console.log('delete button clicked')
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/posts/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/posts');
    } else {
      alert('Failed to delete project');
    }
  }
};

// const createCommentHandler = async () => {

// }

document
  .querySelector('.new-project-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.delete-post-btn')
  .addEventListener('click', delButtonHandler);
