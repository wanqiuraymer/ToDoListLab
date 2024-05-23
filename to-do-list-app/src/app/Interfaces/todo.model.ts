export interface Todo{
    task: string;
    completed: boolean;
    duration: number | null;
    priority: 'NORMAL' | 'HIGH' | 'LOW' | null;
}