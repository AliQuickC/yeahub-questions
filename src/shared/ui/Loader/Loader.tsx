import { loaderAnimation } from '../../assets';

interface Props {
  width?: string;
  height?: string;
}

export function Loader({ width = '480px', height = '320px' }: Props) {
  return (
    <div>
      <img
        src={loaderAnimation}
        alt="loader..."
        width={width}
        height={height}
      />
    </div>
  );
}
