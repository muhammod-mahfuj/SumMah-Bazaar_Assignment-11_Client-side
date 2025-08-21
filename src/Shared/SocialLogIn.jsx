import { useContext } from "react";
import AuthContext from "../contexts/AuthContexts/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";


const SocialLogIn = () => {
    const {signInWithgoogle} = useContext(AuthContext);
      const location = useLocation();
      const navigate = useNavigate();
      console.log("google sign In",location);
      const from = location.state || "/";

    const handleGoogleSignIn = () => {
        signInWithgoogle()
        .then((result) => {
            console.log("sign in Successfully",result.user);
            navigate(from);
        }).catch((error) => {
            console.log("signIn failed", error);
       });
    }

    return (
        <div>
            <button onClick={handleGoogleSignIn} className="btn btn-accent font-bold">Sign In With Google</button>
        </div>
    );
};

export default SocialLogIn;