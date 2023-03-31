import { useEffect, useRef } from 'react';

type Props = {
  videoSrc: string;
  posterSrc: string;
}

export default function FilmCardPlayer({videoSrc, posterSrc}: Props): JSX.Element {
  const playerRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      if (playerRef.current) {
        playerRef.current.volume = 0;
        playerRef.current.play();
      }
    }, 1000);

    return () => clearTimeout(timeOut);
  }, []);

  return (
    <video
      poster={posterSrc}
      ref={playerRef}
      style={{width: '280px', height: '168px'}}
    >
      <source src={videoSrc} />
    </video>
  );
}
