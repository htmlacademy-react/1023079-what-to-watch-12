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
        playerRef.current.play();
      }
    }, 1000);

    return () => clearTimeout(timeOut);
  }, []);

  return (
    <video
      poster={posterSrc}
      ref={playerRef}
      style={{width: '280px', height: '175px'}}
    >
      <source src={videoSrc} />
    </video>
  );
}
