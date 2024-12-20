import { columns } from "../columns";
import { DataTable } from "../data-table";

export default function Projects() {
  const data = [
    {
      id: 1,
      title: "Design & Development System",
      projectImage: "https://picsum.photos/seed/NWbJM2B/640/480",
      status: "in progress",
      percentage: 60,
      assign: [
        {
          image: "https://picsum.photos/seed/NWbJM2B/640/480",
          label: "John Doe",
          value: "john.doe",
        },
        {
          image: "https://picsum.photos/seed/NWbJM2B/640/480",
          label: "Jane Smith",
          value: "jane.smith",
        },
        {
          image: "https://picsum.photos/seed/NWbJM2B/640/480",
          label: "Bob Johnson",
          value: "bob.johnson",
        },
        {
          image: "https://picsum.photos/seed/NWbJM2B/640/480",
          label: "Alice Lee",
          value: "alice.lee",
        },
      ],
      isFavourite: true,
    },
    {
      id: 2,
      title: "Productify - Production System.",
      projectImage: "https://picsum.photos/seed/NWbJM2B/640/480",
      status: "review",
      percentage: 60,
      assign: [
        {
          image: "https://picsum.photos/seed/NWbJM2B/640/480",
          label: "John Doe",
          value: "john.doe",
        },
        {
          image: "https://picsum.photos/seed/NWbJM2B/640/480",
          label: "Jane Smith",
          value: "jane.smith",
        },
        {
          image: "https://picsum.photos/seed/NWbJM2B/640/480",
          label: "Bob Johnson",
          value: "bob.johnson",
        },
        {
          image: "https://picsum.photos/seed/NWbJM2B/640/480",
          label: "Alice Lee",
          value: "alice.lee",
        },
      ],
      isFavourite: true,
    },
    {
      id: 3,
      title: "UR-Advisor - Online Advisor Tool.",
      projectImage: "https://picsum.photos/seed/NWbJM2B/640/480",
      status: "completed",
      percentage: 60,
      assign: [
        {
          image: "https://picsum.photos/seed/NWbJM2B/640/480",
          label: "John Doe",
          value: "john.doe",
        },
        {
          image: "https://picsum.photos/seed/NWbJM2B/640/480",
          label: "Jane Smith",
          value: "jane.smith",
        },
      ],
      isFavourite: true,
    },
    {
      id: 4,
      title: "Konst - Construction Website.",
      projectImage: "https://picsum.photos/seed/NWbJM2B/640/480",
      status: "review",
      percentage: 80,
      assign: [
        {
          image: "https://picsum.photos/seed/NWbJM2B/640/480",
          label: "John Doe",
          value: "john.doe",
        },
        {
          image: "https://picsum.photos/seed/NWbJM2B/640/480",
          label: "Jane Smith",
          value: "jane.smith",
        },
        {
          image: "https://picsum.photos/seed/NWbJM2B/640/480",
          label: "Bob Johnson",
          value: "bob.johnson",
        },
        {
          image: "https://picsum.photos/seed/NWbJM2B/640/480",
          label: "Alice Lee",
          value: "alice.lee",
        },
      ],
      isFavourite: true,
    },
    {
      id: 5,
      title: "DashCode - Admin Dashboard.",
      projectImage: "https://picsum.photos/seed/NWbJM2B/640/480",
      status: "in progress",
      percentage: 100,
      assign: [
        {
          image: "https://picsum.photos/seed/NWbJM2B/640/480",
          label: "John Doe",
          value: "john.doe",
        },
        {
          image: "https://picsum.photos/seed/NWbJM2B/640/480",
          label: "Jane Smith",
          value: "jane.smith",
        },
        {
          image: "https://picsum.photos/seed/NWbJM2B/640/480",
          label: "Bob Johnson",
          value: "bob.johnson",
        },
        {
          image: "https://picsum.photos/seed/NWbJM2B/640/480",
          label: "Alice Lee",
          value: "alice.lee",
        },
      ],
      isFavourite: true,
    },
    {
      id: 6,
      title: "Acculance SaaS - POS System.",
      projectImage: "https://picsum.photos/seed/NWbJM2B/640/480",
      status: "cancelled",
      percentage: 100,
      assign: [
        {
          image: "https://picsum.photos/seed/NWbJM2B/640/480",
          label: "John Doe",
          value: "john.doe",
        },
        {
          image: "https://picsum.photos/seed/NWbJM2B/640/480",
          label: "Jane Smith",
          value: "jane.smith",
        },
        {
          image: "https://picsum.photos/seed/NWbJM2B/640/480",
          label: "Bob Johnson",
          value: "bob.johnson",
        },
        {
          image: "https://picsum.photos/seed/NWbJM2B/640/480",
          label: "Alice Lee",
          value: "alice.lee",
        },
      ],
      isFavourite: false,
    },
    {
      id: 7,
      title: "Design & Development System",
      projectImage: "https://picsum.photos/seed/NWbJM2B/640/480",
      status: "in progress",
      percentage: 60,
      assign: [
        {
          image: "https://picsum.photos/seed/NWbJM2B/640/480",
          label: "John Doe",
          value: "john.doe",
        },
        {
          image: "https://picsum.photos/seed/NWbJM2B/640/480",
          label: "Jane Smith",
          value: "jane.smith",
        },
        {
          image: "https://picsum.photos/seed/NWbJM2B/640/480",
          label: "Bob Johnson",
          value: "bob.johnson",
        },
        {
          image: "https://picsum.photos/seed/NWbJM2B/640/480",
          label: "Alice Lee",
          value: "alice.lee",
        },
      ],
      isFavourite: true,
    },
    {
      id: 8,
      title: "Productify - Production System.",
      projectImage: "https://picsum.photos/seed/NWbJM2B/640/480",
      status: "review",
      percentage: 60,
      assign: [
        {
          image: "https://picsum.photos/seed/NWbJM2B/640/480",
          label: "John Doe",
          value: "john.doe",
        },
        {
          image: "https://picsum.photos/seed/NWbJM2B/640/480",
          label: "Jane Smith",
          value: "jane.smith",
        },
        {
          image: "https://picsum.photos/seed/NWbJM2B/640/480",
          label: "Bob Johnson",
          value: "bob.johnson",
        },
        {
          image: "https://picsum.photos/seed/NWbJM2B/640/480",
          label: "Alice Lee",
          value: "alice.lee",
        },
      ],
      isFavourite: true,
    },
    {
      id: 9,
      title: "UR-Advisor - Online Advisor Tool.",
      projectImage: "https://picsum.photos/seed/NWbJM2B/640/480",
      status: "completed",
      percentage: 60,
      assign: [
        {
          image: "https://picsum.photos/seed/NWbJM2B/640/480",
          label: "John Doe",
          value: "john.doe",
        },
        {
          image: "https://picsum.photos/seed/NWbJM2B/640/480",
          label: "Jane Smith",
          value: "jane.smith",
        },
      ],
      isFavourite: false,
    },
    {
      id: 10,
      title: "Konst - Construction Website.",
      projectImage: "https://picsum.photos/seed/NWbJM2B/640/480",
      status: "review",
      percentage: 80,
      assign: [
        {
          image: "https://picsum.photos/seed/NWbJM2B/640/480",
          label: "John Doe",
          value: "john.doe",
        },
        {
          image: "https://picsum.photos/seed/NWbJM2B/640/480",
          label: "Jane Smith",
          value: "jane.smith",
        },
      ],
      isFavourite: true,
    },
    {
      id: 11,
      title: "DashCode - Admin Dashboard.",
      projectImage: "https://picsum.photos/seed/NWbJM2B/640/480",
      status: "in progress",
      percentage: 100,
      assign: [
        {
          image: "https://picsum.photos/seed/NWbJM2B/640/480",
          label: "John Doe",
          value: "john.doe",
        },
        {
          image: "https://picsum.photos/seed/NWbJM2B/640/480",
          label: "Jane Smith",
          value: "jane.smith",
        },
        {
          image: "https://picsum.photos/seed/NWbJM2B/640/480",
          label: "Bob Johnson",
          value: "bob.johnson",
        },
      ],
      isFavourite: true,
    },
  ];

  return <DataTable data={data as any} columns={columns} />;
}
