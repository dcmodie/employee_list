import { fetchEmployees, createEmployee } from '../api/employees';
import { useEffect, useState } from 'react';
import EmployeeListItem from '../components/EmployeeListItem';
import EmployeeListItemAlt1 from '../components/EmployeeListItemAlt1';
import AddEmployeeModal from '../components/AddEmployeeModal';
import { Employee } from '../types/Employee';

const EmployeeList: React.FC = () => {
  const [employeeList, setEmployeeList] = useState<Employee[] | null>(null);
  const [employeeForm, setEmployeeForm] = useState<Employee | null>(null);
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    //temporarily assume this is save

    setIsOpen(false);
  }

  useEffect(() => {
    fetchEmployees().then((res) => {
      console.log('got data ', res);
      setEmployeeList(res);
    });
  }, []);

  useEffect(() => {
    console.log('new emp form ', employeeForm);
    createEmployee(employeeForm);
  }, [employeeForm]);

  const renderList = () => {
    if (!employeeList) return null;
    return employeeList.map((emp: Employee) => {
      return <EmployeeListItemAlt1 {...emp} />;
    });
  };
  let subtitle;
  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <AddEmployeeModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        setEmployeeForm={setEmployeeForm}
      />

      <div className="employee-list-title">
        Title <div className="add-employee-icon"> +</div>
      </div>
      <div>{renderList()} </div>
    </div>
  );
};
export default EmployeeList;
