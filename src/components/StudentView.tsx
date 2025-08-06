import React, { type Dispatch, type SetStateAction } from "react";
import type { IStudent } from "../types";
import { BiEdit, BiTrash } from "react-icons/bi";

interface IProps {
  students: IStudent[];
  handleDelete: (id: number) => void;
  setUpdatingStudent: Dispatch<SetStateAction<IStudent | null>>;
}

const StudentView = ({
  students,
  handleDelete,
  setUpdatingStudent,
}: IProps) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 text-sm text-left">
        <thead className="bg-black text-white">
          <tr>
            <th className="px-4 py-2">#</th>
            <th className="px-4 py-2">Full Name</th>
            <th className="px-4 py-2">Address</th>
            <th className="px-4 py-2">Phone Number</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students?.length === 0 ? (
            <tr>
              <td colSpan={5} className="px-4 py-4 text-center text-gray-500">
                No students found.
              </td>
            </tr>
          ) : (
            students?.map((student, index) => (
              <tr
                key={index}
                className="odd:bg-white even:bg-gray-100 hover:bg-black/10 transition border-b"
              >
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{student.full_name}</td>
                <td className="px-4 py-2">{student.address}</td>
                <td className="px-4 py-2">{student.phone_number}</td>
                <td className="px-4 py-2 flex justify-around items-center text-[20px]">
                  <BiEdit
                    className="cursor-pointer text-blue-500"
                    onClick={() => setUpdatingStudent(student)}
                  />
                  <BiTrash
                    onClick={() => handleDelete(student.id)}
                    className="cursor-pointer text-red-500"
                  />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default React.memo(StudentView);
