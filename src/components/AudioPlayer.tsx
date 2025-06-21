import React from "react";

const AudioPlayer = () => {
  return (
    <div className="w-full max-w-2xl mx-auto rounded-md overflow-hidden shadow-md">
      <iframe
        title="Afrobeats Mix by Kem Kem"
        width="100%"
        height="166"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2107987086&color=%23c488fa&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
      />
      <div
        style={{
          fontSize: "10px",
          color: "#cccccc",
          lineBreak: "anywhere",
          wordBreak: "normal",
          overflow: "hidden",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
          fontFamily:
            "Interstate, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Garuda, Verdana, Tahoma, sans-serif",
          fontWeight: 100,
          marginTop: "4px",
        }}
      ></div>
    </div>
  );
};

export default AudioPlayer;