import type { ComponentType, SVGProps } from "react";

interface TaskSeparator {
    title: string,
    icon: ComponentType<SVGProps<SVGSVGElement>>;
}

export const TaskSeparator = ({title, icon}: TaskSeparator) => {
    const Icon = icon;
    return (
        <div className="flex items-center gap-2 border-b-2 border-[#F4F4F5] text-[#9A9C9F]">
            <Icon/>
            <p className="font-semibold text-lg">{title}</p>
        </div>
    )
}