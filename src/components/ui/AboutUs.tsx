import Image from "next/image";
import heading_icon from "../../assets/heading_icon.png";
import header_img from "../../assets/header_img.png";

const AboutUs = () => {
  return (
    <div className="text-center " id="about">
      <h1 className="flex justify-center  md:mb-16 md:mt-20 mt-10 mb-8">
        <Image src={heading_icon} alt="" width={20} height={15} />
        <span className="ms-3 md:text-[40px] text-xl font-bold">About Us</span>
      </h1>
      <p className="lg:text-lg md:text-[16px] text-[12.5px] mx-2">
        It is a long established fact that a reader will be distracted by the
        readable content ofa page when looking <br /> at its layout. The point
        of using Lorem Ipsum is that it has a more-or-less normal distribution
        of letters, as <br /> opposed to using Content here, content here,
        making it
      </p>
      <div className="flex justify-center mt-5">
        <Image
          src={header_img}
          alt=""
          className="md:h-[550px] md:w-[1050] h-[250]"
        />
      </div>
    </div>
  );
};

export default AboutUs;
