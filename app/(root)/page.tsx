import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";
import { title } from "process";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  const posts = [
    {
      _createdAt: new Date(),
      views: 55,
      author: {
        _id: 1,
        name: "Alice Johnson",
      },
      _id: 1,
      description: "Exploring the frontier of AI and robotics.",
      image:
        "https://unsplash.com/photos/uWaRsN-Cq9I/download?force=true&w=640",
      category: "Robots",
      title: "We Robots",
    },
    {
      _createdAt: new Date(),
      views: 120,
      author: {
        _id: 2,
        name: "John Doe",
      },
      _id: 2,
      description: "The rise of smart city technology.",
      image:
        "https://unsplash.com/photos/AsahNlC0VhQ/download?force=true&w=640",
      category: "Smart Cities",
      title: "Future Cities",
    },
    {
      _createdAt: new Date(),
      views: 87,
      author: {
        _id: 3,
        name: "Emma Brown",
      },
      _id: 3,
      description: "A look at electric vehicle advancements.",
      image:
        "https://unsplash.com/photos/5gkYsrH_ebY/download?force=true&w=640",
      category: "Electric Vehicles",
      title: "Power on Wheels",
    },
    {
      _createdAt: new Date(),
      views: 200,
      author: {
        _id: 4,
        name: "Michael Green",
      },
      _id: 4,
      description: "Technological innovations in urban farming.",
      image:
        "https://unsplash.com/photos/ubIT6aHgzl0/download?force=true&w=640",
      category: "Urban Farming",
      title: "Tech in Agriculture",
    },
    {
      _createdAt: new Date(),
      views: 300,
      author: {
        _id: 5,
        name: "Sophia White",
      },
      _id: 5,
      description: "Exploring the future of wearable tech.",
      image:
        "https://unsplash.com/photos/h3PWUqxpP_0/download?force=true&w=640",
      category: "Wearables",
      title: "Next-Gen Wearables",
    },
    {
      _createdAt: new Date(),
      views: 45,
      author: {
        _id: 6,
        name: "Liam Black",
      },
      _id: 6,
      description: "From social media to social commerce.",
      image:
        "https://unsplash.com/photos/5pK3vG9mMlI/download?force=true&w=640",
      category: "Social Media",
      title: "The Social Shift",
    },
    {
      _createdAt: new Date(),
      views: 60,
      author: {
        _id: 7,
        name: "Olivia Martinez",
      },
      _id: 7,
      description: "Artificial intelligence in healthcare.",
      image:
        "https://unsplash.com/photos/hIgeoQjS_iE/download?force=true&w=640",
      category: "Healthcare",
      title: "AI in Health",
    },
    {
      _createdAt: new Date(),
      views: 210,
      author: {
        _id: 8,
        name: "Noah Wilson",
      },
      _id: 8,
      description: "A deeper look at virtual reality advancements.",
      image:
        "https://unsplash.com/photos/zAQkM5o2qTQ/download?force=true&w=640",
      category: "Virtual Reality",
      title: "The VR World",
    },
    {
      _createdAt: new Date(),
      views: 180,
      author: {
        _id: 9,
        name: "Ava Lee",
      },
      _id: 9,
      description: "Blockchain technology's impact on finance.",
      image:
        "https://unsplash.com/photos/VVEwJJRRHgk/download?force=true&w=640",
      category: "Blockchain",
      title: "Crypto & Beyond",
    },
    {
      _createdAt: new Date(),
      views: 110,
      author: {
        _id: 10,
        name: "James Brown",
      },
      _id: 10,
      description: "Breakthroughs in renewable energy sources.",
      image:
        "https://unsplash.com/photos/F_9UnDMC1WU/download?force=true&w=640",
      category: "Renewable Energy",
      title: "Green Power",
    },
  ];

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup, <br /> Connect with Entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and get Noticed in Virtual Competitions
        </p>
        <SearchForm query={query} />
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for ${query}` : "All Startups"}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: any, index: number) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <div></div>
          )}
        </ul>
      </section>
    </>
  );
}
