import React from 'react';

const Resume = ({ props }) => {
  const { name, surname, email, aboutUs, phone } = props.values;
  const image = localStorage.getItem('image');
  return (
    <div className="w-[810px] pl-10 resume flex gap-4 pt-4">
      <div>
        <h1 className="text-red-600 text-4xl font-bold ">
          {name} {surname}
        </h1>

        {email && <p className="mt-6 text-xl">@ {email}</p>}
        {phone && <p className="mt-6 text-xl">& {phone}</p>}
        {aboutUs && (
          <h3 className="text-red-600 text-2xl mt-6 font-bold ">
            ჩემს შესახებ
          </h3>
        )}
        <p className="mt-6 text-xl min-w-[400px] ">{aboutUs}</p>
      </div>
      {image && (
        <img
          src={JSON.parse(image).blob}
          alt="img"
          className="w-[246px] h-[246px] rounded-full object-fill"
        />
      )}
    </div>
  );
};

export default Resume;
