import React from "react";

const AudioPlayer = () => {
  return (
    <div className="w-full max-w-2xl mx-auto rounded-md overflow-hidden shadow-md">
      <iframe
        title="Mixcloud Player"
        width="100%"
        height="120"
        src="https://www.mixcloud.com/widget/iframe/?feed=%2Fmixclouduser%2Fmixname%2F&hide_cover=1&light=1"
        frameBorder="0"
        allow="autoplay"
      />
    </div>
  );
};

export default AudioPlayer;