export interface EmployeeListItemProps {
  id: number;
  name: string;
  email: string;
}
const EmployeeListItem = ({
  employee,
}: {
  employee: EmployeeListItemProps;
}) => {
  console.log(employee);
  const { id, name, email } = employee;
  return (
    <div key={id} className="employee-list-item">
      <div>{name}</div>
      <div>{email}</div>
    </div>
  );
};
export default EmployeeListItem;
