import React from "react";
import img1 from "../assets/Principal_ Mrs Sofowora.jpg";
import img2 from "../assets/MsAlamutu.jpg";
import img3 from "../assets/Mr FusiAkinkungbe.jpg";
import img4 from "../assets/heroimage1.jpg";
import img5 from "../assets/heroimage2.jpg";
import img6 from "../assets/heroimage1.jpg";
import img7 from "../assets/leadership.jpg";

const seniorTeam = [
  {
    name: "Olapeju Sofowora B.SC, FCA, FCIT, CISA",
    role: "Principal Consultant",
    bio: `Olapeju E. Sofowora is the Founding Partner of ABAX Professional Services, bringing over 30 years of experience across audit, tax, corporate finance, and professional advisory services.

She began her career at Coopers & Lybrand (now PwC), later held senior roles in the banking sector, and led multiple professional services practices, including serving as Partner and Managing Partner at Abax-OOSA Professionals for over 17 years.

She is a Fellow of ICAN and CITN, a Certified Information Systems Auditor (CISA), and holds a degree in Statistics from the University of Ilorin. She has served on multiple corporate and institutional boards and remains active in governance, compliance, and professional development initiatives.`,
    image: img1,
  },
  {
    name: "Ms Ayo Alamutu B.SC FCA CISA CIRM ORE",
    role: "Senior Consultant – Governance and Risk",
    bio: `Ms. Alamutu is a Governance, Risk, Audit, Assurance, and Compliance Executive with over 30 years of experience across the UK and Nigeria.

She advises Boards and senior management on enterprise risk, operational resilience, business continuity, and internal audit across banking, insurance, manufacturing, investment, and fintech sectors.

She is a Fellow of ICAN, Certified Member of IRM, holds a Certificate in Risk Governance from DCRO Institute, and serves as Vice Chair of the IRM Nigeria Regional Group.`,
    image: img2,
  },
  {
    name: "Babafunke Ajibade B.SC FCA CPFA",
    role: "Senior Consultant – Audit and Assurance",
    bio: `A multi-skilled Governance, Financial Accounts, Risk, Audit, and Compliance Executive with over three decades of experience across Nigeria and the UK.

She has led audits for government agencies, international charities, HMRC, and major institutions. She specialises in quality control on assurance audits and compliance with international standards.

She is a member of ICAN and CIPFA.`,
    image: img3,
  },
  {
    name: "Mr Fusi Akinkugbe BSC FCA",
    role: "Senior Consultant – Financial Services",
    bio: `A seasoned finance and assurance professional with nearly four decades of experience across professional practice, corporate leadership, consulting, and the public sector.

He has held executive roles including Treasury Controller at DHL Nigeria and pioneer MD/CEO of Chrysalis Ltd.

He is a Fellow of ICAN and currently acts as Lead Consultant at HYCL Consulting, focusing on leadership development and organisational effectiveness.`,
    image: img4,
  },
];

const teamLeads = [
  {
    name: "Anthony Ebele",
    role: "Team Lead / Head, Tax Management and Advisory",
    image: img5,
  },
  {
    name: "Andrew Osiobe",
    role: "Team Lead / Head, Audit and Advisory",
    image: img6,
  },
  {
    name: "Oluwadare Osoneye",
    role: "Team Lead / Head, Human Resource Consulting",
    image: img7,
  },
];

export default function TeamPage() {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Our Team
          </h1>
          <p className="text-gray-600">
            Experienced professionals committed to excellence and integrity
          </p>
        </div>

        {/* Senior Consultants */}
        <div className="space-y-16 mb-20">
          {seniorTeam.map((member, index) => (
            <div key={index} className="grid md:grid-cols-3 gap-10 items-start">
              <div>
                <img
                  src={member.image}
                  alt={member.name}
                  className="rounded-2xl shadow-md w-full object-cover"
                />
              </div>

              <div className="md:col-span-2">
                <h2 className="text-2xl font-semibold text-blue-900">
                  {member.name}
                </h2>
                <p className="text-blue-700 font-medium mb-4">{member.role}</p>
                <p className="text-gray-700 whitespace-pre-line leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Team Leads Section */}
        <div>
          <h2 className="text-3xl font-bold text-blue-900 mb-10 text-center">
            Team Leads
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {teamLeads.map((lead, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-center"
              >
                <img
                  src={lead.image}
                  alt={lead.name}
                  className="w-40 h-40 mx-auto rounded-full object-cover mb-6"
                />
                <h3 className="text-xl font-semibold text-blue-900">
                  {lead.name}
                </h3>
                <p className="text-gray-600 mt-2">{lead.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
