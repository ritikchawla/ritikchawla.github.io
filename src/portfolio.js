/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Ritik's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Ritik Chawla Portfolio",
    type: "linkedin",
    url: "https://linkedin.com/in/ritikchawla",
  },
};

//Home Page
const greeting = {
  title: "Ritik Chawla",
  logo_name: "RitikChawla",
  nickname: "Software Developer",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1CsvR8KrLHRtJOeyFjJqLrxV4oEcgnNRX/view?usp=sharing",
  portfolio_repository: "https://github.com/ritikchawla/ritikchawla",
  githubProfile: "https://github.com/ritikchawla",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/ritikchawla",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://linkedin.com/in/ritikchawla/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/channel/UCRd6QPXyiTpq0P4gzQRanDQ",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:ritchwsh@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/ritikchawla_",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/ritik.chawla101/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/hoopy_frood/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Software Developer",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Experienced working in Data Structures and Algorithms",
        "⚡ Experienced Programmer in C++ and Python",
        "⚡ Created web applications in Flask",
      ],
      softwareSkills: [
        {
          skillName: "C++",
          fontAwesomeClassname: "file-icons:c",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "logos:python",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "logos:javascript",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Golang",
          fontAwesomeClassname: "fa6-brands:golang",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
          
        },
        {
          skillName: "Flask",
          fontAwesomeClassname: "logos:flask",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
          
        },
      ],
    },
    {
      title: "Data Science and AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Cloud Computing Engineer",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Built an application to track cryptocurrency exchanges in real time",
     
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "GeekforGeeks",
      iconifyClassname: "simple-icons:geeksforgeeks",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://auth.geeksforgeeks.org/user/ritikchawla2014/profile",
    },
    {
      siteName: "Leetcode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://leetcode.com/ritikchawla2014/",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/ritikchawla/",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "https://codeforces.com/profile/ritikchawla2014",
    },
    {
      siteName: "Hackerrank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerrank.com/ritikchawla2014",
    },
   
  ],
};

const degrees = {
  degrees: [
    {
      title: "Dr. Akhilesh Das Gupta Institute of Technology & Management",
      subtitle: "B.Tech. in Computer Science Engineering",
      logo_path: "ad.jpg",
      alt_name: "ADGITM Delhi",
      duration: "2018 - 2022",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CN, TOC, ML etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        "⚡ I scored amongst the top 10% of the students enrolled and achieved an overall CGPA of 9.159.",
      ],
      website_link: "https://adgitmdelhi.ac.in/",
    },
    {
      title: "Bharatiya Vidya Bhavan's Mehta Vidyalaya",
      subtitle: "Senior Secondary Certificate and High School Certificate",
      logo_path: "bvbmv.png",
      alt_name: "BVBMV Delhi",
      duration: "2015 - 2018",
      descriptions: [
        "⚡ Completed my CBSE Board Examinations in Class 10th and Class 12th.",
        "⚡ Scored 10 CGPA in Class 10th and 92.8% in Class 12th",
        
      ],
      website_link: "https://www.bvbmehtavidyalaya.org/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Google IT Support",
      subtitle: "- Google",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/certificate/LE2Q3779FYWK",
      alt_name: "Google",
      color_code: "#8C151599",
    },
    {
      title: "Deep Learning",
      subtitle: "- Andrew Ng & Laurence Moroney",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/certificate/4XWGLAAFGW4U",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "AWS Fundamentals",
      subtitle: "- Amazon Web Services",
      logo_path: "aws.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/certificate/H2VBJKT9XUV2",
      alt_name: "Coursera",
      color_code: "#0C9D5899",
    },
    {
      title: "Python for Everybody",
      subtitle: "- Dr. Charles",
      logo_path: "python.jpg",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/certificate/Z4Y2KD65X7GC",
      alt_name: "Python",
      color_code: "#1F70C199",
    },
    {
      title: "Architecting with Google Compute Engine",
      subtitle: "- Google Cloud",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/certificate/EMVYN93SXKTW",
      alt_name: "GCP",
      color_code: "#00000099",
    },
    {
      title: "Triplebyte Certified",
      subtitle: "- Cloud Readiness",
      logo_path: "tb.png",
      certificate_link:
        "https://triplebyte.com/tb/ritik-chawla-vip8dwa/certificate",
      alt_name: "TripleByte",
      color_code: "#1F70C199",
    },
    {
      title: "Applied Data Science",
      subtitle: "- IBM",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.credly.com/badges/5c14aea4-922d-4e0f-9d07-a2e1c9834e94?source=linked_in_profile",
      alt_name: "IBM",
      color_code: "#0C9D5899",
    },
    {
      title: "Data Analysis with Python",
      subtitle: "- Jovian.ai",
      logo_path: "jovian.png",
      certificate_link:
        "https://jovian.ai/certificate/MFQTCMBQG4",
      alt_name: "jovian.ai",
      color_code: "#1F70C199",
    },
    {
      title: "Computational Neuroscience",
      subtitle: "- University of Washington",
      logo_path: "computationaln.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/2H9RDMYCAPG8",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Google Product Management",
      subtitle: "- Google",
      logo_path: "pro.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/E9537AEYCHQ2",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Cryptography",
      subtitle: "- Stanford University",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/BSLAPR4SM9EP",
      alt_name: "Stanford",
      color_code: "#FFBB0099",
    },
    {
      title: "Cloud Architecture",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many evolving startups as Software Developer and Architect Intern. I love organising events and volunteering for conferences.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Software Engineer",
          company: "MAQ Software",
          company_url: "https://maqsoftware.com/",
          logo_path: "maq.png",
          duration: "July 2022 - Present",
          location: "Noida, Uttar Pradesh",
          description:
            "I am working on databricks and azure synapse analytics. The projects involve generating Power BI reports, visualizing them as well as writing SQL Queries to perform operations on the date.",
          color: "#0879bf",
        },
        
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Programmer Analyst Trainee",
          company: "Cognizant",
          company_url: "https://www.cognizant.com/in/en",
          logo_path: "cognizant.jpg",
          duration: "Feb 2022 - June 2022",
          location: "Work from Home",
          description:
            "Worked on configuring Microsoft azure services for cognizant accounts. Performed operations in Azure DevOps Server and worked on Azure SQL in databases.",
          color: "#ee3c26",
        },
        {
          title: "Data Science and Business Analytics Intern",
          company: "The Sparks Foundation",
          company_url:
            "https://www.thesparksfoundationsingapore.org/",
          logo_path: "tsf.png",
          duration: "March 2022 - May 2022",
          location: "Work From Home",
          description:
            "Worked on Data Analysis and Visualization tasks in Sports and Health. Worked on classification,regression models. Performed Decision Tree Algorithm for the Iris Dataset, created the Decision Tree classifier and visualized it graphically.",
          color: "#0071C5",
        },
        {
          title: "Data Science and Business Analytics Intern",
          company: "Ecom Express Limited",
          company_url:
            "https://ecomexpress.in/",
          logo_path: "ecom.png",
          duration: "March 2022 - May 2022",
          location: "Work From Home",
          description:
            "Performed Data Wrangling activities on Data Quality. Worked on building robust solutions for logistics for vehicle routing, scheduling, planning and demand forecasting. Performed Exploratory Data Analysis, defined the preprocessing or feature engineering to be done on a given dataset, Used existing Machine Learning models, validation models and deployed the solutions.",
          color: "#0071C5",
        },
        {
          title: "Google Cloud Platform Learner",
          company: "Google Cloud Skills Boost",
          company_url:
            "https://www.cloudskillsboost.google/",
          logo_path: "qwik.jpg",
          duration: "Oct 2020 - Nov 2020",
          location: "Work From Home",
          description:
            "Built and secured networks in Google Cloud. Tracked Cryptocurrency Exchange Trades with Google Cloud Platform in Real-Time. Performed Foundation AI, ML Tasks and explored Machine Learning models using Explainable AI. Took Insights from Data in BigQuery.",
          color: "#0071C5",
        },
        {
          title: "Marketing Intern",
          company: "Viral Fission",
          company_url:
            "https://www.viralfission.com/",
          logo_path: "vf.jpg",
          duration: "April 2021 - Present",
          location: "Work From Home",
          description:
            "Worked as a Team Leader in the digital marketing and brand engagement team of Viral Fisison. Created content as well as generated reports regarding engagement levels in different social media ",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Technical Team Lead",
          company: "QIndia",
          company_url: "https://about.google/",
          logo_path: "qindia.jpg",
          duration: "May 2022 - Present",
          //location: "Hyderabad, Telangana",
          description:
            "Worked with mentors and lecturers in supporting QBronze 85 workshop. Automated a certificate generator and emailer",
          color: "#4285F4",
        },
        {
          title: "Content and recuitment team member",
          company: "The Happy Company",
          //company_url: "https://www.microsoft.com/",
          logo_path: "thc.png",
          duration: "Aug 2019 - May 2020",
          location: "Hyderabad, Telangana",
          description:
            "Created content on Instagram promoting mental health awareness, Worked in the recruitment team conducting interviews and taking sessions",
          color: "#D83B01",
        },
        
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. I've spent considerable time on the use cases and the utility of these projects. ",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a research paper of my own.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "profile.png",
    description:
      "I am available on all major social media platforms. You can contact me about possible job opportunities.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document my lessons from the day. I also write about the lessons or insights I draw from Books and Articles.",
    link: "https://ashutoshhathidara.wordpress.com",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "D-4 Krishna Nagar, Delhi - 110051",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/JqeffNz2nzLdKFSEA",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 8743844765",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  contactPageData,
};
