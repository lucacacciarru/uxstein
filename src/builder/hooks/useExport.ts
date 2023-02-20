import jsPDF from 'jspdf';
import * as htmlToImage from 'html-to-image';

type Params = {
  fileType: string;
  nameFile: string;
};

export function useExport(exportItemRef: React.RefObject<HTMLElement> | null) {
  const getImagePreview = async () => {
    if (exportItemRef?.current) {
      const image = await htmlToImage.toPng(exportItemRef?.current);
      return image;
    }
  };

  const exportPersona = async ({ fileType, nameFile }: Params) => {
    const imageUrl = await getImagePreview();
    if (imageUrl) {
      const link = document.createElement('a');
      link.download = nameFile;
      link.href = imageUrl;
      link.click();
    }
  };

  const exportPdf = async (nameFile: string) => {
    const itemRefWidth = exportItemRef?.current?.offsetWidth as number;
    const itemRefHeight = exportItemRef?.current?.offsetHeight as number;
    const image = await getImagePreview();
    const doc = new jsPDF({
      orientation: 'landscape',
      unit: 'px',
      format: [itemRefHeight, itemRefWidth],
    });
    doc.addImage(
      image || '',
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
    getImagePreview,
    exportPdf,
  };
}
