import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export const handleDownloadPNG = (chartElement) => {
    html2canvas(chartElement).then(canvas => {
        const link = document.createElement('a');
        link.download = 'chart.png';
        link.href = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
        link.target = "_self";
        link.click();
    });
};

export const handleDownloadPDF = (chartElement) => {
    console.log(chartElement)
    html2canvas(chartElement).then(canvas => {
        const imgData = canvas.toDataURL('image/png');

        // Calculate chart element dimensions
        const chartWidth = chartElement.offsetWidth;
        const chartHeight = chartElement.offsetHeight;

        // Create a new jsPDF instance with adjusted page size
        const pdf = new jsPDF({
            orientation: 'landscape',
            unit: 'pt',
            format: [chartWidth, chartHeight]
        });

        // Add the image to the PDF
        pdf.addImage(imgData, 'PNG', 0, 0, chartWidth, chartHeight);
        pdf.save('chart.pdf', { autoOpen: false });

    });
};