import React from 'react'
import HeroSlider from '../../components/HeroSlider'
import './home.css'
import SlideProducts from "../../components/slideProducts/SlideProducts";
import { useEffect,useState } from 'react'
import Footer from '../../components/footer/footer';
 


const categories = [
  "smartphones",
  "mobile-accessories",
  "laptops",
  "tablets",
  "sunglasses",
  "sports-accessories",
];

function Home() {
 const [products, setProducts] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {

    // دالة async جوّه الـ effect هتلمّ كل البيانات
    const fetchProducts = async () => {
      try {
        // Promise.all بتشغّل كل الطلبات مع بعض وتستنى لما كلّها تخلّص
        const results = await Promise.all(
          // بنمشي على كل category ونرجّع Promise (عشان الـ callback async)
          categories.map(async (category) => {
            // بنطلب بيانات منتجات التصنيف ده من الـ API
            const res = await fetch(
              `https://dummyjson.com/products/category/${category}` );

            // نحول الاستجابة إلى JSON
            const data = await res.json();

            // نرجّع كائن شكله { "اسم-التصنيف": [مصـفوفة المنتجات] }
            // استخدام [category] هنا اسمه "computed property name"
            return { [category]: data.products };
          })
        );

        // دلوقتي results عبارة عن مصفوفة من كائنات:
        // [ {smartphones: [...]}, {"mobile-accessories": [...]}, ... ]
        // Object.assign بيدمجهم كلهم في كائن واحد
        const productsData = Object.assign({}, ...results);

        setProducts(productsData);

      } catch (error) {
        // لو حصل خطأ في أي fetch أو parsing هيوصل هنا
        console.error("Error Fetching", error);
      } finally {
        setLoading(false); // مهم: نوقف اللودينج سواء نجحنا أو فشلنا
      }
    };

    // مهم: استدعاء الدالة اللي عرّفناها فوق
    fetchProducts();

  }, []); // [] يعني مرّة واحدة عند التحميل الأول



  
  return (
    <div>

        <HeroSlider />
        {loading ? (
          <p>Loading...</p>
        ) : (
          categories.map((category) => (
            <SlideProducts
              key={category}
              data={products[category]}
              title={category.replace("-", " ")}
            />
          ))
        )}
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default Home