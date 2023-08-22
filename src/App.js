import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-dropzone-uploader/dist/styles.css';
import Routers from './common/router/router';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://flyby-router-demo.herokuapp.com/',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <GoogleOAuthProvider clientId="109219595579-sh1fgg51jdn325f4gkgqo64st0ecjk2g.apps.googleusercontent.com">
          <Routers />
        </GoogleOAuthProvider>
      </ApolloProvider>
    </>
  );
}

export default App;
