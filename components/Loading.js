import { ThreeBounce } from 'better-react-spinkit';

function Loading() {
  return (
    <center style={{ display: 'grid', placeItems: 'center', height: '100vh' }}>
      <ThreeBounce color="#3cbc28" size={60} />
    </center>
  );
}

export default Loading;
