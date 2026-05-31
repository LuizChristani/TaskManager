export const Menu = {
    Home: "home",
    Task: "task",
} as const

export interface SidebarProps{
    sidebarOpt: string
    isClickedOption: (option: string) => void
}