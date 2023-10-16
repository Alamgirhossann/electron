import Image from "next/image";
import heading_icon from "../../assets/heading_icon.png";
import header_img from "../../assets/header_img.png";

const AboutUs = () => {
  return (
    <div className="text-center bg-white" id="about">
      <h1 className="flex justify-center text-3xl font-bold mb-4 pt-3">
        <Image src={heading_icon} alt="" width={20} height={15} />
        <span className="ms-3">About Us</span>
      </h1>
      <p className="text-lg font-semibold">
        It is a long established fact that a reader will be distracted by the
        readable content ofa page when looking <br /> at its layout. The point
        of using Lorem Ipsum is that it has a more-or-less normal distribution
        of letters, as <br /> opposed to using Content here, content here,
        making it
      </p>
      <div className="flex justify-center mt-5">
        <Image src={header_img} alt="" width={850} />
      </div>
    </div>
  );
};

export default AboutUs;
