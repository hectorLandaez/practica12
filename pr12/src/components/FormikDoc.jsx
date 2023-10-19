import React from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

export default function HelpTextDemo() {
  return (
<>
<small id="username-help">
        Want us to contact you?
      </small>
    <div className="card flex justify-content-center">
      <div className="flex flex-column gap-2">
        <div className="email">
          <InputText
            id="username"
            aria-describedby="username-help"
            placeholder="email"
          />
          <div className="card flex justify-content-center">
            <Button label="join" />
          </div>
        </div>
      </div>
    </div>
</>
  );
}
