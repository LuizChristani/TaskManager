export const Menu = {
    Home: "home",
    Task: "task",
} as const

export type MenuType =
  typeof Menu[keyof typeof Menu];

export interface SidebarProps{
    sidebarOpt: string
    isClickedOption: (option: string) => void
}