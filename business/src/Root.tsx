import { Composition } from "remotion";
import { HelloWorld } from "./HelloWorld";

// Hier werden alle Animationen ("Compositions") registriert.
// Jede Composition wird im Remotion Studio in der Seitenleiste angezeigt.
export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="HelloWorld"
        component={HelloWorld}
        durationInFrames={150}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          titel: "Rent It",
          untertitel: "Deine Animation mit Remotion",
        }}
      />
    </>
  );
};
