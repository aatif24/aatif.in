"use client"

import * as React from "react"
import {
    CalendarIcon,
    EnvelopeClosedIcon,
    FaceIcon,
    GearIcon,
    PersonIcon,
    RocketIcon,
} from "@radix-ui/react-icons"

import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/components/ui/command"

import CalendarV2 from "../calendar/index.v2"
import { MailIcon } from "lucide-react"

export function Command() {
    const [open, setOpen] = React.useState(false)
    const [openCalendar, setOpenCalendar] = React.useState(false)

    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setOpen((open) => !open)
            }
            if (e.key === "Escape") {
                e.preventDefault()
                setOpenCalendar(false)
            }
        }

        document.addEventListener("keydown", down)
        return () => {
            document.removeEventListener("keydown", down)
        }
    }, [])



    return (
        <>
            <p className="text-sm text-muted-foreground">
                Press{" "}
                <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                    <span className="text-xs">⌘</span>J
                </kbd>
            </p>

            <CommandDialog open={open} onOpenChange={setOpen}>
                <CommandInput placeholder="Type a command or search..." />
                <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Suggestions">
                        <CommandItem onSelect={e => { setOpenCalendar(true); setOpen(false); }}>
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            <span><CalendarV2 open={openCalendar} /></span>
                        </CommandItem>
                        <CommandItem>
                            <MailIcon className="mr-2 h-4 w-4" />
                            <a href='mailto:saatif24@gmail.com' target='_black' title='Mail' className='hover:grayscale-0 mr-2 transition-all ease-in-out  duration-300'>
                                <span>Email</span>
                            </a>
                        </CommandItem>
                        <CommandItem>
                            <RocketIcon className="mr-2 h-4 w-4" />
                            <span>Launch</span>
                        </CommandItem>
                    </CommandGroup>
                    <CommandSeparator />
                    <CommandGroup heading="Settings">
                        <CommandItem>
                            <PersonIcon className="mr-2 h-4 w-4" />
                            <span>Profile</span>
                            <CommandShortcut>⌘P</CommandShortcut>
                        </CommandItem>
                        <CommandItem>
                            <EnvelopeClosedIcon className="mr-2 h-4 w-4" />
                            <span>Mail</span>
                            <CommandShortcut>⌘B</CommandShortcut>
                        </CommandItem>
                        <CommandItem>
                            <GearIcon className="mr-2 h-4 w-4" />
                            <span>Settings</span>
                            <CommandShortcut>⌘S</CommandShortcut>
                        </CommandItem>
                    </CommandGroup>
                </CommandList>
            </CommandDialog>
        </>
    )
}
