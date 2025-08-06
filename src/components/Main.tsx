import React, { useCallback, useEffect, useState } from "react";
import FormData from "./FormData";
import StudentView from "./StudentView";
import type { IStudent } from "../types/index.ts";

const Main = () => {
  const [students, setStudents] = useState<IStudent[]>(
    JSON.parse(localStorage.getItem("students") || "[]") || []
  );
  const [updatingStudent, setUpdatingStudent] = useState<IStudent | null>(null);
  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  const handleDelete = useCallback(
    (id: number) => {
      setStudents((p) => p.filter((student) => student.id != id));
    },
    [setStudents]
  );

  return (
    <div className="flex container mx-auto gap-40 mt-20 flex-wrap px-5">
      <FormData
        setStudents={setStudents}
        updatingStudent={updatingStudent}
        setUpdatingStudent={setUpdatingStudent}
      />
      <StudentView
        students={students}
        handleDelete={handleDelete}
        setUpdatingStudent={setUpdatingStudent}
      />
    </div>
  );
};

export default React.memo(Main);
