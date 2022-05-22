# Todo App

This is a solution to the [Todo app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW). I have been provided with a Figma sketch, assets such as icons and images, and a README file explaining the challenge. All the code and functionality is written from scratch by me 😊

---

## The challenge 📝

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Add new todos to the list
- Mark todos as complete
- Delete todos from the list
- Filter by all/active/complete todos
- Clear all completed todos
- Toggle light and dark mode
- **Bonus**: Drag and drop to reorder items on the list

---

## Screenshots 📸

![Mobile View](https://user-images.githubusercontent.com/43721548/169679361-4e943e28-8f95-44ac-9762-cac129ad2574.png)

![Desktop View](https://user-images.githubusercontent.com/43721548/169679376-c08bc6df-0c08-492a-8760-546f91bed90b.png)

---

## Links 🌍

- [GitHub Repo](https://github.com/MatildaMared/practice__todo-app "Repository")

- [Live Demo](https://updatethis "Live View")

---

## Technologies used 💻

- HTML
- CSS
- JavaScript
- React
- styled-components
- Redux

---

## What I learned 👩‍🎓

For me, the main learning opportunities in this project was:

1. Gaining a deeper understanding of Redux
2. Practicing transforming a Figma sketch to an actual app
3. Implementing the ability to switch color themes
4. Creating the drag and drop functionality to reorder todo items


### Redux
I have not done a whole lot of work with Redux before but I must say that working with Redux Toolkit was a blast compared to the old way of manually setting up Redux. I was up and running within minutes, even using TypeScript. The official documentation was really easy to navigate and all I needed to complete the project, even though I usually resort to external articles or YouTube to gain a deeper understanding of how something works.

### Transforming sketch to app
This was so much fun! It was not a very challenging task, but provided me with a few quite tricky challenges when it comes to the difference between mobile and desktop layout. I also practiced developing mobile-first, usually I tend to go desktop-first.

### Color themes
Since I used styled-components for the styling I resorted to their theme functionality. It was a bit tricky putting all the pieces together but I'm happy with the result. Initially I used React Context to be able to access the current theme and a function to toggle the theme, but later in the project I refactored to use Redux instead.

### Drag and drop-functionality
In a former project, I used the npm package `react-beautiful-dnd` to implement drag and drop functionality, and since that worked well I decided to use it with this project aswell. I ran into a lot of problems though and had to spend hours trying to debug. It seemed like the drag and drop functionality did not work at all, no "drag-cursor" showed up, nothing. No errors either. The issue, after A LOT of debugging, proved to be a problem related to React Strict Mode, and when I turned that off everything worked. Apperantly, this seems to be a known issue and will hopefully be fixed soon.

---

## Continued development ✏️

The first thing that comes to mind is of course to create a fullstack app to allow for persistent storage of the todos. I decided to go for a "semi-persistent" storage instead, where the todos are saved in local storage. This means that a user can access their todos when revisiting the app, as long as they are using the same device and browser.

You could also implement extended functionality to the actual todo lists. Maybe add the ability to create several lists and give a name to each one. An edit functionality to the created todos could be useful as well.

---

## Author 👩‍💻

**Matilda Mared**

- [GitHub Profile](https://github.com/MatildaMared "MatildaMared")
- [LinkedIn Profile](https://www.linkedin.com/in/matilda-mared "MatildaMared")
- [Email](mailto:matildamared@live.se?subject=Hi "Hi!")
