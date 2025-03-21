import { Task } from "@/src/types/task";

export const initialTasks: Task[] = [
    // Lunes
    {
        id: "1",
        title: "Clean kitchen",
        description: "Wash dishes, clean countertops, and sweep the floor.",
        room: "Kitchen",
        status: "completed",
        assignedTo: { id: "1", name: "Alice Johnson", photoUrl: "https://i.pravatar.cc/100" },
        dueDate: "2025-03-10",
    },
    {
        id: "2",
        title: "Vacuum living room",
        description: "Vacuum the carpet and clean the coffee table.",
        room: "Living Room",
        status: "completed",
        assignedTo: { id: "2", name: "Bob Williams", photoUrl: "https://i.pravatar.cc/100" },
        dueDate: "2025-03-10",
    },
    // Martes
    {
        id: "3",
        title: "Clean bathroom",
        description: "Clean the toilet, shower, and sink. Mop the floor.",
        room: "Bathroom",
        status: "pending",
        assignedTo: { id: "3", name: "Charlie Brown", photoUrl: "https://i.pravatar.cc/100" },
        dueDate: "2025-03-11",
    },
    {
        id: "4",
        title: "Take out trash",
        description: "Empty all bins and take the trash to the dumpster.",
        room: "General",
        status: "pending",
        assignedTo: { id: "4", name: "Diana Smith", photoUrl: "https://i.pravatar.cc/100" },
        dueDate: "2025-03-11",
    },
    // Miércoles
    {
        id: "5",
        title: "Dust furniture",
        description: "Wipe down shelves, tables, and other surfaces.",
        room: "Living Room",
        status: "pending",
        assignedTo: { id: "1", name: "Alice Johnson", photoUrl: "https://i.pravatar.cc/100" },
        dueDate: "2025-03-12",
    },
    {
        id: "6",
        title: "Mop the hallway",
        description: "Sweep and mop the hallway floor.",
        room: "Hallway",
        status: "completed",
        assignedTo: { id: "2", name: "Bob Williams", photoUrl: "https://api.dicebear.com/9.x/pixel-art/svg?seed=Bob" },
        dueDate: "2025-03-12",
    },
    // Jueves
    {
        id: "7",
        title: "Organize pantry",
        description: "Sort food items, check expiration dates, and clean shelves.",
        room: "Kitchen",
        status: "completed",
        assignedTo: { id: "3", name: "Charlie Brown", photoUrl: "https://api.dicebear.com/9.x/pixel-art/svg?seed=Charlie" },
        dueDate: "2025-03-13",
    },
    {
        id: "8",
        title: "Water plants",
        description: "Water indoor plants and check soil moisture.",
        room: "Balcony",
        status: "pending",
        assignedTo: { id: "4", name: "Diana Smith", photoUrl: "https://api.dicebear.com/9.x/pixel-art/svg?seed=Diana" },
        dueDate: "2025-03-13",
    },
    // Viernes
    {
        id: "9",
        title: "Change bedsheets",
        description: "Replace bedsheets and pillowcases in all bedrooms.",
        room: "Bedroom",
        status: "pending",
        assignedTo: { id: "1", name: "Alice Johnson", photoUrl: "https://api.dicebear.com/9.x/pixel-art/svg?seed=Alice" },
        dueDate: "2025-03-14",
    },
    {
        id: "10",
        title: "Sweep the patio",
        description: "Remove leaves and dirt from the patio.",
        room: "Patio",
        status: "completed",
        assignedTo: { id: "2", name: "Bob Williams", photoUrl: "https://api.dicebear.com/9.x/pixel-art/svg?seed=Bob" },
        dueDate: "2025-03-14",
    },
    // Sábado
    {
        id: "11",
        title: "Clean windows",
        description: "Wipe down glass windows and remove dust.",
        room: "Living Room",
        status: "pending",
        assignedTo: { id: "3", name: "Charlie Brown", photoUrl: "https://api.dicebear.com/9.x/pixel-art/svg?seed=Charlie" },
        dueDate: "2025-03-15",
    },
    {
        id: "12",
        title: "Sort laundry",
        description: "Separate clothes for washing and folding.",
        room: "Laundry Room",
        status: "pending",
        assignedTo: { id: "4", name: "Diana Smith", photoUrl: "https://api.dicebear.com/9.x/pixel-art/svg?seed=Diana" },
        dueDate: "2025-03-15",
    },
    // Domingo
    {
        id: "13",
        title: "Meal prep",
        description: "Prepare meals for the upcoming week.",
        room: "Kitchen",
        status: "pending",
        assignedTo: { id: "1", name: "Alice Johnson", photoUrl: "https://api.dicebear.com/9.x/pixel-art/svg?seed=Alice" },
        dueDate: "2025-03-16",
    },
    {
        id: "14",
        title: "Check supplies",
        description: "Make a list of needed household supplies.",
        room: "Storage",
        status: "pending",
        assignedTo: { id: "2", name: "Bob Williams", photoUrl: "https://api.dicebear.com/9.x/pixel-art/svg?seed=Bob" },
        dueDate: "2025-03-16",
    },
];
