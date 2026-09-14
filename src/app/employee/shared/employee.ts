export type EmployeeStatus = 'online' | 'offline';

export interface IEmployee {
  id: string;
  name: string;
  email: string;
  role: string;
  status: EmployeeStatus;
  taskCount: number;
}

