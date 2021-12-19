# bookshelf

MERN app for reading e-books.

### Functionality:

**CLIENT**

- ...
<!-- - change language (Czech, English) - text + images (TODO: background image and second card image in Intro page) -->

**SERVER**

> User

- get all users from db
- register new user into db
- login user -> return token
- update user info in db

  _TODO_

  - get logged in user info from db
  - fix 'update user info' - only authorized user ??

> Author

- get all authors from db
- get one author info from db
- save new author into db
- update author info in db
- delete author in db

> Avatar

- get all avatars from db

  _TODO_

  - save new avatar icon in db
  - update avatar icon (if better/different image will be needed)
  - delete avatar from db (if no longer needed this avatar icon)

> Book

- get all books from db
- get one book info from db
- save new book into db and connect it with author (based on author url)
- update book info in db
- delete book from db and remove connection from author in db

### Layout:

<!-- - Intro page - mobile, desktop version -->
<!-- - Sign In and Sign Up pages - mobile, desktop version -->

<!-- Supported files:

- pdf (in progress)
- epub (in progress)
- mobi (in progress)

### `Functionality:`

public - available for every user<br>
private - available only for registered (logged) user

- `register user` (public)
- `login user` (public)
- `add author` (public)
- `get all authors` (public)
- `add book` (public) - save new book and link it with author in DB
- `edit book` (private) -->

**Note: App is still in development phase.**
