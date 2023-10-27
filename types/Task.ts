export interface Task {
    id:      number;
    title:   string;
    detail:  string;
    status:  TaskStatus;
}

export type TaskStatus = "To Do" | "In Progress" | "Done"