
export interface SubMenuItem {
    id: string;
    label: string;
    href: string;
    subs?: SubMenuItem[];
}

export interface MenuItem {
    id: string;
    label: string;
    href: string;
    subs?: SubMenuItem[];
}

export interface BrandItem {
    brand: string;
    href: string;
    items: MenuItem[];
}

export const ABOUT_IMG = '' // Updated
export const ABOUT_IMG_2 = '' // Updated

// Brand Structure Definition for Top-Level Navigation
export const BRANDS = {
    vaisala: {
        label: 'VAISALA',
        desc: 'World leader in environmental and industrial measurement.',
        categories: ['humidity', 'dewpoint', 'co2', 'oil', 'barometer', 'weather', 'h2o2'],
        logo: '/templates/hs-tech/images/brands/vaisala.svg'
    },
    setra: {
        label: 'SETRA',
        desc: 'Premium pressure transducers and current switches.',
        categories: ['setra'],
        logo: '/templates/hs-tech/images/brands/setra.svg'
    },
    jumo: {
        label: 'JUMO',
        desc: 'Innovative sensors and automation solutions.',
        categories: ['jumo'],
        logo: '/templates/hs-tech/images/brands/jumo.svg'
    },
    knick: {
        label: 'KNICK',
        desc: 'High-quality interface and process analysis.',
        categories: ['knick'],
        logo: '/templates/hs-tech/images/brands/knick.svg'
    }
}

// Category Information - Updated with existing images
export const CATEGORY_INFO: Record<string, any> = {
    humidity: { title: "Humidity", desc: "Best-in-class humidity instruments.", images: [] },
    dewpoint: { title: "Dewpoint", desc: "Reliable dewpoint measurement.", images: [] },
    co2: { title: "Carbon Dioxide", desc: "Accurate CO2 monitoring.", images: [] },
    oil: { title: "Moisture in Oil", desc: "Transformer oil monitoring.", images: [] },
    barometer: { title: "Barometric Pressure", desc: "Digital barometers.", images: [] },
    weather: { title: "Weather", desc: "Meteorological sensors.", images: [] },
    h2o2: { title: "H2O2", desc: "Bio-decontamination monitoring.", images: [] },

    // Brands
    setra: { title: "SETRA Systems", desc: "Differential & Industrial Pressure.", images: ['/hstech/HS-TECH_files/2ddb0a75a50e4.jpg'] },
    jumo: { title: "JUMO", desc: "Liquid Analysis & Control.", images: [] },
    knick: { title: "KNICK", desc: "Process Analysis.", images: [] }
}

// Sub-Category Definitions
export const SUB_CATEGORIES: Record<string, any[]> = {
    // === VAISALA ===
    humidity: [
        {
            id: 'handheld', title: 'Hand-held Instrument', desc: 'HM70, Indigo80',
            items: [
                { id: 'indigo80_hmp80', label: 'Indigo80+HMP80' },
                { id: 'hm70', label: 'HM70' },
                { id: 'hm40', label: 'HM40' },
                { id: 'shm40', label: 'SHM40' },
                { id: 'hmk15', label: 'HMK15' }
            ]
        },
        {
            id: 'industrial', title: 'Industrial Transmitter', desc: 'HMT330, HMT310',
            items: [
                { id: 'hmt330', label: 'HMT330' },
                { id: 'hmt310', label: 'HMT310' },
                { id: 'hmt120', label: 'HMT120/130' },
                { id: 'hmt370ex', label: 'HMT370EX' },
                { id: 'hmt360', label: 'HMT360' }
            ]
        },
        {
            id: 'hvac', title: 'HVAC Transmitter', desc: 'HMD60, HMW90',
            items: [
                { id: 'hmd60', label: 'HMD60' },
                { id: 'hmw90', label: 'HMW90' },
                { id: 'hmdw110', label: 'HMDW110' },
                { id: 'hmdw80', label: 'HMDW80' }
            ]
        },
        {
            id: 'probe', title: 'Module/OEM', desc: 'HMP series',
            items: [
                { id: 'hmp1_9', label: 'HMP1-9' },
                { id: 'hmm170', label: 'HMM170' },
                { id: 'hmp155', label: 'HMP155' },
                { id: 'hmp60', label: 'HMP60' }
            ]
        },
        {
            // Typo fix: removed duplicate key logic by ensuring uniqueness in structure
            id: 'dewpoint_handheld', title: 'Portable Instrument', desc: 'DM70',
            items: [
                { id: 'indigo80_dmp80', label: 'Indigo80+DMP80' },
                { id: 'dm70', label: 'DM70' },
                { id: 'dss70a', label: 'DSS70A' }
            ]
        }
    ],
    dewpoint: [
        {
            id: 'portable', title: 'Portable Instrument', desc: 'DM70',
            items: [
                { id: 'indigo80_dmp80', label: 'Indigo80+DMP80' },
                { id: 'dm70', label: 'DM70' },
                { id: 'dss70a', label: 'DSS70A' }
            ]
        },
        {
            id: 'fixed', title: 'Fixed installed type', desc: 'DMT340, DMT345',
            items: [
                { id: 'dmt340', label: 'DMT340' },
                { id: 'dmt345', label: 'DMT345/346' },
                { id: 'dmp1', label: 'DMP1-8' }
            ]
        },
        {
            id: 'module', title: 'Module/OEM', desc: 'DMT143, DMT152',
            items: [
                { id: 'dmt152', label: 'DMT152' },
                { id: 'dmt143', label: 'DMT143' },
                { id: 'dmt143l', label: 'DMT143L' },
                { id: 'dpt146', label: 'DPT146' },
                { id: 'dpt145', label: 'DPT145' }
            ]
        }
    ],
    co2: [
        {
            id: 'transmitter', title: 'Transmitter', desc: 'GMW90, GMD110',
            items: [
                { id: 'gmw90', label: 'GMW90' },
                { id: 'gmw80', label: 'GMW80' },
                { id: 'gmd110', label: 'GMD110' }
            ]
        },
        {
            id: 'probe', title: 'Probe', desc: 'GMP series',
            items: [
                { id: 'gmp343', label: 'GMP343' },
                { id: 'gmp251', label: 'GMP251' },
                { id: 'gmp231', label: 'GMP231' },
            ]
        },
        {
            id: 'handheld', title: 'Hand-held Meter', desc: 'GMP252',
            items: [
                { id: 'indigo80_gmp252', label: 'Indigo80+GMP252' }
            ]
        }
    ],
    oil: [
        {
            id: 'transformer', title: 'Transformer Monitor', desc: 'MHT410',
            items: [
                { id: 'mht410', label: 'MHT410' }
            ]
        },
        {
            id: 'fixed', title: 'Oil Moisture Transmitter', desc: 'MMT330',
            items: [
                { id: 'mmt330', label: 'MMT330' },
                { id: 'mmt310', label: 'MMT310' }
            ]
        },
        {
            id: 'handheld', title: 'Hand-held measurement', desc: 'MM70',
            items: [
                { id: 'mm70', label: 'MM70' }
            ]
        }
    ],
    barometer: [
        {
            id: 'barometer', title: 'Digital Barometer', desc: 'PTB series',
            items: [
                { id: 'ptb330', label: 'PTB330' },
                { id: 'ptb210', label: 'PTB210' },
                { id: 'ptb110', label: 'PTB110' },
                { id: 'ptu300', label: 'PTU300 (Combined)' }
            ]
        }
    ],
    weather: [
        {
            id: 'trans', title: 'Weather Transmitter', desc: 'WXT530',
            items: [
                { id: 'wxt530', label: 'WXT530' },
                { id: 'hmp155_w', label: 'HMP155' }
            ]
        }
    ],
    h2o2: [
        {
            id: 'sensor', title: 'H2O2 Sensor', desc: 'HPP series',
            items: [
                { id: 'hpp271', label: 'HPP271/272' }
            ]
        }
    ],

    // === SETRA ===
    setra: [
        {
            id: 'diff_ind', title: 'Differential Pressure (Visual)', desc: 'Setra Lite',
            items: [
                { id: 'setra_lite', label: 'Setra Lite' },
                { id: 'setra_flex', label: 'Setra Flex' }
            ]
        },
        {
            id: 'diff_sen', title: 'Differential Pressure (Sensor)', desc: 'HVAC & Filter monitoring',
            items: [
                { id: 'model_mrc', label: 'Model MRC' },
                { id: 'model_mrg', label: 'Model MRG' },
                { id: 'model_264', label: 'Model 264' },
                { id: 'pdt101', label: 'PDT101' }
            ]
        },
        {
            id: 'industrial', title: 'Industrial Pressure', desc: 'High performance transducers',
            items: [
                { id: 'model_axd', label: 'Model AXD' },
                { id: 'model_206', label: 'Model 206' },
                { id: 'model_209', label: 'Model 209' }
            ]
        }
    ],

    // === JUMO ===
    jumo: [
        {
            id: 'liquid', title: 'Liquid Analysis', desc: 'pH, Conductivity',
            items: [
                { id: 'ph_sensor', label: 'tecline pH' },
                { id: 'ph_trans', label: 'ecoTRANS pH 03' },
                { id: 'dtrans_ph02', label: 'dTRANS pH 02' },
                { id: 'cond_trans', label: 'ecoTRANS Lf 03' }
            ]
        },
        {
            id: 'control', title: 'Control & Recording', desc: 'Recorders, Controllers',
            items: [
                { id: 'recording', label: 'LOGOSCREEN 600' },
                { id: 'dtron_300', label: 'dTRON 300' }
            ]
        }
    ],

    // === KNICK ===
    knick: [
        {
            id: 'analysis', title: 'Process Analysis', desc: 'High-end interface',
            items: [
                { id: 'stratos', label: 'Stratos Pro' }
            ]
        }
    ]
}

// Product Database - Mapped to Real Scraped Images
export const DB: Record<string, any[]> = {
    // VAISALA
    humidity: [
        {
            id: 'hmp1_9',
            title: 'Indigo Smart Probes',
            subtitle: 'HMP1-HMP9 SERIES',
            category: 'probe',
            image: '/templates/hs-tech/images/products/hmp1_9_v1.png',
            gallery: ["/templates/hs-tech/images/products/hmp1_9_v1.png"],
            desc: 'Intelligent, interchangeable probes for the Vaisala Indigo family.',
            specs: [
                { label: 'Application', value: 'Various industrial processes' },
                { label: 'Models', value: 'HMP1, HMP3, HMP4, HMP5, HMP7, HMP8, HMP9' },
                { label: 'Features', value: '• Indigo compatible\n• RS-485 Modbus RTU' },
                { label: 'Accuracy', value: '±0.8 %RH (at 23 °C)' }
            ],
            datasheet: 'https://www.vaisala.com/sites/default/files/documents/HMP1-9-Datasheet-B211706EN.pdf'
        },
        {
            id: 'hmm170',
            title: 'HMM170',
            subtitle: 'HIGH TEMP MODULE',
            category: 'probe',
            image: '/templates/hs-tech/images/products/hmm170_v1.png',
            gallery: ["/templates/hs-tech/images/products/hmm170_v1.png"],
            desc: 'Robust humidity module for high temperature applications.',
            specs: [
                { label: 'Application', value: 'Food processing, Baking, Drying' },
                { label: 'Temp', value: '-70 ... +180 °C' },
                { label: 'Sensor', value: 'HUMICAP R2' }
            ],
            datasheet: 'https://www.vaisala.com/sites/default/files/documents/HMM170-Datasheet-B211698EN.pdf'
        },
        {
            id: 'hmp155',
            title: 'HMP155',
            subtitle: 'METEOROLOGICAL PROBE',
            category: 'probe',
            image: '/templates/hs-tech/images/products/hmp155_v1.png',
            gallery: ["/templates/hs-tech/images/products/hmp155_v1.png"],
            desc: 'Premium humidity and temperature probe for meteorological applications.',
            specs: [
                { label: 'Application', value: 'Meteorology, Aviation, Roads' },
                { label: 'Range', value: '0 ... 100 %RH\n-80 ... +60 °C' },
                { label: 'Accuracy', value: '±1.0 %RH' },
                { label: 'Protection', value: 'IP66' }
            ],
            datasheet: 'https://www.vaisala.com/sites/default/files/documents/HMP155-Datasheet-B210993EN.pdf'
        },
        {
            id: 'hmp60',
            title: 'HMP60 / HMP110',
            subtitle: 'COMPACT PROBE',
            category: 'probe',
            image: '/templates/hs-tech/images/products/hmp60_v1.png',
            gallery: ["/templates/hs-tech/images/products/hmp60_v1.png"],
            desc: 'Miniature and compact probes for volume applications.',
            specs: [
                { label: 'Application', value: 'OEM, Volume applications' },
                { label: 'Models', value: 'HMP60 (Intercap), HMP110 (Humicap)' },
                { label: 'Accuracy', value: '±3 %RH (HMP60)\n±1.5 %RH (HMP110)' },
                { label: 'Housing', value: 'Stainless steel (IP65)' }
            ],
            datasheet: 'https://www.vaisala.com/sites/default/files/documents/HMP60-Datasheet-B210973EN.pdf'
        },
        {
            id: 'hmt370ex',
            title: 'HMT370EX Series',
            subtitle: 'EXPLOSION PROOF TRANSMITTER',
            category: 'industrial',
            image: '/templates/hs-tech/images/products/hmt370ex_v1.png',
            gallery: [],
            desc: 'Designed for hazardous areas. Ideal for fuel storage, chemicals, and pharmaceutical manufacturing.',
            specs: [
                { label: 'Application', value: 'Hazardous areas (Zone 0, 1, 2, 20, 21, 22)\nFuel storage, Biogas, Paint booths' },
                { label: 'Features', value: '• KTL KCS Explosion Proof Certification\n• ATEX, IECEx, FM, CSA, TIIS, EAC certified' },
                { label: 'Accuracy', value: '±0.8 %RH (0...90 %RH)\n±0.1 °C @ 23 °C' },
                { label: 'Output', value: '2-Wire Current (4...20 mA)' },
                { label: 'Protection', value: 'IP66 (NEMA4)' }
            ],
            datasheet: 'https://www.vaisala.com/sites/default/files/documents/HMT370EX-Datasheet-B211738EN.pdf'
        },
        {
            id: 'hmt360',
            title: 'HMT360 Series',
            subtitle: 'INTRINSICALLY SAFE TRANSMITTER',
            category: 'industrial',
            image: '/templates/hs-tech/images/products/hmt360_v1.png',
            gallery: [],
            desc: 'Intrinsically safe humidity and temperature transmitter for hazardous environments.',
            specs: [
                { label: 'Application', value: 'Explosion-risk areas (Zone 0)\nHydrogen, Solvents, etc.' },
                { label: 'Features', value: '• Entire transmitter can be installed in Zone 0\n• Measures Td, x, a, Tw' },
                { label: 'Accuracy', value: '±1 %RH (0...90 %RH)' },
                { label: 'Output', value: '2-Wire Current (4...20 mA)' },
                { label: 'Protection', value: 'IP66 (NEMA4)' }
            ],
            datasheet: 'https://www.vaisala.com/sites/default/files/documents/HMT360-Datasheet-B211737EN.pdf'
        },
        {
            id: 'hmd60',
            title: 'HMD60 Series',
            subtitle: 'HVAC TRANSMITTER (DUCT)',
            category: 'hvac',
            image: '/templates/hs-tech/images/products/hmd60_v1.png',
            gallery: [],
            desc: 'All-metal body transmitter optimized for building automation and industrial HVAC.',
            specs: [
                { label: 'Application', value: 'Building automation, Industrial HVAC' },
                { label: 'Features', value: '• Robust metal body\n• Vaisala HUMICAP® R2 sensor' },
                { label: 'Range', value: '0 ... 100 %RH\n-40 ... +80 °C' },
                { label: 'Accuracy', value: '±1.5 %RH\n±0.1 °C' },
                { label: 'Output', value: '4...20 mA' }
            ],
            datasheet: 'https://www.vaisala.com/sites/default/files/documents/HMD60-Datasheet-B211704EN.pdf'
        },
        {
            id: 'hmw90',
            title: 'HMW90 Series',
            subtitle: 'HVAC TRANSMITTER (WALL)',
            category: 'hvac',
            image: '/templates/hs-tech/images/products/hmw90_v1.png',
            gallery: [],
            desc: 'Indoor humidity and temperature transmitter for high-end environments.',
            specs: [
                { label: 'Application', value: 'Museums, Laboratories, Data centers' },
                { label: 'Features', value: '• Slide-down cover for easy calibration\n• User exchangeable Intercap sensor' },
                { label: 'Range', value: '0 ... 100 %RH\n-5 ... +55 °C' },
                { label: 'Accuracy', value: '±1.7 %RH\n±0.2 °C' },
                { label: 'Output', value: '4...20 mA, 0...5V, 0...10V (Configurable)' }
            ],
            datasheet: 'https://www.vaisala.com/sites/default/files/documents/HMW90-Datasheet-B211703EN.pdf'
        },
        {
            id: 'hmdw110',
            title: 'HMDW110 Series',
            subtitle: 'IP65 HVAC TRANSMITTER',
            category: 'hvac',
            image: '/templates/hs-tech/images/products/hmdw110_v1.png',
            gallery: [],
            desc: 'Versatile transmitter for duct, wall, and outdoor applications with IP65 protection.',
            specs: [
                { label: 'Application', value: 'Outdoor, Wash-down areas, Wet environments' },
                { label: 'Features', value: '• IP65 Protection\n• Radiation shield option for outdoor use' },
                { label: 'Accuracy', value: '±2 %RH\n±0.2 °C' },
                { label: 'Output', value: '4...20 mA (HMD110), 0...10V (HMD112)' }
            ],
            datasheet: 'https://www.vaisala.com/sites/default/files/documents/HMDW110-Datasheet-B211705EN.pdf'
        },
        {
            id: 'hmdw80',
            title: 'HMDW80 Series',
            subtitle: 'VERSATILE HVAC TRANSMITTER',
            category: 'hvac',
            image: '/templates/hs-tech/images/products/hmdw80_v1.png',
            gallery: [],
            desc: 'Versatile wall and duct mounting for standard HVAC applications.',
            specs: [
                { label: 'Application', value: 'Standard HVAC building automation' },
                { label: 'Range', value: '0 ... 100 %RH\n-5 ... +55 °C' },
                { label: 'Accuracy', value: '±3 %RH\n±0.5 °C' },
                { label: 'Output', value: '4...20 mA, 0...10V' }
            ],
            datasheet: 'https://www.vaisala.com/sites/default/files/documents/HMDW80-Datasheet-B211603EN.pdf'
        },
        {
            id: 'indigo80_hmp80',
            title: 'Indigo80',
            subtitle: 'HANDHELD INDICATOR',
            category: 'handheld',
            image: '/templates/hs-tech/images/products/indigo80_hmp80_v1.jpg',
            gallery: [],
            desc: 'High-end handheld indicator and probe.',
            specs: [
                { label: 'Application', value: 'Industrial spot-checking, Calibration' },
                { label: 'Range', value: '0 ... 100 %RH\n-20 ... +50 °C' },
                { label: 'Logging', value: '5.5M values' },
                { label: 'Display', value: 'Color' }
            ],
            datasheet: 'https://www.vaisala.com/sites/default/files/documents/Indigo80-Datasheet-B211699EN.pdf'
        },
        {
            id: 'hm70',
            title: 'HM70',
            subtitle: 'HANDHELD METER',
            category: 'handheld',
            image: '/templates/hs-tech/images/products/hm70_v1.jpg',
            gallery: ["/templates/hs-tech/images/products/hm70_v1.jpg"],
            desc: 'Professional handheld humidity and temperature meter.',
            specs: [
                { label: 'Application', value: 'Demanding industrial spot-checking' },
                { label: 'Features', value: '• MI70 Indicator + HMP7x Probe\n• Multilingual user interface' },
                { label: 'Accuracy', value: 'High accuracy' }
            ],
            datasheet: 'https://www.vaisala.com/sites/default/files/documents/HM70-Datasheet-B210974EN.pdf'
        },
        {
            id: 'hm40',
            title: 'HM40',
            subtitle: 'COMPACT HANDHELD',
            category: 'handheld',
            image: '/templates/hs-tech/images/products/hm40_v1.png',
            gallery: ["/templates/hs-tech/images/products/hm40_v1.png"],
            desc: 'Compact and easy-to-use handheld meter.',
            specs: [
                { label: 'Application', value: 'Quick spot-checking' },
                { label: 'Models', value: 'HM41, HM42, HM45, HM46' },
                { label: 'Accuracy', value: '±1.5 %RH (0...90 %RH)' }
            ],
            datasheet: 'https://www.vaisala.com/sites/default/files/documents/HM40-Datasheet-B210975EN.pdf'
        },
        {
            id: 'shm40',
            title: 'SHM40',
            subtitle: 'CONCRETE MOISTURE',
            category: 'handheld',
            image: '/templates/hs-tech/images/products/shm40_v1.jpg',
            gallery: [],
            desc: 'Specialized for structural humidity measurement (concrete).',
            specs: [
                { label: 'Application', value: 'Construction sites, Concrete flooring' },
                { label: 'Probe', value: 'HMP40S' },
                { label: 'Range', value: '0 ... 100 %RH\n-40 ... +80 °C' }
            ]
        },
        {
            id: 'hmk15',
            title: 'HMK15',
            subtitle: 'HUMIDITY CALIBRATOR',
            category: 'handheld',
            image: '/templates/hs-tech/images/products/hmk15_v1.png',
            gallery: [],
            desc: 'Saturated salt calibrator for on-site humidity probe calibration.',
            specs: [
                { label: 'Type', value: 'Saturated salt solution' },
                { label: 'Safety', value: 'Complies with ASTM E104-02' },
                { label: 'Features', value: '• No external power required\n• Portable case' }
            ]
        },
        {
            id: 'hmt330',
            title: 'HMT330 Series',
            subtitle: 'HUMIDITY AND TEMPERATURE TRANSMITTERS',
            category: 'industrial',
            image: '/templates/hs-tech/images/products/hmt330_v1.jpg',
            gallery: ["/templates/hs-tech/images/products/hmt330_v1.jpg"],
            desc: 'Designed for demanding industrial applications. Six models available for various installation needs.',
            specs: [
                { label: 'Application', value: 'Demanding industrial applications\nCleanrooms, Pharmaceutical processes' },
                { label: 'Models', value: 'HMT331 (Wall), HMT333 (Duct), HMT334 (High Pressure)\nHMT335 (High Temp), HMT337 (High Humidity), HMT338 (Pipeline)' },
                { label: 'Features', value: '• Excellent stability & extensive customization\n• Six models for various installation needs\n• Optional integrated data logging and graphical display' },
                { label: 'Measurement Range', value: '0 ... 100 %RH\n-70 ... +180 °C (Model dependent)' },
                { label: 'Output', value: 'RH, T, Td, Tdf, a, x, Tw, ppm, pw, pws, h, dT' }
            ],
            datasheet: 'https://www.vaisala.com/sites/default/files/documents/HMT330-Datasheet-B211735EN.pdf'
        },
        {
            id: 'hmt310',
            title: 'HMT310',
            subtitle: 'HUMIDITY AND TEMPERATURE TRANSMITTER',
            category: 'industrial',
            image: '/templates/hs-tech/images/products/hmt310_v1.jpg',
            gallery: ["/templates/hs-tech/images/products/hmt310_v1.jpg"],
            desc: 'Compact transmitter with excellent stability for demanding industrial applications.',
            specs: [
                { label: 'Application', value: 'Industrial applications where compact size is needed' },
                { label: 'Features', value: '• Latest generation VAISALA HUMICAP® sensor\n• Small size for easy installation\n• High accuracy & excellent long-term stability' },
                { label: 'Range', value: '0 ... 100 %RH\n-40 ... +80 °C (up to +120 °C)' },
                { label: 'Accuracy', value: '±1 %RH (0...90 %RH)' },
                { label: 'Output', value: 'Analog outputs, RS232/RS485' }
            ],
            datasheet: 'https://www.vaisala.com/sites/default/files/documents/HMT310-Datasheet-B211734EN.pdf'
        },
        {
            id: 'hmt120',
            title: 'HMT120 / HMT130',
            subtitle: 'HUMIDITY AND TEMPERATURE TRANSMITTERS',
            category: 'industrial',
            image: '/templates/hs-tech/images/products/hmt120_v1.jpg',
            gallery: ["/templates/hs-tech/images/products/hmt120_v1.jpg"],
            desc: 'Optimized for cleanrooms and light industrial applications with interchangeable probes.',
            specs: [
                { label: 'Application', value: 'Cleanrooms, Light industrial applications' },
                { label: 'Features', value: '• Interchangeable probes (HMP110)\n• Resistant to dust and most chemicals\n• Display option available' },
                { label: 'Models', value: 'HMT120: Loop powered (2-wire)\nHMT130: Voltage powered (3-wire)' },
                { label: 'Range', value: '0 ... 100 %RH\n-40 ... +80 °C' },
                { label: 'Output', value: '4...20 mA (HMT120)\n0...1V / 0...5V / 0...10V (HMT130)' }
            ],
            datasheet: 'https://www.vaisala.com/sites/default/files/documents/HMT120-Datasheet-B211733EN.pdf'
        },
    ],
    dewpoint: [
        { id: 'dmp1', title: 'DMP1', subtitle: 'Probe', category: 'fixed', image: '', gallery: [], desc: 'Dewpoint probe.', specs: [{ label: 'Range', value: '-60...+60' }] },
        { id: 'dmt340', title: 'DMT340', subtitle: 'Condensation', category: 'fixed', image: '', gallery: [], desc: 'For condensation.', specs: [{ label: 'Heat', value: 'Yes' }] },
        { id: 'dmt345', title: 'DMT345', subtitle: 'High Temp', category: 'fixed', image: '', gallery: [], desc: 'High temp.', specs: [{ label: 'T', value: '180C' }] },
        { id: 'dmt152', title: 'DMT152', subtitle: 'Low Dewpoint', category: 'module', image: '', gallery: [], desc: 'Low dewpoint.', specs: [{ label: 'Range', value: '-80' }] },
        { id: 'dmt143', title: 'DMT143', subtitle: 'OEM', category: 'module', image: '', gallery: [], desc: 'OEM module.', specs: [{ label: 'Size', value: 'Small' }] },
        { id: 'dmt143l', title: 'DMT143L', subtitle: 'Long Probe', category: 'module', image: '', gallery: [], desc: 'Long probe.', specs: [{ label: 'Probe', value: 'Long' }] },
        { id: 'dpt146', title: 'DPT146', subtitle: 'Td + P', category: 'module', image: '', gallery: [], desc: 'Dewpoint and Pressure.', specs: [{ label: 'Dual', value: 'Yes' }] },
        { id: 'dpt145', title: 'DPT145', subtitle: 'SF6', category: 'module', image: '', gallery: [], desc: 'SF6 monitoring.', specs: [{ label: 'Gas', value: 'SF6' }] },
        { id: 'indigo80_dmp80', title: 'Indigo80', subtitle: 'DMP80', category: 'portable', image: '', gallery: [], desc: 'Portable set.', specs: [{ label: 'New', value: 'Yes' }] },
        { id: 'dm70', title: 'DM70', subtitle: 'Handheld', category: 'portable', image: '', gallery: [], desc: 'Standard handheld.', specs: [{ label: 'Acc', value: '2C' }] },
        { id: 'dss70a', title: 'DSS70A', subtitle: 'Sampling', category: 'portable', image: '', gallery: [], desc: 'Sampling cell.', specs: [{ label: 'use', value: 'DM70' }] }
    ],
    co2: [
        { id: 'gmw90', title: 'GMW90', subtitle: 'Wall', category: 'transmitter', image: '', gallery: [], desc: 'CO2+T+RH.', specs: [{ label: 'Param', value: '3' }] },
        { id: 'gmw80', title: 'GMW80', subtitle: 'Standard', category: 'transmitter', image: '', gallery: [], desc: 'CO2 only.', specs: [{ label: 'Cost', value: 'Low' }] },
        { id: 'gmd110', title: 'GMD110', subtitle: 'Duct', category: 'transmitter', image: '', gallery: [], desc: 'Duct mount.', specs: [{ label: 'Install', value: 'Duct' }] },
        { id: 'gmp343', title: 'GMP343', subtitle: 'Eco', category: 'probe', image: '', gallery: [], desc: 'Flow through.', specs: [{ label: 'Flow', value: 'Yes' }] },
        { id: 'gmp251', title: 'GMP251', subtitle: 'High range', category: 'probe', image: '', gallery: [], desc: '% level.', specs: [{ label: 'Range', value: '%' }] },
        { id: 'gmp231', title: 'GMP231', subtitle: 'Incubator', category: 'probe', image: '', gallery: [], desc: 'Incubators.', specs: [{ label: 'Heat', value: '180' }] },
        { id: 'indigo80_gmp252', title: 'Indigo80', subtitle: 'GMP252', category: 'handheld', image: '', gallery: [], desc: 'Portable CO2.', specs: [{ label: 'ppm', value: 'Yes' }] }
    ],
    oil: [
        { id: 'mht410', title: 'MHT410', subtitle: 'Transformer', category: 'transformer', image: '', gallery: [], desc: 'H2+H2O.', specs: [{ label: 'H2', value: 'Yes' }] },
        { id: 'mmt330', title: 'MMT330', subtitle: 'Online', category: 'fixed', image: '', gallery: [], desc: 'Online oil moisture.', specs: [{ label: 'Oil', value: 'All' }] },
        { id: 'mmt310', title: 'MMT310', subtitle: 'Compact', category: 'fixed', image: '', gallery: [], desc: 'Compact oil.', specs: [{ label: 'Size', value: 'Small' }] },
        { id: 'mm70', title: 'MM70', subtitle: 'Handheld', category: 'handheld', image: '', gallery: [], desc: 'Spot check.', specs: [{ label: 'Spot', value: 'Yes' }] }
    ],
    barometer: [
        { id: 'ptb330', title: 'PTB330', subtitle: 'Class A', category: 'barometer', image: '', gallery: [], desc: 'Class A barometer.', specs: [{ label: 'Class', value: 'A' }] },
        { id: 'ptb210', title: 'PTB210', subtitle: 'Class B', category: 'barometer', image: '', gallery: [], desc: 'Class B barometer.', specs: [{ label: 'Class', value: 'B' }] },
        { id: 'ptb110', title: 'PTB110', subtitle: 'Analog', category: 'barometer', image: '', gallery: [], desc: 'Analog output.', specs: [{ label: 'Out', value: 'V' }] },
        { id: 'ptu300', title: 'PTU300', subtitle: 'Combined', category: 'barometer', image: '', gallery: [], desc: 'P, T, RH.', specs: [{ label: 'All', value: 'Yes' }] }
    ],
    weather: [
        { id: 'wxt530', title: 'WXT530', subtitle: 'Multiparameter', category: 'trans', image: '', gallery: [], desc: 'Weather station.', specs: [{ label: 'All', value: 'Yes' }] },
        { id: 'hmp155_w', title: 'HMP155', subtitle: 'Probe', category: 'trans', image: '', gallery: [], desc: 'Weather probe.', specs: [{ label: 'Acc', value: 'High' }] }
    ],
    h2o2: [
        { id: 'hpp271', title: 'HPP271', subtitle: 'Probe', category: 'sensor', image: '', gallery: [], desc: 'Vaporized H2O2.', specs: [{ label: 'Gas', value: 'H2O2' }] }
    ],

    // SETRA
    setra: [
        { id: 'setra_lite', title: 'Setra Lite', subtitle: 'Visual', category: 'diff_ind', image: '', gallery: [], desc: 'Visual pressure.', specs: [{ label: 'Light', value: 'LED' }] },
        { id: 'setra_flex', title: 'Setra Flex', subtitle: 'Monitor', category: 'diff_ind', image: '', gallery: [], desc: 'Room monitor.', specs: [{ label: 'Touch', value: 'Yes' }] },
        { id: 'model_mrc', title: 'Model MRC', subtitle: 'Multi-range', category: 'diff_sen', image: '/hstech/HVAC_files/0173971661ad2.png', gallery: ["/hstech/HVAC_files/0173971661ad2.png", "/hstech/HVAC_files/0b98ec3d71c52.png", "/hstech/HVAC_files/866d1ed724ffa.png", "/hstech/HVAC_files/ba117fd1862c9.png", "/hstech/HVAC_files/20542e1ba6c31.png"], desc: 'Multi range.', specs: [{ label: 'Range', value: 'Adj' }] },
        { id: 'model_mrg', title: 'Model MRG', subtitle: 'General', category: 'diff_sen', image: '/hstech/HVAC_files/0173971661ad2.png', gallery: ["/hstech/HVAC_files/0173971661ad2.png", "/hstech/HVAC_files/0b98ec3d71c52.png", "/hstech/HVAC_files/866d1ed724ffa.png", "/hstech/HVAC_files/ba117fd1862c9.png", "/hstech/HVAC_files/20542e1ba6c31.png"], desc: 'General purpose.', specs: [{ label: 'Cost', value: 'Low' }] },
        { id: 'model_264', title: 'Model 264', subtitle: 'HVAC', category: 'diff_sen', image: '/hstech/HVAC_files/0173971661ad2.png', gallery: ["/hstech/HVAC_files/0173971661ad2.png", "/hstech/HVAC_files/0b98ec3d71c52.png", "/hstech/HVAC_files/866d1ed724ffa.png", "/hstech/HVAC_files/ba117fd1862c9.png", "/hstech/HVAC_files/20542e1ba6c31.png"], desc: 'Standard HVAC.', specs: [{ label: 'Std', value: 'Yes' }] },
        { id: 'pdt101', title: 'PDT101', subtitle: 'Filter', category: 'diff_sen', image: '/hstech/HVAC_files/0173971661ad2.png', gallery: ["/hstech/HVAC_files/0173971661ad2.png", "/hstech/HVAC_files/0b98ec3d71c52.png", "/hstech/HVAC_files/866d1ed724ffa.png", "/hstech/HVAC_files/ba117fd1862c9.png", "/hstech/HVAC_files/20542e1ba6c31.png"], desc: 'Filter monitor.', specs: [{ label: 'OEM', value: 'Yes' }] },
        { id: 'model_axd', title: 'Model AXD', subtitle: 'High Perf', category: 'industrial', image: '', gallery: [], desc: 'Industrial pressure.', specs: [{ label: 'Acc', value: 'High' }] },
        { id: 'model_206', title: 'Model 206', subtitle: 'Rugged', category: 'industrial', image: '', gallery: [], desc: 'Rugged transducer.', specs: [{ label: 'Case', value: 'Steel' }] },
        { id: 'model_209', title: 'Model 209', subtitle: 'OEM', category: 'industrial', image: '', gallery: [], desc: 'OEM sensor.', specs: [{ label: 'Cost', value: 'Low' }] }
    ],

    // JUMO
    jumo: [
        { id: 'ph_sensor', title: 'tecline pH', subtitle: 'Sensor', category: 'liquid', image: '', gallery: [], desc: 'pH electrode.', specs: [{ label: 'Mat', value: 'Glass' }] },
        { id: 'ph_trans', title: 'ecoTRANS pH 03', subtitle: 'Transmitter', category: 'liquid', image: '', gallery: [], desc: 'pH transmitter.', specs: [{ label: 'Rail', value: 'DIN' }] },
        { id: 'dtrans_ph02', title: 'dTRANS pH 02', subtitle: 'Transmitter', category: 'liquid', image: '', gallery: [], desc: 'pH controller.', specs: [{ label: 'IP', value: '65' }] },
        { id: 'cond_trans', title: 'ecoTRANS Lf 03', subtitle: 'Conductivity', category: 'liquid', image: '', gallery: [], desc: 'Conductivity.', specs: [{ label: 'Out', value: 'mA' }] },
        { id: 'recording', title: 'LOGOSCREEN', subtitle: 'Recorder', category: 'control', image: '', gallery: [], desc: 'Data recorder.', specs: [{ label: 'LCD', value: 'Touch' }] },
        { id: 'dtron_300', title: 'dTRON 300', subtitle: 'Controller', category: 'control', image: '', gallery: [], desc: 'PID Controller.', specs: [{ label: 'PID', value: 'Yes' }] }
    ],

    // KNICK
    knick: [
        { id: 'stratos', title: 'Stratos Pro', subtitle: 'Analysis', category: 'analysis', image: '', desc: 'Process analyzer.', specs: [{ label: 'Ex', value: 'Zone 1' }] }
    ]
}
