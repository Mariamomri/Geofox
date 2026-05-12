import React from "react";

function Footer() {
  const data = new Date();

  return (
    <div className="bg-linear-to-b from-[transparent] to-[#C0C0C0]  p-2 text-white flex items-center justify-between fixed bottom-0 w-full">
      <div className="text-black ml-4 dataorafooter">
        <p>
          {data.toLocaleDateString("be-BE")} {data.toLocaleTimeString("be-BE")}
        </p>
      </div>

      <p className="text-black mr-4 footernome">
        © 2026 Cfitech- Mariam Omri <br />
      </p>
    </div>
  );
}

export default Footer;
