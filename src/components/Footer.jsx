import React from "react";
import audio from "../assets/audio/terra.mp3";

function Footer() {
  const data = new Date();

  return (
    <div className="bg-[#F1F3F4] text-white p-2 flex items-center justify-between fixed bottom-0 w-full">
      <div className="text-black">
        <p>{data.toLocaleDateString("be-BE")}</p>
        <p> {data.toLocaleTimeString("be-BE")}</p>
      </div>

      <audio controls src={audio} className="color-move" />

      <p className="text-black">
        © 2026 Cfitech- Mariam Omri <br />
      </p>
    </div>
  );
}

export default Footer;
