import React, { useState, useEffect, useRef } from 'react';

// --- ICONS (SVG Components) ---
const MailIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
);
const LinkedinIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);
const GithubIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
);
const MapPinIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
);
const ExternalLinkIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>
);
const SunIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m4.93 19.07 1.41-1.41" /><path d="m17.66 6.34 1.41-1.41" /></svg>
);
const MoonIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" /></svg>
);
const InstagramIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
);
const FileTextIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><line x1="10" y1="9" x2="8" y2="9"></line></svg>
);
const MenuIcon = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>;
const XIcon = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="18" x2="6" y1="6" y2="18"/><line x1="6" x2="18" y1="6" y2="18"/></svg>;
const GraduationCapIcon = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.084a1 1 0 0 0 0 1.838l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12v5c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2v-5"/></svg>;
const ClipboardListIcon = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M12 11h4"/><path d="M12 16h4"/><path d="M8 11h.01"/><path d="M8 16h.01"/></svg>;
const ImageIcon = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>;

// Proper WhatsApp Logo Component (Standardized SVG)
const WhatsappLogo = ({ className }) => (
    // Note: Using inline SVG for simplicity in single-file React component.
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path fill="currentColor" d="M12 2C6.477 2 2 6.477 2 12c0 1.546.398 3.018 1.157 4.316l-1.15 4.384 4.54-1.425c1.237.66 2.613 1.036 4.453 1.036 5.523 0 10.007-4.477 10.007-10S17.523 2 12 2zm4.7 13.92c-.2.2-.4.3-.6.4-.2.1-.4.1-.6.1-.2 0-.4-.1-.6-.2-.7-.3-1.7-.8-2.5-1.5-.7-.7-1.3-1.6-1.5-2.5-.1-.2 0-.4.2-.6.1-.1.2-.2.4-.4.1-.1.2-.3.2-.4s0-.2-.1-.3c-.1-.1-.6-.5-.8-.7-.2-.2-.4-.3-.6-.3s-.4 0-.6 0c-.2 0-.4.1-.6.2-.2.2-.8.8-.8 2s.8 2.3 1.7 3.2c.9.9 2.1 1.7 3.4 1.9 1.3.2 2.1.2 2.5.1.4-.1.7-.2.9-.4.2-.2.2-.4.1-.6-.1-.2-.4-.5-.6-.7z"/>
    </svg>
);


// --- NAVIGATION ICONS ---
const UserIcon = ({className}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>;
const BriefcaseIcon = ({className}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>;
const CodeIcon = ({className}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>;
const SparklesIcon = ({className}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>;
const UsersIcon = ({className}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
const AwardIcon = ({className}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 17 17 23 15.79 13.88"/></svg>;
const SendIcon = ({className}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="22" x2="11" y1="2" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>;


// --- DATA OBJECTS ---
const personalInfo = {
    name: "RANGGA ALLIFYAN SYAHPUTRA",
    profilePictureUrl: "/assets/foto-profil-nobg.png", 
    cvUrl: "/assets/CV-Rangga-Allifyan.pdf",
    sklUrl: "/assets/SKL-Rangga.pdf",
    transcriptUrl: "/assets/Transkrip-Rangga.pdf",
    contacts: [
        { name: 'Email', icon: <MailIcon className="w-6 h-6" />, href: "mailto:ranggaallifss@gmail.com" },
        { name: 'LinkedIn', icon: <LinkedinIcon className="w-6 h-6" />, href: "https://www.linkedin.com/in/ranggaallifyann" },
        { name: 'GitHub', icon: <GithubIcon className="w-6 h-6" />, href: "https://github.com/ranggaallifyann" },
        { name: 'Instagram', icon: <InstagramIcon className="w-6 h-6" />, href: "https://www.instagram.com/ranggaallifyann" },
    ],
    whatsappLink: "https://wa.me/6285780201218",
    location: "Based In Curug - Kabupaten Tangerang, Indonesia",
    bio: "BNSP-certified Business Intelligence & Data Analyst specializing in supply chain optimization, ERP integration, and operational performance. Experienced in transforming warehouse workflows and business datasets into actionable insights using SQL, Python, Power BI, and ETL pipelines. Background in Information Systems with hands-on experience in AI modeling, predictive analytics, and process automation. Passionate about improving data accuracy, enhancing decision-making, and building scalable, data-driven solutions for real business operations."
};

const education = {
    university: "Universitas Mercu Buana - Jakarta Barat, Indonesia",
    logoUrl: "/assets/logo-umb.png",
    period: "2021 - 2025",
    degree: "Bachelor of Information System, 3.50/4.00",
    thesis: "Developed a predictive model for earthquake magnitudes in Indonesia using Random Forest and Neural Networks with spatial-temporal data."
};

const workExperiences = [
    { 
        type: 'Professional', 
        logoUrl: "/assets/logo-astro.png", 
        role: "Checker Staff", 
        company: "Astro – Fulfillment Center", 
        period: "Jan 2025 - Jun 2025", 
        tasks: [
            "Performed detailed inbound checking (SKU, quantity, quality, batch/expiry) by matching physical goods with documents in the WRP/WMS system and using handheld barcode scanners to ensure accurate data entry.", 
            "Recorded inspection results and completed put-away activities using Google Sheets, internal operational apps, and scanners, ensuring items were stored in the correct bin locations and inventory was updated in real time following FIFO/FEFO standards.", 
            "Executed outbound checking by verifying picked items through the WRP system and barcode scanning, ensuring 100% accuracy before goods moved to the packing process.", 
            "Coordinated with Pickers, Packers, and Inventory Control through daily operational systems, internal communication tools, and order dashboards to ensure all orders were completed on time and without discrepancies.", 
            "Ensured compliance with SOPs, OHS, and internal audit standards, maintaining accurate documentation across Google Sheets, WRP/WMS, and internal mobile apps throughout the inbound → storage → outbound workflow."
        ], 
        certificateUrl: "#" // No certificate
    },
    { 
        type: 'Thesis', 
        logoUrl: "/assets/logo-umb.png", 
        role: "Undergraduate Thesis Project", 
        company: "Universitas Mercu Buana", 
        period: "Mar 2025 - Aug 2025", 
        tasks: [
            "Conducted research on earthquake magnitude prediction using spatial and temporal seismic datasets across Indonesia.",
            "Applied Random Forest and Neural Network algorithms to build predictive models and evaluate their performance.",
            "Performed data preprocessing, cleaning, and geospatial analysis to enhance model accuracy and reliability.",
            "Compared algorithm performance using key metrics such as RMSE, MAE, and R², identifying the most effective modeling approach.",
            "Produced a comprehensive thesis and final presentation, delivering insights on how AI can support disaster mitigation and early warning systems."
        ], 
        certificateUrl: "/assets/bukti-proyek-skripsi.pdf" // Example: Add a link to thesis document proof
    },
    { 
        type: 'Internship', 
        logoUrl: "/assets/logo-british-airways.png", 
        role: "Data Science Virtual Intern", 
        company: "British Airways (Forage)", 
        period: "Jan 2025 - Mar 2025", 
        tasks: [
            "Conducted web scraping to extract customer review data for text analysis.", 
            "Built a predictive model to analyze purchasing behavior.", 
            "Applied data preprocessing and feature engineering to improve model performance.", 
            "Visualized insights through data dashboards to support business strategies.", 
            "Delivered a comprehensive presentation with data-driven recommendations."
        ], 
        certificateUrl: "/assets/cert-british-airways.pdf" // Example: Add a link to internship certificate
    },
    { 
        type: 'Internship', 
        logoUrl: "/assets/logo-high-tech.png", 
        role: "IT Support Internship", 
        company: "PT High Tech Ancillaries Indonesia", 
        period: "Feb 2024 - Jul 2024", 
        tasks: [
            "Handled network configuration, printer sharing, and software installation to support daily factory operations and ensure system availability.", 
            "Implemented Group Policy Objects (GPOs) to enhance workstation security, user access control, and compliance with internal IT standards.", 
            "Compiled and maintained technical documentation, IT asset inventories, and audit-ready records for internal and external compliance checks.", 
            "Troubleshoot network devices, PCs, and hardware components, ensuring stable performance and minimizing downtime across departments.", 
            "Educated employees on IT security awareness, safe digital practices, and internal security policies to reduce cyber risks."
        ], 
        certificateUrl: "/assets/cert-high-tech.pdf" // Example: Add a link to internship certificate
    },
    { 
        type: 'Internship', 
        logoUrl: "/assets/logo-arai-rubber.png", 
        role: "IT Staff Internship", 
        company: "PT Arai Rubber Seal Indonesia", 
        period: "Feb 2024 - Jul 2024", 
        tasks: [
            "Developed an interactive ERP Sales module using C# (Windows Forms/WPF), transforming a Figma UI design into a fully functional application.", 
            "Built core ERP sub-modules including Customer Management, Quotations, Sales Orders, and Reporting, improving workflow accuracy and overall sales process efficiency.", 
            "Collaborated with IT mentors and the ERP team to perform system testing, debugging, and deployment across internal environments.", 
            "Completed technical training in MySQL, ISO 27001 Information Security, and IT Security Awareness to strengthen system development and compliance knowledge.", 
            "Provided daily IT operational support, including hardware installation, troubleshooting, and general technical assistance for internal users."
        ], 
        certificateUrl: "/assets/cert-arai-rubber.pdf" // Example: Add a link to internship certificate
    },
    { 
        type: 'Daily Worker', 
        logoUrl: "/assets/logo-jnt-cargo.png", 
        role: "Warehouse Staff (Daily Worker)", 
        company: "J&T Cargo – Warehouse JKT99A", 
        period: "Jan 2023 - Aug 2023", 
        tasks: [
            "Carried out loading/unloading, sorting, and checking of inbound and outbound goods according to documentation and operational SOPs.", 
            "Accurately and quickly input shipment data into the Warehouse Management System (WMS) to ensure real-time tracking and zero discrepancies.", 
            "Ensured the physical condition of parcels, packaging, and shipping documents met company quality standards before dispatch.", 
            "Collaborated with the Dispatch and Quality Control teams to maintain delivery SLAs and support smooth daily operations.", 
            "Contributed to workflow improvements and efforts to increase daily warehouse throughput and operational efficiency."
        ], 
        certificateUrl: "#" 
    },
    { 
        type: 'Daily Worker', 
        logoUrl: "/assets/logo-shopee-express.png", 
        role: "Warehouse Staff (Daily Worker)", 
        company: "Shopee Express – DC Cengkareng", 
        period: "Mar 2022 - Jan 2023", 
        tasks: [
            "Sorted and distributed packages between hubs accurately and on schedule to support smooth network operations.", 
            "Ensured all inbound and outbound package data was updated in real time in the logistics system with zero discrepancies.", 
            "Verified shipping documents together with the checker team and drivers to ensure accuracy before dispatch.", 
            "Supported the loading and unloading acceleration process, helping the team achieve daily operational targets.", 
            "Maintained consistent implementation of SOPs, 5S, and workplace orderliness in the distribution area to ensure a safe and efficient workflow."
        ], 
        certificateUrl: "#" 
    },
    { 
        type: 'Daily Worker', 
        logoUrl: "/assets/logo-shopee-express.png", 
        role: "Warehouse Staff (Daily Worker)", 
        company: "Shopee Express – DC Serpong", 
        period: "Jun 2021 - Mar 2022", 
        tasks: [
            "Sorted, scanned, and input package data into internal logistics systems with a high level of accuracy to ensure real-time tracking.", 
            "Managed inbound and outbound processes in accordance with Shopee Express distribution SOPs to maintain smooth operational flow.", 
            "Prepared daily Excel reports to monitor warehouse volume, throughput, and overall performance metrics.", 
            "Coordinated with supervisors and operational teams to support efficient distribution and achieve daily targets.", 
            "Implemented OHS and 5S principles, ensuring workplace safety, cleanliness, and organized storage areas."
        ], 
        certificateUrl: "#" 
    }
];

const orgExperiences = [
    { logoUrl: "/assets/logo-himsisfo.png", company: "HIMSISFO FAKULTAS ILMU KOMPUTER UMB", role: "Staff of Infrastructure and Facilities Division", period: "Jan 2024 - Aug 2025", tasks: ["Coordinated facilities and infrastructure support, ensuring 90% operational efficiency.", "Planned and managed infrastructure for events, contributing to a 95% successful execution rate.", "Collaborated with the team to maintain facilities, reducing maintenance disruptions by 40%."], certificateUrl: "#" },
    { logoUrl: "/assets/logo-himsisfo.png", company: "HIMSISFO FAKULTAS ILMU KOMPUTER UMB", role: "Daily Management Board (BPH) – Treasurer", period: "Jan 2023 - Jul 2023", tasks: ["Planned and allocated the annual budget, ensuring 95% budget efficiency.", "Recorded and tracked income & expenses, reducing financial discrepancies by 30%.", "Generated monthly financial reports, improving transparency and accountability by 40%."], certificateUrl: "#" }
];
const projects = [
    { category: 'ERP', status: 'Completed', imageUrl: "/assets/proyek-erp-remas.jpg", title: "Desktop ERP Application (REMAS)", description: "Developed a comprehensive ERP system for PT Arai Rubber Seal Indonesia, integrating multiple departments including Sales, Production, and Finance. Built with C# and Visual Studio.", githubUrl: "https://github.com/Ranggaallifyann", resultUrl: "https://github.com/Ranggaallifyann" },
    { category: 'Machine Learning', status: 'Completed', imageUrl: "/assets/proyek-prediksi-gempa.jpg", title: "Earthquake Prediction Model", description: "A machine learning model to predict earthquake magnitudes in Indonesia using Random Forest and Neural Networks. The project involved heavy data preprocessing and spatial analysis.", githubUrl: "#", resultUrl: "#" },
    { category: 'Data Analysis', status: 'Completed', imageUrl: "/assets/proyek-analisis-ba.jpg", title: "British Airways Customer Review Analysis", description: "A data science project involving web scraping and predictive modeling to derive insights from customer reviews and improve overall customer experience and business strategies.", githubUrl: "#", resultUrl: "#" }
];
const hardSkills = [
    { name: "Microsoft Word", logo: "https://img.icons8.com/color/48/000000/word.png" },
    { name: "Microsoft Excel", logo: "https://img.icons8.com/color/48/000000/ms-excel.png" },
    { name: "Microsoft PowerPoint", logo: "https://img.icons8.com/color/48/000000/powerpoint.png" },
    { name: "SQL (MySQL, PostgreSQL)", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
    { name: "Power BI", logo: "https://img.icons8.com/color/48/000000/power-bi.png" },
    { name: "Looker Studio", logo: "https://img.icons8.com/color/48/000000/google-data-studio.png" },
    { name: "Google Colaboratory", logo: "https://img.icons8.com/color/48/000000/google-colab.png" },
    { name: "Visual Studio", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/visualstudio/visualstudio-plain.svg" },
    { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" },
    { name: "ERP & System Development (C#)", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" },
    { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
    { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
    { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
    { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
    { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "Laravel", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" },
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
    { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
    { name: "SAP", logo: "/assets/sap.png" },
    { name: "Odoo", logo: "/assets/odoo.png" },
    { name: "Accurate", logo: "/assets/accurate.png" },
];
const softSkills = ["Creative & Critical Thinking", "Problem Solving", "Teamwork & Collaboration", "Communication", "Leadership", "Adaptability", "Time Management", "Work Under Pressure"];
const certifications = [
    { category: 'Business', logoUrl: "/assets/sertifikat-business-analyst.jpg", name: "Business Analyst Certification", issuer: "Udemy", year: "2025", url: "#" }, 
    { category: 'Data Science', logoUrl: "/assets/sertifikat-data-science.jpg", name: "Data Science Mastery", issuer: "Udemy", year: "2025", url: "#" }, 
    { category: 'Data Science', logoUrl: "/assets/sertifikat-dsa.jpg", name: "Data Structures & Algorithms", issuer: "Udemy", year: "2025", url: "#" }, 
    { category: 'Data Science', logoUrl: "/assets/sertifikat-forage-ba.jpg", name: "Data Science Job Simulation", issuer: "Forage", year: "2025", url: "#" }, 
    { category: 'Cloud', logoUrl: "/assets/sertifikat-aws.jpg", name: "AWS Cloud Practitioner", issuer: "Dicoding", year: "2024", url: "#" }, 
    { category: 'Data Science', logoUrl: "/assets/sertifikat-oracle-sql.jpg", name: "Database Design & SQL", issuer: "Oracle", year: "2023", url: "#" }
];

// --- DATA FOR GALLERY SECTION (English & simplified) ---
const galleryItems = [
    { 
        id: 1, 
        title: "Logistics Process Flowchart", 
        description: "Documenting the end-to-end WMS process flow for inbound, storage, and outbound activities.", 
        year: "2025", 
        imageUrl: "/assets/gallery-logistics-flow.jpg" 
    },
    { 
        id: 2, 
        title: "ERP Sales Module UI/UX Design", 
        description: "Figma prototype for the ERP Sales Module, focusing on user-friendly quotation and sales order management.", 
        year: "2024", 
        imageUrl: "/assets/gallery-erp-figma.jpg" 
    },
    { 
        id: 3, 
        title: "Sales Performance Dashboard (PBI)", 
        description: "Sales performance dashboard visualization developed using Power BI, incorporating custom measures and KPIs.", 
        year: "2025", 
        imageUrl: "/assets/gallery-powerbi-dash.jpg" 
    },
    { 
        id: 4, 
        title: "HIMSISFO Team Event", 
        description: "Team collaboration photo during a HIMSISFO event, demonstrating teamwork and logistical support.", 
        year: "2024", 
        imageUrl: "/assets/gallery-team-himsisfo.jpg" 
    },
    { 
        id: 5, 
        title: "Warehouse WMS Flowchart", 
        description: "Detailed flowchart mapping WMS integration points for inventory accuracy.", 
        year: "2025", 
        imageUrl: "/assets/gallery-logistics-flow-2.jpg" 
    },
    { 
        id: 6, 
        title: "Database Schema Design", 
        description: "ERD and schema design for the ERP application's main database.", 
        year: "2024", 
        imageUrl: "/assets/gallery-erp-schema.jpg" 
    },
];

const quote = { text: "The beautiful thing about learning is that nobody can take it away from you.", author: "B.B. King" };

// --- CUSTOM HOOKS ---
const useOnScreen = (options) => {
    const ref = useRef(null);
    const [isIntersecting, setIntersecting] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => setIntersecting(entry.isIntersecting), options);
        if (ref.current) observer.observe(ref.current);
        return () => { if (ref.current) observer.unobserve(ref.current); };
    }, [ref, options]);
    return [ref, isIntersecting];
};

const useTypingEffect = (text, duration) => {
    const [typedText, setTypedText] = useState('');
    useEffect(() => {
        if (text) {
            let i = 0;
            const interval = setInterval(() => {
                setTypedText(text.slice(0, i));
                i++;
                if (i > text.length) clearInterval(interval);
            }, duration / text.length);
            return () => clearInterval(interval);
        }
    }, [text, duration]);
    return typedText;
};

// --- INTERACTIVE & UI COMPONENTS ---

const AnimatedSection = ({ children, id }) => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    return (
        <section ref={ref} id={id} className={`py-20 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="max-w-4xl mx-auto px-6 lg:px-8">{children}</div>
        </section>
    );
};

const SectionTitle = ({ children }) => (
    <h2 className="text-3xl md:text-4xl font-bold mb-12 relative text-gray-800 dark:text-white group">
        {children}
        <span className="absolute bottom-[-10px] left-0 w-1/3 h-1 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full transition-all duration-500 group-hover:w-full"></span>
    </h2>
);

const FilterButtons = ({ categories, selected, setSelected }) => (
    <div className="flex flex-wrap gap-2 mb-8">
        {categories.map(category => (
            <button key={category} onClick={() => setSelected(category)} className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-200 border ${selected === category ? 'bg-gray-800 dark:bg-gray-200 text-white dark:text-black border-gray-800 dark:border-gray-200' : 'bg-white/40 dark:bg-black/20 border-white/30 dark:border-white/10 text-gray-700 dark:text-gray-300 hover:bg-white/80 dark:hover:bg-black/30'}`}>
                {category}
            </button>
        ))}
    </div>
);

const Badge = ({ text, className }) => <span className={`absolute top-4 right-4 text-xs font-bold uppercase px-2 py-1 rounded-full ${className}`}>{text}</span>;

// Custom Pagination Button Component for Reusability (Synchronized Design)
const PaginationButton = ({ disabled, onClick, children }) => (
    <button 
        disabled={disabled} 
        onClick={onClick} 
        className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 transition-colors duration-200 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-300 dark:hover:bg-gray-600"
    >
        {children}
    </button>
);


const ExperienceCard = ({ logoUrl, company, role, period, tasks, type, certificateUrl }) => (
    <div className="group relative flex gap-6 mb-8 p-6 bg-white/40 dark:bg-black/20 border border-white/30 dark:border-white/10 rounded-2xl transition-all duration-300 backdrop-blur-md shadow-lg hover:shadow-gray-500/10 dark:hover:shadow-gray-400/10 hover:border-white/60 dark:hover:border-white/20">
        {type && <Badge text={type} className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200" />}
        <div className="hidden sm:block">
            <img src={logoUrl} alt={`${company} logo`} className="w-16 h-16 rounded-lg object-contain bg-white p-1 shadow-md transition-transform duration-300 group-hover:scale-110" />
        </div>
        <div className="flex-1">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
                <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{role}</h3>
                    <p className="text-gray-800 dark:text-gray-200">{company}</p>
                </div>
                <p className="text-sm text-gray-600/80 dark:text-gray-300/70 mt-1 sm:mt-0">{period}</p>
            </div>
            <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1 mt-4">
                {tasks.map((task, index) => <li key={index}>{task}</li>)}
            </ul>
            {certificateUrl && certificateUrl !== '#' && (
                <a 
                    href={certificateUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gray-800 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 p-2 bg-gray-100/50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                    <ClipboardListIcon className="w-4 h-4"/> View Document
                </a>
            )}
        </div>
    </div>
);

const ProjectCard = ({ imageUrl, title, description, githubUrl, resultUrl, category, status }) => (
    <div className="bg-white/40 dark:bg-black/20 border border-white/30 dark:border-white/10 rounded-2xl overflow-hidden group transition-all duration-300 backdrop-blur-md shadow-lg hover:shadow-gray-500/20 dark:hover:shadow-gray-400/20 flex flex-col hover:-translate-y-2">
        <div className="relative aspect-video w-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
            <img src={imageUrl} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                 <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/80 dark:bg-black/50 rounded-full text-gray-800 dark:text-white transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-100"><GithubIcon className="w-6 h-6" /></a>
                 <a href={resultUrl} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/80 dark:bg-black/50 rounded-full text-gray-800 dark:text-white transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-200"><ExternalLinkIcon className="w-6 h-6" /></a>
            </div>
        </div>
        <div className="p-6 flex flex-col flex-grow">
            <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
                <div className="flex gap-2">
                    <span className="text-xs font-semibold bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded-full">{category}</span>
                    <span className={`text-xs font-semibold px-2 py-1 rounded-full ${status === 'Completed' ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200' : 'bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200'}`}>{status}</span>
                </div>
            </div>
            <p className="text-gray-800/90 dark:text-gray-200/90 mb-4 flex-grow">{description}</p>
        </div>
    </div>
);

const GalleryCard = ({ imageUrl, title, description, year, onClick }) => (
    <button onClick={onClick} className="text-left group block w-full border border-white/30 dark:border-white/10 rounded-2xl overflow-hidden transition-all duration-300 backdrop-blur-md shadow-lg hover:shadow-gray-500/20 dark:hover:shadow-gray-400/20 flex flex-col hover:-translate-y-1">
        <div className="relative aspect-video w-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
            <img src={imageUrl} alt={title} className="w-full h-full object-cover transition-transform duration-500" />
            
            {/* INI YANG SAYA HAPUS: TEKS GANDA DI ATAS GAMBAR */}
            {/* Ini adalah label tahun yang tipis di sudut kiri atas. */}
            <span className="absolute top-0 left-0 bg-black/50 text-white text-xs font-bold px-3 py-1 rounded-br-lg z-10">{year}</span>
        </div>
        <div className="p-4 flex flex-col">
            <div className="flex justify-between items-start mb-2">
                {/* INI YANG MUNCUL LAGI DI DALAM KARTU (Judul Utama Bold) */}
                <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight pr-2 text-left">{title}</h3>
            </div>
            {/* Description is now the only secondary text block */}
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2 text-left">{description}</p>
        </div>
    </button>
);


const DocumentCard = ({ url, icon, name, description }) => (
    <a href={url} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 p-6 bg-white/40 dark:bg-black/20 border border-white/30 dark:border-white/10 rounded-2xl transition-all duration-300 backdrop-blur-md shadow-lg hover:shadow-gray-500/10 dark:hover:shadow-gray-400/10 hover:border-white/60 dark:hover:border-white/20 hover:-translate-y-1">
        <div className="p-3 rounded-full bg-gray-800 dark:bg-gray-200 text-white dark:text-black transition-transform duration-300 group-hover:scale-110">
            {icon}
        </div>
        <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:underline">{name}</h3>
            {/* Description is now explicitly empty based on user request */}
        </div>
        <ExternalLinkIcon className="w-5 h-5 ml-auto text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
    </a>
);

const CertificateCard = ({ logoUrl, name, url, onClick }) => (
    <button onClick={onClick} className="text-left group block border border-white/30 dark:border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:border-white/50 dark:hover:border-white/20 backdrop-blur-md shadow-lg hover:-translate-y-1">
        <div className="aspect-video bg-slate-100/50 dark:bg-black/10">
             <img src={logoUrl} alt={name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
        </div>
        <div className="p-4 bg-white/40 dark:bg-black/20">
            <h4 className="font-bold text-base leading-tight truncate text-center text-gray-900 dark:text-gray-100">{name}</h4>
        </div>
    </button>
);

// Renamed modal to be more general for Certs and Gallery
const ImagePreviewModal = ({ isOpen, onClose, imageUrl }) => {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 bg-black/70 z-[100] flex items-center justify-center p-4" onClick={onClose}>
            <div className="relative max-w-4xl max-h-[90vh]" onClick={e => e.stopPropagation()}>
                <img src={imageUrl} alt="Preview" className="w-full h-full object-contain" />
                <button onClick={onClose} className="absolute -top-4 -right-4 bg-white text-black rounded-full p-2 shadow-xl hover:bg-gray-100 transition-colors">
                    <XIcon className="w-6 h-6" />
                </button>
            </div>
        </div>
    );
};


const ThemeToggle = ({ theme, setTheme }) => {
    const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');
    return (
        <button onClick={toggleTheme} className="fixed top-6 right-6 z-[100] p-2 rounded-full bg-white/50 dark:bg-black/20 backdrop-blur-md border border-white/30 dark:border-white/10 text-gray-800 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors" aria-label="Toggle theme">
            {theme === 'light' ? <MoonIcon className="w-5 h-5" /> : <SunIcon className="w-5 h-5" />}
        </button>
    );
};

// --- MAIN APP COMPONENT ---

export default function App() {
    const [activeSection, setActiveSection] = useState('about');
    const [theme, setTheme] = useState('light');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    // State for filters & modals
    const [workFilter, setWorkFilter] = useState('All');
    const [certFilter, setCertFilter] = useState('All');
    const [certPage, setCertPage] = useState(1);
    const [galleryPage, setGalleryPage] = useState(1); 
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null); // Changed from selectedCert to selectedImage
    
    const certsPerPage = 4;
    const galleryPerPage = 4; 

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        setTheme(savedTheme);
    }, []);

    useEffect(() => {
        document.documentElement.classList.toggle('dark', theme === 'dark');
        localStorage.setItem('theme', theme);
    }, [theme]);
    
    const sections = ['about', 'work', 'projects', 'skills', 'organization', 'certs', 'gallery', 'documents', 'contact'];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    // Adjust threshold for better detection
                    if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: '-30% 0px -70% 0px' }
        );
        sections.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });
        return () => sections.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.unobserve(el);
        });
    }, []);
    
    const navLinks = [
        { id: 'about', label: 'About', icon: <UserIcon className="w-5 h-5" /> },
        { id: 'work', label: 'Work', icon: <BriefcaseIcon className="w-5 h-5" /> },
        { id: 'projects', label: 'Projects', icon: <CodeIcon className="w-5 h-5" /> },
        { id: 'skills', label: 'Skills', icon: <SparklesIcon className="w-5 h-5" /> },
        { id: 'organization', label: 'Organization', icon: <UsersIcon className="w-5 h-5" /> },
        { id: 'certs', label: 'Certs', icon: <AwardIcon className="w-5 h-5" /> },
        { id: 'gallery', label: 'Gallery', icon: <ImageIcon className="w-5 h-5" /> }, 
        { id: 'documents', label: 'Documents', icon: <FileTextIcon className="w-5 h-5" /> }, 
        { id: 'contact', label: 'Contact', icon: <SendIcon className="w-5 h-5" /> },
    ];
    
const HighlightedBio = () => {
    const keywords = [
        "Business Intelligence",
        "Data Analyst",
        "ERP",
        "Supply Chain",
        "SQL",
        "Python",
        "Power BI",
        "ETL",
        "AI"
    ];

    const escapeForRegex = (s) => s.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
    const escaped = keywords.map(escapeForRegex).sort((a, b) => b.length - a.length);
    const pattern = new RegExp(`(${escaped.join("|")})`, "gi");
    const bioParts = personalInfo.bio.split(pattern);
    const lowerKeywords = keywords.map(k => k.toLowerCase());

    return (
        <p className="mb-6 text-lg">
            {bioParts.map((part, index) =>
                lowerKeywords.includes(part?.toLowerCase?.()?.trim?.()) ? (
                    <span key={index} className="font-bold text-gray-800 dark:text-gray-200">
                        {part}
                    </span>
                ) : (
                    <span key={index}>{part}</span>
                )
            )}
        </p>
    );
};

    const filteredCerts = certifications.filter(cert => certFilter === 'All' || cert.category === certFilter);
    const totalCertPages = Math.ceil(filteredCerts.length / certsPerPage);
    const displayedCerts = filteredCerts.slice((certPage - 1) * certsPerPage, certPage * certsPerPage);

    // Gallery Pagination Logic
    const totalGalleryPages = Math.ceil(galleryItems.length / galleryPerPage);
    const displayedGallery = galleryItems.slice((galleryPage - 1) * galleryPerPage, galleryPage * galleryPerPage);


    const quoteText = useTypingEffect(quote.text, 2000);

    return (
        <div className="relative min-h-screen font-sans leading-relaxed bg-slate-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300">
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-gray-100 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>

            <ImagePreviewModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} imageUrl={selectedImage} />
            
            <div className="relative z-10">
                <ThemeToggle theme={theme} setTheme={setTheme} />
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden fixed top-6 left-6 z-[100] p-2 rounded-full bg-white/50 dark:bg-black/20 backdrop-blur-md border border-white/30 dark:border-white/10 text-gray-800 dark:text-gray-200">
                    {isMenuOpen ? <XIcon className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
                </button>

                {/* Mobile Nav */}
                <div className={`fixed inset-0 z-50 bg-gray-50/80 dark:bg-gray-900/80 backdrop-blur-lg lg:hidden transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                    <nav className="flex flex-col items-center justify-center h-full">
                         <ul className="space-y-4 text-center">
                            {navLinks.map(link => (
                                 <li key={link.id}>
                                     <a href={`#${link.id}`} onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 px-6 py-3 text-2xl font-bold text-gray-800 dark:text-gray-200">
                                         {link.icon} {link.label}
                                     </a>
                                 </li>
                            ))}
                        </ul>
                    </nav>
                </div>
                
                <div className="lg:flex">
                    {/* --- LEFT SIDE: HEADER & NAV --- */}
                    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-2/5 lg:flex-col lg:justify-between lg:py-24 px-6 md:px-12">
                        <div>
                            <div className="relative w-64 h-64 mb-8 group mx-auto lg:mx-0">
                                <div className="absolute -inset-2 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full blur-xl opacity-60 group-hover:opacity-80 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                                <img 
                                    src={personalInfo.profilePictureUrl} 
                                    alt={personalInfo.name}
                                    className="relative w-full h-full object-cover"
                                    style={{ filter: 'drop-shadow(0 0 15px rgba(0,0,0,0.5))' }}
                                />
                            </div>
                            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">{personalInfo.name}</h1>
                            <p className="mt-3 text-lg font-medium text-gray-700 dark:text-gray-300">Bachelor of Information Systems | Business Intelligence Analyst | Supply Chain & Operations Enthusiast</p>
                            <div className="flex items-center gap-2 mt-4 text-gray-600 dark:text-gray-400 transition-colors duration-300 hover:text-gray-900 dark:hover:text-white">
                               <MapPinIcon className="w-5 h-5 flex-shrink-0" />
                                <span>{personalInfo.location}</span>
                            </div>
                            
                            <nav className="hidden lg:block mt-12" aria-label="In-page jump links">
                                <ul className="space-y-2">
                                    {navLinks.map(link => (
                                         <li key={link.id}>
                                             <a className={`group flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ease-in-out transform hover:-translate-y-0.5 ${activeSection === link.id ? 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white font-bold shadow-md' : 'text-gray-500 dark:text-gray-400 hover:bg-white/60 dark:hover:bg-black/20 hover:text-gray-900 dark:hover:text-white'}`} href={`#${link.id}`}>
                                                 <span className={`transition-transform duration-200 ${activeSection === link.id ? 'scale-110' : 'group-hover:scale-110'}`}>{link.icon}</span>
                                                 <span className="tracking-wide">{link.label}</span>
                                             </a>
                                         </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                        <div className="hidden lg:block mt-8">
                            {/* Social links are now in the footer */}
                        </div>
                    </header>

                    {/* --- RIGHT SIDE: MAIN CONTENT --- */}
                    <main className="lg:w-3/5">
                        <AnimatedSection id="about">
                            <div className="lg:hidden mb-16"><SectionTitle>About Me</SectionTitle></div>
                            <HighlightedBio />
                            <div className="bg-white/40 dark:bg-black/20 p-6 rounded-2xl border border-white/30 dark:border-white/10 backdrop-blur-md shadow-lg flex items-center gap-6">
                                <img src={education.logoUrl} alt="University Logo" className="w-16 h-16 rounded-lg object-contain bg-white p-1 shadow-md" />
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Education</h3>
                                    <h4 className="font-bold text-gray-900 dark:text-white">{education.university}</h4>
                                    <p className="text-sm text-gray-600/80 dark:text-gray-300/70">{education.period}</p>
                                    <p className="mt-1">{education.degree}</p>
                                    <p className="text-sm text-gray-700 dark:text-gray-300 mt-2 italic"><strong>Thesis:</strong> {education.thesis}</p>
                                </div>
                            </div>
                        </AnimatedSection>
                        
                        <AnimatedSection id="work">
                            <SectionTitle>Work Experience</SectionTitle>
                            <FilterButtons 
                                categories={['All', 'Professional', 'Internship', 'Thesis','Daily Worker']} 
                                selected={workFilter} 
                                setSelected={setWorkFilter} 
                            />
                            {workExperiences.filter(exp => workFilter === 'All' || exp.type === workFilter).map((exp, index) => <ExperienceCard key={index} {...exp} />)}
                        </AnimatedSection>

                        <AnimatedSection id="projects">
                            <SectionTitle>Projects</SectionTitle>
                            <div className="grid md:grid-cols-1 gap-8">
                                {projects.map((proj, index) => <ProjectCard key={index} {...proj} />)}
                            </div>
                        </AnimatedSection>
                        
                        <AnimatedSection id="skills">
                            <SectionTitle>Core Skills</SectionTitle>
                            <div className="mb-12">
                                <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">Hard Skills & Tools</h3>
                                <div className="flex flex-wrap items-center justify-center gap-8">
                                    {hardSkills.map((skill, index) => (
                                        <div key={index} className="flex flex-col items-center justify-center gap-2 text-center w-24">
                                            <img src={skill.logo} alt={skill.name} className="h-10 w-10 object-contain"/>
                                            <span className="text-xs text-gray-700 dark:text-gray-300">{skill.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">Soft Skills</h3>
                                <div className="flex flex-wrap gap-3">
                                    {softSkills.map((skill, index) => (
                                        <span key={index} className="bg-gray-100/50 dark:bg-gray-800/20 text-gray-800 dark:text-gray-200 text-sm font-medium px-4 py-2 rounded-full border border-gray-200/50 dark:border-gray-700/50">{skill}</span>
                                    ))}
                                </div>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection id="certs">
                            <SectionTitle>Licenses & Certifications</SectionTitle>
                            <FilterButtons categories={['All', 'Data Science', 'Cloud', 'Business']} selected={certFilter} setSelected={setCertFilter} />
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {displayedCerts.map((cert, index) => 
                                    <CertificateCard 
                                        key={index} 
                                        {...cert} 
                                        onClick={() => {
                                            setSelectedImage(cert.logoUrl);
                                            setIsModalOpen(true);
                                        }}
                                    />
                                )}
                            </div>
                             {totalCertPages > 1 && (
                                 <div className="flex justify-center items-center gap-4 mt-8">
                                     <PaginationButton disabled={certPage === 1} onClick={() => setCertPage(p => p - 1)}>&larr;</PaginationButton>
                                     <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                                         Page {certPage} of {totalCertPages}
                                     </span>
                                     <PaginationButton disabled={certPage === totalCertPages} onClick={() => setCertPage(p => p + 1)}>&rarr;</PaginationButton>
                                 </div>
                             )}
                        </AnimatedSection>
                        
                        {/* --- NEW SECTION: GALLERY (Simplified & Paginated) --- */}
                        <AnimatedSection id="gallery">
                            <SectionTitle>Gallery & Visuals</SectionTitle>
                            <div className="grid md:grid-cols-2 gap-6">
                                {displayedGallery.map((item) => (
                                    <GalleryCard 
                                        key={item.id} 
                                        {...item} 
                                        onClick={() => {
                                            setSelectedImage(item.imageUrl);
                                            setIsModalOpen(true);
                                        }}
                                    />
                                ))}
                            </div>
                            {totalGalleryPages > 1 && (
                                <div className="flex justify-center items-center gap-4 mt-8">
                                    <PaginationButton disabled={galleryPage === 1} onClick={() => setGalleryPage(p => p - 1)}>&larr;</PaginationButton>
                                    <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                                        Page {galleryPage} of {totalGalleryPages}
                                    </span>
                                    <PaginationButton disabled={galleryPage === totalGalleryPages} onClick={() => setGalleryPage(p => p + 1)}>&rarr;</PaginationButton>
                                </div>
                            )}
                            {/* Placeholder text removed */}
                        </AnimatedSection>

                        {/* --- NEW SECTION: DOCUMENTS (Simplified Descriptions) --- */}
                        <AnimatedSection id="documents">
                            <SectionTitle>Downloadable Documents</SectionTitle>
                            <div className="grid sm:grid-cols-1 gap-6">
                                <DocumentCard 
                                    url={personalInfo.cvUrl} 
                                    icon={<FileTextIcon className="w-6 h-6"/>} 
                                    name="Curriculum Vitae (CV)" 
                                    description="" 
                                />
                                <DocumentCard 
                                    url={personalInfo.sklUrl} 
                                    icon={<GraduationCapIcon className="w-6 h-6"/>} 
                                    name="Certificate of Graduation (SKL)" 
                                    description="" 
                                />
                                <DocumentCard 
                                    url={personalInfo.transcriptUrl} 
                                    icon={<ClipboardListIcon className="w-6 h-6"/>} 
                                    name="Academic Transcript" 
                                    description="" 
                                />
                            </div>
                        </AnimatedSection>


                        <AnimatedSection id="contact">
                            <SectionTitle>Get In Touch</SectionTitle>
                            <p className="mb-8 max-w-xl text-lg text-gray-700 dark:text-gray-300">
                                I'm currently seeking new opportunities and am open to collaboration. My inbox is always open, whether you have a question or just want to say hi, I'll try my best to get back to you!
                            </p>
                             <div className="flex flex-wrap gap-4 items-center mb-12">
                                <a href={`mailto:${personalInfo.contacts.find(c=>c.name==='Email').href}`} className="inline-block text-lg font-semibold bg-gray-800 hover:bg-gray-900 text-white px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-gray-500/30">Say Hello</a>
                                
                                {/* Direct WhatsApp Link/Button with correct logo */}
                                <a href={personalInfo.whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-lg font-semibold bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-green-500/30">
                                    <WhatsappLogo className="w-6 h-6 text-white"/> Contact via WhatsApp
                                </a>
                            </div>
                        </AnimatedSection>

                        <footer className="text-center text-sm text-gray-600/80 dark:text-gray-300/70 py-12 px-6">
                            <blockquote className="text-lg italic text-gray-800 dark:text-gray-200 mb-2 min-h-[2.5em]">“{quoteText}”
                                <cite className="block text-gray-500 dark:text-gray-400 mt-2 not-italic">— {quote.author}</cite>
                            </blockquote>
                             <div className="flex justify-center items-center flex-wrap mt-8 gap-x-6 gap-y-4">
                                {personalInfo.contacts.map((contact) => (
                                     <a key={contact.name} href={contact.href} target="_blank" rel="noopener noreferrer" className="block text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all duration-300 hover:scale-110" title={contact.name}>
                                         <span className="sr-only">{contact.name}</span>
                                         {contact.icon}
                                     </a>
                                ))}
                                {/* Direct WhatsApp link in footer, using the correct logo */}
                                <a href={personalInfo.whatsappLink} target="_blank" rel="noopener noreferrer" title="WhatsApp" className="block text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-all duration-300 hover:scale-110">
                                    <WhatsappLogo className="w-6 h-6" /> 
                                </a>
                            </div>
                            <p className="mt-8">&copy; {new Date().getFullYear()} Rangga Allifyan Syahputra. Built With thoughts, energy, and effort. Bismillah Offering.</p>
                        </footer>
                    </main>
                </div>
            </div>

            <style>{`
                @keyframes marquee { 0% { transform: translateX(0%); } 100% { transform: translateX(-50%); } }
                .animate-marquee { animation: marquee 40s linear infinite; }
                @keyframes tilt { 0%, 100% { transform: rotate(0deg); } 50% { transform: rotate(2deg); } }
                .animate-tilt { animation: tilt 10s infinite linear; }
                @media (prefers-reduced-motion: reduce) { .animate-marquee, .animate-tilt { animation: none; } }
            `}</style>
        </div>
    );
}