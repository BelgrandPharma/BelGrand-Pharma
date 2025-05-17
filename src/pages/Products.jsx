import React, { useState, useEffect } from 'react';
import { Search, Filter } from 'lucide-react';

// Import Front (F) and Back (B) images for each product from src/images
import CollarichF from '../images/COLLA RICH F.webp';
import CollarichB from '../images/COLLA RICH B.webp';
import CollarichForteF from '../images/Collarich Forte F.webp';
import CollarichForteB from '../images/Collarich Forte B.webp';
import OacalF from '../images/OACAL F.jpg';
import OacalB from '../images/OACAL B.jpg';
import OaCalPlusF from '../images/OA-CAL PLUS F.jpg';
import OaCalPlusB from '../images/OA-CAL PLUS B.jpg';
import BelNerveF from '../images/BEL NERVE F.jpg';
import BelNerveB from '../images/BEL NERVE B.jpg';
import BelnervePlusF from '../images/BELNERVE PLUS INJECTION F.jpg';
import BelnervePlusB from '../images/BELNERVE PLUS INJECTION B.jpg';
import BelVitF from '../images/BEL VIT F.jpg';
import BelVitB from '../images/BEL VIT B.jpg';
import BelCoxTH8F from '../images/BELCOX-TH 8 F.jpg';
import BelCoxTH8B from '../images/BELCOX-TH 8 B.jpg';
import BGDefa6F from '../images/BG-DEFA-6 F.jpg';
import BGDefa6B from '../images/BG-DEFA-6 B.jpg';
import BGD3CapsuleF from '../images/BG-D3 F.jpg';
import BGD3CapsuleB from '../images/BG-D3 B.jpg';
import BGD3NanoF from '../images/BG D3 NAN NANO SHOTS F.jpg';
import BGD3NanoB from '../images/BG D3 NAN NANO SHOTS B.jpg';
import BELMETG1F from '../images/BEL MET G1 F.jpg';
import BELMETG1B from '../images/BEL MET G1 B.jpg';
import BELMETG2F from '../images/BEL MET G2 F.jpg';
import BELMETG2B from '../images/BEL MET G2 B.jpg';
import NutilacF from '../images/NUTILAC PROTEIN POWDER DOC F.jpeg';
import NutilacB from '../images/NUTILAC PROTEIN POWDER DOC B.jpeg';
import BGPan40F from '../images/BG PAN 40 F.jpeg';
import BGPan40B from '../images/BG PAN 40 B.jpeg';
import RabeBelDSRF from '../images/REBE BEL DSR F.jpeg';
import RabeBelDSRB from '../images/REBE BEL DSR B.jpeg';
import BellargiLF from '../images/BELLARGI L SACHETS F.jpeg';
import BellargiLB from '../images/BELLARGI L SACHETS B.jpeg';
import FertirichMF from '../images/FERTIRICH M F.webp';
import FertirichMB from '../images/FERTIRICH M B.webp';
import FertirichFF from '../images/FERTIRICH F F.jpeg';
import FertirichFB from '../images/FERTIRICH F B.jpeg';
import HeamferXTF from '../images/Heamfer XT F.webp';
import HeamferXTB from '../images/Heamfer XT B.webp';
import BgTrypBRF from '../images/BgTryp-BR F.jpeg';
import BgTrypBRB from '../images/BgTryp-BR B.jpeg';

const products = [
  {
    id: 1,
    name: "Collarich Tablet",
    description: "Supports joint and connective tissue health with essential nutrients.",
    categories: ["Joint Health", "Supplement"],
    images: [CollarichF, CollarichB],
    isNew: false,
    details: "Collarich Tablet is formulated to enhance joint mobility and support connective tissue health, ideal for maintaining flexibility and comfort."
  },
  {
    id: 2,
    name: "Collarich Forte Tablet",
    description: "Advanced joint support with enhanced formulation for mobility and comfort.",
    categories: ["Joint Health", "Supplement"],
    images: [CollarichForteF, CollarichForteB],
    isNew: true,
    details: "Collarich Forte Tablet offers an advanced formula to support joint health, reduce discomfort, and enhance mobility with key nutrients."
  },
  {
    id: 3,
    name: "Oacal Tablet",
    description: "Promotes bone health with Calcium Carbonate, L-Methylfolate, and Vitamin D3.",
    categories: ["Bone Health", "Supplement"],
    images: [OacalF, OacalB],
    isNew: false,
    details: "Each film-coated tablet contains Calcium Carbonate (1250mg, eq. to 500mg Elemental Calcium), Vitamin D3 (2000IU), Methylcobalamin (1500mcg), L-Methylfolate Calcium (1mg), and Pyridoxal-5-Phosphate (20mg) to support bone density and skeletal strength. Dosage: As directed by the Physician. Store in a cool, dry, dark place, protected from sunlight and moisture. Prescription required."
  },
  {
    id: 4,
    name: "Oa-cal Plus Tablet",
    description: "Supports bone health with Calcium Citrate and Vitamin D3.",
    categories: ["Bone Health", "Supplement"],
    images: [OaCalPlusF, OaCalPlusB],
    isNew: false,
    details: "Each film-coated tablet contains Calcium Citrate (1250mg, eq. to 250mg Elemental Calcium) and Vitamin D3 (600IU). Provides 0.54 Kcal energy per tablet. Recommended usage: 1-2 tablets daily after meals or as directed by the Dietician. Store in a cool, dry, dark place below 25°C. Not for medicinal use. Manufactured by Medicant Nutrients."
  },
  {
    id: 5,
    name: "Bel Nerve Tablet",
    description: "Supports nerve health with Methylcobalamin, Alpha Lipoic Acid, and Vitamin D3.",
    categories: ["Neurological Health", "Supplement"],
    images: [BelNerveF, BelNerveB],
    isNew: true,
    details: "Bel Nerve Tablet contains Methylcobalamin (1500mcg), Alpha Lipoic Acid (100mg), Folic Acid (1.5mg), Pyridoxine (3mg), and Vitamin D3 (1000IU) to promote nerve function and reduce neuropathic symptoms."
  },
  {
    id: 6,
    name: "Belnerve Plus Injection",
    description: "Supports nerve health with Methylcobalamin, Pyridoxine Hydrochloride, and Niacinamide.",
    categories: ["Neurological Health", "Prescription"],
    images: [BelnervePlusF, BelnervePlusB],
    isNew: false,
    details: "Each 2ml contains Methylcobalamin (1500mcg), Pyridoxine Hydrochloride (100mg), Niacinamide (100mg), and Benzyl Alcohol (2% v/v) as a preservative. For I.M./I.V. use only. Dosage: As directed by the Physician. Store in a cool, dry, dark place, protected from light. Prescription required. Not for use in newborns or premature infants. Manufactured by Bajaj Pharmaceuticals."
  },
  {
    id: 7,
    name: "Bel Vit Tablet",
    description: "Comprehensive multivitamin to support overall health and vitality.",
    categories: ["General Wellness", "Supplement"],
    images: [BelVitF, BelVitB],
    isNew: false,
    details: "Bel Vit Tablet is a balanced multivitamin formula designed to support energy levels, immune function, and overall well-being. Ideal for daily nutritional support."
  },
  {
    id: 8,
    name: "Bel Cox TH-8 Tablet",
    description: "Manages pain and inflammation with Etoricoxib and Thiocolchicoside.",
    categories: ["Anti-Inflammatory", "Prescription"],
    images: [BelCoxTH8F, BelCoxTH8B],
    isNew: false,
    details: "Each film-coated tablet contains Etoricoxib (60mg) and Thiocolchicoside (8mg) to relieve pain and muscle spasms. Dosage: As directed by the Physician. Store in a cool, dry, dark place, protected from light and moisture. Prescription required. Manufactured by Sai Sarvaa Biotech Pvt. Ltd."
  },
  {
    id: 9,
    name: "BG Defa-6 Tablet",
    description: "Manages inflammation with Deflazacort. Prescription required.",
    categories: ["Anti-Inflammatory", "Prescription"],
    images: [BGDefa6F, BGDefa6B],
    isNew: false,
    details: "Each uncoated tablet contains Deflazacort (6mg), a corticosteroid used to manage inflammatory and autoimmune conditions. Dosage: As directed by the Physician. Store in a cool, dry, dark place, protected from sunlight. Prescription required. Manufactured by Saphnix Life Sciences."
  },
  {
    id: 10,
    name: "BG D3 Capsule",
    description: "Supports bone and immune health with Cholecalciferol (Vitamin D3).",
    categories: ["Bone Health", "Supplement"],
    images: [BGD3CapsuleF, BGD3CapsuleB],
    isNew: false,
    details: "Each soft gelatin capsule contains Cholecalciferol (Vitamin D3, 60,000 IU) to support bone health, calcium absorption, and immune function. Dosage: As directed by the Physician. Store in a cool, dry, dark place, protected from light and moisture. Prescription required. Manufactured by Sigma Softgel & Formulation."
  },
  {
    id: 11,
    name: "BG D3 Nano Shots",
    description: "Convenient Vitamin D3 supplement in sugar-free honey-flavored nano shot.",
    categories: ["Bone Health", "Supplement"],
    images: [BGD3NanoF, BGD3NanoB],
    isNew: false,
    details: "BG D3 Sugar Free Honey Flavour Nano Shot (5ml) provides a high-potency Vitamin D3 dose in a sugar-free, honey-flavored format. Note: Currently out of stock."
  },
  {
    id: 12,
    name: "Bel Met G1 Tablet",
    description: "Controls blood sugar with Metformin Hydrochloride and Glimepiride. Prescription required.",
    categories: ["Metabolic Health", "Prescription"],
    images: [BELMETG1F, BELMETG1B],
    isNew: false,
    details: "Each uncoated bilayered tablet contains Glimepiride (1mg) and Metformin Hydrochloride (500mg, prolonged release) to manage type 2 diabetes. Dosage: As directed by the Physician. Store in a cool, dry place, protected from light and moisture. Tablet should be swallowed whole. Prescription required. Manufactured by Sai Sarvaa Biotech Pvt. Ltd."
  },
  {
    id: 13,
    name: "Bel Met G2 Tablet",
    description: "Controls blood sugar with Metformin Hydrochloride and Glimepiride. Prescription required.",
    categories: ["Metabolic Health", "Prescription"],
    images: [BELMETG2F, BELMETG2B],
    isNew: false,
    details: "Each uncoated bilayered tablet contains Glimepiride (2mg) and Metformin Hydrochloride (500mg, prolonged release) to manage type 2 diabetes. Dosage: As directed by the Physician. Store in a cool, dry place, protected from light and moisture. Tablet should be swallowed whole. Prescription required. Manufactured by Sai Sarvaa Biotech Pvt. Ltd."
  },
  {
    id: 14,
    name: "Nutilac Protein Supplement Powder",
    description: "High-quality protein supplement to support muscle health and nutrition.",
    categories: ["Nutrition", "Supplement"],
    images: [NutilacF, NutilacB],
    isNew: false,
    details: "Nutilac Protein Supplement Powder provides essential proteins and nutrients to support muscle growth, recovery, and overall nutrition. Recommended usage: As directed by the Dietician. Store in a cool, dry place. Not for medicinal use."
  },
  {
    id: 15,
    name: "BG Pan 40 Tablet",
    description: "Treats acid-related disorders with Pantoprazole. Prescription required, out of stock.",
    categories: ["Gastrointestinal Health", "Prescription"],
    images: [BGPan40F, BGPan40B],
    isNew: false,
    details: "BG Pan 40 Tablet contains Pantoprazole (40mg) to reduce stomach acid and treat heartburn, ulcers, and GERD. Note: Prescription required, out of stock."
  },
  {
    id: 16,
    name: "Rabe Bel DSR Capsule",
    description: "Treats acid reflux with Rabeprazole and Domperidone. Prescription required.",
    categories: ["Gastrointestinal Health", "Prescription"],
    images: [RabeBelDSRF, RabeBelDSRB],
    isNew: false,
    details: "Rabe Bel DSR Capsule contains Rabeprazole (20mg) and Domperidone (30mg) to manage GERD and enhance gastric motility. Prescription required."
  },
  {
    id: 17,
    name: "Bellargi L Orange Flavour Sachet 5 gm",
    description: "Nutritional supplement in orange-flavored sachet. Out of stock.",
    categories: ["General Wellness", "Supplement"],
    images: [BellargiLF, BellargiLB],
    isNew: false,
    details: "Bellargi L Orange Flavour Sachet (5gm) provides essential nutrients in a convenient, orange-flavored format. Note: Currently out of stock."
  },
  {
    id: 18,
    name: "Fertirich M Tablet",
    description: "Supports male fertility with essential nutrients.",
    categories: ["Reproductive Health", "Supplement"],
    images: [FertirichMF, FertirichMB],
    isNew: false,
    details: "Fertirich M Tablet provides essential nutrients to support male reproductive health and improve fertility outcomes."
  },
  {
    id: 19,
    name: "Fertirich F Tablet",
    description: "Supports female fertility with essential nutrients. Out of stock.",
    categories: ["Reproductive Health", "Supplement"],
    images: [FertirichFF, FertirichFB],
    isNew: false,
    details: "Fertirich F Tablet is formulated to support female reproductive health and fertility with key vitamins and minerals. Note: Out of stock."
  },
  {
    id: 20,
    name: "Heamfer XT Tablet",
    description: "Treats anemia with Ferrous Ascorbate, Folic Acid, and Zinc. Out of stock.",
    categories: ["Blood Health", "Supplement"],
    images: [HeamferXTF, HeamferXTB],
    isNew: false,
    details: "Heamfer XT Tablet contains Elemental Zinc (22.5mg), Ferrous Ascorbate (100mg), and Folic Acid (1.5mg) to support red blood cell production and treat anemia. Note: Out of stock."
  },
  {
    id: 21,
    name: "BgTryp-BR Tablet",
    description: "Manages pain and inflammation with trypsin-based formulation. Prescription required.",
    categories: ["Pain Relief", "Prescription"],
    images: [BgTrypBRF, BgTrypBRB],
    isNew: false,
    details: "BgTryp-BR Tablet is formulated to manage pain and inflation, likely containing trypsin and other active ingredients. Dosage: As directed by the Physician. Store in a cool, dry, dark place, protected from light and moisture. Prescription required. Manufactured by Belgrand Pharmaceuticals Pvt. Ltd."
  }
];

const categories = [
  "All",
  "General Wellness",
  "Neurological Health",
  "Bone Health",
  "Joint Health",
  "Gastrointestinal Health",
  "Metabolic Health",
  "Anti-Inflammatory",
  "Reproductive Health",
  "Blood Health",
  "Nutrition",
  "Pain Relief"
];

const Products = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [hoveredProductId, setHoveredProductId] = useState(null);
  const [activeImageIndices, setActiveImageIndices] = useState({});
  const [selectedImageIndex, setSelectedImageIndex] = useState(0); // State for the active image in product details

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleMouseEnter = (productId) => {
    setHoveredProductId(productId);
    setActiveImageIndices((prev) => ({ ...prev, [productId]: 0 }));
  };

  const handleMouseLeave = (productId) => {
    setHoveredProductId(null);
    setActiveImageIndices((prev) => ({ ...prev, [productId]: 0 }));
  };

  useEffect(() => {
    let timer;
    if (hoveredProductId) {
      timer = setInterval(() => {
        setActiveImageIndices((prev) => {
          const currentIndex = prev[hoveredProductId] || 0;
          const nextIndex = (currentIndex + 1) % 2; // Cycle between 0 and 1 (2 images)
          return { ...prev, [hoveredProductId]: nextIndex };
        });
      }, 2000); // Change image every 2 seconds
    }
    return () => clearInterval(timer);
  }, [hoveredProductId]);

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.categories.includes(selectedCategory);
    return matchesSearch && matchesCategory;
  });

  const openProductDetails = (product) => {
    setSelectedProduct(product);
    setHoveredProductId(null); // Reset hover state
    setSelectedImageIndex(0); // Reset to first image when opening details
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const closeProductDetails = () => {
    setSelectedProduct(null);
    setSelectedImageIndex(0); // Reset image index when closing
  };

  const handleImageSelect = (index) => {
    setSelectedImageIndex(index);
  };

  return (
    <div className="pt-20">
      <style>
        {`
          .image-container {
            position: relative;
            overflow: hidden;
            height: 200px; /* Fixed height to ensure uniform card sizes */
            width: 100%; /* Ensure it takes full width of the card */
          }
          .product-image {
            width: 100%;
            height: 100%;
            object-fit: contain; /* Show the entire image without cropping */
            object-position: center; /* Center the image in the container */
            transition: opacity 0.5s ease-in-out;
          }
          .dots-container {
            position: absolute;
            bottom: 10px;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            gap: 8px;
          }
          .dot {
            width: 9px; /* Reduced inner size to account for border */
            height: 9px;
            border-radius: 50%;
            border: 1px solid black; /* Added black border */
            background-color: rgba(255, 255, 255, 0.5);
            cursor: pointer;
            transition: background-color 0.3s;
          }
          .dot.active {
            background-color: #99ff3a;
          }
          .product-card {
            display: flex;
            flex-direction: column;
            height: 100%; /* Ensure the card takes full height */
          }
          .product-content {
            flex-grow: 1; /* Allow content to grow and fill space */
            display: flex;
            flex-direction: column;
            justify-content: space-between; /* Distribute content evenly */
          }
          .main-image-container {
            position: relative;
            width: 100%;
            height: 400px; /* Larger height for the main image */
          }
          .main-image {
            width: 100%;
            height: 100%;
            object-fit: contain;
            object-position: center;
          }
          .thumbnail-sidebar {
            display: flex;
            flex-direction: column;
            gap: 10px;
          }
          .thumbnail-image {
            width: 100%;
            height: 100%;
            object-fit: contain;
            cursor: pointer;
            transition: border-color 0.3s;
          }
        `}
      </style>
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Belgrand Pharmaceuticals Products</h1>
            <p className="text-lg text-gray-600">
              Discover Belgrand Pharmaceuticals’ comprehensive range of tablets, capsules, and supplements, designed to address diverse health needs with quality and precision.
            </p>
          </div>
          
          {selectedProduct ? (
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12 max-w-5xl mx-auto">
              <div className="flex flex-col lg:flex-row p-8 gap-8">
                {/* Image Section */}
                <div className="lg:w-1/2 flex flex-col lg:flex-row gap-4">
                  {/* Thumbnail Sidebar */}
                  <div className="thumbnail-sidebar w-full lg:w-20 flex lg:flex-col flex-row justify-center gap-4">
                    {selectedProduct.images.map((image, index) => (
                      <div
                        key={index}
                        className={`w-16 h-16 rounded-md border-2 ${
                          index === selectedImageIndex ? 'border-blue-500' : 'border-gray-200'
                        } overflow-hidden`}
                        onClick={() => handleImageSelect(index)}
                      >
                        <img
                          src={image}
                          alt={`Thumbnail ${index + 1}`}
                          className="thumbnail-image"
                        />
                      </div>
                    ))}
                  </div>
                  {/* Main Image */}
                  <div className="flex-1 flex justify-center">
                    <div className="main-image-container bg-gray-50 rounded-lg">
                      <img 
                        src={selectedProduct.images[selectedImageIndex]} 
                        alt={`${selectedProduct.name} - View ${selectedImageIndex + 1}`} 
                        className="main-image"
                      />
                    </div>
                  </div>
                </div>
                {/* Details Section */}
                <div className="lg:w-1/2 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <h2 className="text-3xl font-bold text-gray-900">{selectedProduct.name}</h2>
                      {selectedProduct.isNew && (
                        <span className="bg-secondary text-white text-xs font-medium px-3 py-1 rounded-full uppercase tracking-wide">New</span>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {selectedProduct.categories.map((category, index) => (
                        <span 
                          key={index} 
                          className="bg-gray-200 text-gray-700 text-sm font-medium px-3 py-1 rounded-full"
                        >
                          {category}
                        </span>
                      ))}
                    </div>
                    <p className="text-gray-700 text-lg mb-6 leading-relaxed">{selectedProduct.description}</p>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Product Details</h3>
                    <p className="text-gray-600 text-base leading-relaxed mb-8">{selectedProduct.details}</p>
                  </div>
                  <button 
                    onClick={closeProductDetails}
                    className="btn btn-primary bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-300 self-start"
                  >
                    Back to All Products
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <>
              <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                <div className="relative w-full md:w-auto">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search size={18} className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    className="pl-10 pr-4 py-2 w-full md:w-80 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Search Belgrand products..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                  />
                </div>
                
                <div className="flex items-center space-x-2 w-full md:w-auto overflow-x-auto py-2">
                  <Filter size={18} className="text-gray-600 flex-shrink-0" />
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => handleCategoryChange(category)}
                      className={`px-3 py-1 text-sm rounded-md whitespace-nowrap ${
                        selectedCategory === category
                          ? 'bg-primary text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product) => (
                  <div 
                    key={product.id} 
                    className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg cursor-pointer product-card"
                    onClick={() => openProductDetails(product)}
                    onMouseEnter={() => handleMouseEnter(product.id)}
                    onMouseLeave={() => handleMouseLeave(product.id)}
                  >
                    <div className="image-container">
                      <img 
                        src={product.images[activeImageIndices[product.id] || 0]} 
                        alt={product.name} 
                        className="product-image"
                      />
                      <div className="dots-container">
                        {product.images.map((_, index) => (
                          <span
                            key={index}
                            className={`dot ${index === (activeImageIndices[product.id] || 0) ? 'active' : ''}`}
                            onClick={(e) => {
                              e.stopPropagation(); // Prevent card click
                              setActiveImageIndices((prev) => ({ ...prev, [product.id]: index }));
                            }}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="p-6 product-content">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
                        {product.isNew && (
                          <span className="bg-secondary text-white text-xs font-medium px-2.5 py-1 rounded">NEW</span>
                        )}
                      </div>
                      <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {product.categories.map((category, index) => (
                          <span 
                            key={index} 
                            className="bg-gray-100 text-gray-700 text-xs px-2.5 py-1 rounded"
                          >
                            {category}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {filteredProducts.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-600 text-lg">No Belgrand products found matching your criteria.</p>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default Products;