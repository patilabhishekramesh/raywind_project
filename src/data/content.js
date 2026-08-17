export const MARQUEE_ITEMS = [
  "SUSTAINABLE FUTURE",
  "CLEAN ENERGY",
  "SOLAR POWER",
  "WIND ENERGY",
  "ALIBAG",
  "RAIGAD",
];

export const FEATURED_SERVICES = [
  {
    title: "Residential Solar",
    description:
      "Smart solar systems for homeowners to cut electricity bills and add long-term value with clean power.",
    icon: "home",
    service: "Rooftop Solar",
  },
  {
    title: "Commercial & Industrial",
    description:
      "High-performance plants for businesses and factories seeking lower operating costs and energy independence.",
    icon: "building",
    service: "Commercial Solar",
  },
  {
    title: "Solar Installation",
    description:
      "Professional mounting, wiring and commissioning for safe, reliable system performance.",
    icon: "tool",
    service: "Solar Panel Installation",
  },
  {
    title: "Wind & Electrical",
    description:
      "Wind energy, electrical fitting and maintenance — scalable solutions that grow with your site.",
    icon: "wind",
    service: "Windmill Solutions",
  },
];

export const STATS = [
  { value: 100, suffix: "+", label: "Projects Delivered" },
  { value: 5, suffix: "+", label: "Years Experience" },
  { value: "24/7", suffix: "", label: "Support Coverage", numeric: false },
  { value: 100, suffix: "%", label: "Customer Focus" },
];

export const ABOUT_POINTS = [
  {
    title: "Renewable energy expertise",
    text: "Solar and wind systems sized for Indian load profiles, tariffs and site conditions.",
  },
  {
    title: "Professional installation",
    text: "Documented mounting, cabling and commissioning by trained field teams.",
  },
  {
    title: "Quality components",
    text: "Tier-1 modules, certified inverters and protection gear with traceable warranties.",
  },
  {
    title: "Skilled technicians",
    text: "Electrical and mechanical crews who work to safety and grid-code standards.",
  },
  {
    title: "Long-term maintenance",
    text: "Scheduled servicing, performance checks and rapid response when output drops.",
  },
  {
    title: "Customer-focused solutions",
    text: "Designs for homes, shops, factories and campuses — not one-size-fits-all kits.",
  },
];

export const SERVICE_CATEGORIES = [
  { id: "solar", label: "Solar Solutions" },
  { id: "wind", label: "Wind Energy" },
  { id: "electrical", label: "Electrical" },
  { id: "more", label: "Many More" },
];

export const SERVICES = [
  {
    id: "on-grid-solar",
    title: "On-Grid Solar",
    category: "solar",
    description:
      "Reduce electricity costs with an efficient grid-connected solar power system designed for homes and businesses.",
    benefit: "Lower bills with net metering",
    image: "/images/rooftop.jpg",
    imageAlt: "Grid-connected rooftop solar array on an industrial building at sunrise",
  },
  {
    id: "off-grid-solar",
    title: "Off-Grid Solar",
    category: "solar",
    description:
      "Independent solar power with battery storage for sites where the grid is weak, distant or unreliable.",
    benefit: "Power without depending on the grid",
    image: "/images/panels.jpg",
    imageAlt: "Ground-mounted solar panels in open landscape",
  },
  {
    id: "hybrid-solar",
    title: "Hybrid Solar",
    category: "solar",
    description:
      "Solar, grid and battery working together so essential loads stay on during outages and peak tariff hours.",
    benefit: "Backup power with smarter energy use",
    image: "/images/commercial.jpg",
    imageAlt: "Hybrid renewable setup with solar panels and a wind turbine",
  },
  {
    id: "rooftop-solar",
    title: "Rooftop Solar",
    category: "solar",
    description:
      "Space-efficient rooftop systems for bungalows, apartments, shops and office buildings across the city.",
    benefit: "Use unused roof area productively",
    image: "/images/maintenance.jpg",
    imageAlt: "Technician placing a solar panel on a residential tiled roof",
  },
  {
    id: "commercial-solar",
    title: "Commercial Solar",
    category: "solar",
    description:
      "Rooftop and shed-mounted plants for offices, retail, warehouses and institutions with measurable payback.",
    benefit: "Predictable operating cost for business",
    image: "/images/farm.jpg",
    imageAlt: "Aerial view of a large commercial solar farm beside a service road",
  },
  {
    id: "industrial-solar",
    title: "Industrial Solar",
    category: "solar",
    description:
      "High-capacity plants for factories and MIDC units, designed around process loads and sanctioned demand.",
    benefit: "Offset heavy industrial consumption",
    image: "/images/solar-field.jpg",
    imageAlt: "Utility-scale solar farm with transmission lines on the horizon",
  },
  {
    id: "solar-installation",
    title: "Solar Panel Installation",
    category: "solar",
    description:
      "Complete installation — structure, modules, inverter, earthing and net-meter liaison — handed over ready to generate.",
    benefit: "Commissioned, tested and documented",
    image: "/images/install.jpg",
    imageAlt: "Two technicians lifting a solar panel into place on a rooftop",
  },
  {
    id: "solar-maintenance",
    title: "Solar Maintenance",
    category: "solar",
    description:
      "Cleaning, string checks, inverter health and performance reports so generation does not quietly decline.",
    benefit: "Protect output and warranty terms",
    image: "/images/engineer.jpg",
    imageAlt: "Solar technician in safety gear servicing panels on a commercial rooftop",
  },
  {
    id: "solar-upgrades",
    title: "Solar System Upgrades",
    category: "solar",
    description:
      "Add capacity, replace ageing inverters or introduce storage on an existing plant without wasting what already works.",
    benefit: "Extend the life of your investment",
    image: "/images/workers.jpg",
    imageAlt: "Overhead view of neatly aligned solar arrays on grass",
  },
  {
    id: "windmill-solutions",
    title: "Windmill Solutions",
    category: "wind",
    description:
      "Site assessment and system design for small and mid-scale wind where the resource and land use make sense.",
    benefit: "Wind sized to your location",
    image: "/images/wind.jpg",
    imageAlt: "Wind turbines in a golden field at sunset",
  },
  {
    id: "wind-installation",
    title: "Wind Energy Installation",
    category: "wind",
    description:
      "Foundation, tower, turbine and electrical interconnection handled as one coordinated installation programme.",
    benefit: "From civil work to grid connection",
    image: "/images/wind-close.jpg",
    imageAlt: "White wind turbines on rolling green hills",
  },
  {
    id: "wind-maintenance",
    title: "Wind Energy Maintenance",
    category: "wind",
    description:
      "Inspection, lubrication, electrical checks and performance tracking to keep turbines available through the year.",
    benefit: "Higher availability, fewer surprises",
    image: "/images/wind-close.jpg",
    imageAlt: "Wind farm across green hills under a wide sky",
  },
  {
    id: "electrical-fitting",
    title: "Electrical Fitting",
    category: "electrical",
    description:
      "Internal fittings, boards and final circuits installed to load, safety and aesthetic requirements of the space.",
    benefit: "Clean work, correctly rated circuits",
    image: "/images/electrical.jpg",
    imageAlt: "Electrician in safety gear working on an outdoor electrical box",
  },
  {
    id: "electrical-installation",
    title: "Electrical Installation",
    category: "electrical",
    description:
      "New electrical infrastructure for homes, commercial floors and plant rooms — designed, installed and tested.",
    benefit: "Ready for occupancy and inspection",
    image: "/images/electrical.jpg",
    imageAlt: "Technician installing electrical components on a wall",
  },
  {
    id: "electrical-maintenance",
    title: "Electrical Maintenance",
    category: "electrical",
    description:
      "Preventive checks, fault finding and repairs so lighting, power and plant circuits stay reliable.",
    benefit: "Fewer outages, safer switchgear",
    image: "/images/switchgear.jpg",
    imageAlt: "Industrial electrical motors and stainless piping in a plant room",
  },
  {
    id: "industrial-electrical",
    title: "Industrial Electrical Solutions",
    category: "electrical",
    description:
      "MCC, distribution, machine feeders and plant lighting built for continuous industrial duty.",
    benefit: "Engineered for factory loads",
    image: "/images/switchgear.jpg",
    imageAlt: "Industrial plant room with blue motors and process piping",
  },
  {
    id: "wiring-distribution",
    title: "Wiring & Distribution",
    category: "electrical",
    description:
      "Cabling, DB layout and load balancing from incoming supply to the last outlet — documented and labelled.",
    benefit: "Clear circuits, easier future work",
    image: "/images/landscape.jpg",
    imageAlt: "High-voltage transmission towers against a dawn sky",
  },
  {
    id: "electrical-inspection",
    title: "Electrical Inspection",
    category: "electrical",
    description:
      "Condition assessment, thermography where required, and a plain-language report of risks and recommended work.",
    benefit: "Know what needs attention first",
    image: "/images/electrical.jpg",
    imageAlt: "Electrician inspecting a wall-mounted electrical installation",
  },
  {
    id: "net-metering",
    title: "Net Metering Support",
    category: "more",
    description:
      "Application, documentation and follow-up with the DISCOM so exported solar units are credited correctly.",
    benefit: "Complete the paperwork, not just the plant",
    image: "/images/farm.jpg",
    imageAlt: "Large solar installation connected to surrounding infrastructure",
  },
  {
    id: "solar-water-heater",
    title: "Solar Water Heating",
    category: "more",
    description:
      "Domestic and institutional solar water-heating systems that cut LPG and electrical geyser use.",
    benefit: "Hot water with lower running cost",
    image: "/images/house-solar.jpg",
    imageAlt: "Solar collectors angled toward a bright sky",
  },
  {
    id: "ev-charging",
    title: "EV Charging Points",
    category: "more",
    description:
      "Home and workplace chargers planned with your electrical capacity — solar-ready where it makes sense.",
    benefit: "Charge vehicles on a prepared circuit",
    image: "/images/landscape.jpg",
    imageAlt: "Electrical grid infrastructure at twilight",
  },
  {
    id: "energy-audit",
    title: "Energy Audits",
    category: "more",
    description:
      "A practical review of consumption, tariff and load pattern before we recommend solar, storage or electrical work.",
    benefit: "Size the system to real numbers",
    image: "/images/engineer.jpg",
    imageAlt: "Engineer reviewing equipment on a solar installation",
  },
  {
    id: "earthing-lightning",
    title: "Earthing & Lightning Protection",
    category: "more",
    description:
      "Earthing pits, bonding and lightning protection coordinated with solar structures and building steel.",
    benefit: "Protect people, inverters and the building",
    image: "/images/solar-field.jpg",
    imageAlt: "Solar arrays with grid infrastructure in the distance",
  },
];

export const SOLAR_TYPES = [
  {
    id: "on-grid",
    title: "On-Grid Solar",
    serviceTitle: "On-Grid Solar",
    image: "/images/rooftop.jpg",
    imageAlt: "On-grid solar panels covering a commercial rooftop",
    summary:
      "Tied to the utility supply. Daytime generation offsets your consumption; surplus can be exported where net metering applies.",
    bestFor: ["Homes", "Shops", "Offices", "Businesses"],
    benefits: ["Lower electricity bills", "Grid-connected", "Cost-effective"],
  },
  {
    id: "off-grid",
    title: "Off-Grid Solar",
    serviceTitle: "Off-Grid Solar",
    image: "/images/panels.jpg",
    imageAlt: "Off-grid solar arrays in an open field",
    summary:
      "A standalone plant with batteries. Designed for locations with no grid, frequent failures, or a need to run independently.",
    bestFor: ["Remote locations", "Unreliable electricity", "Independent power needs"],
    benefits: ["Battery backup", "Energy independence", "Reliable power"],
  },
  {
    id: "hybrid",
    title: "Hybrid Solar",
    serviceTitle: "Hybrid Solar",
    image: "/images/commercial.jpg",
    imageAlt: "Hybrid solar and wind installation against a clear sky",
    summary:
      "Solar, grid and storage on one system. Keeps critical loads running in an outage and uses solar first when the grid is present.",
    bestFor: ["Homes", "Commercial properties", "Backup requirements"],
    benefits: ["Solar + grid + battery", "Backup power", "Better energy management"],
  },
];

export const WHY_US = [
  {
    title: "Quality Components",
    text: "Modules, inverters and protection devices selected for Indian heat, dust and voltage conditions.",
  },
  {
    title: "Professional Installation",
    text: "Structure, cabling and commissioning done to drawing — not improvised on the roof.",
  },
  {
    title: "Experienced Team",
    text: "Engineers and technicians who have delivered residential, commercial and industrial work.",
  },
  {
    title: "Transparent Pricing",
    text: "Itemised proposals covering equipment, civil, electrical and liaison — no hidden extras at handover.",
  },
  {
    title: "Reliable After-Sales Support",
    text: "A named contact after commissioning, not a generic ticket queue.",
  },
  {
    title: "Complete Maintenance",
    text: "Cleaning, electrical checks and performance reviews on a schedule you can plan around.",
  },
  {
    title: "Customized Solutions",
    text: "System size and topology follow your load, roof, tariff and backup need.",
  },
  {
    title: "Energy Cost Savings",
    text: "Designs aimed at a clear payback, then verified against actual generation.",
  },
];

export const PROCESS_STEPS = [
  {
    n: "01",
    title: "Consultation",
    text: "We understand your energy use, site constraints and what you want the system to achieve.",
    icon: "message",
  },
  {
    n: "02",
    title: "Site Assessment",
    text: "We review location, consumption, structure and electrical conditions before we lock a design.",
    icon: "search",
  },
  {
    n: "03",
    title: "Installation",
    text: "Professional installation, testing and commissioning — then a documented handover.",
    icon: "settings",
  },
  {
    n: "04",
    title: "Support & Maintenance",
    text: "Long-term servicing, performance checks and a team you can call when something needs attention.",
    icon: "shield",
  },
];

export const PROJECT_FILTERS = [
  "All",
  "Residential",
  "Commercial",
  "Industrial",
  "Solar",
  "Wind",
  "Electrical",
];

export const PROJECTS = [
  {
    name: "8 kW Rooftop Plant",
    location: "Alibag Town",
    type: "Residential",
    tags: ["Residential", "Solar"],
    description: "On-grid rooftop system for a bungalow, sized to daytime household and EV charging load.",
    image: "/images/maintenance.jpg",
    imageAlt: "Residential rooftop solar installation in progress",
  },
  {
    name: "120 kW Commercial Roof",
    location: "Nagaon, Alibag",
    type: "Commercial",
    tags: ["Commercial", "Solar"],
    description: "Shed-mounted plant for an IT campus cafeteria and common services block.",
    image: "/images/rooftop.jpg",
    imageAlt: "Commercial rooftop covered with solar panels at golden hour",
  },
  {
    name: "500 kW Industrial Array",
    location: "Pen Industrial Area",
    type: "Industrial",
    tags: ["Industrial", "Solar"],
    description: "Ground and rooftop mix offsetting machine-shop demand on a two-shift operation.",
    image: "/images/farm.jpg",
    imageAlt: "Aerial photograph of an industrial-scale solar farm",
  },
  {
    name: "25 kW Hybrid Home System",
    location: "Murud, Raigad",
    type: "Solar",
    tags: ["Residential", "Solar"],
    description: "Hybrid solar with battery backup for a hill residence with frequent feeder interruptions.",
    image: "/images/house-solar.jpg",
    imageAlt: "Solar panels with a wind turbine against a blue sky",
  },
  {
    name: "Site Wind Assessment & 50 kW",
    location: "Revdanda Coast",
    type: "Wind",
    tags: ["Wind", "Industrial"],
    description: "Small wind installation supporting a farm-processing unit with strong seasonal resource.",
    image: "/images/wind-close.jpg",
    imageAlt: "Wind turbines along a green ridgeline",
  },
  {
    name: "Plant Electrical Upgrade",
    location: "Khopoli, Raigad",
    type: "Electrical",
    tags: ["Electrical", "Industrial"],
    description: "Distribution boards, machine feeders and earthing refresh ahead of a solar interconnection.",
    image: "/images/switchgear.jpg",
    imageAlt: "Industrial electrical plant room with motors and process piping",
  },
];

export const TESTIMONIALS = [
  {
    name: "Anjali Deshpande",
    role: "Homeowner",
    location: "Alibag",
    rating: 5,
    quote:
      "The team was clear about what the roof could take and what the bill would look like after net metering. Installation finished in the window they gave us.",
  },
  {
    name: "R. Kulkarni",
    role: "Works Manager",
    location: "Pen, Raigad",
    rating: 5,
    quote:
      "We needed a plant that would sit with our sanctioned load, not a brochure number. Generation in the first quarter has been in line with the proposal.",
  },
  {
    name: "Meera Shah",
    role: "Retail Store Owner",
    location: "Nagaon Beach Road",
    rating: 4,
    quote:
      "Liaison for the net meter took longer than the install itself, but they stayed on it. Daytime units from the grid are visibly down.",
  },
  {
    name: "Vikram Patil",
    role: "Warehouse Operator",
    location: "Murud-Janjira",
    rating: 5,
    quote:
      "Shed structure and cabling were done properly — no loose conduits, labels on the DBs. Maintenance visits are scheduled, which we wanted.",
  },
];

export const FAQS = [
  {
    q: "What is an on-grid solar system?",
    a: "An on-grid system is connected to the electricity supply from your DISCOM. Solar power runs your loads first during the day. Surplus units can be exported and credited through net metering where it is available. It does not usually provide backup during a power cut unless a hybrid or battery system is added.",
  },
  {
    q: "What is the difference between on-grid and off-grid solar?",
    a: "On-grid systems use the utility as backup and are typically the most cost-effective where supply is reasonably reliable. Off-grid systems include batteries and can run without the grid — they cost more and must be sized to your storage need. Hybrid systems combine both: solar, grid and battery.",
  },
  {
    q: "How much does a solar installation cost?",
    a: "Cost depends on capacity (kW), module and inverter choice, structure type, cabling distance and whether storage is included. A typical residential rooftop and a 100 kW commercial plant are priced very differently. Share your monthly bill and roof type on WhatsApp and we will give a reasoned estimate.",
  },
  {
    q: "How much electricity can solar panels generate?",
    a: "In Maharashtra, a well-sited 1 kW rooftop system often generates in the region of 4 units per day on an annual average, with seasonal variation. Actual yield depends on orientation, shading, soiling and equipment. We estimate generation from your site, not a generic rule of thumb alone.",
  },
  {
    q: "How long does solar installation take?",
    a: "A straightforward home rooftop is often installed in a few days once material is on site. Commercial and industrial plants take longer because of structure, shutdown windows and statutory work. Net-meter processing by the DISCOM is a separate timeline we plan for up front.",
  },
  {
    q: "Do you provide solar maintenance?",
    a: "Yes. We offer cleaning, electrical inspection, inverter health checks and generation review. Maintenance can be on a visit basis or an annual plan, depending on plant size and how dusty the site is.",
  },
  {
    q: "Do you provide commercial and industrial solar solutions?",
    a: "Yes. We design and install for offices, retail, warehouses, institutions and factories — including higher-capacity plants, industrial electrical integration and documentation required for interconnection.",
  },
  {
    q: "Do you provide windmill installation and maintenance?",
    a: "Yes. We assess whether wind is viable at the site, then handle installation and ongoing maintenance for small and mid-scale wind where the resource supports it. Not every plot is a wind site; we will say so if solar is the better fit.",
  },
  {
    q: "Do you provide electrical installation services?",
    a: "Yes. Alongside solar and wind we undertake electrical fitting, installation, maintenance, industrial distribution work, wiring and inspection — including work needed to prepare a site for a renewable plant.",
  },
  {
    q: "How can I request a quotation?",
    a: "Use WhatsApp for the fastest response, call us, or send the contact form. Share your location, monthly bill or sanctioned load, and whether the site is a home, shop or industry. We revert with questions if anything is missing, then a quotation.",
  },
];

export const FORM_SERVICES = [
  "On-Grid Solar",
  "Off-Grid Solar",
  "Hybrid Solar",
  "Commercial / Industrial Solar",
  "Wind Energy",
  "Solar Maintenance",
  "Electrical Services",
  "Energy Audit / Other",
];
