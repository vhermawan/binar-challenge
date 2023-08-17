import { useGoogleLogin } from '@react-oauth/google';

export default function GoogleOauthSection() {
  const googleLogin = useGoogleLogin({
    flow: 'auth-code',
    useOneTap: true,
    onSuccess: async codeResponse => {
      console.log(codeResponse);
    },
    onError: errorResponse => console.log(errorResponse),
  });

  return (
    <>
      <button onClick={() => googleLogin()}>Login</button>
    </>
  );
}
