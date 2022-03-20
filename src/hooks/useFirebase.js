import { useEffect, useState } from "react";
import initializeFirebase from "../Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword,
     signOut, signInWithEmailAndPassword, onAuthStateChanged,GoogleAuthProvider
    ,signInWithPopup, GithubAuthProvider, sendPasswordResetEmail, updateProfile  } from "firebase/auth";




initializeFirebase();
const useFirebase = () =>{

    const auth = getAuth();
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("")
    const GoogleProvider = new GoogleAuthProvider();
    const GitHubProvider = new GithubAuthProvider();
    

    // Function for user registration

    const registerUser = (email, password,name, history) =>{
        setLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          updateProfile(auth.currentUser, {
          displayName: name
        }).then(() => {
         
        }).catch((error) => {
          
        });

         
         alert("User Registration Successful")
        //  const user = userCredential.user;
         saveUserDb(email, name, "POST")
         history.replace('/profile')

         function load()
       {
         history.go(0)
       }
         setTimeout(load, 2000)
         })
        .catch((error) => {
         setError(error.message)
   
    }).finally(()=>setLoading(false));
}

    // Function for login user
    const loginUser = (email, password, history) =>{
      setLoading(true)
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        // const user = userCredential.user;
        history.push('/profile')
        })
        .catch((error) => {
         setError(error.message)
    }).finally(()=>setLoading(false));
    }

    // Function for Google Sign in

      const googleLogIn = history =>{
        setLoading(true)
        signInWithPopup(auth, GoogleProvider)
        .then((result) => {
          // const credential = GoogleAuthProvider.credentialFromResult(result);
          // const token = credential.accessToken;
          const user = result.user;
          saveUserDb(user.email, user.displayName, "PUT")
          history.push('/profile')
        }).catch((error) => {
          setError(error.message)
          // const credential = GoogleAuthProvider.credentialFromError(error);
       
        }).finally(()=>setLoading(false));
      }

      // Function fot github login

      const githubLogin = history =>{
        setLoading(true)
        signInWithPopup(auth, GitHubProvider)
        .then((result) => {
          
          // const credential = GithubAuthProvider.credentialFromResult(result);
          // const token = credential.accessToken;
          const user = result.user;
          saveUserDb(user.email, user.displayName, "PUT")
          history.push('./profile')
        }).catch((error) => {
          setError(error.message)
        }).finally(()=>setLoading(false));
      }


    // Function to handle user state change 

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {

              // const uid = user.uid;
              setUser(user)
            } else {
              setUser({})
            }
            setLoading(false)
          });

          return unSubscribe;
    },[auth])

    // Function for logout user

    const logout = () =>{
      setLoading(true)
        signOut(auth).then(() => {
          }).catch((error) => {
          }).finally(()=>setLoading(false));
    }


    // Function for reset Password

    const resetPassword = email =>{
      sendPasswordResetEmail(auth, email)
     .then(() => {
       alert("Password Reset Email Sent!")
      })
      .catch((error) => {
        setError(error.message)
      });
    }

    const saveUserDb = (email, displayName, method) =>{
      const user = {email, displayName, role:'user'}
    
      fetch('https://thawing-cove-39806.herokuapp.com/users',{
        method: method,
        headers: {
          'content-type' : 'application/json'
        },
        body: JSON.stringify(user)
      })
}   

    

    return{
        user,
        loading,
        loginUser,
        logout,
        registerUser,
        googleLogIn,
        githubLogin,
        resetPassword,
        error 
    }

    }
   


export default useFirebase;