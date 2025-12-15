// Mock data for development

// Type definitions
export type Category = {
    id: string
    name: string
    slug: string
    description: string
}

export type Template = {
    id: string
    name: string
    slug: string
    description: string
    categoryId: string
    category: string
    imageUrl: string
    features: string[]
    demoUrl: string
    popular?: boolean
}

export const categories: Category[] = [
    {
        id: '1',
        name: 'Artist',
        slug: 'artist',
        description: 'Templates for photographers, painters, and sculptors'
    },
    {
        id: '2',
        name: 'Small Business',
        slug: 'small-business',
        description: 'Templates for local businesses and shops'
    },
    {
        id: '3',
        name: 'SME',
        slug: 'sme',
        description: 'Templates for small and medium enterprises'
    }
]

export const templates: Template[] = [
    // Artist templates
    {
        id: '1',
        name: 'Photographer Portfolio',
        slug: 'photographer-portfolio',
        description: 'Stunning portfolio template for professional photographers with gallery and booking features',
        categoryId: '1',
        category: 'Artist',
        imageUrl: '/templates/photographer-portfolio.png',
        features: ['Image Gallery', 'Booking System', 'Client Portal', 'Blog'],
        demoUrl: '#'
    },
    {
        id: '2',
        name: 'Painter Showcase',
        slug: 'painter-showcase',
        description: 'Elegant template to showcase paintings and artwork with online store integration',
        categoryId: '1',
        category: 'Artist',
        imageUrl: '/templates/painter-showcase.png',
        features: ['Artwork Gallery', 'E-commerce', 'Exhibition Calendar', 'Artist Bio'],
        demoUrl: '#'
    },
    {
        id: '3',
        name: 'Sculptor Studio',
        slug: 'sculptor-studio',
        description: '3D-ready template for sculptors with immersive viewing experience',
        categoryId: '1',
        category: 'Artist',
        imageUrl: '/templates/sculptor-studio.png',
        features: ['3D Gallery', 'Commission Form', 'Portfolio', 'Contact'],
        demoUrl: '#'
    },
    // Small Business templates
    {
        id: '4',
        name: 'Flower Shop',
        slug: 'flower-shop',
        description: 'Beautiful template for flower shops with online ordering and delivery',
        categoryId: '2',
        category: 'Small Business',
        imageUrl: '/templates/flower-shop.png',
        features: ['Product Catalog', 'Online Ordering', 'Delivery Tracking', 'Gift Cards'],
        demoUrl: '#'
    },
    {
        id: '5',
        name: 'Interior Design',
        slug: 'interior-design',
        description: 'Professional template for interior designers with project showcase',
        categoryId: '2',
        category: 'Small Business',
        imageUrl: '/templates/interior-design.png',
        features: ['Project Gallery', 'Before/After', 'Consultation Booking', 'Services'],
        demoUrl: '#'
    },
    {
        id: '6',
        name: 'Cafe & Coffee Shop',
        slug: 'cafe-coffee',
        description: 'Cozy template for cafes with menu and reservation system',
        categoryId: '2',
        category: 'Small Business',
        imageUrl: '/templates/cafe-coffee-shop.png',
        features: ['Digital Menu', 'Reservations', 'Events Calendar', 'Location Map'],
        demoUrl: '#'
    },
    {
        id: '7',
        name: 'Bakery',
        slug: 'bakery',
        description: 'Sweet template for bakeries with online ordering',
        categoryId: '2',
        category: 'Small Business',
        imageUrl: '/templates/bakery.png',
        features: ['Product Showcase', 'Pre-orders', 'Custom Cakes', 'Catering'],
        demoUrl: '#'
    },
    {
        id: '8',
        name: 'Hair Salon',
        slug: 'hair-salon',
        description: 'Stylish template for hair salons with booking system',
        categoryId: '2',
        category: 'Small Business',
        imageUrl: '/templates/hair-salon.png',
        features: ['Service Menu', 'Online Booking', 'Stylist Profiles', 'Gallery'],
        demoUrl: '#'
    },
    {
        id: '9',
        name: 'Nail Salon',
        slug: 'nail-salon',
        description: 'Chic template for nail salons with appointment scheduling',
        categoryId: '2',
        category: 'Small Business',
        imageUrl: '/templates/nail-salon.png',
        features: ['Service Catalog', 'Appointments', 'Nail Art Gallery', 'Pricing'],
        demoUrl: '#'
    },
    {
        id: '10',
        name: 'Yoga Studio',
        slug: 'yoga-studio',
        description: 'Zen template for yoga studios with class schedules',
        categoryId: '2',
        category: 'Small Business',
        imageUrl: '/templates/yoga-studio.png',
        features: ['Class Schedule', 'Instructor Bios', 'Membership', 'Blog'],
        demoUrl: '#'
    },
    {
        id: '11',
        name: 'Pet Shop',
        slug: 'pet-shop',
        description: 'Friendly template for pet shops with product catalog',
        categoryId: '2',
        category: 'Small Business',
        imageUrl: '/templates/pet-shop.png',
        features: ['Product Store', 'Pet Services', 'Grooming Booking', 'Pet Care Tips'],
        demoUrl: '#'
    },
    {
        id: '12',
        name: 'Clothing Store',
        slug: 'clothing-store',
        description: 'Fashion-forward template for clothing stores with e-commerce',
        categoryId: '2',
        category: 'Small Business',
        imageUrl: '/templates/clothing-store.png',
        features: ['Online Store', 'Size Guide', 'Lookbook', 'Wishlist'],
        demoUrl: '#'
    },
    {
        id: '13',
        name: 'Restaurant',
        slug: 'restaurant',
        description: 'Delicious template for restaurants with menu and reservations',
        categoryId: '2',
        category: 'Small Business',
        imageUrl: '/templates/restaurant.png',
        features: ['Digital Menu', 'Table Reservations', 'Online Ordering', 'Reviews'],
        demoUrl: '#'
    },
    // SME templates
    {
        id: '14',
        name: 'Manufacturing Company',
        slug: 'manufacturing',
        description: 'Professional template for manufacturing companies',
        categoryId: '3',
        category: 'SME',
        imageUrl: '/templates/manufacturing-company.png',
        features: ['Product Catalog', 'Capabilities', 'Quality Certifications', 'Contact'],
        demoUrl: '#'
    },
    {
        id: '15',
        name: 'IT Services',
        slug: 'it-services',
        description: 'Modern template for IT service providers',
        categoryId: '3',
        category: 'SME',
        imageUrl: '/templates/it-services.png',
        features: ['Services Portfolio', 'Case Studies', 'Tech Stack', 'Support Portal'],
        demoUrl: '#'
    },
    {
        id: '16',
        name: 'Construction Company',
        slug: 'construction',
        description: 'Robust template for construction companies',
        categoryId: '3',
        category: 'SME',
        imageUrl: '/templates/construction-company.png',
        features: ['Project Gallery', 'Services', 'Team', 'Quote Request'],
        demoUrl: '#'
    },
    {
        id: '17',
        name: 'Logistics & Transport',
        slug: 'logistics',
        description: 'Efficient template for logistics companies',
        categoryId: '3',
        category: 'SME',
        imageUrl: '/templates/logistics-transport.png',
        features: ['Tracking System', 'Services', 'Coverage Map', 'Quote Calculator'],
        demoUrl: '#'
    },
    {
        id: '18',
        name: 'Consulting Firm',
        slug: 'consulting',
        description: 'Professional template for consulting firms',
        categoryId: '3',
        category: 'SME',
        imageUrl: '/templates/consulting-firm.png',
        features: ['Services', 'Case Studies', 'Team Profiles', 'Blog'],
        demoUrl: '#'
    },
    {
        id: '19',
        name: 'Education & Training',
        slug: 'education',
        description: 'Educational template for training centers',
        categoryId: '3',
        category: 'SME',
        imageUrl: '/templates/education-training.png',
        features: ['Course Catalog', 'Enrollment', 'Instructor Profiles', 'Resources'],
        demoUrl: '#'
    },
    {
        id: '20',
        name: 'Healthcare Clinic',
        slug: 'healthcare',
        description: 'Medical template for healthcare providers',
        categoryId: '3',
        category: 'SME',
        imageUrl: '/templates/healthcare-clinic.png',
        features: ['Services', 'Doctor Profiles', 'Appointments', 'Patient Portal'],
        demoUrl: '#'
    },
    {
        id: '21',
        name: 'Law Firm',
        slug: 'law-firm',
        description: 'Professional template for law firms',
        categoryId: '3',
        category: 'SME',
        imageUrl: '/templates/law-firm.png',
        features: ['Practice Areas', 'Attorney Profiles', 'Case Results', 'Consultation'],
        demoUrl: '#'
    },
    {
        id: '22',
        name: 'Real Estate Agency',
        slug: 'real-estate',
        description: 'Dynamic template for real estate agencies',
        categoryId: '3',
        category: 'SME',
        imageUrl: '/templates/real-estate.jpg',
        features: ['Property Listings', 'Search Filters', 'Agent Profiles', 'Virtual Tours'],
        demoUrl: '#'
    },
    {
        id: '23',
        name: 'Marketing Agency',
        slug: 'marketing-agency',
        description: 'Creative template for marketing agencies',
        categoryId: '3',
        category: 'SME',
        imageUrl: '/templates/marketing.jpg',
        features: ['Portfolio', 'Services', 'Case Studies', 'Team', 'Blog'],
        demoUrl: '#'
    }
]

export const developmentPlans = [
    {
        id: '1',
        name: 'Basic',
        slug: 'dev-basic',
        type: 'development',
        price: 500000,
        features: [
            'Template customization',
            'Basic SEO setup',
            'Mobile responsive',
            'Contact form',
            '1 month support'
        ],
        popular: false
    },
    {
        id: '2',
        name: 'Standard',
        slug: 'dev-standard',
        type: 'development',
        price: 1500000,
        features: [
            'Custom design',
            'Advanced SEO',
            'E-commerce integration',
            'Blog system',
            'Analytics setup',
            '3 months support'
        ],
        popular: true
    },
    {
        id: '3',
        name: 'Premium',
        slug: 'dev-premium',
        type: 'development',
        price: 3000000,
        features: [
            'Fully custom development',
            'Advanced features',
            'API integrations',
            'Custom CMS',
            'Performance optimization',
            '6 months support'
        ],
        popular: false
    }
]

export const maintenancePlans = [
    {
        id: '4',
        name: 'Basic',
        slug: 'maint-basic',
        type: 'maintenance',
        price: 50000,
        features: [
            'Basic hosting',
            '1 content update/month',
            'Basic analytics',
            'Email support'
        ],
        popular: false
    },
    {
        id: '5',
        name: 'Professional',
        slug: 'maint-pro',
        type: 'maintenance',
        price: 150000,
        features: [
            'Premium hosting',
            'Unlimited updates',
            'Advanced analytics',
            'SEO monitoring',
            'Priority support'
        ],
        popular: true
    },
    {
        id: '6',
        name: 'Enterprise',
        slug: 'maint-enterprise',
        type: 'maintenance',
        price: 300000,
        features: [
            'Dedicated hosting',
            'Dedicated manager',
            'Custom features',
            'A/B testing',
            '24/7 support'
        ],
        popular: false
    }
]
