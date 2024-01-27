
import resumePDF from '../resources/DEREK_FIDORO_RESUME.pdf'; 

function DownloadResume() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'DEREK_FIDORO_RESUME.pdf'; 
    link.click();
  };

  return (
    <div className="flex justify-center items-center absolute top-[3880px]">
      <button
        className="w-[300px] h-[50px] bg-blue-500 hover:bg-blue-700 text-white text-[20px] font-bold py-2 px-4 rounded"
        onClick={handleDownload}
      >
        Download Resume
      </button>
    </div>
  );
}

export default DownloadResume;
