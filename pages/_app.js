import Layout from '../components/Layout';
import '../styles/global.css';
import '../styles/prism.css';
import '../styles/utils.prism.css';

export default function App({ Component, pageProps }) {
    return <Layout><Component {...pageProps} /></Layout>;
  }
  