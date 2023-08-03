import React from 'react';
import { saveAs } from 'file-saver';
import resumeFile from '../assets/resume/Nikita_Thakur_resume.pdf'; // Adjust the file path if necessary

const DownloadButton = () => {
  const handleDownload = () => {
    // Use the file-saver library to download the local file
    saveAs(resumeFile, 'Nikita_Thakur_resume.pdf');
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: '999',
      }}
    >
      <button 
      className='bg-tertiary py-3 px-8 border-2 border-slate-500 w-fit text-white font-normal shadow-md shadow-primary rounded-xl'
      onClick={handleDownload}>Download Resume</button>
    </div>
  );
};

export default DownloadButton;
