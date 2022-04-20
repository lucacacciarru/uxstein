import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

type Params = {
  fileType: string;
  nameFile: string;
};

export function useExport(exportItemRef: React.RefObject<HTMLElement>) {
  const getInitialCanvas = async ({ fileType }: Params) => {
    const result = await html2canvas(exportItemRef.current as HTMLElement);
    const image = result.toDataURL(`image/${fileType}`, 1.0);
    return image;
  };

  const getPreviewImage = async () => {
    const image = await getInitialCanvas({
      fileType: 'png',
      nameFile: 'Preview',
    });
    return image;
  };

  const exportPersona = async ({ fileType, nameFile }: Params) => {
    const image = await getInitialCanvas({ fileType, nameFile });
    const temporallyDownload = document.createElement('a');
    temporallyDownload.href = image;
    temporallyDownload.download = nameFile;
    document.body.appendChild(temporallyDownload);
    temporallyDownload.click();
    document.body.removeChild(temporallyDownload);
  };

  const exportPdf = async (nameFile: string) => {
    const itemRefWidth = exportItemRef.current?.offsetWidth as number;
    const itemRefHeight = exportItemRef.current?.offsetHeight as number;
    const image = await getPreviewImage();
    const doc = new jsPDF({
      orientation: 'landscape',
      unit: 'px',
      format: [itemRefHeight, itemRefWidth],
    });
    doc.addImage(
      image,
      'PNG',
      0,
      0,
      doc.internal.pageSize.getWidth(),
      doc.internal.pageSize.getHeight(),
    );
    doc.save(nameFile);
  };

  return {
    exportPersona,
    getPreviewImage,
    exportPdf,
  };
}
