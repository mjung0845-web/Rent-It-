import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

type HelloWorldProps = {
  titel: string;
  untertitel: string;
};

// Beispiel-Animation: Ein Titel, der per Feder-Animation (spring)
// einfliegt und skaliert, plus ein Untertitel, der sanft einblendet.
export const HelloWorld: React.FC<HelloWorldProps> = ({ titel, untertitel }) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  // Feder-Animation für den Titel (skaliert von 0.6 auf 1)
  const einflug = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 120, mass: 0.8 },
  });
  const scale = interpolate(einflug, [0, 1], [0.6, 1]);
  const opacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: "clamp",
  });

  // Untertitel blendet etwas später ein
  const untertitelOpacity = interpolate(frame, [25, 50], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Animierter Farbverlauf-Hintergrund (Farbton rotiert über die Zeit)
  const farbton = interpolate(frame, [0, durationInFrames], [220, 280]);

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(135deg, hsl(${farbton}, 70%, 45%), hsl(${
          farbton + 40
        }, 70%, 30%))`,
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
      }}
    >
      <div
        style={{
          transform: `scale(${scale})`,
          opacity,
          color: "white",
          fontSize: 140,
          fontWeight: 800,
          letterSpacing: -2,
          textShadow: "0 8px 30px rgba(0,0,0,0.35)",
        }}
      >
        {titel}
      </div>
      <div
        style={{
          opacity: untertitelOpacity,
          color: "rgba(255,255,255,0.9)",
          fontSize: 48,
          fontWeight: 400,
          marginTop: 20,
        }}
      >
        {untertitel}
      </div>
    </AbsoluteFill>
  );
};
