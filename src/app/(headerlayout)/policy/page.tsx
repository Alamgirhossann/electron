import Image from "next/image";
import React from "react";
import heading_icon from "../../../assets/heading_icon.png";

const PolicyPage = () => {
  return (
    <div className=" h-full px-5 py-4 text-center md:text-left">
      <h1 className="flex justify-center my-8 md:my-16">
        <Image src={heading_icon} alt="heading_icon" width={20} height={15} />
        <span className="ms-3 md:text-[40px] text-xl font-bold">
          Our Policy
        </span>
      </h1>
      <p className="md:text-lg text-md">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem,
        suscipit. Quidem doloremque cum odit earum incidunt repudiandae
        consequuntur provident, voluptates, reiciendis suscipit repellat quam
        eos iure minima adipisci distinctio recusandae ratione libero, eius
        aliquam. Blanditiis, delectus ab, aliquam mollitia debitis, culpa
        nostrum deleniti exercitationem possimus accusantium saepe dolorem vitae
        dignissimos enim. Dolorum ipsa nam, asperiores perspiciatis deserunt
        perferendis id aut suscipit facere esse maiores cum explicabo dicta,
        laudantium qui iste assumenda voluptatem vitae ex sint voluptate neque
        provident nemo. Quaerat adipisci nemo asperiores maxime suscipit libero
        odit voluptas illo recusandae officia natus tempora ullam, vel
        repellendus dolore in labore repudiandae architecto saepe. Odio ipsa
        illum hic sed quidem. Aspernatur voluptates facilis reprehenderit, amet,
        dolorum corporis eius tempore laborum impedit debitis, pariatur
        assumenda explicabo voluptate ratione quos asperiores! Ipsum laudantium
        voluptates rerum officiis perferendis aperiam nam dolore a debitis
        corrupti, molestias sit fugiat veritatis excepturi possimus et.
        Recusandae accusamus impedit praesentium. Eaque rerum recusandae id ea
        debitis. Alias tenetur numquam suscipit error vero, sit provident
        voluptatum quibusdam possimus officia hic maxime, mollitia explicabo id
        labore! Perspiciatis reprehenderit consequuntur magni quisquam mollitia
        repudiandae, ipsum eos incidunt vero repellendus impedit ratione modi
        placeat odit eveniet voluptas! Ipsum, necessitatibus esse illum nemo
        possimus veritatis.
      </p>
    </div>
  );
};

export default PolicyPage;
