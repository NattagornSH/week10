import { useEffect, useState } from "react";

const MouseTrail = () => {
  const [trails, setTrails] = useState([]);

  useEffect(() => {
    let trailId = 0;

    const handleMouseMove = (e) => {
      const newTrail = {
        id: trailId++,
        x: e.clientX,
        y: e.clientY,
      };

      setTrails((prevTrails) => {
        const updatedTrails = [...prevTrails, newTrail];
        // Keep only last 15 trails
        if (updatedTrails.length > 15) {
          updatedTrails.shift();
        }
        return updatedTrails;
      });

      // Remove trail after animation
      setTimeout(() => {
        setTrails((prevTrails) =>
          prevTrails.filter((t) => t.id !== newTrail.id),
        );
      }, 800);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]">
      {trails.map((trail, index) => (
        <div
          key={trail.id}
          className="absolute animate-trail-fade"
          style={{
            left: `${trail.x}px`,
            top: `${trail.y}px`,
            transform: "translate(-50%, -50%)",
          }}
        >
          {/* Outer glow */}
          <div
            className="absolute rounded-full bg-yellow-400/40 blur-md"
            style={{
              width: `${20 - index}px`,
              height: `${20 - index}px`,
              transform: "translate(-50%, -50%)",
            }}
          />
          {/* Inner sparkle */}
          <div
            className="absolute rounded-full bg-yellow-300"
            style={{
              width: `${8 - index * 0.3}px`,
              height: `${8 - index * 0.3}px`,
              transform: "translate(-50%, -50%)",
              boxShadow: "0 0 10px rgba(253, 224, 71, 0.8)",
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default MouseTrail;
