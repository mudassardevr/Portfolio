import React from "react";

const images = [
  {
    id: 1,
    label: "React.js",
    bg: "#E6F1FB",
    color: "#0C447C",
    icon: "/images/react-svgrepo-com.svg",
  },
  {
    id: 2,
    label: "Node.js",
    bg: "#EAF3DE",
    color: "#27500A",
    icon: "/images/nodejs.svg",
  },
  {
    id: 3,
    label: "MongoDB",
    bg: "#E1F5EE",
    color: "#085041",
    icon: "/images/mongodb.svg",
  },
  {
    id: 4,
    label: "HTML",
    bg: "#E1F5EE",
    color: "#085041",
    icon: "/images/html.svg",
  },
  {
    id: 5,
    label: "Express.js",
    bg: "#F1EFE8",
    color: "#444441",
    icon: "/images/express.svg",
  },
  {
    id: 6,
    label: "Tailwind",
    bg: "#E6F1FB",
    color: "#185FA5",
    icon: "/images/tailwindcss-icon-svgrepo-com.svg",
  },
  {
    id: 7,
    label: "Java",
    bg: "#E6F1FB",
    color: "#185FA5",
    icon: "/images/java.svg",
  },
  {
    id: 8,
    label: "Python",
    bg: "#FBEAF0",
    color: "#72243E",
    icon: "/images/python-svgrepo-com.svg",
  },
  {
    id: 9,
    label: "TypeScript",
    bg: "#FBEAF0",
    color: "#72243E",
    icon: "/images/typescript-logo-svgrepo-com.svg",
  },
  {
    id: 10,
    label: "JavaScript",
    bg: "#FAEEDA",
    color: "#633806",
    icon: "/images/javascript.svg",
  },
  {
    id: 11,
    label: "XML",
    bg: "#FAEEDA",
    color: "#633806",
    icon: "/images/xml-document-svgrepo-com.svg",
  },
  {
    id: 12,
    label: "Bootstrap",
    bg: "#FAECE7",
    color: "#712B13",
    icon: "/images/bootstrap-fill-svgrepo-com.svg",
  },
  {
    id: 13,
    label: "SQL",
    bg: "#FAECE7",
    color: "#712B13",
    icon: "/images/sql-svgrepo-com.svg",
  },
  {
    id: 14,
    label: "Kotlin",
    bg: "#FAECE7",
    color: "#712B13",
    icon: "/images/kotlin-1-logo-svgrepo-com.svg",
  },
];

const track = [...images, ...images, ...images];

function Skills() {
  return (
    <>
      <div className="mb-7">
        <div className="p-4 text-3xl font-bold text-center">Skills</div>
        <div className="w-full overflow-hidden group">
          <div className="flex w-max gap-4 px-4 animate-[var(--scroll-left)] group-hover:[animation-play-state:paused]">
            {track.map((img, i) => (
              <div
                key={i}
                style={{ background: img.bg }}
                className="flex-shrink-0 w-36 h-36 rounded-2xl flex flex-col items-center justify-center gap-2 mx-2 border border-black/5"
              >
                {/* <span className="text-3xl">{img.icon}</span> */}
                <img
                  src={img.icon}
                  alt={img.label}
                  className="w-15 h-15 object-cover "
                />
                <span
                  style={{ color: img.color }}
                  className="text-sm font-medium"
                >
                  {img.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
