import { useEffect, useState } from "react";
import HomePage from "./components/HomePage";
import WarningMessage from "./components/WarningMessage";
import StudentDetails from "./components/StudentDetails";

export default function App() {
  const [warning, setWarning] = useState(false);
  const [message, setMessage] = useState("");
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [isStudentAvailable, setIsStudentAvailable] = useState(false);

  function checkLoginStatus() {
    if (user === "30012111402275" && password === "1234567890") {
      setIsStudentAvailable(true);
    } else {
      setIsStudentAvailable(false);
      setWarning(true);
      setMessage(
        "عفوا هذا الرقم غير مسجل فى قاعدة البيانات يجب مراجعة قسم شئون الطلاب بالكلية"
      );
    }
  }

  return (
    <div>
      {warning && <WarningMessage message={message} setWarning={setWarning} />}
      {isStudentAvailable ? (
        <StudentDetails setIsStudentAvailable={setIsStudentAvailable} />
      ) : (
        <HomePage
          warning={warning}
          setWarning={setWarning}
          setMessage={setMessage}
          user={user}
          setUser={setUser}
          password={password}
          setPassword={setPassword}
          checkLoginStatus={checkLoginStatus}
        />
      )}
    </div>
  );
}
