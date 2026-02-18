
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
        categories: ['humidity', 'dewpoint', 'co2', 'oil', 'barometer', 'weather', 'h2o2', 'cms'],
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
}

// Category Information - Updated with existing images
export const CATEGORY_INFO: Record<string, any> = {
    humidity: { title: "Humidity", desc: "Best-in-class humidity instruments.", images: ['/templates/hs-tech/images/products/hmt330_v1.jpg', '/templates/hs-tech/images/products/hmp1_9_v1.png'] },
    dewpoint: { title: "Dewpoint", desc: "Reliable dewpoint measurement.", images: ['/templates/hs-tech/images/products/38af1f4961a7a.png', '/templates/hs-tech/images/products/50e31ebdea359.png'] },
    co2: { title: "Carbon Dioxide", desc: "Accurate CO2 monitoring.", images: ['/templates/hs-tech/images/products/6251932a0e954.png', '/templates/hs-tech/images/products/eb130aca3df08.png'] },
    oil: { title: "Moisture in Oil", desc: "Transformer oil monitoring.", images: ['/templates/hs-tech/images/products/deffa2b1b398f.jpg', '/templates/hs-tech/images/products/5980bfb1851a8.png'] },
    barometer: { title: "Barometric Pressure", desc: "Digital barometers.", images: ['/templates/hs-tech/images/products/3ca83569b6d00.jpg'] },
    weather: { title: "Weather", desc: "Meteorological sensors.", images: ['/templates/hs-tech/images/products/2c2344f8b46d5.jpg', '/templates/hs-tech/images/products/2ddb0a75a50e4.jpg'] },
    h2o2: { title: "H2O2", desc: "Bio-decontamination monitoring.", images: ['/templates/hs-tech/images/products/47e994f808c6a.png'] },

    // Brands
    setra: { title: "SETRA Systems", desc: "Differential & Industrial Pressure.", images: ['/templates/hs-tech/images/products/0173971661ad2.png', '/templates/hs-tech/images/products/849fee28dfdc5.png'] },
    jumo: { title: "JUMO", desc: "Liquid Analysis & Control.", images: ['/templates/hs-tech/images/products/94259b4509a1f.png', '/templates/hs-tech/images/products/85b44cdd77766.png'] },
    jumo_temp: { title: "Temperature", desc: "PlastoSENS precision temperature sensors for plastics processing.", images: ['/templates/hs-tech/images/products/94259b4509a1f.png'] },
    knick: { title: "KNICK", desc: "Process Analysis.", images: ['/templates/hs-tech/images/products/322e267fafb41.png'] },
    cms: { title: "Data Logger / CMS", desc: "Continuous monitoring systems and wireless data loggers.", images: [] }
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
            id: 'module', title: 'Module/OEM', desc: 'DMT132, DMT143, DMT152',
            items: [
                { id: 'dmt132', label: 'DMT132' },
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
        },
        {
            id: 'oil_module', title: 'Module/OEM', desc: 'MMT162',
            items: [
                { id: 'mmt162', label: 'MMT162' }
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
            id: 'trans', title: 'Weather Transmitter', desc: 'WXT530, HMP155',
            items: [
                { id: 'wxt530', label: 'WXT530' },
                { id: 'hmp155_w', label: 'HMP155' },
                { id: 'hmt337', label: 'HMT337' },
                { id: 'ptu307', label: 'PTU307' }
            ]
        },
        {
            id: 'hvac_weather', title: 'HVAC Weather Sensor', desc: 'HMS110, HMS80',
            items: [
                { id: 'hms110', label: 'HMS110' },
                { id: 'hms80', label: 'HMS80' }
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
                { id: 'pdt101', label: 'PDT101' },
                { id: 'pdt102', label: 'PDT102' }
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
    ],

    // === CMS (Data Logger / Continuous Monitoring System) ===
    cms: [
        {
            id: 'data_logger', title: 'Data Logger', desc: 'DL2000, DL4000, DL1700',
            items: [
                { id: 'dl2000', label: 'DL2000' },
                { id: 'dl4000', label: 'DL4000' },
                { id: 'dl1700', label: 'DL1700' }
            ]
        },
        {
            id: 'network_logger', title: 'Network Data Logger', desc: 'DL1000/1400, DL1016/1416, vNET',
            items: [
                { id: 'dl1000_1400', label: 'DL1000/1400' },
                { id: 'dl1016_1416', label: 'DL1016/1416' },
                { id: 'vnet_wireless', label: 'Wireless vNET' },
                { id: 'poe_logger', label: 'POE' }
            ]
        },
        {
            id: 'cms_software', title: 'Monitoring Software', desc: 'CMS Software',
            items: [
                { id: 'cms_sw', label: 'CMS Software' }
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
            category: 'explosion_proof',
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
            category: 'explosion_proof',
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
        {
            id: 'dmp1', title: 'DMP1-8', subtitle: 'DEWPOINT PROBE SERIES', category: 'fixed',
            image: '/templates/hs-tech/images/products/38af1f4961a7a.png',
            gallery: ['/templates/hs-tech/images/products/38af1f4961a7a.png'],
            desc: 'Intelligent Indigo-compatible dewpoint probes for compressed air, dryers, and process gas applications. The DRYCAP® sensor provides fast response and excellent stability.',
            specs: [
                { label: 'Measurement Range', value: '-60 ... +60 °Ctd (DMP1, DMP3, DMP5)\n-40 ... +60 °Ctd (DMP7, DMP8)' },
                { label: 'Accuracy', value: '±2 °Ctd (@ 20 °Ctd)\n±3 °Ctd (@ -60 °Ctd)' },
                { label: 'Sensor', value: 'Vaisala DRYCAP® 180' },
                { label: 'Output', value: 'RS-485 Modbus RTU (Indigo compatible)' },
                { label: 'Response time', value: '< 15 s (90% step change)' },
                { label: 'Application', value: 'Compressed air, Industrial dryers\nCleanrooms, Process gas' },
                { label: 'Protection', value: 'IP65' },
            ],
            datasheet: 'https://www.vaisala.com/sites/default/files/documents/DMP1-8-Datasheet-B211707EN.pdf'
        },
        {
            id: 'dmt340', title: 'DMT340', subtitle: 'DEWPOINT TRANSMITTER', category: 'fixed',
            image: '/templates/hs-tech/images/products/50e31ebdea359.png',
            gallery: ['/templates/hs-tech/images/products/50e31ebdea359.png'],
            desc: 'Dewpoint transmitter for condensing environments. The heated sensor head prevents condensation on the sensor, enabling accurate measurement even in 100% RH conditions.',
            specs: [
                { label: 'Measurement Range', value: '0 ... +60 °Ctd' },
                { label: 'Accuracy', value: '±2 °Ctd (0...40 °Ctd)' },
                { label: 'Sensor', value: 'Vaisala DRYCAP® (heated)' },
                { label: 'Output', value: 'RS-232, RS-485, 4...20 mA, 0...10 V' },
                { label: 'Application', value: 'Condensing environments\nSteam processes, Wet gas' },
                { label: 'Protection', value: 'IP65' },
            ],
            datasheet: 'https://www.vaisala.com/sites/default/files/documents/DMT340-Datasheet-B211742EN.pdf'
        },
        {
            id: 'dmt345', title: 'DMT345/346', subtitle: 'HIGH TEMPERATURE DEWPOINT', category: 'fixed',
            image: '/templates/hs-tech/images/products/5cf3bcd453c32.png',
            gallery: ['/templates/hs-tech/images/products/5cf3bcd453c32.png'],
            desc: 'High temperature dewpoint transmitter for process streams up to +180 °C. Ideal for plastic drying, industrial ovens, and compressed air systems with high temperatures.',
            specs: [
                { label: 'Process Temperature', value: 'Up to +180 °C' },
                { label: 'Measurement Range', value: '-40 ... +20 °Ctd' },
                { label: 'Accuracy', value: '±3 °Ctd' },
                { label: 'Sensor', value: 'Vaisala DRYCAP® 180' },
                { label: 'Output', value: 'RS-232, RS-485, 4...20 mA' },
                { label: 'Application', value: 'Plastic dryers, Industrial ovens\nHigh-temperature compressed air' },
                { label: 'Protection', value: 'IP65' },
            ],
            datasheet: 'https://www.vaisala.com/sites/default/files/documents/DMT345-Datasheet-B211743EN.pdf'
        },
        {
            id: 'dmt132', title: 'DMT132', subtitle: 'DEWPOINT & HUMIDITY MODULE', category: 'module',
            image: '/templates/hs-tech/images/products/2d44fea596554.png', gallery: [],
            desc: 'OEM dewpoint and humidity module for integration into instruments and systems. Measures both dewpoint temperature and relative humidity.',
            specs: [
                { label: 'Type', value: 'OEM Module' },
                { label: 'Dewpoint Range', value: '-60 ... +60 °Ctd' },
                { label: 'RH Range', value: '0 ... 100 %RH' },
                { label: 'Output', value: 'Analog / RS-485 Digital' },
                { label: 'Supply Voltage', value: '5 V / 10...35 V DC' },
                { label: 'Application', value: 'OEM integration\nInstruments, Portable meters' },
            ]
        },
        {
            id: 'dmt152', title: 'DMT152', subtitle: 'LOW DEWPOINT MODULE', category: 'module',
            image: '/templates/hs-tech/images/products/2d44fea596554.png',
            gallery: ['/templates/hs-tech/images/products/2d44fea596554.png'],
            desc: 'OEM module for very low dewpoint measurement in dry air and inert gas applications.',
            specs: [
                { label: 'Type', value: 'OEM Module' },
                { label: 'Dewpoint Range', value: '-100 ... +20 °Ctd' },
                { label: 'Accuracy', value: '±2 °Ctd' },
                { label: 'Output', value: 'Analog & Digital' },
                { label: 'Application', value: 'Dry air systems\nInert gas, OEM integration' },
            ]
        },
        {
            id: 'dmt143', title: 'DMT143', subtitle: 'COMPACT OEM MODULE', category: 'module',
            image: '/templates/hs-tech/images/products/6d596692e24f1.png',
            gallery: ['/templates/hs-tech/images/products/6d596692e24f1.png'],
            desc: 'Ultra-compact dewpoint transmitter module for OEM and space-limited applications.',
            specs: [
                { label: 'Size', value: 'Ultra-compact (OEM)' },
                { label: 'Dewpoint Range', value: '-70 ... +60 °Ctd' },
                { label: 'Accuracy', value: '±2 °Ctd' },
                { label: 'Output', value: 'Analog 0...1 V / Digital RS-485' },
                { label: 'Supply Voltage', value: '3.3 ... 5 V DC' },
                { label: 'Application', value: 'OEM instruments\nPortable devices' },
            ]
        },
        {
            id: 'dmt143l', title: 'DMT143L', subtitle: 'EXTENDED PROBE MODULE', category: 'module',
            image: '/templates/hs-tech/images/products/289587707561d.png',
            gallery: ['/templates/hs-tech/images/products/289587707561d.png'],
            desc: 'DMT143 module with extended probe for deep installation into pipelines and vessels.',
            specs: [
                { label: 'Probe Length', value: 'Extended (selectable)' },
                { label: 'Dewpoint Range', value: '-70 ... +60 °Ctd' },
                { label: 'Output', value: 'Analog / Digital' },
                { label: 'Application', value: 'Pipelines, Deep installations\nPressure vessels' },
            ]
        },
        {
            id: 'dpt146', title: 'DPT146', subtitle: 'DEWPOINT & PRESSURE TRANSMITTER', category: 'module',
            image: '/templates/hs-tech/images/products/04ad79c254fa2.png',
            gallery: ['/templates/hs-tech/images/products/04ad79c254fa2.png'],
            desc: 'Combined dewpoint and pressure transmitter for compressed air quality monitoring (ISO 8573 compliance).',
            specs: [
                { label: 'Parameters', value: 'Dewpoint (Td) + Pressure (P)' },
                { label: 'Dewpoint Range', value: '-40 ... +60 °Ctd' },
                { label: 'Pressure Range', value: '0 ... 12 bar (abs)' },
                { label: 'Output', value: '4...20 mA × 2, RS-485' },
                { label: 'Application', value: 'Compressed air systems\nISO 8573 quality monitoring' },
            ]
        },
        {
            id: 'dpt145', title: 'DPT145', subtitle: 'SF6 GAS DEWPOINT MONITOR', category: 'module',
            image: '/templates/hs-tech/images/products/04ad79c254fa2.png',
            gallery: [],
            desc: 'Dewpoint measurement in SF6 gas systems for high-voltage switchgear monitoring.',
            specs: [
                { label: 'Gas Type', value: 'SF6 (Sulfur hexafluoride)' },
                { label: 'Dewpoint Range', value: '-60 ... +20 °Ctd' },
                { label: 'Output', value: '4...20 mA, RS-485' },
                { label: 'Application', value: 'High voltage switchgear\nGas-insulated substations (GIS)' },
                { label: 'Certification', value: 'IEC 60376, IEC 60480 compliant' },
            ]
        },
        {
            id: 'indigo80_dmp80', title: 'Indigo80 + DMP80', subtitle: 'PORTABLE DEWPOINT SYSTEM', category: 'portable',
            image: '/templates/hs-tech/images/products/1388fffe59c2e.png',
            gallery: ['/templates/hs-tech/images/products/1388fffe59c2e.png'],
            desc: 'Portable dewpoint measurement system combining the Indigo80 handheld indicator with the DMP80 probe. Color display, data logging, and Bluetooth connectivity.',
            specs: [
                { label: 'System', value: 'Indigo80 indicator + DMP80 probe' },
                { label: 'Dewpoint Range', value: '-60 ... +60 °Ctd' },
                { label: 'Accuracy', value: '±2 °Ctd' },
                { label: 'Display', value: 'Color touchscreen (3.5")' },
                { label: 'Data logging', value: 'Internal memory (5.5M data points)' },
                { label: 'Connectivity', value: 'Bluetooth, USB' },
                { label: 'Application', value: 'Spot-checking, Verification\nField calibration' },
            ],
            datasheet: 'https://www.vaisala.com/sites/default/files/documents/Indigo80-Datasheet-B211699EN.pdf'
        },
        {
            id: 'dm70', title: 'DM70', subtitle: 'HANDHELD DEWPOINT METER', category: 'portable',
            image: '/templates/hs-tech/images/products/fc840485431f5.png',
            gallery: ['/templates/hs-tech/images/products/fc840485431f5.png'],
            desc: 'Professional handheld dewpoint meter with interchangeable probe. Used for field measurement, calibration verification, and spot-checking in industrial processes.',
            specs: [
                { label: 'Probe options', value: 'DMP5, DMP7, DMP8 (interchangeable)' },
                { label: 'Dewpoint Range', value: '-60 ... +60 °Ctd' },
                { label: 'Accuracy', value: '±2 °Ctd' },
                { label: 'Display', value: 'Graphical LCD with backlight' },
                { label: 'Data logging', value: '60,000 points' },
                { label: 'Battery', value: '40 h (typical)' },
                { label: 'Application', value: 'Field measurement\nCalibration verification' },
            ],
            datasheet: 'https://www.vaisala.com/sites/default/files/documents/DM70-Datasheet-B210978EN.pdf'
        },
        {
            id: 'dss70a', title: 'DSS70A', subtitle: 'SAMPLING SYSTEM FOR DM70', category: 'portable',
            image: '/templates/hs-tech/images/products/96ddd2e578412.png',
            gallery: ['/templates/hs-tech/images/products/96ddd2e578412.png'],
            desc: 'Sampling cell accessory for use with the DM70 meter to measure dewpoint in pressurized gas lines.',
            specs: [
                { label: 'Use with', value: 'DM70 handheld meter' },
                { label: 'Pressure', value: 'Up to 20 bar (g)' },
                { label: 'Connection', value: '6 mm Swagelok fittings' },
                { label: 'Material', value: 'Stainless steel body' },
                { label: 'Application', value: 'Pressurized gas lines\nCompressed air sampling' },
            ]
        },
    ],
    co2: [
        {
            id: 'gmw90', title: 'GMW90', subtitle: 'WALL-MOUNT CO₂ TRANSMITTER', category: 'transmitter',
            image: '/templates/hs-tech/images/products/6251932a0e954.png',
            gallery: ['/templates/hs-tech/images/products/6251932a0e954.png'],
            desc: 'Multi-parameter wall transmitter measuring CO2, temperature, and humidity. Features Vaisala CARBOCAP® dual-channel sensor for superior long-term stability — no zero drift.',
            specs: [
                { label: 'Parameters', value: 'CO₂, Temperature (T), Humidity (RH)' },
                { label: 'CO₂ Range', value: '0 ... 2000 ppm (standard)\n0 ... 10000 ppm (optional)' },
                { label: 'CO₂ Accuracy', value: '±(40 ppm + 3% of reading)' },
                { label: 'T Range / Accuracy', value: '-40 ... +60 °C / ±0.2 °C' },
                { label: 'RH Range / Accuracy', value: '0 ... 100 %RH / ±1.7 %RH' },
                { label: 'Output', value: '4...20 mA, 0...10 V, RS-485 Modbus' },
                { label: 'Application', value: 'HVAC, Building automation\nDemand-controlled ventilation' },
            ],
            datasheet: 'https://www.vaisala.com/sites/default/files/documents/GMW90-Datasheet-B211008EN.pdf'
        },
        {
            id: 'gmw80', title: 'GMW80', subtitle: 'CO₂ TRANSMITTER', category: 'transmitter',
            image: '/templates/hs-tech/images/products/cfd2828db31bd.png',
            gallery: ['/templates/hs-tech/images/products/cfd2828db31bd.png'],
            desc: 'Economical CO2 transmitter for standard indoor air quality monitoring and demand-controlled ventilation.',
            specs: [
                { label: 'Parameter', value: 'CO₂' },
                { label: 'CO₂ Range', value: '0 ... 2000 ppm' },
                { label: 'CO₂ Accuracy', value: '±(40 ppm + 3% of reading)' },
                { label: 'Output', value: '0...10 V, 4...20 mA' },
                { label: 'Application', value: 'Office buildings, Schools\nDemand-controlled ventilation' },
            ],
            datasheet: 'https://www.vaisala.com/sites/default/files/documents/GMW80-Datasheet-B211007EN.pdf'
        },
        {
            id: 'gmd110', title: 'GMD110', subtitle: 'DUCT CO₂ TRANSMITTER', category: 'transmitter',
            image: '/templates/hs-tech/images/products/c846ecca3733c.png',
            gallery: ['/templates/hs-tech/images/products/c846ecca3733c.png'],
            desc: 'CO2 transmitter for duct mounting in HVAC air handling units. Measures CO2 (and optionally T, RH) directly in the airflow.',
            specs: [
                { label: 'Installation', value: 'Duct mount (AHU / VAV)' },
                { label: 'CO₂ Range', value: '0 ... 2000 ppm' },
                { label: 'CO₂ Accuracy', value: '±(40 ppm + 3% of reading)' },
                { label: 'Output', value: '0...10 V, 4...20 mA, RS-485' },
                { label: 'Application', value: 'Air handling units\nDemand-controlled ventilation' },
            ],
            datasheet: 'https://www.vaisala.com/sites/default/files/documents/GMD110-Datasheet-B211006EN.pdf'
        },
        {
            id: 'gmp343', title: 'GMP343', subtitle: 'INDUSTRIAL CO₂ PROBE', category: 'probe',
            image: '/templates/hs-tech/images/products/eb130aca3df08.png',
            gallery: ['/templates/hs-tech/images/products/eb130aca3df08.png'],
            desc: 'High-accuracy CO2 probe for industrial processes and research. Flow-through design with temperature-compensated CARBOCAP® sensor for stable long-term measurements.',
            specs: [
                { label: 'CO₂ Range', value: '0 ... 10000 ppm' },
                { label: 'Accuracy', value: '±(20 ppm + 2% of reading) @ 25 °C' },
                { label: 'Response Time', value: 't90 < 40 s' },
                { label: 'Pressure Compensation', value: 'Built-in, no recalibration needed' },
                { label: 'Design', value: 'Flow-through / immersion' },
                { label: 'Application', value: 'Industrial processes\nGreenhouses, Research, Food packaging' },
            ],
            datasheet: 'https://www.vaisala.com/sites/default/files/documents/GMP343-Datasheet-B210879EN.pdf'
        },
        {
            id: 'gmp251', title: 'GMP251', subtitle: 'HIGH-RANGE CO₂ PROBE', category: 'probe',
            image: '/templates/hs-tech/images/products/f6933d55699f3.png',
            gallery: ['/templates/hs-tech/images/products/f6933d55699f3.png'],
            desc: 'CO2 probe for high-concentration (percent-level) measurement in incubators, controlled atmospheres, and fermentation processes.',
            specs: [
                { label: 'CO₂ Range', value: '0 ... 30 %vol' },
                { label: 'Accuracy', value: '±0.5 %vol (0...20 %vol)' },
                { label: 'Output', value: 'Analog / RS-485' },
                { label: 'Application', value: 'Cell culture incubators\nControlled atmosphere storage\nFermentation' },
            ],
            datasheet: 'https://www.vaisala.com/sites/default/files/documents/GMP251-Datasheet-B210878EN.pdf'
        },
        {
            id: 'gmp231', title: 'GMP231', subtitle: 'INCUBATOR CO₂ PROBE', category: 'probe',
            image: '/templates/hs-tech/images/products/8b82ea8dea629.png',
            gallery: ['/templates/hs-tech/images/products/8b82ea8dea629.png'],
            desc: 'CO2 probe designed for life science incubators. Withstands high-temperature autoclaving and provides accurate measurement in humid incubator environments.',
            specs: [
                { label: 'CO₂ Range', value: '0 ... 20 %vol' },
                { label: 'Operating Temp', value: '+5 ... +45 °C' },
                { label: 'Autoclave', value: 'Withstands 121 °C steam sterilization' },
                { label: 'Output', value: 'Analog / RS-485' },
                { label: 'Application', value: 'CO2 incubators\nLife science, Cell culture' },
            ],
            datasheet: 'https://www.vaisala.com/sites/default/files/documents/GMP231-Datasheet-B210877EN.pdf'
        },
        {
            id: 'indigo80_gmp252', title: 'Indigo80 + GMP252', subtitle: 'PORTABLE CO₂ METER', category: 'handheld',
            image: '/templates/hs-tech/images/products/41a5c8353e901.png',
            gallery: ['/templates/hs-tech/images/products/41a5c8353e901.png'],
            desc: 'Portable CO2 measurement system combining the Indigo80 handheld indicator with the GMP252 high-range CO2 probe. Ideal for spot-checking and verification.',
            specs: [
                { label: 'System', value: 'Indigo80 indicator + GMP252 probe' },
                { label: 'CO₂ Range', value: '0 ... 30 %vol (ppm range available)' },
                { label: 'Display', value: 'Color touchscreen (3.5")' },
                { label: 'Data logging', value: 'Internal memory (5.5M data points)' },
                { label: 'Connectivity', value: 'Bluetooth, USB' },
                { label: 'Application', value: 'Spot-checking, Calibration verification\nFood storage, Greenhouses' },
            ],
            datasheet: 'https://www.vaisala.com/sites/default/files/documents/Indigo80-Datasheet-B211699EN.pdf'
        },
    ],
    oil: [
        {
            id: 'mht410', title: 'MHT410', subtitle: 'ONLINE TRANSFORMER MONITOR', category: 'transformer',
            image: '/templates/hs-tech/images/products/deffa2b1b398f.jpg',
            gallery: ['/templates/hs-tech/images/products/deffa2b1b398f.jpg'],
            desc: 'Online multi-parameter monitor for power transformers. Simultaneously measures dissolved hydrogen gas and moisture in insulating oil to detect early-stage faults.',
            specs: [
                { label: 'Parameters', value: 'Moisture in oil (aw), Dissolved H2 gas, Temperature' },
                { label: 'Moisture Range', value: '0 ... 1 aw (water activity)' },
                { label: 'H2 Range', value: '0 ... 4000 ppm vol' },
                { label: 'Output', value: '4...20 mA × 3, RS-485 Modbus' },
                { label: 'Oil Types', value: 'Mineral oil, Silicone oil, Ester oil' },
                { label: 'Application', value: 'Power transformers\nEarly fault detection' },
                { label: 'Protection', value: 'IP65' },
            ],
            datasheet: 'https://www.vaisala.com/sites/default/files/documents/MHT410-Datasheet-B211757EN.pdf'
        },
        {
            id: 'mmt330', title: 'MMT330', subtitle: 'ONLINE OIL MOISTURE TRANSMITTER', category: 'fixed',
            image: '/templates/hs-tech/images/products/5980bfb1851a8.png',
            gallery: ['/templates/hs-tech/images/products/5980bfb1851a8.png'],
            desc: 'Online moisture measurement in insulating oils. Provides continuous monitoring of moisture content in transformer and hydraulic oils for predictive maintenance.',
            specs: [
                { label: 'Parameters', value: 'Water activity (aw), Temperature' },
                { label: 'Oil Moisture Range', value: '0 ... 1 aw' },
                { label: 'Temperature Range', value: '-40 ... +100 °C' },
                { label: 'Output', value: 'RS-232, RS-485, 4...20 mA × 2' },
                { label: 'Oil Types', value: 'Mineral, Synthetic, Ester oil' },
                { label: 'Application', value: 'Power transformers, Hydraulic systems\nLubricant monitoring' },
                { label: 'Protection', value: 'IP66' },
            ],
            datasheet: 'https://www.vaisala.com/sites/default/files/documents/MMT330-Datasheet-B210993EN.pdf'
        },
        {
            id: 'mmt310', title: 'MMT310', subtitle: 'COMPACT OIL MOISTURE TRANSMITTER', category: 'fixed',
            image: '/templates/hs-tech/images/products/3ca83569b6d00.jpg',
            gallery: ['/templates/hs-tech/images/products/3ca83569b6d00.jpg'],
            desc: 'Compact transmitter for continuous moisture measurement in oils. Suitable for small transformers and OEM integration.',
            specs: [
                { label: 'Parameters', value: 'Water activity (aw), Temperature' },
                { label: 'Range', value: '0 ... 1 aw, -40 ... +100 °C' },
                { label: 'Output', value: '4...20 mA × 2' },
                { label: 'Application', value: 'Small transformers, OEM\nHydraulic and lubricant systems' },
                { label: 'Protection', value: 'IP67' },
            ]
        },
        {
            id: 'mm70', title: 'MM70', subtitle: 'HANDHELD OIL MOISTURE METER', category: 'handheld',
            image: '/templates/hs-tech/images/products/a39c6508f2ff2.png',
            gallery: ['/templates/hs-tech/images/products/a39c6508f2ff2.png'],
            desc: 'Portable handheld instrument for spot-checking moisture in insulating and industrial oils. Fast response time for field verification.',
            specs: [
                { label: 'Parameters', value: 'Water activity (aw), Temperature' },
                { label: 'Range', value: '0 ... 1 aw, -40 ... +100 °C' },
                { label: 'Response time', value: '< 30 s (t90)' },
                { label: 'Display', value: 'Graphical LCD with backlight' },
                { label: 'Data logging', value: '30,000 measurements' },
                { label: 'Application', value: 'Field measurement\nTransformer oil spot-checking' },
            ],
            datasheet: 'https://www.vaisala.com/sites/default/files/documents/MM70-Datasheet-B210976EN.pdf'
        },
        {
            id: 'mmt162', title: 'MMT162', subtitle: 'OEM OIL MOISTURE MODULE', category: 'oil_module',
            image: '/templates/hs-tech/images/products/deffa2b1b398f.jpg', gallery: [],
            desc: 'Compact OEM module for continuous oil moisture measurement. Designed for integration into transformer monitors, hydraulic systems, and industrial machinery.',
            specs: [
                { label: 'Type', value: 'OEM / Module (DIN rail)' },
                { label: 'Parameters', value: 'Water activity (aw), Temperature' },
                { label: 'Range', value: '0 ... 1 aw, -40 ... +100 °C' },
                { label: 'Output', value: '4...20 mA, RS-485 Modbus' },
                { label: 'Application', value: 'Transformers, Hydraulic systems\nIndustrial oil monitoring, OEM' },
            ]
        },
    ],
    barometer: [
        {
            id: 'ptb330', title: 'PTB330', subtitle: 'CLASS A DIGITAL BAROMETER', category: 'barometer',
            image: '/templates/hs-tech/images/products/3ca83569b6d00.jpg',
            gallery: ['/templates/hs-tech/images/products/3ca83569b6d00.jpg', '/templates/hs-tech/images/products/2ddb0a75a50e4.jpg'],
            desc: 'Reference-level Class A digital barometer for meteorology, aviation, and research. Dual-sensor design provides redundancy and highest accuracy.',
            specs: [
                { label: 'Accuracy Class', value: 'A (±0.3 hPa @ +20 °C, ref to WMO)' },
                { label: 'Pressure Range', value: '500 ... 1100 hPa' },
                { label: 'Stability', value: '< 0.1 hPa/year' },
                { label: 'Output', value: 'RS-232, RS-485, 4...20 mA, 0...5 V' },
                { label: 'Display', value: 'Graphical LCD (optional)' },
                { label: 'Application', value: 'Meteorological networks\nAviation (METAR), Research' },
                { label: 'Calibration', value: 'NIST-traceable, ISO/IEC 17025' },
            ],
            datasheet: 'https://www.vaisala.com/sites/default/files/documents/PTB330-Datasheet-B210982EN.pdf'
        },
        {
            id: 'ptb210', title: 'PTB210', subtitle: 'CLASS B DIGITAL BAROMETER', category: 'barometer',
            image: '/templates/hs-tech/images/products/2e8820b69ea2b.jpg',
            gallery: ['/templates/hs-tech/images/products/2e8820b69ea2b.jpg'],
            desc: 'Industrial-grade Class B digital barometer for HVAC, weather stations, and environmental monitoring.',
            specs: [
                { label: 'Accuracy Class', value: 'B (±0.5 hPa @ +20 °C)' },
                { label: 'Pressure Range', value: '600 ... 1100 hPa' },
                { label: 'Output', value: 'RS-232, 4...20 mA, 0...5 V' },
                { label: 'Application', value: 'Weather stations, HVAC\nIndustrial environmental monitoring' },
            ],
            datasheet: 'https://www.vaisala.com/sites/default/files/documents/PTB210-Datasheet-B210981EN.pdf'
        },
        {
            id: 'ptb110', title: 'PTB110', subtitle: 'BAROMETRIC PRESSURE TRANSMITTER', category: 'barometer',
            image: '/templates/hs-tech/images/products/b2209059580dc.jpg',
            gallery: ['/templates/hs-tech/images/products/b2209059580dc.jpg'],
            desc: 'Compact barometric pressure transmitter with analog output for building automation and HVAC systems.',
            specs: [
                { label: 'Pressure Range', value: '600 ... 1100 hPa' },
                { label: 'Accuracy', value: '±0.5 hPa' },
                { label: 'Output', value: '0...1 V, 0...5 V, 0...10 V, 4...20 mA' },
                { label: 'Application', value: 'Building automation, HVAC\nAltitude compensation' },
                { label: 'Protection', value: 'IP65' },
            ],
            datasheet: 'https://www.vaisala.com/sites/default/files/documents/PTB110-Datasheet-B210980EN.pdf'
        },
        {
            id: 'ptu300', title: 'PTU300', subtitle: 'COMBINED P + T + RH TRANSMITTER', category: 'barometer',
            image: '/templates/hs-tech/images/products/deffa2b1b398f.jpg',
            gallery: ['/templates/hs-tech/images/products/deffa2b1b398f.jpg', '/templates/hs-tech/images/products/2e8820b69ea2b.jpg'],
            desc: 'Combined transmitter measuring barometric pressure, temperature, and relative humidity in a single unit. Calculates derived parameters such as absolute humidity and enthalpy.',
            specs: [
                { label: 'Parameters', value: 'Pressure (P), Temperature (T), Humidity (RH)' },
                { label: 'Pressure Range', value: '600 ... 1100 hPa / Accuracy: ±0.5 hPa' },
                { label: 'T Range / Accuracy', value: '-40 ... +60 °C / ±0.2 °C' },
                { label: 'RH Range / Accuracy', value: '0 ... 100 %RH / ±1.5 %RH' },
                { label: 'Output', value: 'RS-232, RS-485, 4...20 mA × 3' },
                { label: 'Application', value: 'Meteorology, Weather stations\nEnvironmental monitoring' },
            ],
            datasheet: 'https://www.vaisala.com/sites/default/files/documents/PTU300-Datasheet-B210983EN.pdf'
        },
    ],
    weather: [
        { id: 'wxt530', title: 'WXT530', subtitle: 'WEATHER STATION', category: 'trans', image: '/templates/hs-tech/images/products/2c2344f8b46d5.jpg', gallery: ['/templates/hs-tech/images/products/2c2344f8b46d5.jpg'], desc: 'All-in-one multi-parameter weather sensor measuring wind, rain, pressure, temperature, and humidity.', specs: [{ label: 'Parameters', value: 'Wind speed/direction, Rain, Pressure, T, RH' }, { label: 'Output', value: 'SDI-12, RS-232, RS-485, Modbus' }, { label: 'Application', value: 'Weather monitoring, Aviation, Marine' }], datasheet: 'https://www.vaisala.com/sites/default/files/documents/WXT530-Datasheet-B211961EN.pdf' },
        { id: 'hmp155_w', title: 'HMP155', subtitle: 'WEATHER PROBE', category: 'trans', image: '/templates/hs-tech/images/products/2ddb0a75a50e4.jpg', gallery: ['/templates/hs-tech/images/products/2ddb0a75a50e4.jpg'], desc: 'High-accuracy humidity and temperature probe for meteorological applications.', specs: [{ label: 'Range', value: '0...100 %RH / -80...+60 °C' }, { label: 'Accuracy', value: '±1.0 %RH' }, { label: 'Application', value: 'Meteorology, Roads, Aviation' }, { label: 'Protection', value: 'IP66' }] },
        { id: 'hmt337', title: 'HMT337', subtitle: 'OUTDOOR TRANSMITTER', category: 'trans', image: '/templates/hs-tech/images/products/2ddb0a75a50e4.jpg', gallery: [], desc: 'Humidity and temperature transmitter for outdoor and challenging environments.', specs: [{ label: 'Range', value: '0...100 %RH / -40...+60 °C' }, { label: 'Accuracy', value: '±1 %RH' }, { label: 'Output', value: '4...20 mA, RS-485' }, { label: 'Protection', value: 'IP65' }] },
        { id: 'ptu307', title: 'PTU307', subtitle: 'COMBINED WEATHER TRANSMITTER', category: 'trans', image: '/templates/hs-tech/images/products/deffa2b1b398f.jpg', gallery: [], desc: 'Combined pressure, humidity, and temperature transmitter for weather applications.', specs: [{ label: 'Parameters', value: 'P + T + RH' }, { label: 'Pressure range', value: '500...1100 hPa' }, { label: 'Application', value: 'Meteorology, Environmental monitoring' }] },
        { id: 'hms110', title: 'HMS110', subtitle: 'WALL/DUCT HVAC SENSOR', category: 'hvac_weather', image: '/templates/hs-tech/images/products/2ddb0a75a50e4.jpg', gallery: [], desc: 'Combined humidity and temperature transmitter for wall/duct mounting in HVAC applications.', specs: [{ label: 'Range', value: '0...100 %RH / -40...+80 °C' }, { label: 'Output', value: '4...20 mA, 0...10 V' }, { label: 'Application', value: 'HVAC, Building automation' }] },
        { id: 'hms80', title: 'HMS80', subtitle: 'COMPACT HVAC SENSOR', category: 'hvac_weather', image: '/templates/hs-tech/images/products/2ddb0a75a50e4.jpg', gallery: [], desc: 'Compact humidity and temperature transmitter for building automation and HVAC.', specs: [{ label: 'Range', value: '0...100 %RH' }, { label: 'Output', value: '4...20 mA, 0...10 V' }, { label: 'Application', value: 'HVAC, Building automation, Energy management' }] }
    ],
    h2o2: [
        {
            id: 'hpp271', title: 'HPP271 / HPP272', subtitle: 'H₂O₂ VAPOR PROBE', category: 'sensor',
            image: '/templates/hs-tech/images/products/47e994f808c6a.png',
            gallery: ['/templates/hs-tech/images/products/47e994f808c6a.png'],
            desc: 'Vaporized hydrogen peroxide (VHP/H2O2) measurement probe for bio-decontamination process monitoring. Enables real-time control of decontamination cycles in pharmaceutical and healthcare environments.',
            specs: [
                { label: 'Gas', value: 'H₂O₂ vapor (VHP)' },
                { label: 'H₂O₂ Range', value: 'HPP271: 0 ... 2000 ppm\nHPP272: 0 ... 1000 ppm' },
                { label: 'Accuracy', value: '± 10 % of reading (at steady state)' },
                { label: 'Response Time', value: 't90 < 30 s (HPP271)' },
                { label: 'Output', value: 'RS-485 Modbus (Indigo compatible)\n4...20 mA (HPP272)' },
                { label: 'Application', value: 'Pharmaceutical bio-decontamination\nIsolators, Cleanrooms, Hospital rooms' },
                { label: 'Protection', value: 'IP65 (probe head H₂O₂-resistant)' },
            ],
            datasheet: 'https://www.vaisala.com/sites/default/files/documents/HPP270-Datasheet-B211876EN.pdf'
        }
    ],

    // SETRA
    setra: [
        {
            id: 'setra_lite', title: 'Setra Lite', subtitle: 'ROOM PRESSURE VISUAL INDICATOR', category: 'diff_ind',
            image: '/templates/hs-tech/images/products/849fee28dfdc5.png',
            gallery: ['/templates/hs-tech/images/products/849fee28dfdc5.png'],
            desc: 'Simple and reliable visual differential pressure indicator using tri-color LED lights to show positive, negative, or neutral room pressure at a glance.',
            specs: [
                { label: 'Display', value: 'Tri-color LED (Green / Red / Amber)' },
                { label: 'Pressure Range', value: '0 ... ±0.25" WC (±62.3 Pa)' },
                { label: 'Accuracy', value: '±2% FS' },
                { label: 'Input Power', value: '24 VDC / VAC' },
                { label: 'Application', value: 'Cleanrooms (ISO Class 1-8)\nOperating rooms, Isolation rooms' },
                { label: 'Installation', value: 'Wall mount' },
            ]
        },
        {
            id: 'setra_flex', title: 'Setra Flex', subtitle: 'TOUCHSCREEN ROOM PRESSURE MONITOR', category: 'diff_ind',
            image: '/templates/hs-tech/images/products/849fee28dfdc5.png',
            gallery: ['/templates/hs-tech/images/products/849fee28dfdc5.png'],
            desc: 'Advanced touchscreen room pressure monitor with numeric display and configurable alarms. Provides visual and audible alerts when room pressure goes out of range.',
            specs: [
                { label: 'Display', value: '4.3" color touchscreen' },
                { label: 'Pressure Range', value: '0 ... ±1.25" WC (±311 Pa)' },
                { label: 'Accuracy', value: '±1% FS' },
                { label: 'Alarms', value: 'Visual (LED) + Audible + Relay output' },
                { label: 'Output', value: '4...20 mA, 0...10 V' },
                { label: 'Application', value: 'Isolation rooms, Cleanrooms\nPharmaceutical, Healthcare' },
            ]
        },
        {
            id: 'model_mrc', title: 'Model MRC', subtitle: 'MULTI-RANGE CONFIGURABLE DP SENSOR', category: 'diff_sen',
            image: '/templates/hs-tech/images/products/0173971661ad2.png',
            gallery: ['/templates/hs-tech/images/products/0173971661ad2.png', '/templates/hs-tech/images/products/0b98ec3d71c52.png', '/templates/hs-tech/images/products/866d1ed724ffa.png', '/templates/hs-tech/images/products/ba117fd1862c9.png', '/templates/hs-tech/images/products/20542e1ba6c31.png'],
            desc: 'Field-configurable multi-range differential pressure sensor with selectable ranges. No hardware changes required — range selected via DIP switch.',
            specs: [
                { label: 'Pressure Ranges', value: '0...0.1", 0...0.25", 0...0.5", 0...1.0" WC\n(Bi-directional options available)' },
                { label: 'Accuracy', value: '±1% FS' },
                { label: 'Output', value: '4...20 mA, 0...5 V, 0...10 V' },
                { label: 'Input Power', value: '24 VDC / VAC' },
                { label: 'Application', value: 'HVAC air handling units\nFilter condition monitoring' },
                { label: 'Protection', value: 'IP65 (NEMA 4)' },
            ]
        },
        {
            id: 'model_mrg', title: 'Model MRG', subtitle: 'GENERAL PURPOSE DP SENSOR', category: 'diff_sen',
            image: '/templates/hs-tech/images/products/0b98ec3d71c52.png',
            gallery: ['/templates/hs-tech/images/products/0b98ec3d71c52.png', '/templates/hs-tech/images/products/866d1ed724ffa.png'],
            desc: 'Cost-effective differential pressure sensor for standard HVAC and building automation applications.',
            specs: [
                { label: 'Pressure Ranges', value: '0...0.1" to 0...10" WC (fixed range)' },
                { label: 'Accuracy', value: '±2% FS' },
                { label: 'Output', value: '4...20 mA, 0...5 V, 0...10 V' },
                { label: 'Input Power', value: '24 VDC / VAC' },
                { label: 'Application', value: 'Building automation\nVAV boxes, Fan control' },
            ]
        },
        {
            id: 'model_264', title: 'Model 264', subtitle: 'LOW DIFFERENTIAL PRESSURE TRANSDUCER', category: 'diff_sen',
            image: '/templates/hs-tech/images/products/866d1ed724ffa.png',
            gallery: ['/templates/hs-tech/images/products/866d1ed724ffa.png', '/templates/hs-tech/images/products/ba117fd1862c9.png'],
            desc: 'Low differential pressure transducer with exceptional stability. Used for HVAC pressure measurement in VAV boxes, fan pressure control, and filter monitoring.',
            specs: [
                { label: 'Pressure Ranges', value: '0...±0.25" WC to 0...±10" WC' },
                { label: 'Accuracy', value: '±1% FS (±0.5% optional)' },
                { label: 'Output', value: '4...20 mA, 0...5 V, 0...10 V' },
                { label: 'Input Power', value: '24 VDC / VAC' },
                { label: 'Application', value: 'HVAC VAV boxes, Fan pressure\nFilter monitoring, Cleanrooms' },
            ]
        },
        {
            id: 'pdt101', title: 'PDT101', subtitle: 'OEM DIFFERENTIAL PRESSURE SENSOR', category: 'diff_sen',
            image: '/templates/hs-tech/images/products/20542e1ba6c31.png',
            gallery: ['/templates/hs-tech/images/products/20542e1ba6c31.png'],
            desc: 'Compact OEM differential pressure sensor for filter condition monitoring and HVAC OEM applications.',
            specs: [
                { label: 'Type', value: 'OEM sensor (PCB mount)' },
                { label: 'Pressure Range', value: '0...0.5" WC to 0...10" WC' },
                { label: 'Output', value: '0.5...4.5 V (ratiometric)' },
                { label: 'Supply', value: '5 VDC' },
                { label: 'Application', value: 'Filter condition monitoring\nOEM HVAC equipment' },
            ]
        },
        {
            id: 'pdt102', title: 'PDT102', subtitle: 'DIFFERENTIAL PRESSURE TRANSMITTER', category: 'diff_sen',
            image: '/templates/hs-tech/images/products/20542e1ba6c31.png', gallery: [],
            desc: 'High-accuracy differential pressure transmitter for HVAC and cleanroom filter condition monitoring with industry-standard 4-20 mA output.',
            specs: [
                { label: 'Pressure Range', value: '0...0.1" to 0...10" WC' },
                { label: 'Accuracy', value: '±1% FS' },
                { label: 'Output', value: '4...20 mA, 0...10 V' },
                { label: 'Input Power', value: '24 VDC' },
                { label: 'Application', value: 'HVAC, Cleanrooms\nFilter monitoring' },
                { label: 'Protection', value: 'IP65' },
            ]
        },
        {
            id: 'model_axd', title: 'Model AXD', subtitle: 'HIGH ACCURACY INDUSTRIAL TRANSDUCER', category: 'industrial',
            image: '/templates/hs-tech/images/products/af2c3e1c0d3d0.png',
            gallery: ['/templates/hs-tech/images/products/af2c3e1c0d3d0.png'],
            desc: 'High accuracy, ultra-stable industrial pressure transducer for demanding process applications. Stainless steel wetted parts for corrosive media.',
            specs: [
                { label: 'Pressure Ranges', value: '0...100 inH2O to 0...10,000 PSI' },
                { label: 'Accuracy', value: '±0.11% FS BSL (incl. linearity, hysteresis, repeatability)' },
                { label: 'Output', value: '4...20 mA, 0...5 V, 0...10 V, 1...5 V' },
                { label: 'Material', value: '316L stainless steel wetted parts' },
                { label: 'Application', value: 'Industrial process control\nHigh-accuracy measurement' },
                { label: 'Protection', value: 'IP65 (NEMA 4)' },
            ]
        },
        {
            id: 'model_206', title: 'Model 206', subtitle: 'RUGGED STAINLESS STEEL TRANSDUCER', category: 'industrial',
            image: '/templates/hs-tech/images/products/5175822708f3a.png',
            gallery: ['/templates/hs-tech/images/products/5175822708f3a.png'],
            desc: 'Rugged stainless steel pressure transducer for harsh industrial environments. Fully welded, hermetic construction for maximum reliability.',
            specs: [
                { label: 'Pressure Ranges', value: '0...15 to 0...3000 PSI (gauge/absolute)' },
                { label: 'Accuracy', value: '±0.25% FS' },
                { label: 'Output', value: '4...20 mA, 0...5 V, 1...5 V' },
                { label: 'Material', value: '316 stainless steel (all wetted parts)' },
                { label: 'Application', value: 'Chemical, Petrochemical\nHarsh environments, Corrosive media' },
                { label: 'Protection', value: 'IP67' },
            ]
        },
        {
            id: 'model_209', title: 'Model 209', subtitle: 'COMPACT OEM PRESSURE SENSOR', category: 'industrial',
            image: '/templates/hs-tech/images/products/a153aa767ba86.png',
            gallery: ['/templates/hs-tech/images/products/a153aa767ba86.png'],
            desc: 'Compact, cost-effective OEM pressure sensor for industrial equipment integration.',
            specs: [
                { label: 'Type', value: 'OEM compact sensor' },
                { label: 'Pressure Range', value: '0...15 to 0...300 PSI' },
                { label: 'Accuracy', value: '±0.25% FS' },
                { label: 'Output', value: '4...20 mA, 0...5 V' },
                { label: 'Application', value: 'OEM equipment integration\nIndustrial machines' },
            ]
        },
    ],

    // JUMO
    jumo: [
        {
            id: 'plastosens_pt0', title: 'PlastoSENS PT0', subtitle: 'SURFACE TEMPERATURE SENSOR', category: 'temperature',
            image: '/templates/hs-tech/images/products/94259b4509a1f.png',
            gallery: ['/templates/hs-tech/images/products/94259b4509a1f.png'],
            desc: 'PlastoSENS PT0 — Flush-mount surface temperature sensor for plastics processing. Designed for injection molding machines, extruders, and hot runner systems. Provides direct melt temperature measurement for process optimization.',
            specs: [
                { label: 'Type', value: 'Thermocouple Type J / Type K (application-specific)' },
                { label: 'Measuring range', value: '0 ... +400 °C (Type J)' },
                { label: 'Response time', value: 't₀.₉ < 0.5 s' },
                { label: 'Mounting', value: 'Flush-mount (screw-in, nozzle-tip)' },
                { label: 'Protection', value: 'Stainless steel, food-grade versions available' },
                { label: 'Application', value: 'Injection molding, Extrusion\nHot runner systems, Plastics processing' },
            ]
        },
        {
            id: 'plastosens_pt2', title: 'PlastoSENS PT2', subtitle: 'MELT TEMPERATURE SENSOR', category: 'temperature',
            image: '/templates/hs-tech/images/products/94259b4509a1f.png',
            gallery: ['/templates/hs-tech/images/products/94259b4509a1f.png'],
            desc: 'PlastoSENS PT2 — High-pressure melt temperature sensor for continuous melt temperature measurement in high-temperature plastics processes. Spring-loaded tip ensures permanent contact with melt for reliable readings.',
            specs: [
                { label: 'Type', value: 'Thermocouple Type J / Type K' },
                { label: 'Temperature range', value: '0 ... +450 °C' },
                { label: 'Pressure rating', value: 'Up to 2,000 bar (melt pressure compatible)' },
                { label: 'Tip design', value: 'Spring-loaded (permanent contact)' },
                { label: 'Connection', value: 'Miniature thermocouple connector' },
                { label: 'Application', value: 'Extrusion lines, Compounding\nHigh-pressure melt processes' },
            ]
        },
        {
            id: 'ph_sensor', title: 'tecline pH', subtitle: 'pH COMBINATION ELECTRODE', category: 'ph_electrode',
            image: '/templates/hs-tech/images/products/1c2022c06d474.png',
            gallery: ['/templates/hs-tech/images/products/1c2022c06d474.png'],
            desc: 'High-quality combination pH electrode for liquid analysis in water treatment and process industries. Available in glass and plastics (PEI, PVDF) for various media.',
            specs: [
                { label: 'Measurement', value: 'pH 0 ... 14' },
                { label: 'Temperature Range', value: '0 ... +80 °C' },
                { label: 'Electrode body', value: 'Glass / PEI / PVDF (application-specific)' },
                { label: 'Reference system', value: 'Ag/AgCl double junction' },
                { label: 'Connector', value: 'BNC connector (standard)' },
                { label: 'Application', value: 'Water treatment, Process industry\nChemical, Food & Beverage' },
            ]
        },
        {
            id: 'ph_trans', title: 'ecoTRANS pH 03', subtitle: 'pH TRANSMITTER (DIN RAIL)', category: 'ph_transmitter',
            image: '/templates/hs-tech/images/products/94259b4509a1f.png',
            gallery: ['/templates/hs-tech/images/products/94259b4509a1f.png'],
            desc: 'Compact panel/DIN rail pH transmitter with display. Converts electrode signal to standard 4-20 mA output for PLC/SCADA integration.',
            specs: [
                { label: 'Measurement', value: 'pH 0 ... 14 / Temperature' },
                { label: 'Accuracy', value: '±0.05 pH' },
                { label: 'Input', value: 'pH electrode (BNC/S7/Pg13.5)' },
                { label: 'Output', value: '4...20 mA (active/passive), 2× relay' },
                { label: 'Mounting', value: 'DIN rail 35 mm / Panel cut-out' },
                { label: 'Display', value: 'LCD (pH, temp, mV)' },
                { label: 'Application', value: 'Water treatment, Process monitoring\nPLC/SCADA integration' },
            ]
        },
        {
            id: 'dtrans_ph02', title: 'dTRANS pH 02', subtitle: 'PROCESS pH TRANSMITTER', category: 'ph_transmitter',
            image: '/templates/hs-tech/images/products/8d15ded8da6eb.png',
            gallery: ['/templates/hs-tech/images/products/8d15ded8da6eb.png'],
            desc: 'Industrial field-mount pH transmitter with IP65 protection. HART communication for smart instrumentation integration. Supports JUMO and third-party electrodes.',
            specs: [
                { label: 'Measurement', value: 'pH 0 ... 14 / ORP / Temperature' },
                { label: 'Accuracy', value: '±0.01 pH' },
                { label: 'Output', value: '4...20 mA (HART 5.x/6.x), 2× relay' },
                { label: 'Mounting', value: 'Field mount (wall/pipe)' },
                { label: 'Protection', value: 'IP65 / IP67 (optional)' },
                { label: 'Communication', value: 'HART 5.x / 6.x' },
                { label: 'Application', value: 'Industrial processes\nWaste water, Chemical' },
            ]
        },
        {
            id: 'cond_trans', title: 'ecoTRANS Lf 03', subtitle: 'CONDUCTIVITY TRANSMITTER', category: 'conductivity',
            image: '/templates/hs-tech/images/products/75b212a123a21.png',
            gallery: ['/templates/hs-tech/images/products/75b212a123a21.png'],
            desc: 'Compact conductivity and temperature transmitter for water quality monitoring. DIN rail mounting with 4-20 mA output for integration into PLC/BMS systems.',
            specs: [
                { label: 'Measurement', value: 'Conductivity (μS/cm ... mS/cm) / Temperature' },
                { label: 'Conductivity Range', value: '0 ... 500 μS/cm to 0 ... 500 mS/cm (cell constant dependent)' },
                { label: 'Accuracy', value: '±1% FS' },
                { label: 'Output', value: '4...20 mA, 2× relay' },
                { label: 'Mounting', value: 'DIN rail 35 mm' },
                { label: 'Application', value: 'Drinking water, Process water\nWater treatment, Boiler feed water' },
            ]
        },
        {
            id: 'recording', title: 'LOGOSCREEN 600', subtitle: 'PAPERLESS CHART RECORDER', category: 'control',
            image: '/templates/hs-tech/images/products/85b44cdd77766.png',
            gallery: ['/templates/hs-tech/images/products/85b44cdd77766.png'],
            desc: 'High-performance paperless chart recorder with large touchscreen. Up to 12 universal inputs for temperature, process, and digital signals. Data stored on internal flash + SD card.',
            specs: [
                { label: 'Display', value: '10.4" color TFT touchscreen' },
                { label: 'Inputs', value: 'Up to 12 universal inputs\n(T/C, RTD, mV, mA, Resistance, Pulse)' },
                { label: 'Sampling rate', value: 'Up to 500 ms per channel' },
                { label: 'Memory', value: 'Internal flash 512 MB + SD card slot' },
                { label: 'Communication', value: 'Ethernet, RS-485 (Modbus RTU/TCP)\nUSB, CF card' },
                { label: 'Alarms', value: '4 relay outputs' },
                { label: 'Application', value: 'Process visualization & recording\nGxP/FDA 21 CFR Part 11 compliant' },
            ]
        },
        {
            id: 'dtron_300', title: 'dTRON 300', subtitle: 'PANEL MOUNT PID CONTROLLER', category: 'control',
            image: '/templates/hs-tech/images/products/2ddb0a75a50e4.jpg',
            gallery: ['/templates/hs-tech/images/products/2ddb0a75a50e4.jpg'],
            desc: 'Compact panel-mount PID controller for temperature and process variable control. Supports multiple sensor types with auto-tuning PID and ramp-soak programming.',
            specs: [
                { label: 'Panel cutout', value: '48 × 48 mm (1/16 DIN)' },
                { label: 'Input', value: 'Thermocouple (T/C), RTD (Pt100)\n4...20 mA, 0...10 V' },
                { label: 'Control', value: 'PID with auto-tuning\nRamp/Soak program (up to 99 segments)' },
                { label: 'Output', value: 'Relay, SSR, 4...20 mA (controller-dependent)' },
                { label: 'Communication', value: 'RS-485 Modbus RTU (optional)' },
                { label: 'Application', value: 'Temperature process control\nOvens, Furnaces, Incubators, Reactors' },
            ]
        },
    ],

    // KNICK
    knick: [
        {
            id: 'stratos', title: 'Stratos Pro', subtitle: 'MULTI-PARAMETER PROCESS ANALYZER', category: 'analysis',
            image: '/templates/hs-tech/images/products/322e267fafb41.png',
            gallery: ['/templates/hs-tech/images/products/322e267fafb41.png'],
            desc: 'High-performance multi-parameter process analyzer for pH, ORP, conductivity, dissolved oxygen, and turbidity measurement. Intrinsically safe Ex Zone 1 certification for use in hazardous areas.',
            specs: [
                { label: 'Parameters', value: 'pH / ORP / Conductivity\nDissolved O₂ / Turbidity (module-dependent)' },
                { label: 'Sensor inputs', value: 'Up to 2 sensor modules (simultaneous)' },
                { label: 'Interface', value: 'Sensoface® diagnostic system\n3.5" color TFT display' },
                { label: 'Output', value: '2× 4...20 mA, 3× relay (alarm)' },
                { label: 'Communication', value: 'PROFIBUS DP, Modbus RTU, HART' },
                { label: 'Safety', value: 'Ex Zone 1 / Zone 21 (ATEX)\nIECEx, FM, CSA certified' },
                { label: 'Protection', value: 'IP65 (wall / pipe / panel mount)' },
                { label: 'Application', value: 'Chemical, Pharmaceutical\nWater treatment, Food & Beverage' },
            ],
            datasheet: 'https://www.knick.de/en/products/process-analysis/transmitters/stratos-pro-a401.html'
        },
    ],

    // CMS (Data Logger / Continuous Monitoring System)
    cms: [
        { id: 'dl2000', title: 'DL2000', subtitle: 'ADVANCED DATA LOGGER', category: 'data_logger', image: '/templates/hs-tech/images/products/dl2000_v1.jpg', gallery: [], desc: 'Advanced standalone data logger for multi-channel environmental monitoring with display.', specs: [{ label: 'Channels', value: 'Multi-channel inputs' }, { label: 'Display', value: 'Built-in LCD' }, { label: 'Application', value: 'Cleanrooms, Labs, Warehouses' }, { label: 'Communication', value: 'LAN, USB' }] },
        { id: 'dl4000', title: 'DL4000', subtitle: 'HIGH CHANNEL LOGGER', category: 'data_logger', image: '/templates/hs-tech/images/products/dl4000_v1.jpg', gallery: [], desc: 'High-density data logger for large-scale continuous monitoring systems.', specs: [{ label: 'Channels', value: 'High density (up to 32+)' }, { label: 'Application', value: 'Industrial CMS, Large facilities' }, { label: 'Communication', value: 'LAN, RS-485, Modbus' }] },
        { id: 'dl1700', title: 'DL1700', subtitle: 'COMPACT DATA LOGGER', category: 'data_logger', image: '/templates/hs-tech/images/products/dl1700_v1.jpg', gallery: [], desc: 'Compact data logger for small to medium scale environmental monitoring.', specs: [{ label: 'Size', value: 'Compact DIN rail' }, { label: 'Application', value: 'Pharmaceutical, Food storage' }, { label: 'Communication', value: 'LAN, USB' }] },
        { id: 'dl1000_1400', title: 'DL1000/1400', subtitle: 'NETWORK LOGGER SERIES', category: 'network_logger', image: '/templates/hs-tech/images/products/dl1000_v1.jpg', gallery: [], desc: 'Network-enabled data loggers for distributed monitoring across facilities.', specs: [{ label: 'Network', value: 'LAN / PoE' }, { label: 'Application', value: 'Distributed monitoring, GxP' }, { label: 'Certification', value: '21 CFR Part 11 compliant' }] },
        { id: 'dl1016_1416', title: 'DL1016/1416', subtitle: 'MULTI-INPUT LOGGER', category: 'network_logger', image: '/templates/hs-tech/images/products/dl1016_v1.jpg', gallery: [], desc: 'Multi-input network logger supporting various sensor types for comprehensive monitoring.', specs: [{ label: 'Inputs', value: 'Up to 16 channels' }, { label: 'Sensors', value: 'T, RH, Pressure, CO2 compatible' }, { label: 'Network', value: 'LAN, Modbus TCP' }] },
        { id: 'vnet_wireless', title: 'Wireless vNET', subtitle: 'WIRELESS LOGGER NETWORK', category: 'network_logger', image: '', gallery: [], desc: 'Wireless monitoring network for flexible deployment in areas where cabling is impractical.', specs: [{ label: 'Wireless', value: 'IEEE 802.15.4 (mesh)' }, { label: 'Application', value: 'Retrofits, Temporary monitoring' }, { label: 'Battery', value: 'Long-life battery option' }] },
        { id: 'poe_logger', title: 'POE Logger', subtitle: 'POWER OVER ETHERNET', category: 'network_logger', image: '/templates/hs-tech/images/products/poe_logger_v1.jpg', gallery: [], desc: 'Data logger powered and connected via a single Ethernet cable using Power over Ethernet.', specs: [{ label: 'Power', value: 'IEEE 802.3af PoE' }, { label: 'Application', value: 'Easy installation, No power outlet needed' }] },
        { id: 'cms_sw', title: 'CMS Software', subtitle: 'MONITORING PLATFORM', category: 'cms_software', image: '/templates/hs-tech/images/products/cms_sw_v1.jpg', gallery: [], desc: 'Centralized software platform for real-time monitoring, alarm management, and compliance reporting.', specs: [{ label: 'Platform', value: 'Windows Server / Web browser' }, { label: 'Features', value: 'Real-time alarms, Reports, Audit trail' }, { label: 'Compliance', value: 'GMP/GxP, FDA 21 CFR Part 11' }] }
    ]
}
