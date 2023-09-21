import vendor1 from '../img/vendor-1.jpg';
import vendor2 from '../img/vendor-2.jpg';
import vendor3 from '../img/vendor-3.jpg';
import vendor4 from '../img/vendor-4.jpg';
import vendor5 from '../img/vendor-5.jpg';
import vendor6 from '../img/vendor-6.jpg';
import vendor7 from '../img/vendor-7.jpg';
import vendor8 from '../img/vendor-8.jpg';
import vendor9 from '../img/vendor-9.jpg';


const Vendor = () => {
  return (
    <div className="container-fluid py-2 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container py-2 mb-5">
        <div className="bg-white">
          <div className="owl-carousel vendor-carousel">
            <img src={vendor1} alt="vendor1" />
            <img src={vendor2} alt="vendor2" />
            <img src={vendor3} alt="vendor3" />
            <img src={vendor4} alt="vendor4" />
            <img src={vendor5} alt="vendor5" />
            <img src={vendor6} alt="vendor6" />
            <img src={vendor7} alt="vendor7" />
            <img src={vendor8} alt="vendor8" />
            <img src={vendor9} alt="vendor9" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vendor;
