export interface Task {
  id?: number;
  title: string;
  description?: string;
  priority: number;
  department: number;
  state: string;
  assigned_to: number;
}
