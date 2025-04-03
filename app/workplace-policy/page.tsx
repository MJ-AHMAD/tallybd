import Link from "next/link"

export default function WorkplacePolicy() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-5xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">TRUSTED ALLY Workplace Policy</h1>
          <p className="mt-4 text-lg text-gray-500">
            Guidelines and standards for a productive, respectful, and inclusive workplace
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <section id="introduction" className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction and Core Values</h2>
            <p>
              TRUSTED ALLY is committed to creating a workplace environment that embodies our core values of integrity,
              innovation, inclusivity, and impact. This policy document outlines the standards, expectations, and
              procedures that guide our work together and help us fulfill our mission of sustainable development,
              educational empowerment, and social transformation.
            </p>
            <p>Our core values inform all aspects of our work:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>
                <strong>Integrity:</strong> We uphold the highest ethical standards in all our actions and decisions.
              </li>
              <li>
                <strong>Innovation:</strong> We embrace creative thinking and new approaches to address complex
                challenges.
              </li>
              <li>
                <strong>Inclusivity:</strong> We value diversity and ensure all voices are heard and respected.
              </li>
              <li>
                <strong>Impact:</strong> We are committed to creating meaningful, sustainable change in the communities
                we serve.
              </li>
            </ul>
          </section>

          <section id="code-of-conduct" className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Code of Conduct</h2>
            <p>All TRUSTED ALLY employees, volunteers, and associates are expected to:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>Act with honesty, integrity, and transparency in all professional interactions</li>
              <li>Treat colleagues, partners, and community members with respect and dignity</li>
              <li>Maintain professional boundaries and appropriate workplace relationships</li>
              <li>Avoid conflicts of interest and disclose potential conflicts promptly</li>
              <li>Protect the organization's reputation through responsible conduct</li>
              <li>Comply with all applicable laws, regulations, and organizational policies</li>
              <li>Use organizational resources responsibly and for their intended purposes</li>
              <li>Report concerns about potential misconduct through appropriate channels</li>
            </ul>
          </section>

          <section id="anti-discrimination" className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Anti-Discrimination and Harassment Policy</h2>
            <p>
              TRUSTED ALLY is committed to providing a work environment free from discrimination and harassment. We
              prohibit discrimination or harassment based on:
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>Race, ethnicity, or national origin</li>
              <li>Religion or belief</li>
              <li>Gender, gender identity, or gender expression</li>
              <li>Sexual orientation</li>
              <li>Age</li>
              <li>Disability or health status</li>
              <li>Marital or family status</li>
              <li>Socioeconomic background</li>
              <li>Any other characteristic protected by applicable law</li>
            </ul>
            <p className="mt-4">
              Harassment, including sexual harassment, bullying, and intimidation, is strictly prohibited. All reports
              of discrimination or harassment will be taken seriously, investigated promptly, and addressed
              appropriately, with measures taken to prevent recurrence.
            </p>
          </section>

          <section id="work-hours" className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Work Hours and Attendance</h2>
            <p>
              Standard work hours are from 9:00 AM to 5:00 PM, Sunday through Thursday, with a one-hour lunch break.
              Flexible scheduling may be available depending on role requirements and departmental needs.
            </p>
            <p className="mt-2">Employees are expected to:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>Adhere to agreed-upon work schedules</li>
              <li>Notify supervisors of planned absences in advance</li>
              <li>Communicate unexpected absences or delays as soon as possible</li>
              <li>Maintain accurate time records as required</li>
            </ul>
          </section>

          <section id="leave-policy" className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Leave Policy</h2>
            <p>TRUSTED ALLY provides various types of leave to support employee wellbeing:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>
                <strong>Annual Leave:</strong> 20 working days per year, accrued monthly
              </li>
              <li>
                <strong>Sick Leave:</strong> 14 days per year for personal illness or injury
              </li>
              <li>
                <strong>Parental Leave:</strong> In accordance with local labor laws, with additional organizational
                benefits
              </li>
              <li>
                <strong>Bereavement Leave:</strong> Up to 5 days for immediate family members
              </li>
              <li>
                <strong>Religious Observance:</strong> Reasonable accommodations for religious holidays and practices
              </li>
              <li>
                <strong>Professional Development Leave:</strong> As approved for relevant training and education
              </li>
            </ul>
            <p className="mt-4">
              All leave requests should be submitted through the designated system and approved by the immediate
              supervisor.
            </p>
          </section>

          <section id="remote-work" className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Remote Work Policy</h2>
            <p>
              TRUSTED ALLY supports flexible work arrangements where role responsibilities permit. Remote work
              arrangements may be:
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>Full-time remote</li>
              <li>Hybrid (combination of in-office and remote)</li>
              <li>Occasional remote work</li>
            </ul>
            <p className="mt-4">
              Remote work arrangements must be approved by department heads and are subject to regular review. Remote
              workers are expected to:
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>Maintain regular communication with team members and supervisors</li>
              <li>Be available during core working hours</li>
              <li>Meet all performance expectations and deadlines</li>
              <li>Ensure a secure, productive work environment</li>
              <li>Protect organizational data and confidential information</li>
            </ul>
          </section>

          <section id="communication" className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Communication Guidelines</h2>
            <p>Effective communication is essential to our collaborative work. All team members should:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>Respond to communications in a timely manner</li>
              <li>Use appropriate channels for different types of communication</li>
              <li>Maintain professionalism in all written and verbal communications</li>
              <li>Practice active listening and respectful dialogue</li>
              <li>Consider cultural differences in communication styles</li>
              <li>Protect confidential information in all communications</li>
            </ul>
            <p className="mt-4">
              Official external communications should follow organizational branding guidelines and be approved by the
              Communications Department when representing TRUSTED ALLY.
            </p>
          </section>

          <section id="confidentiality" className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Confidentiality and Data Protection</h2>
            <p>All employees must protect confidential information including:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>Personal data of beneficiaries, donors, and staff</li>
              <li>Financial information</li>
              <li>Strategic plans and proprietary methodologies</li>
              <li>Partner and stakeholder information</li>
            </ul>
            <p className="mt-4">Employees must:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>Follow data protection protocols</li>
              <li>Use secure methods for storing and transmitting sensitive information</li>
              <li>Report data breaches or security concerns immediately</li>
              <li>Sign and adhere to confidentiality agreements</li>
              <li>Return all confidential materials upon separation from the organization</li>
            </ul>
          </section>

          <section id="health-safety" className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Health and Safety</h2>
            <p>TRUSTED ALLY is committed to providing a safe and healthy work environment. All team members should:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>Follow safety protocols and guidelines</li>
              <li>Report unsafe conditions or practices</li>
              <li>Participate in safety training as required</li>
              <li>Take reasonable precautions to protect their own health and safety</li>
              <li>Support colleagues in maintaining a safe workplace</li>
            </ul>
            <p className="mt-4">
              The organization provides health insurance and wellness programs to support employee wellbeing, and
              maintains emergency response procedures for various scenarios.
            </p>
          </section>

          <section id="professional-development" className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Professional Development</h2>
            <p>TRUSTED ALLY encourages continuous learning and professional growth. We support development through:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>Annual professional development plans</li>
              <li>Training and workshop opportunities</li>
              <li>Conference attendance and presentation support</li>
              <li>Mentorship programs</li>
              <li>Educational assistance for relevant courses and certifications</li>
              <li>Internal knowledge-sharing sessions</li>
            </ul>
            <p className="mt-4">
              Employees should work with their supervisors to identify development goals and opportunities aligned with
              organizational needs and individual career aspirations.
            </p>
          </section>

          <section id="performance-evaluation" className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Performance Evaluation</h2>
            <p>Performance evaluations are conducted:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>Annually for comprehensive reviews</li>
              <li>Quarterly for progress check-ins</li>
              <li>At the end of probationary periods for new employees</li>
            </ul>
            <p className="mt-4">The evaluation process includes:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>Self-assessment</li>
              <li>Supervisor evaluation</li>
              <li>Peer feedback when appropriate</li>
              <li>Goal-setting for the upcoming period</li>
              <li>Development planning</li>
            </ul>
            <p className="mt-4">
              Performance evaluations inform decisions about professional development, advancement opportunities, and
              compensation adjustments.
            </p>
          </section>

          <section id="grievance-disciplinary" className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Grievance and Disciplinary Procedures</h2>
            <p>
              <strong>Grievance Procedure:</strong>
            </p>
            <ol className="list-decimal pl-6 mt-2">
              <li>Informal resolution attempt with the concerned party</li>
              <li>Formal written grievance submission to supervisor or HR</li>
              <li>Investigation and response within 10 working days</li>
              <li>Appeal process if the resolution is unsatisfactory</li>
              <li>Final decision by senior management</li>
            </ol>
            <p className="mt-4">
              <strong>Disciplinary Procedure:</strong>
            </p>
            <ol className="list-decimal pl-6 mt-2">
              <li>Verbal warning for minor infractions</li>
              <li>Written warning for repeated or more serious issues</li>
              <li>Final written warning with performance improvement plan</li>
              <li>Suspension or probation in severe cases</li>
              <li>Termination for gross misconduct or failure to improve</li>
            </ol>
            <p className="mt-4">
              All procedures will be conducted fairly, consistently, and with respect for confidentiality and due
              process.
            </p>
          </section>

          <section id="termination" className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Termination Policy</h2>
            <p>Employment may be terminated through:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>Voluntary resignation (with notice period as specified in employment contract)</li>
              <li>Retirement</li>
              <li>End of fixed-term contract</li>
              <li>Termination for cause</li>
              <li>Redundancy or organizational restructuring</li>
            </ul>
            <p className="mt-4">The termination process includes:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>Exit interview</li>
              <li>Return of organizational property</li>
              <li>Final settlement of accounts</li>
              <li>Transfer of responsibilities</li>
              <li>Continuation of confidentiality obligations</li>
            </ul>
          </section>

          <section id="policy-updates" className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Policy Updates and Compliance</h2>
            <p>
              This policy will be reviewed annually and updated as needed to reflect organizational changes, legal
              requirements, and best practices. All employees are responsible for:
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>Familiarizing themselves with current policies</li>
              <li>Complying with all policy provisions</li>
              <li>Seeking clarification when needed</li>
              <li>Suggesting improvements to policies and procedures</li>
            </ul>
            <p className="mt-4">
              Policy updates will be communicated through official channels, and training will be provided when
              significant changes are implemented.
            </p>
          </section>

          <div className="mt-12 border-t border-gray-200 pt-8">
            <p className="text-sm text-gray-500">Last updated: April 4, 2025</p>
            <p className="text-sm text-gray-500 mt-2">
              For questions or clarifications regarding this policy, please contact the Human Resources Department at{" "}
              <a href="mailto:hr@trustedally.org" className="text-blue-600 hover:underline">
                hr@trustedally.org
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

