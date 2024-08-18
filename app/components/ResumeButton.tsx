import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import fileSaver from 'file-saver';

const saveFile = () => {
  fileSaver.saveAs('./resume/resumedimas.pdf', 'resume_dimas.pdf');
};
const ResumeButton = () => {
  return (
    <button
      type='button'
      className=' font-medium text-center px-3 py-3 flex gap-1 justify-center rounded-md transition ease-in-out delay-150 bg-[#915EFF] hover:-translate-y-1 hover:scale-110 hover:bg-purple-600 duration-300'
      onClick={saveFile}>
      <Image
        src='/resume.svg'
        width={24}
        height={24}
        alt='resume'
        className='object-contain animate-pulse'
      />
      <span className='lg:block hidden text-white'>Download Resume</span>
    </button>
  );
};

export default ResumeButton;
