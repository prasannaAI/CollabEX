"use client";
import React from "react";
import Image from "next/image";
import clsx from "clsx";
import TabSwitcher from "@/components/TabSwitcher";




const TYPES = [
  {
    id: "SKILLING",
    label: "🎓 Education",
    bg: "bg-green-50",
    color: "text-green-700",
    border: "border-green-200",
  },
  {
    id: "INNOVATION",
    label: "💡 Innovation",
    bg: "bg-blue-50",
    color: "text-blue-700",
    border: "border-blue-200",
  },
  {
    id: "TECHNOLOGY_SERVICES",
    label: "🖥️ Tech Services",
    bg: "bg-amber-50",
    color: "text-amber-500",
    border: "border-amber-200",
  },
];

const SolutionsOverview = () => {
  const [activeTab, setActiveTab] = React.useState(TYPES[0]);

  const SOLUTIONS: {
    icon?: string;
    title: string;
    painPoints: string;
    solution: string;
    benefits: string;
  }[] =
    activeTab.id === "SKILLING"
      ? [
          {
            icon: "/illustrations/business-network.png",
            title: "Skills Through Networking",
            painPoints:
              "Limited exposure to industry trends, networking opportunities, limited resources for R&D and Islands of Knowledge.",
            solution:
              "CollabrEX organizes events to bring students, professionals, and industry experts together.",
            benefits:
              "Our events foster knowledge exchange, networking, and provide a platform for an over all development for all.",
          },
          {
            icon: "/illustrations/bridging-gap.png",
            title: "Skill Catalyst Programmes",
            painPoints:
              "The huge gap between traditional education and industry requirements.",
            solution:
              "Skill Catalyst Program bridges the gap by offering intensive training, hand-holding, acclimatisation, mentoring and development.",
            benefits:
              "We provide a holistic and unique blend of theoretical knowledge and hands-on experience thus preparing the students for the real-world.",
          },
          {
            icon: "/illustrations/online-learning.png",
            title: "Skill Dome Platform",
            painPoints:
              "Lack of a centralized platform for comprehensive skill development.",
            solution:
              "CollabrEX's dedicated platform, offers a variety of courses, guidelines, best practices and various other resources.",
            benefits:
              "Skill Dome empowers learners with access to diverse skills, enhancing their employability and career prospects.",
          },
        ]
      : activeTab?.id == "INNOVATION"
      ? [
          {
            title: "Industry Transforming Solutions",
            painPoints:
              "Lack of Strategic Direction, Limited Collaboration & Innovation, Lack of credible Risk Management, Lack of Healthy Competition, Improper Market Analysis, and  Lack of collaborative Intelligence.",
            solution:
              "Collaboration Platforms for Cross-functional collaboration, Ecosystem growth, Establishing governance structures, processes, and frameworks for managing innovation portfolios, and Conducting comprehensive market analysis, industry research and forecasting.",
            benefits:
              "Crafting Visions into Reality, In the crucible of innovation, ideas aren't just born; they evolve into transformative solutions. CollabrEX serves as the catalyst for turning industry dreams into reality, redefining what's possible in the landscape of tomorrow.",
          },
          {
            title: "R&D Excellence",
            painPoints:
              "Fragmented Collaboration, Limited identity and lack of inclusiveness, Intellectual Property Challenges, Lack of Commercialisation and Lack of Foresight.",
            solution:
              "Creating platforms, networks, or ecosystems that facilitate collaboration, knowledge sharing, resource pooling, partnership development, and work for common good.",
            benefits:
              "Unleashing Tomorrow's Breakthroughs, At CollabrEX, Inclusive innovation isn't a buzzword; it's our heartbeat. Dive into a realm where R&D isn't just a process; it's a journey of togetherness into the future, which we start today. Join us as we pioneer new horizons, hand in glove, one groundbreaking idea at a time.",
          },
        ]
      : [
          {
            title: "Development Services",
            painPoints:
              "Project Scope Creep, Unclear Requirements, Inadequate communication",
            solution:
              "Clearly define project requirements and address future chnages systematically invloving the right stakeholders and proper communications channels",
            benefits:
              "CodeCraft Wizards at Your Service, Imagine your software dreams taking flight. Collabrex, your ally in the digital realm, brings together a guild of CodeCraft Wizards. From conception to execution, we conjure up digital wonders that leave an indelible mark.",
          },
          {
            title: "CyberSecurity & AI",
            painPoints:
              "Security vulnerabilities in the networks, systems, applications, and infrastructure, Complex, time-consuming, and costly regulatory Compliances, Limited expertise, skills, resources, and budgets, Lack of awareness, training, education, and secure work culture, Integrating AI solutions with existing ecosystem, data required for AI modeling",
            solution:
              "Conducting comprehensive Risk Assessment & Management, Providing expertise, guidance, and support in Compliance & Governance, Ethical AI & Governance, and  Data Management & Analytics, AI Solutions & Services, Offering managed security services, Developing and delivering cybersecurity awareness training for all stakeholders and AI strategies and roadmaps",
            benefits:
              "Unlocking Digital Fortress, Dive into a world where cybersecurity isn't just a shield; it's a dynamic force protecting your digital kingdom. Collabrex fortifies your tech realm against the relentless tide of cyber threats, ensuring your data stays yours.",
          },
        ];

  return (
    <section id="solutions" className="py-[7.5vh] md:py-[15vh]">
      <div className="min-h-[50vh] relative bg-repeat">
        <div className="container mx-auto md:div-10 z-[100]">
          <div className="div-4 py-4 px-4 lg:px-6 xl:px-8">
            <div className="text-2xl border-b-2 mb-6 md:mb-8 inline-block md:text-2xl div-2 lg:text-3xl">
              Our Solutions
            
            </div>
            <Image
              src="/collabrex-color-logo.png"
              alt="Collabrex"
              width={233.4}
              height={40}
              draggable={false}
              className="w-[220px] mb-6 hidden lg:block"
            />

            <div
              className="text-xl font-semibold md:text-2xl lg:text-3xl pb-2"
              style={{ lineHeight: 1.2 }}
            >
              <span className="hidden lg:inline mb-2 ">For</span>{" "}
              <TabSwitcher
                active={activeTab}
                setActive={setActiveTab}
                tabs={TYPES.map((type) => ({
                  id: type.id,
                  title: type.label,
                  className: type.color,
                  activeClassName: `${type.bg} ${type.color}`,
                }))}
                tabClassName={clsx([
                  "inline-block px-3 md:px-4 py-1 rounded-full mr-1 mb-2",
                ])}
                activeTabClassName={`${activeTab.bg} ${activeTab.color} border-2`}
              />
            </div>
          </div>
          <div className="flex flex-wrap mx-0">
            {SOLUTIONS.map((solution, idx) => (
              <div
                key={idx}
                className="w-full md:w-1/2 lg:w-1/2 xl:w-1/3 div-2 md:div-4 lg:div-6 xl:div-8 "
              >
                <div
                  className={clsx([
                    "flex flex-col gap-4 h-full rounded-lg md:rounded-xl lg:rounded-2xl text-justify",
                    "py-4 px-6 lg:px-4 xl:px-8 ",
                  ])}
                >
                  {solution?.icon && (
                    <div className="flex md:justify-center items-center md:h-[320px] overflow-hidden">
                      <Image
                        src={solution.icon}
                        alt={solution.title}
                        width={500}
                        height={500}
                        className="h-[150px] w-auto md:h-auto md:w-full"
                        draggable={false}
                      />
                    </div>
                  )}
                  <div
                    className={clsx([
                      "text-left text-2xl font-semibold my-3",
                      activeTab.color,
                    ])}
                  >
                    {solution.title}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-red-700 px-3 rounded-full py-1 bg-red-50 inline-block mb-3">
                      <i className="ri-error-warning-line mr-2" />
                      What we saw?
                    </div>
                    <div className="text-sm">{solution.painPoints}</div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-blue-700 px-3 rounded-full py-1 bg-blue-50 inline-block mb-3">
                      <i className="ri-information-line mr-2" />
                      What we do?
                    </div>
                    <div className="text-sm">{solution.solution}</div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-green-700 px-3 rounded-full py-1 bg-green-50 inline-block mb-3">
                      <i className="ri-heart-line mr-2" />
                      How it helps?
                    </div>
                    <div className="text-sm">{solution.benefits}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsOverview;
