import React, {
  useEffect,
  type Dispatch,
  type FormEvent,
  type SetStateAction,
} from "react";
import type { IStudent } from "../types";
import { useGetInputValue } from "../hooks/getInputValues";

interface IProps {
  setStudents: React.Dispatch<React.SetStateAction<IStudent[]>>;
  updatingStudent: IStudent | null;
  setUpdatingStudent: Dispatch<SetStateAction<IStudent | null>>;
}
const initialState: IStudent = {
  id: 0,
  full_name: "",
  address: "",
  phone_number: "",
};

const FormData = ({ setStudents, updatingStudent }: IProps) => {
  const { formData, handleChange, setFormData } =
    useGetInputValue(initialState);

  useEffect(() => {
    if (updatingStudent) {
      setFormData(updatingStudent);
    }
  }, [updatingStudent]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (updatingStudent) {
      setStudents((p) =>
        p.map((student) =>
          student.id === updatingStudent.id
            ? { ...student, ...formData }
            : student
        )
      );
    } else {
      setStudents((p) => [...p, { ...formData, id: Date.now() }]);
    }
    setFormData(initialState);
  };

  return (
    <form
      action=""
      className="flex flex-col w-[400px] gap-3"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl">Student</h2>
      <input
        className="border px-3 py-2 rounded-[10px]"
        type="text"
        placeholder="Full name…"
        onChange={handleChange}
        value={formData.full_name}
        required
        name="full_name"
      />
      <input
        className="border px-3 py-2 rounded-[10px]"
        type="text"
        placeholder="Address…"
        onChange={handleChange}
        value={formData.address}
        required
        name="address"
      />
      <input
        className="border px-3 py-2 rounded-[10px]"
        type="text"
        placeholder="Phone number"
        onChange={handleChange}
        value={formData.phone_number}
        required
        name="phone_number"
      />
      <button className="border px-3 py-2 rounded-[10px] text-white bg-black">
        {updatingStudent ? "Save" : "Add"}
      </button>
    </form>
  );
};

export default React.memo(FormData);
