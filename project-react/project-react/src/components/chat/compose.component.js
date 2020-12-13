import { useState } from "react";

import { API } from "./constants";

function Compose({ onSuccess }) {
  const [value, setValue] = useState("");

  return (
    <form className="textBox"
      onSubmit={(event) => {
        event.preventDefault();

        if (value !== "") {
          fetch(`${API}/channel/general`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              user: "Alexis",
              text: value,
              photo: 'http://lorempixel.com/output/technics-q-c-50-50-3.jpg'
            }),
          })
            .then(() => {
              onSuccess();
              setValue("");
            })
            .catch((error) => console.error(error));
        }
      }}
    >
      <input className="input" type="text" placeholder="Escribe tu mensaje..."  value={value} onChange={(event) => setValue(event.target.value)} />
      <button type="submit"><i className="fas fa-paper-plane"></i></button>
    </form>
  );
}

export default Compose;