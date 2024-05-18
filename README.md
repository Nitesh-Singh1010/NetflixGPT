# NetflixGPT

-Create React App
-Configure TailwindCSS
-Header creation
-Routing
-Login and Sign Up Form(managed using single state variable and a toggle function)
-Form Validations
  -made a util function where regex is used for verifying email and password
  -useRef hook is used to take the reference of entered email and password(state could also have been used)
  -an error state was mainatined ehich showed error upon regex failure.
-Firebase Setup
-Deployed app on production
-Authentication
  -used google firebase for authentication
  -using firebase documentation, created sign up user account and implemented sign in user api.
  -created redux store with userSlice.  as user sign in or sign up, all the data is added to the redux store.
  -implemented signout feature
  -ensured the user cannot go to browse page if not logged in and stayed on browse page if logged in by using useNavigate and tracking the auth state using onAuthStateChanged api from firebase documentation. It was used in useEffect of Header component because header component was present throught out the application and continuously tracked the auth state.
   
