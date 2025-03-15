export type User = {
    id: string;
    name: string;
    photoUrl: string;
};

export type TaskStatus = "pending" | "completed";

export type Task = {
    id: string;
    title: string;
    description: string;
    room: string;
    status: TaskStatus;
    assignedTo: User;
    dueDate: string;
};
