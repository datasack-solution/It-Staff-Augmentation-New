import Image from 'next/image';
import { useState } from 'react';
import { useCallUsModalState } from '../CallUsContext';

const banks = [
  {
    url: "alinma_bank.webp",
    alt_dark: "Partner with Top IT Managed Service Providers Saudi Arabia to enhance efficiency and results for Alinma Bank.",
    alt_color: "Unlock efficiency with Top IT Managed Service Providers Saudi Arabia, tailored to optimize Alinma Bank's operations."
  },
  {
    url: "alrajhi_bank.webp",
    alt_dark: "Streamline your hiring with the Best IT Contract Staffing Saudi Arabia, delivering top-tier solutions to Alrajhi Bank.",
    alt_color: "Simplify workforce expansion with the Best IT Contract Staffing Saudi Arabia, ensuring success for Alrajhi Bank."
  },
  {
    url: "bank_albilad.webp",
    alt_dark: "Employ full time contract employees to maintain seamless IT support for Bank Albilad's evolving needs.",
    alt_color: "Full time contract employees ensures consistent IT performance, empowering Bank Albilad to achieve seamless delivery."
  },
  {
    url: "future_generali.webp",
    alt_dark: "IT Staffing Riyadh offers innovative recruitment services tailored to meet Future Generali's business goals.",
    alt_color: "Transform hiring processes with IT Staffing Riyadh, offering customized solutions for Future Generali's unique goals."
  },
  {
    url: "elm.webp",
    alt_dark: "Choose the Best IT Contract Staffing Saudi Arabia for scalable solutions designed to suit Elm's objectives.",
    alt_color: "Opt for the Best IT Contract Staffing Saudi Arabia for flexible and efficient workforce solutions tailored for Elm."
  },
  {
    url: "gallagher.webp",
    alt_dark: "Adapt to market demands with Top IT Staff Augmentation Services Saudi Arabia, driving success for Gallagher.",
    alt_color: "Rely on Top IT Staff Augmentation Services Saudi Arabia to meet dynamic workforce needs, enhancing Gallagher's success."
  },
  {
    url: "nibav.webp",
    alt_dark: "Expand your workforce with IT Resource Augmentation Saudi Arabia, offering strategic staffing options for Nibav.",
    alt_color: "IT Resource Augmentation Saudi Arabia provides scalable solutions to meet Nibav's project needs."
  },
  {
    url: "d360.webp",
    alt_dark: "Scale business growth with IT Staffing Agency Saudi Arabia, ensuring reliable IT talent for D360.",
    alt_color: "Innovate digital solutions with IT Staffing Riyadh, securing top IT professionals for D360."
  },
  {
    url: "sami.webp",
    alt_dark: "Scale esports development with IT Staff Augmentation Services Saudi Arabia, ensuring top talent for Saudi Esports.",
    alt_color: "Drive gaming innovation with IT Staffing Agency Saudi Arabia, delivering skilled professionals for Saudi Esports."
  },
  {
    url: "arab-national-bank-logo.webp",
    alt_dark: "Scale esports development with IT Staff Augmentation Services Saudi Arabia, ensuring top talent for Saudi Esports.",
    alt_color: "Drive gaming innovation with IT Staffing Agency Saudi Arabia, delivering skilled professionals for Saudi Esports."
  },
  {
    url: "elite-elevators-logo.webp",
    alt_dark: "Scale esports development with IT Staff Augmentation Services Saudi Arabia, ensuring top talent for Saudi Esports.",
    alt_color: "Drive gaming innovation with IT Staffing Agency Saudi Arabia, delivering skilled professionals for Saudi Esports."
  },
  {
    url: "k2-partnering-solutions-logo.webp",
    alt_dark: "Scale esports development with IT Staff Augmentation Services Saudi Arabia, ensuring top talent for Saudi Esports.",
    alt_color: "Drive gaming innovation with IT Staffing Agency Saudi Arabia, delivering skilled professionals for Saudi Esports."
  },
  {
    url: "nupco-logo.webp",
    alt_dark: "Scale esports development with IT Staff Augmentation Services Saudi Arabia, ensuring top talent for Saudi Esports.",
    alt_color: "Drive gaming innovation with IT Staffing Agency Saudi Arabia, delivering skilled professionals for Saudi Esports."
  },
  {
    url: "riyadh_airports.webp",
    alt_dark: "Improve operational efficiency with IT Staff Augmentation Services Saudi Arabia, delivering top-tier IT solutions for Riyadh Airports.",
    alt_color: "Optimize airport IT infrastructure with IT Staffing Agency Saudi Arabia, providing expert IT support for Riyadh Airports."
  },
  {
    url: "olam.webp",
    alt_dark: "Rely on the Best IT Staffing Agency Saudi Arabia to connect with exceptional talent for Olam's projects.",
    alt_color: "Trust the Best IT Staffing Agency Saudi Arabia for unmatched recruitment, securing top talent for Olam."
  },
  {
    url: "reliance_capital.webp",
    alt_dark: "Bolster your team with IT Team Augmentation Saudi Arabia, ensuring expert professionals for Reliance Capital.",
    alt_color: "Boost capabilities with IT Team Augmentation Saudi Arabia, providing reliable professionals for Reliance Capital."
  },
  {
    url: "enjaz.webp",
    alt_dark: "Achieve operational excellence with Top IT Managed Service Providers Saudi Arabia, supporting Enjaz's growth.",
    alt_color: "Gain a competitive edge with Top IT Managed Service Providers Saudi Arabia, delivering results for Enjaz."
  },
  {
    url: "pif.webp",
    alt_dark: "Accelerate business growth with IT Staff Augmentation, ensuring seamless execution of IT initiatives for PIF.",
    alt_color: "Strengthen digital transformation with IT Staffing Riyadh, offering specialized IT professionals for PIF."
  },
  {
    url: "esports.webp",
    alt_dark: "Scale esports development with IT Staff Augmentation Services Saudi Arabia, ensuring top talent for Saudi Esports.",
    alt_color: "Drive gaming innovation with IT Staffing Agency Saudi Arabia, delivering skilled professionals for Saudi Esports."
  },
  {
    url: "king_salman_IAir.webp",
    alt_dark: "Enhance workforce efficiency with IT Staff Augmentation, providing expert talent for King Salman International Airport.",
    alt_color: "Transform airport operations with IT Staffing Riyadh, ensuring seamless technology management for King Salman International Airport."
  },
];


export default function FAQPage() {
  // const faqs = [
  //     {
  //         title: "When You Choose IT Contract Staffing?",
  //         description: <p>Choosing the Best IT contract staffing Saudi Arabia enables businesses to quickly hire skilled professionals for specific projects. This flexible method allows companies to adjust their teams based on project needs without making long-term commitments. It helps reduce hiring costs and save valuable time in the hiring process. As a result, your internal teams can concentrate on their core functions. With the Best IT contract staffing Saudi Arabia, you can efficiently manage your workforce. Embrace this smart hiring solution for your business today.</p>
  //     },
  //     {
  //         title: "What is an IT Staffing?",
  //         description: <p>IT Staffing is a solution that connects businesses with skilled tech professionals, tailored to meet specific project needs. This service provides on-demand access to IT talent, allowing companies to quickly scale their teams up or down based on workload. With flexible hiring options, businesses in IT Staffing Riyadh can choose short-term, long-term, or project-based roles without long-term commitments. IT Staffing saves valuable time, as agencies handle recruiting, vetting, and onboarding, ensuring new hires are ready to contribute right away. This cost-effective approach also reduces overhead since companies only hire as needed. By offering access to specialized skills, IT Staffing supports complex IT needs such as cybersecurity and cloud computing. With streamlined onboarding and ongoing support, companies can focus more on their core operations.</p>
  //     },
  //     {
  //         title: "Difference Between IT Resource Augmentation Services and IT Team Augmentation",
  //         description: <p>IT Resource Augmentation Saudi Arabia enhances your current team by adding skilled professionals temporarily to address specific project needs. This flexible approach allows you to maintain control over your projects while benefiting from specialized expertise. By supplementing your workforce, you can adapt to changing demands without long-term commitments. It also helps to streamline operations and improve efficiency. Choose IT Resource Augmentation Saudi Arabia to empower your team&apos;s success.<br/> <br/> IT Team Augmentation Saudi Arabia involves integrating a full team of skilled professionals into your project. This team typically operates under your management, ensuring alignment with your goals. It&apos;s an ideal solution for larger projects that need a cohesive group with diverse skills. By leveraging IT Team Augmentation, you can enhance project efficiency and meet specific objectives more effectively. Choose IT Team Augmentation Saudi Arabia for a seamless extension of your workforce.</p>
  //     },
  //     {
  //         title: "What is IT Staff Augmentation?",
  //         description: <p>IT Staff Augmentation is a service that helps businesses quickly hire skilled IT professionals for specific projects or tasks. It allows companies to bring in experts temporarily, filling gaps in their teams without long-term commitments. This service ensures flexibility by scaling the workforce based on project needs, saving time on recruitment. It&apos;s ideal for temporary workloads or specialized skills like software development or cybersecurity. Top IT Staff Augmentation Services Saudi Arabia ensures companies only pay for the talent they need, helping to lower operational expenses. IT staff augmentation helps companies stay focused on core tasks while enhancing productivity. It&apos;s an affordable solution to hit project milestones with highly skilled professionals.</p>
  //     },
  //     {
  //         title: "What are IT Managed Services?",
  //         description: <p>IT Managed Services refers to outsourcing your company&apos;s IT operations to a third-party provider. Instead of handling IT tasks in-house, businesses rely on experts to manage everything from network security to software updates. As one of the Top IT Managed Service Providers Saudi Arabia, we ensure that your IT infrastructure is always running smoothly without the need for constant attention. This service helps businesses avoid downtime, enhance productivity, and reduce operational costs. Managed services include monitoring systems, troubleshooting issues, and offering support when needed. This allows companies to focus on core business functions while leaving the technical side in trusted hands. It&apos;s a smart and efficient solution for maintaining a reliable IT environment.</p>
  //     },
  //     {
  //         title: "What does it mean by full time contract employee?",
  //         description: <p>A full time contract employee is someone who works for a company on a contract basis, typically for a set period, but with the same hours and responsibilities as a permanent employee. Unlike regular employees, they are hired for specific projects or tasks and are not permanent staff members. These employees often enjoy benefits like health insurance, paid time off, and other perks, similar to full-time staff. However, their employment is bound by a contract with a defined end date. Full-time contract employees can help businesses scale their teams quickly without long-term commitments. They bring specialized skills and expertise for the duration of the contract. It&apos;s a flexible arrangement for both companies and employees.</p>
  //     },
  // ]
  const faqs = [
    {
      title: "What is IT Staffing?",
      description: <p>Businesses implement IT staffing approaches to find suitable IT professionals who match their IT requirements. It enables organizations to hire the best candidates capable of filling software development positions as well as cybersecurity roles, cloud computing roles and more specialized IT talents. Organizations have access to different IT staffing solutions for maintaining their technical workforce, including permanent IT staffing for long-term positions and IT staff augmentation for recruitment based on their projects as well as contractual IT staffing for short-term projects and finally offshore/nearshore IT staffing for lowering costs and sustaining performance. The implementation of IT staffing services permits organizations to increase their team numbers quickly while also reducing hiring times and optimizing operational efficiency. Organizations employ IT staffing solutions to address talent shortages, creating innovations that aid them in preserving market leadership throughout digital business evolution processes.</p>
    },
    {
      title: "How to choose the best IT staffing agency?",
      description: <p>Evaluating industry expertise and flexibility together with candidate screening procedures helps organizations select the best IT staffing agency to provide proficient professionals. The right staffing agency offers multiple solutions starting from IT staff augmentation up to contract staffing and permanent placements which will fulfill different needs of your organization. Assessing the success rate and efficiency of an IT staffing agency becomes possible through reviews and testimonials from clients together with information about the agency&apos;s talent pool size. An excellent staffing partner delivers accelerated hiring processes and verified candidate rosters and constant support that guarantees efficient workforce expansion. When business selects an appropriate IT staffing agency it achieves optimized hiring along with decreased recruitment obstacles and elevated operational efficiency which drives innovation for sustainable long-term growth.</p>
    },
    {
      title: "How much does IT staffing cost?",
      description: <p>The pricing for IT staffing positions depends on complexity of the role, required skills and project duration as well as how the work will be done either remotely or on site. Additional urgency requirements and unique skills needs influence the pricing rates. The structure of IT staffing provides companies with the ability to adjust their workforce numbers according to business requirements.  The approach saves businesses from paying the high expenses linked to permanent staffing and employee onboarding and benefits. You can easily address essential skill deficiencies with access to a broad talent pool to maintain project timelines. The professionals start work immediately thus saving both time and effort for their employers. The implementation of this approach enables organizations to deliver projects scheduled timeline and achieve better financial budget control.</p>
    },
    {
      title: "Do you handle iqama sponsorship, onboarding, and payroll services?",
      description: <p>Yes, Part of our staffing solutions includes handle iqama sponsorship, onboarding processes and payroll administration services. Our solution enables businesses to save time and meet all the necessary labor regulations. Our support allows you to operate in your core operations as we efficiently handle administrative duties.</p>
    },
    {
      title: "How long does the IT staffing process take?",
      description: <p>The IT staffing process takes different amounts of time because it depends on multiple aspects, including the level of difficulty for roles and skills needed, the quantity of available skilled experts, and the urgent needs of each hiring organization. General IT positions require only a few days to fill vacancies, but specialized roles, which include cybersecurity experts and AI engineers, SAP consultants, and cloud architects, need several weeks because qualified candidates are scarce in the market. An IT staffing project follows several steps that start with requirement analysis while moving to candidate sourcing, then interviews and ending with the onboarding process. Working with a trustworthy staffing partner allows organizations to cut down their hiring timelines because of their existing qualified candidate pool. Quick placements in companies become possible through both efficient communication systems and precise job descriptions and the use of streamlined evaluation procedures. Organizations can solve their urgent staffing requirements by bringing in staff through both temporary contracts and teamwork arrangements.</p>
    },
    {
      title: "What are the benefits of working with DataSack Solutions?",
      description: <p>DataSack Solutions enables clients to hire top IT talent through solutions that provide both speed and flexibility. DataSack handles iqama sponsorship and ensures both legal compliance and speedy payroll management through an easy employee onboarding process. DataSack Solutions delivers solutions which minimize time requirements and cut recruitment hazards and operational costs. Team scaling ability helps you prevent long-term employment costs. DataSack Solutions matches experts who specialize in reaching your project objectives with exact precision and project success.</p>
    },
    {
      title: "I'm looking for IT staffing support for my current project. Can you assist?",
      description: <p>Absolutely! The IT staffing solutions we offer match your continuous project requirements precisely. Our available experts have undergone thorough qualifications and stand ready to provide instant support to your projects. Our team delivers fast expansion of your workforce without the delays of past conventional hiring procedures. Our team manages all aspects of sourcing as well as onboarding and compliance procedures with complete dedication which shortens your workload. Your short-term or long-term requirements receive exact experts from our platform which is designed to match project goals. Our flexible system enables productivity growth while providing all work needed through staffing solutions beyond full-time employment. Through our services you can concentrate on achieving project success as we match and deploy qualified talent during the designated timeframes.</p>
    },
    {
      title: "What about DataSack’s industry experience?",
      description: <p>DataSack Solutions applies its extensive track record to provide IT staffing and technology services to industries from diverse fields. Our company provides staffing services to banking, finance, fintech, ICT, healthcare, IT consulting, insurance, aviation, infrastructure, defense and other industries with pride. The company specializes in providing IT staffing services and technology solutions for government institutions and investments and smart home technology and elevator businesses and agricultural food processing and entertainment and esports companies. Our industry-wide client base showcases how we deliver target-oriented staffing solutions which match changing business requirements of various sectors.</p>
    },
    {
      title: "Why should a business use an IT staffing agency?",
      description: <p>Businesses who partner with IT staffing agencies benefit from accelerated hiring processes through their ready availability of qualified technology professionals to save time. Staffing experts match chosen candidates to meet technical specifications as well as organizational business goals. The agency allows businesses to adjust their IT team sizes according to changing project demands through flexible scaling options. The method lowers costs tied to long-term hiring and makes life easier for the human resources department within the organization. Businesses benefit from agency services that acquire talent and handle onboarding duties and payroll administration and regulatory compliance which enables them to concentrate on core operational tasks. Staying agile and efficient while delivering projects on time becomes achievable through this cost-effective strategic method.</p>
    },
    {
      title: "What are IT staff augmentation services?",
      description: <p>Strategic IT staff augmentation allows businesses to create rapid extensions to their IT workforce by hiring professionals for short-term projects. Through this model, companies gain fast access to new staff for skill set gaps at lower costs than regular hiring processes do. IT Staff augmentation provides teams with additional workforce who collaborate with in-house employees to ensure project continuity. Through IT staff augmentation businesses keep their control of ongoing tasks while gaining access to specialized expertise. This model functions optimally for short-term projects and peak work periods as well as special skill requirements. This technique brings multiple benefits, such as flexibility, lower expenses, and faster project delivery. Companies can avoid hiring risks through their use of a pre-vetted talent pool. Top IT Staff Augmentation Services Saudi Arabia provides businesses with efficiency in adapting their technologies as needed. Productivity increases immediately through this strategy, which does not require permanent agreements. The method allows businesses to maintain their competitive position in an IT environment that constantly evolves at a quick pace.</p>
    },
    {
      title: "Can I scale my in-house technology team with the help of an IT staffing agency?",
      description: <p>Absolutely! Your organization can rapidly fulfill project needs by expanding its in-house technology team through collaboration with an IT staffing agency while avoiding the full-time employee recruitment burden. The agencies let you access experienced professionals who will join your team whenever you need additional support. An IT staffing agency enables organizations to improve flexibility, adaptability and task transformation while reducing recruitment time. An IT staffing agency handles resource identification and onboarding and management which allows your team members to focus primarily on quality work. Through this solution you can obtain qualified staff when you need them without spending additional costs or signing lengthy agreements. Agencies present an intelligent approach to expand your workforce while maintaining development of ongoing projects.</p>
    },
    {
      title: "What is IT contract staffing?",
      description: <p>Businesses benefit from IT contract staffing through fast professional recruitment for short-term assignments which optimizes the both hiring timeline and budget. The model provides companies the ability to scale their workforce according to their changing project demands. This specific staffing approach provides optimal results when enterprises need professionals with expertise in software development, cybersecurity, ect. The Best IT contract staffing Saudi Arabia solutions offer access to top talent for such specialized needs. Businesses who hire for particular projects avoid long-term contracts while they fulfill their changing operational requirements. Contract staffing in IT cuts costs through payment of expert services only for the duration of the project. The model leads to enhanced operational effectiveness together with increased productivity through reduced delays. Companies gain better speed and performance through hiring from a wider range of talent. Through this method businesses can maintain high quality standards without compromising on quality, while staying competitive in the market. Organizations benefit from IT contract staffing through flexible solutions paired with advanced skilled professionals needed to fulfill their operational requirements.</p>
    },
    {
      title: "Why is IT contract staffing better than permanent hiring?",
      description: <p>Businesses that use IT contract staffing can adapt their workforce through quick and project-based scaling. The arrangement allows businesses to handle changing project needs better than regular permanent staff while avoiding long-term employment responsibility. The payment structure under IT contract staffing requires businesses to cover only the needed expertise so they can avoid spending money on benefits or retirement packages. Through contract staffing organizations gain access to specialized experts such as those in cloud computing and AI whose acquisition saves the cost of extensive training. The ability to assess performance first makes organizations less vulnerable to turnover because they gain a clearer understanding of potential candidates before extended contractual agreements. This method leads to businesses that remain fast and inexpensive while being focused on their strategic development. Through employment contracts businesses acquire specialized expertise from workers who avoid the operational costs of permanent employment. Enterprises use quick market response to modify their operations simultaneously with higher speed of innovation. IT contract staffing enhances business operations through efficient resources allocation with no impact on performance quality.</p>
    },
    {
      title: "How can IT contract staffing reduce costs?",
      description: <p>The practice of IT contract staffing enables organizations to handle their IT personnel needs through cost-effective staffing methods. Companies who opt for temporary employment save money because they do not need to provide permanent employee coverage such as healthcare and retirement plans. Businesses eliminate their recruitment spending when they procure skilled talent without lengthy recruitment processes. Specialized skills available through Best IT contract staffing Saudi Arabia enable businesses to insert needed technical expertise into their teams while avoiding extensive lasting agreements. Companies using IT contract staffing gain flexibility and adaptability through which they can increase or decrease their resource levels depending on project requirements. Businesses that avoid carrying excess staff will protect themselves from avoidable financial costs when they follow this approach. Companies receive higher budgetary control by only spending on the specific expertise they require. The approach of using IT contract staffing provides an effective solution which enables organizations to minimize costs while obtaining high-quality work within their projects.
      </p>
    },
    {
      title: "Is DataSack an expert in handling technical resources?",
      description: <p>Yes, DataSack Solutions demonstrates advanced experience with technical resource management. DataSack Solutions recognizes the essential role of precisely selected IT professionals for project success. Our team chooses professionals through a thorough review process which examines their skills together with their experience alongside project-related expertise. DataSack Solutions oversees the complete spectrum including employee onboarding and compliance processes, so you don’t worry about the process. Our service integrates technical resources into your team regardless of short or long duration requirements. Our mission is to supply projects with dependable qualified staff that meets specific goals. Our service enables you to achieve your goals by handling all technical staff requirements.
      </p>
    },
    {
      title: "What makes your IT Staffing services different from others?",
      description: <p>Our IT staffing services differ because we maintain strict dedication to connecting companies with just the right candidates and times. We manage thorough professional networks consisting of pre-approved experts in various technological fields and market sectors. Our team develops close relationships with clients to grasp both their project targets and particular demands. Our IT staffing Riyadh services accommodate client needs by providing selectable models both for short-term and long-term requirements. Our company manages every aspect of the hiring process, from sourcing to onboarding by suitable professionals efficiently. Our commitment extends to ensuring compliance requirements and performance observation as well as quality support every step of the way. The customized and reliable method ensures businesses gain speed in their growth through suitable technology professionals.
      </p>
    },
    {
      title: "Do IT staffing agencies offer support after implementation?",
      description: <p>Support starts immediately following IT staffing implementation to maintain smooth system functions. The organization tracks employee performance and manages payroll and enforces all regulatory requirements. The rapid service of staff replacement from staffing firms reduces operational interruptions. The training and skilling programs given by agencies maintain IT professionals updated on advancing technological developments. Our team at the Best IT Staffing Agency Saudi Arabia helps both business departments and IT personnel communicate effectively and respond helpfully to any developing issues. Ongoing technical support services from agencies help companies achieve maximum performance by addressing new problems and maintaining high operational efficiency. Through workforce management services companies maintain their competitive edge and fulfill project responsibilities. Organizations receive help from these agencies for developing permanent staffing approaches which lead to sustained success. The expertise they provide simplifies hiring processes which lets companies dedicate themselves to business expansion. The combination of constant support creates both operational stability and optimal work efficiency.
      </p>
    },
  ]


  return (
    <div className="bg-white dark:bg-[#252525] text-black dark:text-white relative overflow-hidden">

      <div className="absolute inset-0  w-full h-screen ">
        <div className="absolute w-11/12 h-full opacity-[0.06] -right-[85%] bg-orange-200 dark:bg-opacity-40 rounded-full"></div>
        <div className="absolute w-10/12 h-full opacity-[0.06] -right-[60%] bg-orange-200 dark:bg-opacity-40 rounded-full"></div>
        <div className="absolute w-9/12 h-full opacity-[0.06] -right-[60%] bg-orange-200 dark:bg-opacity-40 rounded-full"></div>
        <div className="absolute w-8/12 h-full opacity-[0.06] -right-[35%] bg-orange-200 dark:bg-opacity-40 rounded-full"></div>
        <div className="absolute w-7/12 h-full opacity-[0.06] -right-[20%] bg-orange-200 dark:bg-opacity-40 rounded-full"></div>
      </div>

      <div className="container relative p-7 mx-auto">
        <h2 className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-4xl font-bold mb-5">
          When and <span className="text-orange-500">what?</span>
        </h2>

        <div className="space-y-4">
          {faqs.map((question, index) => (
            <FAQItem key={index} question={question.title} answer={question.description} index={index} />
          ))}
        </div>

        <div className='container m-auto mt-10'>

          <h2 className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-4xl font-bold mb-5 text-center">
            Partners
          </h2>

          <p className='text-center pb-5'>Trusted by 100+ companies</p>
        </div>
      </div>
      <Partners />
    </div>
  );
}

function FAQItem({ question, index, answer }: { question: string, answer: React.ReactNode, index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`border-b py-4 cursor-pointer transition-all duration-300 ${isOpen ? 'bg-gray-100 dark:bg-transparent' : ''
        }`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex justify-between items-center">
        <h3 className="font-medium 2xl:text-lg xl:text-lg md:text-base text-base sm:text-base text-left p-2">{index + 1}. {question}</h3>
        <span className="text-xl  animate-bounce p-2">
          {isOpen ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
            <path fillRule="evenodd" d="M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z" clipRule="evenodd" />
          </svg>
            : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
              <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" />
            </svg>
          }
        </span>
      </div>
      {isOpen && (
        <div className="mt-2 text-gray-600 dark:text-white text-sm sm:text-sm md:text-base lg:text-base xl:text-base 2xl:text-base overflow-hidden animate-slideDown p-2">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}


const Partners = () => {
  const { darkMode } = useCallUsModalState()
  return <div
    x-data="{}"
    x-init="$nextTick(() => {
let ul = $refs.logos;
ul.insertAdjacentHTML('afterend', ul.outerHTML);
ul.nextSibling.setAttribute('aria-hidden', 'true');
})"
    className="w-full  dark:bg-opacity-70  -mt-10 mb-20 xs:p-2 sm:p-5 md:p-6 lg:p-7 xl:p-7 2xl:p-7 inline-flex flex-nowrap overflow-hidden 
   [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-100px),transparent_100%)]">
    {/* 
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-4 [&_img]:max-w-none animate-infinite-scroll">
            {banks.map((bank, i) => (
                <li key={i} className="flex justify-center items-center  sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
                    <Image
                        src={darkMode ? `taggedImages/Client-Logos-Dark/${bank.url}` : `taggedImages/Client-Logos-Color/${bank.url}`}
                        alt={darkMode ? bank.alt_dark : bank.alt_color}
                        width={100}
                        height={80}
                        className={`cursor-pointer    mr-0 ml-0 
                            ${bank.url==='king_salman_IAir.webp'? "h-5 md:h-7 w-auto" :
                              bank.url === 'd360.webp' ? "h-20 md:h-20 lg:h-32  w-auto p-0":
                              "h-auto w-24 sm:w-20 md:w-28 lg:w-36 xl:w-40 "}`}
                    />
                </li>
            ))}
        </ul>

        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-4 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
            {banks.map((bank, i) => (
                <li key={i} className="flex justify-center items-center  sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
                    <Image
                        src={darkMode ? `taggedImages/Client-Logos-Dark/${bank.url}` : `taggedImages/Client-Logos-Color/${bank.url}`}
                        alt={darkMode ? bank.alt_dark : bank.alt_color}
                        width={100}
                        height={80}
                        className={`cursor-pointer    mr-0 ml-0 
                            ${bank.url==='king_salman_IAir.webp'? "h-5 md:h-7 w-auto" :
                              bank.url === 'd360.webp' ? "h-20 md:h-20 lg:h-32  w-auto p-0":
                              "h-auto w-24 sm:w-20 md:w-28 lg:w-36 xl:w-40 "}`}
                    />
                </li>
            ))}
        </ul> */}

    <ul className="flex items-center justify-center md:justify-start [&_li]:mx-4 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
      {banks.map((bank, i) => (
        <li key={i} className="flex justify-center items-center sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
          <div className="logo-container">
            <Image
              src={
                darkMode &&
                  bank.url !== "sami.webp" &&
                  bank.url !== "arab-national-bank-logo.webp" &&
                  bank.url !== "elite-elevators-logo.webp" &&
                  bank.url !== "nupco-logo.webp"
                  ? `taggedImages/Client-Logos-Dark/${bank.url}`
                  : `taggedImages/Client-Logos-Color/${bank.url}`
              }
              alt={darkMode ? bank.alt_dark : bank.alt_color}
              width={150}
              height={100}
              className={`logo-image ${bank.url === "king_salman_IAir.webp" ? "king-salman-logo h-8 md:h-10 w-auto" :
                  (bank.url === "elm.webp" ||
                    bank.url === "k2-partnering-solutions-logo.webp") ? "small-logo-mobile" :
                    (darkMode && (
                      bank.url === "arab-national-bank-logo.webp" ||
                      bank.url === "elite-elevators-logo.webp" ||
                      bank.url === "nupco-logo.webp" ||
                      bank.url === "sami.webp"
                    )) ? "invert-in-dark" : ""
                }`}
            />
          </div>
        </li>
      ))}
    </ul>

    <ul className="flex items-center justify-center md:justify-start [&_li]:mx-4 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
      {banks.map((bank, i) => (
        <li key={i} className="flex justify-center items-center sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
          <div className="logo-container">
            <Image
              src={
                darkMode &&
                  bank.url !== "sami.webp" &&
                  bank.url !== "k2-partnering-solutions-logo.webp" &&
                  bank.url !== "arab-national-bank-logo.webp" &&
                  bank.url !== "elite-elevators-logo.webp" &&
                  bank.url !== "nupco-logo.webp"
                  ? `taggedImages/Client-Logos-Dark/${bank.url}`
                  : `taggedImages/Client-Logos-Color/${bank.url}`
              }
              alt={darkMode ? bank.alt_dark : bank.alt_color}
              width={150}
              height={100}
              className={`logo-image ${bank.url === "king_salman_IAir.webp" ? "king-salman-logo h-8 md:h-10 w-auto" :
                  (bank.url === "elm.webp" ||
                    bank.url === "k2-partnering-solutions-logo.webp") ? "small-logo-mobile " :
                    (darkMode && (
                      bank.url === "arab-national-bank-logo.webp" ||
                      bank.url === "elite-elevators-logo.webp" ||
                      bank.url === "nupco-logo.webp" ||
                      bank.url === "sami.webp"
                    )) ? "invert-in-dark" : ""
                }`}
            />
          </div>
        </li>
      ))}
    </ul>


  </div>
}