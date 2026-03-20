import { loaderAnimation } from '../../assets';

export function Loader() {
  return (
    <div>
      <img
        src={loaderAnimation}
        alt="loader..."
        width={'480px'}
        height={'320px'}
      />
    </div>
  );
}
