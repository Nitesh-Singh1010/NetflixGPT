/*
if the user sign up or if the user sign in, we'll get this user object and that can be needed anywhere in the app. so as the user sign in or sign up
i added all the user data to our redux store.
now instead of dispatching action on login/sign up and logout on the store, we'll use a utility api give to us by firebase on onAuthStateChanged which is 
called whenever there is an authentication state chnage
*/