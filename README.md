# LOGIN/LOGOUT AUTHENTICATION FRONTEND APP

## REVIEW OF DEVELOPMENT STEPS

A) began by installing React and launched it in browser

B) focused on the user interface by createing HOME, LOGIN, LOGOUT and REGISTER pages in the pages folder. Later realized the REGISTER page was not needed and commented out its contents (didn't delete the file). 
    b.1) the user can only see HOME & LOGIN. After logging in, has access to LOGGEDIN. The route to LOGGEDIN is protected by redirect. 

C) created a CONTEXT folder and authContext file. It was not necessary for this kind of application, however I find it good practice to always consider the possibility of scaling the app.. Further more using Context, I can pass the user data to any other page or component and that in itself make any dev's life much better.  

D) created a components folder for the Navbar component.

E) create a HOOKS folder to compartmentalized each pages logic and prevent having to refactor the code at the end. Each hook in this folder is provied with AuthContext so the { user } is accessible in any page. 
    e.1) useAuthContext.js - this hook is used to handle the context logic. 
    e.2) useLogin.js - this hook is used to handle the login logic, including JWT, which i chose to save to LocalStorage. 
    e.3) useLogout.js - this hook is used to handle the logout logic and removed the JWT from localStorage.

## LIBRARIES USED
React, React-router-dom, JWT-decode, enzyme

## PERSONAL LEARNING CURVE
There is always so much to learn and so many new libraries and tools. This was the first time to use jwt-decode and was buffled how quickly I could implement it, usually there is a stip learning curve or a lot of research before being able to use a new library.

All of last year, I defered authentication to 3rd party providers like Firbase or Auth0.. Even for one of the major projects I worked on, coded in NEXTjs, we used the platform auth library: NextAuth (documentation was great and implementation was quite straight forward though it required quite a bit of research). 

So, overall, I'm quite happy with this small challenge test, it gave me the opportunty to practice creating an Auth.Sys. again and engaging with JWTs. 

**As steps forward:** 
-I will probably play around with UI and try to create an app that is displayed to the loggedin user, something like a calculator or a tracker. 
-I will probably also improve the UI with a nice animation or transition btw login & logout. 

## CHALLENGES
-It wasn't easy at first using Swager. For some reason, I kept getting confused with the details provided in the page and the details provided in the JSON file. I had to go back and forth a few times to make sure I was using the correct data and authorization.
-Though the server provided what very straight forward, I found it frustrating not having access to its actual code. Somehow the uncertainty of not seeing the code, made me feel like I was or could be missing something.
-Had to refresh my memory on how JWTs work and how to decode them.
-Full disclosure: Im not a fan of testing. It's tedious and often quite unnecessary, specially on the frontend. I mean... if you see it working in the browser: do you really have to write tests to re-prove that it works? I know it's a good practice and down the line it could prevent bugs from arising, still not a fan.