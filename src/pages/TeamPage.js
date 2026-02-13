import React, { useState } from "react";
import { motion } from "framer-motion";
import OlapejuImage from "../assets/Principal_ Mrs Sofowora.jpg";
import AyoImage from "../assets/MsAlamutu.jpg";
import img3 from "../assets/Mr FusiAkinkungbe.jpg";
import img4 from "../assets/Mrs Babafunke Ajibade.jpg";
import img5 from "../assets/Mr Anthony Ebele .JPG";

const teamMembers = [
  {
    name: "Olapeju Sofowora B.SC, FCA, FCIT CISA",
    designation: "Principal Consultant",
    image: OlapejuImage,
    email: "",
    bio: `Olapeju E. Sofowora is the Founding Partner of ABAX Professional Services, bringing over 30 years of experience across audit, tax, corporate finance, and professional advisory services.
She began her career at Coopers & Lybrand (now PricewaterhouseCoopers), later held senior roles in the banking sector, and went on to establish and lead multiple professional services practices, including serving as Partner and Managing Partner at Abax-OOSA Professionals for over 17 years. Her passion for quality professional services led her to establish Binary Consulting Limited, a Human Resources Consulting firm specialising in recruitment, outsourcing  and training for clients across different industries.
Olapeju is a Fellow of the Institute of Chartered Accountants of Nigeria (ICAN) and the Chartered Institute of Taxation of Nigeria (CITN), a Certified Information Systems Auditor (CISA), and holds a degree in Statistics from the University of Ilorin. She has served on corporate and institutional boards, including First City Monument Bank Group, Royal Trust Assurance Limited (Merged with Crusader Insurance), Olashore International School Association, the Educational Committee of the Chartered Institute of Taxation and as an Executive Committee Member of the Money Market Association of Nigeria, and remains active in governance, compliance, and professional development initiatives.
`,
  },
  {
    name: "Ayo Alamutu B.SC FCA CISA CIRM ORE",
    designation: "Senior Consultant Governance and Risk",
    image: AyoImage,
    email: "",
    bio: `Ms. Alamutu is a Governance, Risk, Audit, Assurance, and Compliance Executive with over 30 years of experience across the UK and Nigeria. She advises Boards and senior management on enterprise risk, operational resilience, business continuity, and internal audit, supporting organisations to strengthen performance, manage disruption, and preserve value across sectors including banking, insurance, manufacturing, investment, and fintech.

She is a Fellow of the Institute of Chartered Accountants of Nigeria (FICAN), a Certified Member of the Institute of Risk Management (CIRM), holds a Certificate in Risk Governance from the DCRO Institute, and currently serves as Vice Chair of the IRM Nigeria Regional Group. She is also an Information Systems Auditor, Project Management Professional, and a Board member of the Institute of Internal Auditors.
`,
  },
  {
    name: "Babafunke Ajibade B.SC FCA CPFA",
    designation: "Senior Consultant Audit and Assurance",
    // image: img4,
    email: "",
    bio: `A multi-skilled Governance, Financial Accounts, Risk, Audit, Assurance, and Compliance Executive across Private, Government and Third party (Charity} Sectors with over three decades of progressive experience across  Nigeria and the United Kingdom . Her core strength lies in quality control on Assurance Audits advising Boards, Trustees and Senior Management on enterprise risk, strategy, compliance, business continuity, internal audit practice, helping organizations strengthen performance, compliance on accounting and auditing standards, sustain competitive advantage at  industry level and respond proactively to disruption. She has worked on audits ranging from Nuclear decommissioning agencies, HMRC, Government departments and international charity audits, review of established audit and compliance systems, and supported risk-based strategy, compliance, and internal audit. She specializes in assessment of compliance with the relevant international standards 
Mrs. Ajibade is a member of the Institute of Chartered Accountants of Nigeria, A Certified member of The Chartered Institute of Public Finance Accountants CIPFA. 
`,
  },
  {
    name: "Fusi Akinkugbe BSC FCA",
    designation: "Senior Consultant Financial Services",
    image: img3,
    email: "",
    bio: `Mr. Fusi Akinkugbe is a seasoned finance and assurance professional with nearly four decades of experience spanning professional practice, corporate leadership, consulting, and the public sector. He holds a degree in Economics and is a Chartered Accountant and Fellow of the Institute of Chartered Accountants of Nigeria (FCA).
He has held senior executive roles including Treasury Controller at DHL International Nigeria Ltd and pioneer Managing Director/CEO of Chrysalis Ltd, a technology services company jointly owned by Accenture and two financial institutions.
Mr. Akinkugbe has led high-profile audit, forensic, and advisory engagements, with strong expertise in governance, internal controls, and organisational effectiveness. He serves on several not-for-profit boards, is an author and leadership commentator, and currently acts as Lead Consultant at HYCL Consulting, focusing on leadership development and organisational effectiveness.
`,
  },
  {
    name: "Anthony Ebele",
    designation: "Team Lead / Head, Tax Management and Advisory",
    image: img5,
    email: "",
    bio: "Anthony Ebele leads Tax Management and Advisory.",
  },
  {
    name: "Andrew Osiobe",
    designation: "Team Lead / Head, Audit and Advisory",
    // image: img3,
    email: "",
    bio: "Andrew Osiobe leads Audit and Advisory.",
  },
  {
    name: "Oluwadare Osoneye",
    designation: "Team Lead / Head, Human Resource Consulting",
    // image: img3,
    email: "",
    bio: "Oluwadare Osoneye leads Human Resource Consulting.",
  },
];

export default function TeamPage() {
  const [selectedMember, setSelectedMember] = useState(null);

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const Card = ({ member }) => (
    <motion.div
      className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={itemVariants}
      onClick={() => setSelectedMember(member)}
    >
      <div className="w-full aspect-[4/5] overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
        <span className="text-white font-bold text-lg">Learn More</span>
      </div>

      <div className="p-4 text-center">
        <h5 className="font-semibold">{member.name}</h5>
        <h6 className="text-gray-600">{member.designation}</h6>
      </div>
    </motion.div>
  );

  return (
    <div id="team" className="pt-32 pb-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
        >
          <h2 className="text-4xl font-bold text-gray-800">
            Our Key Functionaries
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-6 rounded"></div>
        </motion.div>

        <div className="flex flex-col gap-12">
          <div className="flex justify-center">
            <div className="w-full sm:w-3/4 md:w-1/3">
              <Card member={teamMembers[0]} />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {teamMembers.slice(1, 4).map((member, idx) => (
              <Card key={idx} member={member} />
            ))}
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {teamMembers.slice(4, 7).map((member, idx) => (
              <Card key={idx} member={member} />
            ))}
          </div>
        </div>

        {/* MODAL */}
        {selectedMember && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg max-w-5xl w-full max-h-[90vh] overflow-y-auto p-8 relative">
              <button
                className="absolute top-4 right-4 text-2xl font-bold text-gray-600 hover:text-gray-900"
                onClick={() => setSelectedMember(null)}
              >
                &times;
              </button>

              {/* Two-column Layout */}
              <div className="flex flex-col md:flex-row gap-8">
                {/* Left: Image */}
                <div className="md:w-1/3 w-full">
                  <div className="w-full h-64 md:h-80 overflow-hidden rounded-lg">
                    <img
                      src={selectedMember.image}
                      alt={selectedMember.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Right: Content */}
                <div className="md:w-2/3 w-full">
                  <h3 className="text-2xl font-semibold mb-2">
                    {selectedMember.name}
                  </h3>

                  <h4 className="text-gray-600 mb-4">
                    {selectedMember.designation}
                  </h4>

                  {selectedMember.email && (
                    <p className="mb-4">
                      <a
                        href={`mailto:${selectedMember.email}`}
                        className="text-blue-600 underline"
                      >
                        {selectedMember.email}
                      </a>
                    </p>
                  )}

                  <p className="text-gray-700 whitespace-pre-line leading-relaxed">
                    {selectedMember.bio}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
