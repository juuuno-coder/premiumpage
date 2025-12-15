import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
    // Create categories
    const artistCategory = await prisma.category.upsert({
        where: { slug: 'artist' },
        update: {},
        create: {
            name: 'Artist',
            slug: 'artist',
            description: 'Templates for photographers, painters, and sculptors'
        }
    })

    const smallBusinessCategory = await prisma.category.upsert({
        where: { slug: 'small-business' },
        update: {},
        create: {
            name: 'Small Business',
            slug: 'small-business',
            description: 'Templates for local businesses and shops'
        }
    })

    const smeCategory = await prisma.category.upsert({
        where: { slug: 'sme' },
        update: {},
        create: {
            name: 'SME',
            slug: 'sme',
            description: 'Templates for small and medium enterprises'
        }
    })

    // Create templates
    const artistTemplates = [
        {
            name: 'Photographer Portfolio',
            slug: 'photographer-portfolio',
            description: 'Stunning portfolio template for professional photographers with gallery and booking features',
            categoryId: artistCategory.id,
            imageUrl: '/templates/photographer.jpg',
            features: JSON.stringify(['Image Gallery', 'Booking System', 'Client Portal', 'Blog']),
            demoUrl: '#'
        },
        {
            name: 'Painter Showcase',
            slug: 'painter-showcase',
            description: 'Elegant template to showcase paintings and artwork with online store integration',
            categoryId: artistCategory.id,
            imageUrl: '/templates/painter.jpg',
            features: JSON.stringify(['Artwork Gallery', 'E-commerce', 'Exhibition Calendar', 'Artist Bio']),
            demoUrl: '#'
        },
        {
            name: 'Sculptor Studio',
            slug: 'sculptor-studio',
            description: '3D-ready template for sculptors with immersive viewing experience',
            categoryId: artistCategory.id,
            imageUrl: '/templates/sculptor.jpg',
            features: JSON.stringify(['3D Gallery', 'Commission Form', 'Portfolio', 'Contact']),
            demoUrl: '#'
        }
    ]

    const smallBusinessTemplates = [
        {
            name: 'Flower Shop',
            slug: 'flower-shop',
            description: 'Beautiful template for flower shops with online ordering and delivery',
            categoryId: smallBusinessCategory.id,
            imageUrl: '/templates/flower-shop.jpg',
            features: JSON.stringify(['Product Catalog', 'Online Ordering', 'Delivery Tracking', 'Gift Cards']),
            demoUrl: '#'
        },
        {
            name: 'Interior Design',
            slug: 'interior-design',
            description: 'Professional template for interior designers with project showcase',
            categoryId: smallBusinessCategory.id,
            imageUrl: '/templates/interior.jpg',
            features: JSON.stringify(['Project Gallery', 'Before/After', 'Consultation Booking', 'Services']),
            demoUrl: '#'
        },
        {
            name: 'Cafe & Coffee Shop',
            slug: 'cafe-coffee',
            description: 'Cozy template for cafes with menu and reservation system',
            categoryId: smallBusinessCategory.id,
            imageUrl: '/templates/cafe.jpg',
            features: JSON.stringify(['Digital Menu', 'Reservations', 'Events Calendar', 'Location Map']),
            demoUrl: '#'
        },
        {
            name: 'Bakery',
            slug: 'bakery',
            description: 'Sweet template for bakeries with online ordering',
            categoryId: smallBusinessCategory.id,
            imageUrl: '/templates/bakery.jpg',
            features: JSON.stringify(['Product Showcase', 'Pre-orders', 'Custom Cakes', 'Catering']),
            demoUrl: '#'
        },
        {
            name: 'Hair Salon',
            slug: 'hair-salon',
            description: 'Stylish template for hair salons with booking system',
            categoryId: smallBusinessCategory.id,
            imageUrl: '/templates/salon.jpg',
            features: JSON.stringify(['Service Menu', 'Online Booking', 'Stylist Profiles', 'Gallery']),
            demoUrl: '#'
        },
        {
            name: 'Nail Salon',
            slug: 'nail-salon',
            description: 'Chic template for nail salons with appointment scheduling',
            categoryId: smallBusinessCategory.id,
            imageUrl: '/templates/nail-salon.jpg',
            features: JSON.stringify(['Service Catalog', 'Appointments', 'Nail Art Gallery', 'Pricing']),
            demoUrl: '#'
        },
        {
            name: 'Yoga Studio',
            slug: 'yoga-studio',
            description: 'Zen template for yoga studios with class schedules',
            categoryId: smallBusinessCategory.id,
            imageUrl: '/templates/yoga.jpg',
            features: JSON.stringify(['Class Schedule', 'Instructor Bios', 'Membership', 'Blog']),
            demoUrl: '#'
        },
        {
            name: 'Pet Shop',
            slug: 'pet-shop',
            description: 'Friendly template for pet shops with product catalog',
            categoryId: smallBusinessCategory.id,
            imageUrl: '/templates/pet-shop.jpg',
            features: JSON.stringify(['Product Store', 'Pet Services', 'Grooming Booking', 'Pet Care Tips']),
            demoUrl: '#'
        },
        {
            name: 'Clothing Store',
            slug: 'clothing-store',
            description: 'Fashion-forward template for clothing stores with e-commerce',
            categoryId: smallBusinessCategory.id,
            imageUrl: '/templates/clothing.jpg',
            features: JSON.stringify(['Online Store', 'Size Guide', 'Lookbook', 'Wishlist']),
            demoUrl: '#'
        },
        {
            name: 'Restaurant',
            slug: 'restaurant',
            description: 'Delicious template for restaurants with menu and reservations',
            categoryId: smallBusinessCategory.id,
            imageUrl: '/templates/restaurant.jpg',
            features: JSON.stringify(['Digital Menu', 'Table Reservations', 'Online Ordering', 'Reviews']),
            demoUrl: '#'
        }
    ]

    const smeTemplates = [
        {
            name: 'Manufacturing Company',
            slug: 'manufacturing',
            description: 'Professional template for manufacturing companies',
            categoryId: smeCategory.id,
            imageUrl: '/templates/manufacturing.jpg',
            features: JSON.stringify(['Product Catalog', 'Capabilities', 'Quality Certifications', 'Contact']),
            demoUrl: '#'
        },
        {
            name: 'IT Services',
            slug: 'it-services',
            description: 'Modern template for IT service providers',
            categoryId: smeCategory.id,
            imageUrl: '/templates/it-services.jpg',
            features: JSON.stringify(['Services Portfolio', 'Case Studies', 'Tech Stack', 'Support Portal']),
            demoUrl: '#'
        },
        {
            name: 'Construction Company',
            slug: 'construction',
            description: 'Robust template for construction companies',
            categoryId: smeCategory.id,
            imageUrl: '/templates/construction.jpg',
            features: JSON.stringify(['Project Gallery', 'Services', 'Team', 'Quote Request']),
            demoUrl: '#'
        },
        {
            name: 'Logistics & Transport',
            slug: 'logistics',
            description: 'Efficient template for logistics companies',
            categoryId: smeCategory.id,
            imageUrl: '/templates/logistics.jpg',
            features: JSON.stringify(['Tracking System', 'Services', 'Coverage Map', 'Quote Calculator']),
            demoUrl: '#'
        },
        {
            name: 'Consulting Firm',
            slug: 'consulting',
            description: 'Professional template for consulting firms',
            categoryId: smeCategory.id,
            imageUrl: '/templates/consulting.jpg',
            features: JSON.stringify(['Services', 'Case Studies', 'Team Profiles', 'Blog']),
            demoUrl: '#'
        },
        {
            name: 'Education & Training',
            slug: 'education',
            description: 'Educational template for training centers',
            categoryId: smeCategory.id,
            imageUrl: '/templates/education.jpg',
            features: JSON.stringify(['Course Catalog', 'Enrollment', 'Instructor Profiles', 'Resources']),
            demoUrl: '#'
        },
        {
            name: 'Healthcare Clinic',
            slug: 'healthcare',
            description: 'Medical template for healthcare providers',
            categoryId: smeCategory.id,
            imageUrl: '/templates/healthcare.jpg',
            features: JSON.stringify(['Services', 'Doctor Profiles', 'Appointments', 'Patient Portal']),
            demoUrl: '#'
        },
        {
            name: 'Law Firm',
            slug: 'law-firm',
            description: 'Professional template for law firms',
            categoryId: smeCategory.id,
            imageUrl: '/templates/law.jpg',
            features: JSON.stringify(['Practice Areas', 'Attorney Profiles', 'Case Results', 'Consultation']),
            demoUrl: '#'
        },
        {
            name: 'Real Estate Agency',
            slug: 'real-estate',
            description: 'Dynamic template for real estate agencies',
            categoryId: smeCategory.id,
            imageUrl: '/templates/real-estate.jpg',
            features: JSON.stringify(['Property Listings', 'Search Filters', 'Agent Profiles', 'Virtual Tours']),
            demoUrl: '#'
        },
        {
            name: 'Marketing Agency',
            slug: 'marketing-agency',
            description: 'Creative template for marketing agencies',
            categoryId: smeCategory.id,
            imageUrl: '/templates/marketing.jpg',
            features: JSON.stringify(['Portfolio', 'Services', 'Case Studies', 'Team', 'Blog']),
            demoUrl: '#'
        }
    ]

    // Insert all templates
    for (const template of [...artistTemplates, ...smallBusinessTemplates, ...smeTemplates]) {
        await prisma.template.upsert({
            where: { slug: template.slug },
            update: {},
            create: template
        })
    }

    // Create pricing plans
    const developmentPlans = [
        {
            name: 'Basic',
            slug: 'dev-basic',
            type: 'development',
            price: 500000,
            features: JSON.stringify([
                'Template customization',
                'Basic SEO setup',
                'Mobile responsive',
                'Contact form',
                '1 month support'
            ]),
            popular: false
        },
        {
            name: 'Standard',
            slug: 'dev-standard',
            type: 'development',
            price: 1500000,
            features: JSON.stringify([
                'Custom design',
                'Advanced SEO',
                'E-commerce integration',
                'Blog system',
                'Analytics setup',
                '3 months support'
            ]),
            popular: true
        },
        {
            name: 'Premium',
            slug: 'dev-premium',
            type: 'development',
            price: 3000000,
            features: JSON.stringify([
                'Fully custom development',
                'Advanced features',
                'API integrations',
                'Custom CMS',
                'Performance optimization',
                '6 months support'
            ]),
            popular: false
        }
    ]

    const maintenancePlans = [
        {
            name: 'Basic',
            slug: 'maint-basic',
            type: 'maintenance',
            price: 50000,
            features: JSON.stringify([
                'Basic hosting',
                '1 content update/month',
                'Basic analytics',
                'Email support'
            ]),
            popular: false
        },
        {
            name: 'Professional',
            slug: 'maint-pro',
            type: 'maintenance',
            price: 150000,
            features: JSON.stringify([
                'Premium hosting',
                'Unlimited updates',
                'Advanced analytics',
                'SEO monitoring',
                'Priority support'
            ]),
            popular: true
        },
        {
            name: 'Enterprise',
            slug: 'maint-enterprise',
            type: 'maintenance',
            price: 300000,
            features: JSON.stringify([
                'Dedicated hosting',
                'Dedicated manager',
                'Custom features',
                'A/B testing',
                '24/7 support'
            ]),
            popular: false
        }
    ]

    for (const plan of [...developmentPlans, ...maintenancePlans]) {
        await prisma.pricingPlan.upsert({
            where: { slug: plan.slug },
            update: {},
            create: plan
        })
    }

    // Create admin user
    const hashedPassword = await bcrypt.hash('admin123', 10)
    await prisma.user.upsert({
        where: { email: 'admin@premiumpage.com' },
        update: {},
        create: {
            email: 'admin@premiumpage.com',
            name: 'Admin',
            password: hashedPassword,
            role: 'admin'
        }
    })

    console.log('✅ Database seeded successfully!')
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
