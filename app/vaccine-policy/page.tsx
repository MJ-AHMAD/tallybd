import Link from "next/link"

export default function WorkplacePolicy() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-5xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Trusted Ally Vaccine Policy</h1>
        </div>

        <div className="prose prose-lg max-w-none">
          <section id="introduction" className="mb-10">
            <p>
              At "Trusted Ally", the health and safety of our team members, partners, and the communities we serve are our utmost priority. Rooted in the
              values of **integrity, accountability, and inclusivity**, our vaccine policy is designed to uphold a safe and collaborative workplace while
              respecting individual needs.
            </p>
            </section>
           <section id="introduction" className="mb-10">
             <h2 className="text-2xl font-bold text-gray-900 mb-4">Policy Overview-</h2>
            <p>
              - Vaccination Encouragement: We strongly encourage team members, volunteers, and associates to be fully vaccinated against communicable
              diseases, including COVID-19, based on local public health guidelines.  

              - Support for Valid Exemptions: Individuals with medical exemptions or valid reasons for not receiving a vaccine will be provided with
              accommodations, such as virtual participation options and additional safety protocols.  

              - Confidentiality: Vaccination status will remain strictly confidential and be utilized only for implementing health and safety measures in
              accordance with privacy regulations.  
            </p>
           </section>
          <section id="introduction" className="mb-10">
             <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Guidelines, </h2>
            <p>
              1. Educational Resources:  
  
              Trusted Ally provides team members with reliable and up-to-date information on the benefits and safety of vaccines to ensure informed
              decisions.  

              2. Vaccine Accessibility: 
  
              Flexibility in work schedules and access to resources for locating vaccination facilities are made available to support team members in
              receiving their vaccines conveniently.  

              3. Health and Safety Measures:  
  
              For those working in physical spaces or collaborative settings, adherence to vaccination or alternative health protocols (e.g., regular
              testing, masking) is required to safeguard the well-being of everyone.  
            </p>
          </section>
          <section id="introduction" className="mb-10">
             <h2 className="text-2xl font-bold text-gray-900 mb-4"> Commitment to Inclusivity, </h2>
            <p>
              Trusted Ally fosters a respectful and inclusive environment by ensuring individuals with valid exemptions are not subject to
              discrimination. Reasonable alternatives are provided to empower all team members to contribute effectively while maintaining safety for the
              organization and its community. 
            </p>
          </section>
          <section id="introduction" className="mb-10">
            <p>
            <b>
            This policy reflects Trusted Ally’s dedication to promoting health, safety, and collective responsibility, ensuring a workplace that
              thrives on mutual respect and collaboration. Together, we aim to build a healthier and more harmonious future.
            </b>
            </p>
          <div className="mt-12 border-t border-gray-200 pt-8">
            <p className="text-sm text-gray-500">Last updated: April 10, 2025</p>
            <p className="text-sm text-gray-500 mt-2">
              For questions or clarifications regarding this policy, please contact the Human Resources Department at{" "}
              <a href="mailto:hr@trustedally.org" className="text-blue-600 hover:underline">
               t-ally@outlook.com
              </a>
              .
            </p>
            <div className="mt-6">
              <Link href="/" className="text-blue-600 hover:underline">
                Return to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
