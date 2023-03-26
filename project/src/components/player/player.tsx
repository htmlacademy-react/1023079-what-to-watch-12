import { useEffect, useRef } from 'react';

type Props = {
  videoSrc: string;
  posterSrc: string;
}

export default function FilmCardPlayer({videoSrc, posterSrc}: Props): JSX.Element {
  const playerRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    setTimeout(() => {
      if (playerRef.current) {
        playerRef.current.play();
      }
    }, 1000);
  }, []);

  return (
    <video
      poster={posterSrc}
      ref={playerRef}
    >
      <source src={videoSrc} />
    </video>
  );
}
