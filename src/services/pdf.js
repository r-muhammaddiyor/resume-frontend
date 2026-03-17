import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

export async function downloadPdf() {
  const element = document.getElementById("resume-preview");
  if (!element) return;

  document.body.classList.add("pdf-export");

  try {
    if (document.fonts && document.fonts.ready) {
      await document.fonts.ready;
    }

    await new Promise((resolve) => setTimeout(resolve, 60));

    const scale = Math.min(3, window.devicePixelRatio ? window.devicePixelRatio * 1.5 : 3);
    const canvas = await html2canvas(element, {
      scale,
      useCORS: true,
      backgroundColor: "#ffffff",
      windowWidth: element.scrollWidth,
      windowHeight: element.scrollHeight,
      scrollY: -window.scrollY,
    });

    const pdf = new jsPDF({ orientation: "p", unit: "mm", format: "a4" });
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const pxPerMm = canvas.width / pageWidth;
    const pageHeightPx = Math.floor(pageHeight * pxPerMm);

    let offsetY = 0;
    let pageIndex = 0;

    while (offsetY < canvas.height) {
      const sliceHeight = Math.min(pageHeightPx, canvas.height - offsetY);
      const pageCanvas = document.createElement("canvas");
      pageCanvas.width = canvas.width;
      pageCanvas.height = sliceHeight;
      const ctx = pageCanvas.getContext("2d");
      if (!ctx) break;

      ctx.drawImage(
        canvas,
        0,
        offsetY,
        canvas.width,
        sliceHeight,
        0,
        0,
        canvas.width,
        sliceHeight
      );

      const imgData = pageCanvas.toDataURL("image/png");
      if (pageIndex > 0) pdf.addPage();
      const imgHeightMm = (sliceHeight / canvas.width) * pageWidth;
      pdf.addImage(imgData, "PNG", 0, 0, pageWidth, imgHeightMm, undefined, "FAST");

      offsetY += sliceHeight;
      pageIndex += 1;
    }

    pdf.save("resume.pdf");
  } finally {
    document.body.classList.remove("pdf-export");
  }
}
