// --- data.js ---

const siteConfig = {
    brandName: "SSelix Cosmetics",
    currency: "PKR",
    deliveryFee: 250, // عام ڈلیوری چارجز
    freeDeliveryThreshold: 3000, // 3000 سے اوپر کی خریداری پر ڈلیوری فری
    whatsappPhone: "923102890002", // اپنا نمبر یہاں لکھیں
    hadithUrdu: "سچا اور امانت دار تاجر (قیامت کے دن) انبیاء، صدیقین اور شہداء کے ساتھ ہوگا۔"
};

// پاکستان کے بڑے شہروں کی لسٹ
const cities = [
    "Karachi", "Lahore", "Islamabad", "Rawalpindi", "Faisalabad", 
    "Multan", "Peshawar", "Quetta", "Sialkot", "Gujranwala", 
    "Hyderabad", "Other"
];

const products = [
    {
        id: 1,
        title: "Maybelline Fit Me Foundation 128",
        category: "Foundation",
        price: 2850,
        image: "https://images.unsplash.com/photo-1631730359585-38a4935cbec4?w=400",
        description: "Matte + Poreless, Normal to Oily Skin."
    },
    {
        id: 2,
        title: "L'Oreal Infallible Foundation",
        category: "Foundation",
        price: 3200,
        image: "https://images.unsplash.com/photo-1596462502278-27bfdd403cc2?w=400",
        description: "24H Fresh Wear, High Coverage."
    },
    {
        id: 3,
        title: "Vitamin C Serum 20%",
        category: "Skincare",
        price: 1250,
        image: "https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?w=400",
        description: "Brightening & Anti-Aging Serum."
    },
    {
        id: 4,
        title: "Matte Liquid Lipstick - Red",
        category: "Lipstick",
        price: 450,
        image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400",
        description: "Long lasting matte finish."
    },
    {
        id: 5,
        title: "Makeup Brushes Set (12 pcs)",
        category: "Tools",
        price: 1990,
        image: "https://images.unsplash.com/photo-1596548438137-d51ea5c83ca5?w=400",
        description: "Professional soft bristle brushes."
    },
    {
        id: 6,
        title: "Sunscreen SPF 50",
        category: "Skincare",
        price: 850,
        image: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?w=400",
        description: "Non-greasy sun protection."
    }
];
