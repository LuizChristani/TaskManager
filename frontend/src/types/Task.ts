export interface TaskItemProps {
    id: string | null,
    titulo: string,
    detalhes: string,
    status: string,
    time: string
}

export interface TaskItemRequest {
    titulo: string,
    detalhes: string,
    status: string,
    time: string
}

export interface TaskProps {
    task: TaskItemProps[],
}

export interface TaskProp {
    task: TaskItemProps
    handlerTasksClick: (taskId: string | null) => void;
    onDeleteSuccess: (taskId: string | null) => void;
}

export const StatusTask = {
  Pendente: "pendente",
  Progresso: "progresso",
  Concluida: "concluida",
} as const;

export type StatusTaskType =
  typeof StatusTask[keyof typeof StatusTask];
