import Dropzone from 'react-dropzone-uploader';
import ReactPlayer from 'react-player';
import ModalImage from 'react-modal-image';
import { Worker, Viewer } from '@react-pdf-viewer/core';
// import file from '../../../assets'

// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';

export default function AdvancetoolSection() {
  const getUploadParams = () => {
    return { url: 'https://httpbin.org/post' };
  };

  const handleChangeStatus = ({ meta }, status) => {
    console.log(status, meta);
  };

  const handleSubmit = (files, allFiles) => {
    console.log(files.map(f => f.meta));
    allFiles.forEach(f => f.remove());
  };

  return (
    <>
      <section
        id="dropzone"
        style={{
          margin: 'auto',
          width: '80%',
          paddingTop: '20px',
          paddingBottom: '20px',
        }}
      >
        <Dropzone
          getUploadParams={getUploadParams}
          onChangeStatus={handleChangeStatus}
          onSubmit={handleSubmit}
          styles={{ dropzone: { minHeight: 200, maxHeight: 250 } }}
        />
      </section>
      <section
        id="react-player"
        style={{
          width: '100%',
          paddingTop: '10px',
          paddingBottom: '10px',
        }}
      >
        <ReactPlayer
          url="https://youtu.be/E5SFgaCNpIo"
          style={{
            margin: 'auto',
          }}
        />
      </section>
      <section
        id="react-modal-image"
        style={{
          margin: 'auto',
          paddingTop: '10px',
          paddingBottom: '10px',
        }}
      >
        <ModalImage
          small={'https://wallpaperaccess.com/full/54713.jpg'}
          large={'https://wallpaperaccess.com/full/54713.jpg'}
          alt="Hello World!"
        />
        ;
      </section>
      <section
        id="react-pdf-viewer"
        style={{
          paddingBottom: '10px',
        }}
      >
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js" />
        <div
          style={{
            border: '1px solid rgba(0, 0, 0, 0.3)',
            height: '750px',
            width: '1000px',
            margin: 'auto',
          }}
        >
          <Viewer fileUrl="/pdf/resume.pdf" />;
        </div>
      </section>
    </>
  );
}
