import { useContext } from "react";
import { AlertContext } from "../../../contexts/alert/AlertContext";

export default function Alert() {
  const { alert } = useContext(AlertContext);

  return (
    alert !== null && (
      <div className="container mx-auto">
        <div className="px-3 w-fit mb-4">
          <div role="alert" className={`alert alert-${alert.type}`}>
            <span>{alert.msg}</span>
          </div>
        </div>
      </div>
    )
  );
}
