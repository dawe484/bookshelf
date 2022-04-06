# bookshelf

MERN app for reading e-books.

### Functionality:

**CLIENT**

- user can change languages (Czech, English) of pages

> Main Page

_TODO_

- better resolution (96dpi) in background picture
- new images for sections
- change language - images for English

> SignIn and SignUp Pages

- SignUp Page - user can sign up (required fields = username, email and password)
- SignIn Page - user can sign in (required fields = email and password)

> Help Page

- only header text

  _TODO_

  - in progress

> About Page

- only header text

  _TODO_

  - in progress

_TODO_

- Careers Page
- Press Page
- Contact Us Page
- Term of Use Page
- Privacy Page
- Cookie Preferences Page
- Sitemap Page

- Socials - FB, Twitter, Youtube, Insta

**SERVER**

> User

- get all users from db
- register new user into db
- login user -> return token
- update user info in db
- get logged in user info from db

  _TODO_

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

- Intro Page

  - mobile, desktop version

- Sign In and Sign Up Pages

  - mobile, desktop version

- Browse Page

  - mobile, desktop version
  - the user can see the ebooks that are being read
  - the user can see some ebooks in that category (fantasy, ...)
  - in the navbar is profile avatar pucture and username

- Ebooks Page

  - displays all ebooks in db

- Authors Page

  - displays all authors in db

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
