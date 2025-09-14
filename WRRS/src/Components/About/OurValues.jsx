import { Lock, Heart, ThumbsUp, Leaf, Lightbulb, BookOpen, Puzzle, Scale, Bookmark, Star } from 'lucide-react';

export default function OurValues() {
  const values = [
    {
      icon: Lock,
      title: "Integrity / Honesty",
      description:
        "Being straightforward; saying what we mean and meaning what we say; living honestly; demonstrating that everything we do can be trusted, and living up to the trust that others have placed in us.",
    },
    {
      icon: Heart,
      title: "Compassion",
      description:
        "Trying to understand the other person’s circumstances; ensuring the quality of life for those in need; and keeping the fire going in everyone else’s heart.",
    },
    {
      icon: ThumbsUp,
      title: "Thoughtfulness",
      description:
        "Basing our actions on an introspection that leads to creativity, intuition and proactivity.",
    },
    {
      icon: Leaf,
      title: "Connection to the environment",
      description:
        "Seeing the world as one living system, and showing respect for the spirit residing in everything and everyone.",
    },
    {
      icon: Lightbulb,
      title: "Responsible action",
      description:
        "Acknowledging our duty and responsibility to make the world a better place, and responding in an effective way that fosters hopefulness for the future, instills a vision of what can be, and draws others forward in a positive way.",
    },
    {
      icon: BookOpen,
      title: "Education",
      description:
        "Believing that our actions and decisions must be based in knowledge and research, and that we have an obligation to educate ourselves and others for the betterment of the world.",
    },
    {
      icon: Puzzle,
      title: "Collegiality / Collaboration",
      description:
        "Fostering an environment in which all perspectives are valued, and we try to understand each other’s views and reality, even when that outlook radically differs from our own.",
    },
    {
      icon: Scale,
      title: "Fairness / Equity / Justice",
      description:
        "Treating all people fairly, equally, and with kindness and tolerance.",
    },
    {
      icon: Bookmark,
      title: "Accountability / Acknowledgment / Acceptance",
      description:
        "These values underlie the inclusion that brings people together.",
    },
    {
      icon: Star,
      title: "Excellence",
      description: "Striving toward the best we can do and be.",
    },
  ];

  return (
    <div className='bg-[#F8F7FC]'>
    <div className="py-16 px-6 md:px-12 max-w-7xl mx-auto ">
      {/* Section Title */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-3xl font-bold text-[#BC1EB0] uppercase tracking-wide">
          Our Values & Guiding Principles
        </h2>
        <div className="w-20 h-1 bg-[#BC1EB0] mx-auto mt-3"></div>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12">
        {values.map((value, index) => (
          <div key={index} className="flex flex-col items-center text-justify">
            {/* Icon */}
            <value.icon className="w-12 h-12 text-[#BC1EB0] mb-4" />

            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-900 mb-3 text-center">
              {value.title}
            </h3>

            {/* Description */}
            <p className="text-gray-700 text-sm leading-relaxed">
              {value.description}
            </p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
