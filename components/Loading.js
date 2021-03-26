import { Circle } from 'better-react-spinkit';

function Loading() {
  return (
    <center style={{ display: 'grid', placeItems: 'center', height: '100vh' }}>
      <Circle color="#3cbc28" size={60} />
    </center>
  );
}

export default Loading;
